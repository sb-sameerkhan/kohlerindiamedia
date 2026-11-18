# Kohler India — Weekly Account Health Audit
**Scheduled run:** 20 July 2026 | **Status: BLOCKED — no data connector available**

---

## What happened

This week's automated audit (Meta Ads Account 1542147597124356, Google Ads Account 924-290-7329) could not run. The Windsor.ai MCP connector that the last two audits (22 Jun, 13 Jul) pulled Meta/Google Ads data through was not available in this session — it doesn't appear in the active tool list, the installed-connectors list, or the list of connectors still initializing.

I'm not fabricating performance numbers to fill the gap. Every metric in the standard audit (spend, CPL/CPA, ROAS, CTR, CPM, audience/creative fatigue, tracking health) depends on that live pull, so none of it can be produced honestly this week.

## What I checked before concluding this

- Searched the tool registry directly for the Windsor.ai server and `get_data` tool referenced in the `kohler-d2c-tracker` skill — not found.
- Checked installed connectors via the registry — Windsor.ai isn't listed.
- Checked the `kohler-daily-tracker` Cowork artifact — it exists but last updated 12 June 2026, and its live data pull only runs client-side in the browser when the artifact is open, not from this scheduled task.
- Checked the Kohler project folder for any manually exported CSV/export that could substitute — none dated this week.

## What's needed to unblock

1. Reconnect Windsor.ai (per the `kohler-d2c-tracker` skill's own troubleshooting note): go to Windsor.ai → Connections → reconnect `facebook` and `google_ads`, confirm Kohler India (Meta `1542147597124356`) and Kohler India Ecomm (Google `924-290-7329`) are selected.
2. Once reconnected, either re-run this scheduled task manually or open the Kohler Daily Tracker artifact to confirm data is flowing again.
3. If Windsor.ai access has been intentionally removed or changed, let me know so I can update the scheduled task rather than have it fail silently each week.

## Last known good data

The 13 July audit (`Kohler_Weekly_Account_Health_Audit_13Jul2026.md`) is the most recent verified report. Headline open items from it that are still worth checking manually if this outage continues:
- Google `220526_Cheil_Kohler_Branding_Traffic` (DemandGen) — was scaling on likely-corrupted conversion tracking; confirm it was capped.
- Standard Shopping non-brand ad groups — ~₹1.25L/week was going to non-converting search terms; confirm negative keywords were added.
- Meta D2C Showering / Kitchen Sink & Faucet — purchase collapse suspected to be site-side (stock/checkout), not media.
- Rajasthan and AP & Telangana Lead Gen geos — CPL spikes flagged as needing a pause/cut review.

---

*No live data sourced this run — Windsor.ai connector unavailable. Flagging for Sameer rather than guessing.*
