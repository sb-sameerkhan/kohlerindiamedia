# Kohler Branding Tracker — auto-deploy setup

One-time setup, then Claude deploys changes on its own. You never touch a zip again.

## Status: DONE — set up and proven on 2026-08-20

The token is saved at `C:\Users\samee\Claude\Projects\Kohler\.netlify_token`
(permissions 700, owner-only) and a full deploy has been run and verified through it.
Nothing further is needed from you.

To rotate it later: create a new token at **app.netlify.com → User settings →
Applications → Personal access tokens**, overwrite that file with the new value on a
single line, and delete the old token in the Netlify UI.

## What happens on every change after that

Claude, unprompted:

1. edits `Kohler_Branding_Tracker.html`
2. runs the regression suite (data reconciliation, account guard, loader, export)
3. copies the file into `site/` and runs:

   ```
   python3 sbprism_deploy.py --dir site \
       --site-name kohler-branding-tracker-v2 \
       --verify-url https://kohler-branding-tracker.sbprism.com/
   ```

   **Mind the site name.** `kohler-branding-tracker.sbprism.com` is served by
   **`kohler-branding-tracker-v2`** (renamed from the drag-drop default on
   2026-08-20). A separate `kohler-branding-tracker` site — no `-v2` — also exists
   with **no custom domain**; deploying there publishes nowhere anyone is looking.

   The script now guards this itself: when `--verify-url` is supplied it checks the
   URL's host against the site's `custom_domain`, `default_domain` and aliases, and
   **refuses to deploy** if they disagree. Renaming a site in Netlify keeps its ID and
   its custom domain, so a rename only means updating `--site-name` here.

4. re-downloads the live page and compares its MD5 to the file it pushed

Step 4 is the important one. The script **exits non-zero on a mismatch**, so a
half-propagated or failed deploy gets reported as a failure, never as a success.
It also refuses to create a new site if the name does not already exist — a typo
in the site name fails loudly instead of quietly publishing to a fresh URL.

## Things worth knowing about this token

- **Netlify personal access tokens are account-wide.** There is no per-site scope.
  Whoever holds this token can deploy to, rename, or delete *any* site on your
  Netlify account — not just this one. That is Netlify's design, not a choice here.
- The file sits unencrypted on your machine. Same exposure model as a `.env`. If
  this folder is ever put under git or shared, `.netlify_token` must be excluded.
- Rotate it when the expiry lands, or immediately if the folder is ever shared.
  Delete the old token in the Netlify UI — expiry alone does not revoke early.
- Revoking it breaks nothing except auto-deploy; the live site stays up.

## Fallback

If the token is missing, expired, or revoked, the script stops before touching
anything and says so. Claude will then hand you a zip to drag onto Netlify, which
is exactly the current workflow. Nothing gets stuck.

## A note on drag-drop

Drag-drop is safe for this site **only because it has no Netlify Functions**. If a
server-side Windsor proxy is ever added (to get the API key out of the page source),
drag-drop silently stops bundling the function and the dashboard breaks. From that
point on, this script or the Netlify CLI is the only correct deploy path.
