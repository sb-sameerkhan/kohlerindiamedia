# Kohler India — Weekly Account Health Audit
**Scheduled run:** 28 September 2026 | **Status: BLOCKED — both ad account connectors unavailable**

---

## What happened

This week's automated audit (Meta Ads Account 1542147597124356, Google Ads Account 924-290-7329) could not run. Both accounts are missing from the Windsor.ai connector this session has access to:

- **Google Ads (924-290-7329):** `google_ads` connector lists only Sattva All Projects (696-878-8013), Sattva Aaranya – Sok (275-191-5311), Sukoon Health.in (229-549-0560), Sukoon Hospital (295-330-4049). Kohler is not in the list. This is a chronic gap — Google Ads has not been connected for at least the last three weekly audits (14 Sep, 21 Sep, and the 23 Sep daily pull all flagged the same thing).
- **Meta Ads (1542147597124356):** `facebook` connector lists only Adani Sportsline – SB (178557778660733), Niyo-One App Leisure (830567447986793), Dhananjaya Ramineni (802639793112908). Kohler is not in the list. **This is new** — the 23 Sep daily pull still had live Meta data for this account, so Meta access broke sometime between 23 and 28 September.

I'm not fabricating performance numbers to fill the gap. Every metric in the standard audit (spend, CPL/CPA, ROAS, CTR, CPM, audience/creative fatigue, tracking health) depends on that live pull, so none of it can be produced honestly this week — for either platform.

## What I checked before concluding this

- Called Windsor's `get_connectors` — confirmed Kohler is absent from both the `google_ads` and `facebook` account lists.
- Called `get_data` directly against both account IDs — both returned explicit "account not available" errors naming the connector's actual configured accounts (listed above).
- Checked the connected Kohler project folder for the last several weeks of audits and daily reports to confirm this is a regression, not a standing known issue:
  - `Kohler_Paid_Media_Weekly_Audit_2026-09-14.docx` — Meta connected, Google Ads not connected (chronic).
  - `Account Health Audits/Kohler_Account_Health_Audit_2026-09-21.docx` — Meta connected, Google Ads not connected (chronic).
  - `daily-reports/Kohler_Daily_2026-09-23.md` — Meta connected (full data pulled), Google Ads not connected (chronic).
  - Today (28 Sep): neither connected.
- No manually exported CSV/export dated this week was found in the project folder as a substitute.

## What's needed to unblock

1. **Meta (new issue):** Re-authorize/reconnect the `facebook` connector in Windsor.ai so it includes Kohler India (1542147597124356) again — it appears to have been dropped or the OAuth token deauthorized in favour of (or alongside) the Adani/Niyo/Dhananjaya accounts now showing. Worth checking whether someone re-scoped the Windsor Meta connection this week.
2. **Google Ads (chronic):** Go to Windsor.ai → Connections → `google_ads` → add/reconnect Kohler India Ecomm (924-290-7329). This has been outstanding since at least mid-July per the 20 Jul BLOCKED run and every audit since.
3. Once both are reconnected, either re-run this scheduled task manually or confirm via a small test pull before the next scheduled Monday run.

## Last known good data (from 21 Sep audit — most recent verified Meta report)

Open items still worth a manual check while this outage continues:
- **GA4 e-commerce tracking was showing zero transactions and zero revenue across every channel** (Paid Social, Paid Search, Direct) for two straight weeks as of 21 Sep. This makes Meta's own reported D2C revenue unverifiable against site analytics — flagged Critical and likely still unresolved.
- `010826_Cheil_Kohler_MegaCampaign_Auction_August2026` was at frequency ~17.7 on an 8.73L-person pool, 28% of total account spend, zero attributed leads/purchases (by design as an awareness buy, but worth a scope/budget conversation). The 23 Sep daily pull showed it easing to 3.66 frequency/day and 41% share that day — worth confirming the flight is capped and still named appropriately ("August2026" running into late September).
- D2C "AOV<3k" audience lost over half its budget and 77% of its purchase volume week-on-week as of 21 Sep — check whether that was intentional (the AOV-segmentation shift that drove ROAS up) or a volume lever being starved unintentionally.
- Two KitchenFaucets D2C prospecting campaigns were running side-by-side as of 23 Sep (140926 at ₹13.3 CPC vs. the older 100326 at ₹26.7 CPC) — pausing the older one would likely cut audience overlap.
- Lead Gen: Rajasthan and AP & Telangana geos have been flagged in prior audits for CPL spikes needing a pause/cut review.

---

*No live data sourced this run — both Meta and Google Ads connectors unavailable in Windsor.ai. Flagging for Sameer rather than guessing.*
