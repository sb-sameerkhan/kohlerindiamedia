#!/usr/bin/env python3
"""
sbprism_deploy.py — deploy a folder to a Netlify site and PROVE it went live.

Why this exists: Netlify's MCP connector is not reachable from the Claude sandbox
(its host is off the egress allowlist), but api.netlify.com is. So deploys go
through the REST API directly.

Token resolution, in order:
  1. --token-file <path>            (default: ./.netlify_token next to this script)
  2. NETLIFY_AUTH_TOKEN environment variable

Usage:
  python3 sbprism_deploy.py --dir site --site-name kohler-branding-tracker-sbprism \
      [--verify-url https://kohler-branding-tracker.sbprism.com/] [--token-file /path/to/token]

It reports honestly: it prints the deploy state Netlify returned, and if
--verify-url is given it re-downloads the live page and compares its MD5 against
the local file. A mismatch is reported as a FAILURE, not a success.
"""
import hashlib, json, mimetypes, os, sys, time, urllib.parse, urllib.request, urllib.error

API = "https://api.netlify.com/api/v1"
_TOKEN = None


def load_token(token_file):
    global _TOKEN
    if _TOKEN:
        return _TOKEN
    if token_file and os.path.isfile(token_file):
        t = open(token_file, "r", encoding="utf-8-sig").read().strip()
        # tolerate "NETLIFY_AUTH_TOKEN=xxx" or a bare token, and stray quotes
        if "=" in t and not t.startswith("nfp_") and len(t.split("=", 1)[1].strip()) > 10:
            t = t.split("=", 1)[1].strip()
        t = t.strip().strip('"').strip("'")
        if t:
            _TOKEN = t
            return _TOKEN
    t = os.environ.get("NETLIFY_AUTH_TOKEN", "").strip()
    if t:
        _TOKEN = t
        return _TOKEN
    sys.exit("NO TOKEN. Put a Netlify personal access token in %s (single line) or set "
             "NETLIFY_AUTH_TOKEN. Nothing was deployed." % (token_file or "<--token-file>"))


def req(method, path, body=None, raw=None, ctype="application/json", token_file=None):
    url = path if path.startswith("http") else API + path
    data = raw if raw is not None else (json.dumps(body).encode() if body is not None else None)
    r = urllib.request.Request(url, data=data, method=method)
    r.add_header("Authorization", "Bearer " + load_token(token_file))
    if data is not None:
        r.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(r, timeout=120) as resp:
            b = resp.read()
            ct = resp.headers.get("content-type", "")
            return resp.status, (json.loads(b) if b and ct.startswith("application/json") else b)
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode(errors="replace")


def find_site(name, token_file):
    page = 1
    while True:
        st, sites = req("GET", "/sites?per_page=100&page=%d" % page, token_file=token_file)
        if st != 200 or not isinstance(sites, list) or not sites:
            break
        for s in sites:
            if s.get("name") == name:
                return s
        if len(sites) < 100:
            break
        page += 1
    return None


def collect(dirpath):
    """sha1 every file, keyed by the web path Netlify expects."""
    out = {}
    for root, _dirs, files in os.walk(dirpath):
        for f in files:
            p = os.path.join(root, f)
            rel = "/" + os.path.relpath(p, dirpath).replace(os.sep, "/")
            with open(p, "rb") as fh:
                blob = fh.read()
            out[rel] = {"sha": hashlib.sha1(blob).hexdigest(), "bytes": blob, "path": p}
    return out


def deploy(site_id, files, token_file):
    digest = {k: v["sha"] for k, v in files.items()}
    st, d = req("POST", "/sites/%s/deploys" % site_id, {"files": digest}, token_file=token_file)
    if st not in (200, 201):
        sys.exit("deploy create failed: HTTP %s %s" % (st, d))
    dep_id = d["id"]
    required = set(d.get("required") or [])
    # Upload only the hashes Netlify asked for. An EMPTY required list means it already
    # has every file (it dedupes by sha across the whole account), so nothing should be
    # sent — pushing anyway returns 422 "no records matched" and aborts the deploy.
    if not required:
        print("  all %d file(s) already in Netlify's store — nothing to upload" % len(files))
    for rel, meta in files.items():
        if meta["sha"] not in required:
            continue
        ctype = mimetypes.guess_type(rel)[0] or "application/octet-stream"
        st, r = req("PUT", "/deploys/%s/files%s" % (dep_id, rel), raw=meta["bytes"],
                    ctype=ctype, token_file=token_file)
        if st not in (200, 201):
            sys.exit("upload failed for %s: HTTP %s %s" % (rel, st, r))
        print("  uploaded %s (%d bytes)" % (rel, len(meta["bytes"])))
    # wait for it to actually go ready
    for _ in range(60):
        st, d = req("GET", "/deploys/%s" % dep_id, token_file=token_file)
        if st == 200 and isinstance(d, dict):
            state = d.get("state")
            if state in ("ready", "current"):
                return d
            if state == "error":
                sys.exit("Netlify reported deploy state=error: %s" % d.get("error_message"))
        time.sleep(2)
    sys.exit("deploy did not reach 'ready' within 120s — check the Netlify dashboard. "
             "Do NOT assume it is live.")


def verify(url, local_path):
    """Re-download the live page and compare bytes with what we just pushed."""
    local = hashlib.md5(open(local_path, "rb").read()).hexdigest()
    for attempt in range(6):
        try:
            r = urllib.request.Request(url, headers={"Cache-Control": "no-cache"})
            with urllib.request.urlopen(r, timeout=60) as resp:
                live = hashlib.md5(resp.read()).hexdigest()
            if live == local:
                return True, live, local
            time.sleep(5)  # CDN may still be propagating
        except Exception as e:
            print("  verify attempt %d failed: %s" % (attempt + 1, e))
            time.sleep(5)
    return False, live if "live" in dir() else "?", local


def main():
    a = sys.argv
    def opt(flag, default=None):
        return a[a.index(flag) + 1] if flag in a else default

    here = os.path.dirname(os.path.abspath(__file__))
    dirp = opt("--dir", "site")
    name = opt("--site-name")
    vurl = opt("--verify-url")
    tokf = opt("--token-file", os.path.join(here, ".netlify_token"))
    if not name:
        sys.exit("--site-name required")

    site = find_site(name, tokf)
    if not site:
        sys.exit("site '%s' not found on this Netlify account. This script will NOT create a "
                 "new site — that should be a deliberate act. Check the name in the Netlify UI." % name)

    # Cross-check the name against the domain we are about to publish to. This account
    # holds sites whose names differ by a suffix ("kohler-branding-tracker" vs
    # "...-tracker-v2") where only one carries the live custom domain, and site names
    # get renamed. Deploying to the wrong twin would publish to a URL nobody watches
    # and report success. If a verify URL is given, the names must agree with reality.
    if vurl:
        host = urllib.parse.urlparse(vurl).hostname or ""
        dom = (site.get("custom_domain") or "").strip()
        aliases = [a.strip() for a in (site.get("domain_aliases") or [])]
        default = (site.get("default_domain") or "").strip()
        known = {d for d in [dom, default] + aliases if d}
        if host and host not in known:
            sys.exit("REFUSING TO DEPLOY.\n"
                     "  site '%s' (%s) serves: %s\n"
                     "  but --verify-url points at: %s\n"
                     "These do not match, so this would publish somewhere nobody is looking.\n"
                     "Find the site whose custom_domain is '%s' and use that name."
                     % (site.get("name"), site.get("id"), ", ".join(sorted(known)) or "(no domain)",
                        host, host))
        print("  domain check: '%s' is served by this site" % host)

    files = collect(dirp)
    if not files:
        sys.exit("no files in %s" % dirp)
    print("deploying %d file(s) to '%s' (%s)" % (len(files), site.get("name"), site.get("id")))
    d = deploy(site["id"], files, tokf)

    print("\nNETLIFY REPORTS")
    print("  state       : " + str(d.get("state")))
    print("  deploy id   : " + str(d.get("id")))
    print("  deploy url  : " + str(d.get("deploy_ssl_url") or d.get("deploy_url") or ""))
    print("  site url    : " + str(site.get("ssl_url") or site.get("url") or ""))

    if vurl:
        local_index = os.path.join(dirp, "index.html")
        ok, live_md5, local_md5 = verify(vurl, local_index)
        print("\nLIVE VERIFICATION (%s)" % vurl)
        print("  local  md5 : " + local_md5)
        print("  live   md5 : " + live_md5)
        print("  result     : " + ("MATCH — the live page is the build we just pushed"
                                   if ok else "MISMATCH — do NOT report this as deployed"))
        if not ok:
            sys.exit(1)


if __name__ == "__main__":
    main()
