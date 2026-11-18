// Pulls daily ad-set Meta insights for the Kohler India ad account from SB Sources.
// The key never reaches the browser. Netlify environment variables:
//   SB_SOURCES_KEY      API key from https://sources.sbprism.com/ (API section)
//   SB_SOURCES_MCP_URL  the MCP address shown on that same page
// SB Sources accepts the key as a bearer token on its MCP address, so this calls
// its meta_insights tool over MCP (JSON-RPC over HTTP).

const ACCOUNT_ID = "1542147597124356"; // Kohler India
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseBody(text) {
  const t = (text || "").trim();
  if (t.startsWith("{")) return JSON.parse(t);
  // Server-sent events: use the last data: line that carries JSON
  const lines = t.split(/\r?\n/).filter((l) => l.startsWith("data:"));
  for (let i = lines.length - 1; i >= 0; i--) {
    const d = lines[i].slice(5).trim();
    if (d.startsWith("{")) return JSON.parse(d);
  }
  throw new Error("Unreadable response from SB Sources");
}

async function rpc(url, key, body, sessionId) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json, text/event-stream",
    Authorization: "Bearer " + key,
  };
  if (sessionId) headers["Mcp-Session-Id"] = sessionId;
  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const text = await res.text();
  if (!res.ok) throw new Error("SB Sources responded " + res.status);
  return { sid: res.headers.get("mcp-session-id") || sessionId, text };
}

exports.handler = async (event) => {
  const json = (code, obj) => ({
    statusCode: code,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(obj),
  });
  try {
    const key = process.env.SB_SOURCES_KEY;
    const url = process.env.SB_SOURCES_MCP_URL;
    if (!key) return json(500, { error: "SB_SOURCES_KEY is not set in Netlify" });
    if (!url) return json(500, { error: "SB_SOURCES_MCP_URL is not set in Netlify" });
    const q = event.queryStringParameters || {};
    if (!DATE.test(q.from || "") || !DATE.test(q.to || "")) return json(400, { error: "from and to must be YYYY-MM-DD" });

    const init = await rpc(url, key, {
      jsonrpc: "2.0", id: 1, method: "initialize",
      params: { protocolVersion: "2025-03-26", capabilities: {}, clientInfo: { name: "kohler-leadgen-dashboard", version: "1.0" } },
    });
    let sid = init.sid;
    await rpc(url, key, { jsonrpc: "2.0", method: "notifications/initialized" }, sid).catch(() => {});

    const call = await rpc(url, key, {
      jsonrpc: "2.0", id: 2, method: "tools/call",
      params: {
        name: "meta_insights",
        arguments: {
          account_id: ACCOUNT_ID, start_date: q.from, end_date: q.to,
          level: "adset", time_increment: 1, limit: 5000,
          fields: ["campaign_name", "adset_name", "spend", "impressions", "inline_link_clicks", "actions"],
        },
      },
    }, sid);
    const msg = parseBody(call.text);
    if (msg.error) throw new Error(msg.error.message || "SB Sources error");
    const r = msg.result || {};
    if (r.isError) throw new Error(((r.content && r.content[0] && r.content[0].text) || "SB Sources error").slice(0, 200));
    const payload = r.structuredContent || JSON.parse(r.content[0].text);
    const rows = (payload.rows || []).map((x) => {
      const lead = (x.actions || []).find((a) => a.action_type === "lead");
      return {
        date: x.date_start,
        campaign: x.campaign_name || "",
        adset_name: x.adset_name || "",
        spend: +x.spend || 0,
        impressions: +x.impressions || 0,
        link_clicks: +x.inline_link_clicks || 0,
        actions_lead: lead ? +lead.value || 0 : 0,
      };
    });
    return json(200, { rows });
  } catch (e) {
    return json(502, { error: String(e.message || e).slice(0, 200) });
  }
};
