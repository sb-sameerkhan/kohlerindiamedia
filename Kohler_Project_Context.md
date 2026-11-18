# Kohler India × Social Beat: Project Context

Compiled 14 Oct 2026 for the org-shared Kohler Project. Internal. Not a client surface.

Sources: the local Kohler project folder, the Kohler project memory notes (Aug to Sep 2026), the Brand Brain built 5 Oct 2026 (`brain/brands/kohler.md`), the Jun 2026 project summary and org notes, and the 12 Oct 2026 weekly audit. Where a claim rests on one source or may have moved, it carries a tag.

Tag key: **[E]** email-confirmed. **[T]** call notes, verify before external use. **[DATA]** from a client or SB file. **[SB]** Social Beat's own analysis. **[calc]** computed. **[V]** verify, may have changed.

Upload `brain/brands/kohler.md` to the new Project alongside this file. It holds the QL definition work, diagnostic rules, contacts, and the October plan in more depth than this summary.

---

## 1. What the account is

Kohler India buys media on two separate P&Ls, and the two are never blended.

**D2C** sells bath and kitchen fittings on Kohler.com. Owner on the client side: Parul Tandon. Success is revenue at an agreed ROAS, after a 30% GMV haircut for employee purchases that the client accepts but wants explained [E].

**Lead Gen** collects renovation-intent enquiries. A call centre (Innovative Incentives) qualifies them. Dealers or territory sales managers close. Owner: Hari Prasad Nair. Success is qualified leads (QL) at an agreed cost, not leads.

A third layer, the **Mega Campaign**, is brand awareness (YouTube via DV360, Meta, LinkedIn, publishers). Separate dashboard, separate metrics.

The client is numerate and audits our numbers. Every figure should reconcile to the shared tracker or the dialer report before it leaves the building.

## 2. People

**Kohler.** Niyati Sharma, Head of Marketing, owns the QL target and quality. Parul Tandon, D2C Marketing Lead, owns D2C, brand, YouTube, AOP and POs. Hari Prasad Nair owns Lead Gen budgets and approvals. Pooja Meena owns CRM, lead data, SFDC routing and custom audiences; she was on leave in June and her current status is unknown [V]. Parul and Hari are peers under Niyati.

**Partners.** Innovative Incentives (call centre; Ritika Sharma sends the daily Digital Campaign Report). KPMG (SFDC implementation). Ventes Avenues (affiliate network). Digisoftnexus (new CPS partner).

**Social Beat.** Utkarsh Mehta (AVP, Paid Media and Partnerships) and Sameer Khan (Digital Media Manager) sign off on anything that reaches the client. Others on the account include Tarun Yadav, Subham Choudhary, Simran Singh (finance coordination) and Kumari Natasha (creative). Several titles are unconfirmed.

**How the client works.** Niyati writes short emails, wants the plan before the explanation, and treats an unexplained zero as a defect. Parul checks data herself and expects a reply within 24 hours. Hari disputes any invoice that does not match the tracker. One WhatsApp budget approval became a formal dispute (₹50L vs ₹28 to 30L), so any WhatsApp approval must be emailed back the same day [E].

**Approval gate.** Lead Gen budget, plan and region changes: Hari, in writing, Niyati on copy. D2C, brand and YouTube budgets and POs: Parul, in writing. No written client rule exists; this is how the threads behave.

## 3. Names that must not be mixed

- **Lead** is an enquiry received. **QL** is a qualified lead as the dialer report counts it. **CPL** divides by leads. **CPQL** divides by QL.
- **Dealership** campaigns (`Inlead`, `Dealership`) are a separate stream. Exclude them from Lead Gen totals unless asked.
- **P0 / P1** are Mega Campaign market tiers. They are not Lead Gen regions.
- **Mega Campaign** appears as `MegaCampaign` (Meta), `Mega_Campaign` or `Mega` (DV360), "Mega Campaign" (plans). One thing.
- **Bold Days** is the sale and festive creative theme (`BoldDays`).
- The Google Ads account named **"Kohler India Ecomm"** is the D2C account.
- Campaign names carry a `Cheil_Kohler` prefix. The leading six digits (`DDMMYY`) are the date the ad set was created, not a report date.
- Dialer-report "Lead Generated" (Day Wise tab) equals "Eligible Lead" (Campaign Wise tab) equals QL.
- AI call notes transcribe "Lead Gen" as "Legion" and "crore" as "cores" [T].

## 4. Ad accounts and data access

| Platform | Account | Note |
|---|---|---|
| Meta | 1542147597124356 (Kohler India) | Lead Gen, D2C, Mega Campaign |
| Google Ads | 924-290-7329 (Kohler India Ecomm) | D2C |
| DV360 | 8394258957 | Mega Campaign, YouTube |
| LinkedIn Ads | 519472255 (Cheil - Kohler) | Mega Campaign |
| Bing | account ID not found | Supplementary D2C |

**Data connector (Windsor.ai) history.** Meta and Google Ads access has dropped out of the connector many times since 18 Aug 2026. Kohler's accounts disappear while other clients' accounts stay, so a pull without account scoping can return another client's data with no error. As of 29 Sep the project notes show eight straight days with no Kohler paid data. The 12 Oct audit says its data was pulled from the connected platforms on 12 Oct, so access looks restored, but I'm inferring that and the root cause was never found [V]. Check every run.

Rules that came out of this:

1. Call `get_connectors` first. Confirm both Kohler accounts are listed before pulling.
2. Scope by `account_id`. The REST API ignores account parameters and returns every connected account. Request `account_id` as a field and filter client-side. A campaign-name filter is not a safeguard.
3. A response whose campaign name contains "Uh-oh!" or "upgrade" is a plan-limit stub, not zero performance. It blocks every connector on the account.
4. Report a blocker as a blocker. Never fabricate numbers to fill a gap.

**Data quirks.**

- Google DemandGen, Branding_Traffic and some new Search campaigns (e.g. `100826_..._Search_KDX`) report "conversions" that exceed or approach clicks (implied CPA under ₹1). Exclude them from real CPA. Compute D2C CPA from Search, PMax and Shopping only. The 12 Oct audit shows the same pattern: Demand Gen and KDX report 290k and 815 "conversions" on ₹1.6L and ₹7k. Fix the conversion setup before trusting any Google total.
- Google does not expose Add to Cart via the connector. GA4 does. GA4 e-commerce showed zero transactions across channels for two weeks as of 21 Sep, so platform-reported D2C revenue is unverifiable until that is fixed [SB, V].
- Meta `adset_daily_budget` and `adset_bid_amount` come back in paise. Divide by 100.
- DV360 spend is `revenue_advertiser`. Dropping `campaign`, `insertion_order` or `starts_video` while keeping `trueview_views` silently returns YouTube lines only, so totals come out low and look plausible. Reach must be pulled by campaign with no date dimension; summing by line item or day inflates it by 20% or more. Reach cannot be split by market.
- `trueview_views` is 0 for non-skippable and Pinterest lines. Use complete views as the fallback.
- DV360 has no thumbnails or YouTube video IDs. Creative artwork needs manual input. Do not guess video IDs from ad names.
- Publisher tabs (Architectural Digest, Samsung, Inshorts) come from the Cheil planning sheet via Google Sheets. Samsung writes impressions as `98.484` meaning 98,484. Parse integers by stripping every non-digit. Reconcile to the sheet's totals row after any change.
- Never write scratch files to `/tmp` in the cloud sandbox. A stale file from another session was once read back and inflated Meta spend by about ₹56K with no error. Spot-check one aggregated figure against raw data after any multi-step pipeline.

## 5. Lead Gen: QL and how it is counted

**Pipeline.** Meta instant form (OTP-validated) → Salesforce → dialer at Innovative Incentives. The client's written QL criteria and the booking stage were never found in any source [open].

**Dialer report ("Digital Campaign Report [date].xlsx").** Three tabs: Digital Campaign (funnel, no region), Day Wise Campaign (per form, per day, no region column), Campaign Wise (form totals). QL per form per day is the "Lead Generate" column in Day Wise Campaign.

Method for the recurring region × day QL ask:

- Read Campaign Wise's **Months filter** (row 2) first. On 28 Sep it was left on "(All)" and the grand total became all-time. That is a scope gap, not a data-quality gap. Do not force a reconciliation. Validate by continuity against the prior cut and say so.
- Region is inferred from tokens in the form name (`NCR`, `PanIndia`, `Karnataka`, `TopCities` and `Top5Cities`, and so on). Full token list is in the Brand Brain, section 13.
- Exclude `Dealership` forms found in the current month's Day Wise tab. `NIL`, `Incoming`, `Email` and `Website` forms have no region. Flag them as Unmapped. Never drop them.
- Each month is its own series. Day Wise and Campaign Wise reset on the first cut of a new month.
- Verify the uploaded file exists on disk before invoking the skill. Uploads have failed to sync before.
- One form carries two tokens (`Top5Cities` and `ROM1`). Classified as Top Cities (first match).

**City-wise raw leads and QL (Mar to Aug 2026).** From `Kohler Dump Overall.xlsx`. Drop only fully blank rows. Never dedupe on lead ID: that rule once deleted 2,434 real March leads because Website leads carry no Meta ID. August means the "Aug (Api)" tab only. QL is the dump's own 0/1 column, summed per city. Junk city values (placeholders, emails, mojibake, pincodes, gibberish) fold into Unknown and are listed on an Excluded tab, never dropped silently. Result: 97,914 leads and 10,773 QL (about 11.0%). The tracker shows about 104,300 leads and 12,319 QL for the same months. Cause unconfirmed. Quote the tracker for performance and the dump for geography, and say which [V].

**Levers with evidence.** Question Forms (WB 20.4% QL vs 4.3%; Aug network-wide 35.2% vs 19.4%) and manual fields (UP 16.3% vs 6.2%). Instagram over Facebook (Hari wants 70 to 80% Instagram). Lookalikes carry the QL in the June mapping (54%). Call-centre persistence: 28% of September QL came from the 4th-attempt-onward pool. A daily lead cap near 1,500 protects dialer capacity [E].

**Meta lead-gen scale-up logic (Aug).** Before adding budget, compute budget utilisation per ad set. In Aug the account spent ₹79K/day against ₹1.12L/day allocated (71%). Cost caps of ₹230 to ₹400 sat within 15% of an actual CPL near ₹203, so Meta throttled. The order of operations: cut the >₹400 CPL tail, widen caps, then raise budgets in steps of 30% a day or less.

## 6. Numbers

**Lead Gen, achieved by month** [DATA: Lead Gen tracker, pulled 5 Oct]

| Month | Spend | Leads | CPL | QL | CPQL | QL% |
|---|---|---|---|---|---|---|
| Jan | ₹18.1L | 8,560 | ₹212 | 2,410 | ₹753 | 28.15% |
| Feb | ₹34.9L | 10,041 | ₹347 | 1,845 | ₹1,890 | 18.37% |
| Mar | ₹34.6L | 10,863 | ₹318 | 1,636 | ₹2,114 | 15.06% |
| Apr | ₹34.5L | 17,652 | ₹195 | 2,092 | ₹1,650 | 11.85% |
| May | ₹55.4L | 30,123 | ₹184 | 2,715 | ₹2,040 | 9.01% |
| Jun | ₹32.8L | 18,778 | ₹174 | 1,712 | ₹1,914 | 9.12% |
| Jul | ₹22.1L | 12,788 | ₹173 | 1,636 | ₹1,353 | 12.79% |
| Aug | ₹34.8L | 14,096 | ₹247 | 2,528 | ₹1,375 | 17.93% |
| Sep | ₹44.2L | 11,090 | ₹399 | 3,667 | ₹1,206 | 33.07% |

CPL and QL% moved in opposite directions through H1: cheaper leads, fewer qualified ones. Sept beat plan on QL (plan 3,337 at 22.36%) and missed on lead count (plan 14,927). Sept QL of 3,667 matches the dialer report's total, one clean reconciliation. Judge QL% month to date, never by day; recall-pool QL inflates low-fresh-enquiry days.

**QL targets.** Niyati: 25 to 30% QL% and a floor of 150 to 160 QL a day (non-negotiable) [E]. Utkarsh: 110 QL a day for FY27 +40% [T]. They may measure different things. Use Niyati's until the client says otherwise. Ask whether any QL target is Meta-only or all-platform; the Aug "Three Pillars" sheet counted 1,332 QL against 1,177 in Meta alone.

**October plan V2** (sent 1 Oct) [E]: ₹54,25,126 budget, 13,362 leads, CPL ₹406, 4,007 QL, CPQL ₹1,354, QL% 29.99%. Pan India is 53% of budget. Finance estimate is ₹56,04,500, which does not match. Approval of V2 not found. Optimising on qualified leads starts in December. Until then the account buys volume. Do not tell the client it already optimises on QL signals; Meta is not fed qualification outcomes (CAPI).

**Week of 5 to 11 Oct** [SB: audit of 12 Oct, platform-reported, verify before external use]

- Meta Lead Gen spend stepped up from about ₹0.8L/day to ₹2.0 to 2.7L/day on 2 Oct. Spend ₹10.5L → ₹14.8L (+41%), leads 2,141 → 2,704 (+26%), CPL ₹491 → ₹547. Marginal leads cost about ₹800+. Cause not visible in the data; I'm guessing a deliberate pre-festive raise.
- Efficient and under-funded: WB (CPL ₹162, leads doubled on twice the spend), TN, Gujarat, NCR, PanIndia Toilet. Inefficient: AP&TS ₹1,138, Kerala ₹977, NE ₹879. PanIndia and South InstantForms carry 63% of spend at the worst scaled CPLs.
- Google D2C (excl. Demand Gen, KDX) spend ₹4.84L → ₹7.75L (+60%), ROAS 3.54 → 2.26.
- Meta D2C ROAS 1.12 → 1.41. Remarketing DPA shows 11.5 on 13 orders (few large baskets, do not extrapolate).
- The Mega Auction campaign ended, so total Meta spend hides a larger jump in always-on lines.

**D2C.** Annual figures conflict. ₹72 Cr appears in the June summary; the AOP sheet shows monthly budgets of ₹43 to 62L and revenue of ₹1.2 to 2.1 Cr for Jan to Jun; call notes mention ₹30 Cr and ₹52 Cr [T]. Treat ₹72 Cr as unverified; it may be a revenue target. FY27 ask: ROAS around 6. Sale runs 9 to 23 Oct. October affiliate revenue target is ₹22,50,000. Price parity is a standing flag: 42 to 45 SKUs a day cheaper on Amazon than Kohler.com, a client pricing decision.

**Meta daily baseline (Aug).** ₹2.8L to ₹3.8L a day. The Mega Campaign pair was about 55% of it. Judge the reach-and-frequency line on CPM and reach, not CPC (about ₹100 is normal). Watch frequency (3.66 on 23 Sep) and a campaign still named "August2026".

**Mega Campaign lift studies** (Feb to Jun 2026, platform-native reports) [SB]. YouTube BLS: ad recall +5.2 pts (90% certainty), ₹14.94 per lifted viewer. YouTube SLS: branded term "kohler" lifted in all four flights; "kohler bathtub" and steam terms never lifted. Meta BLS: awareness +6.5 pts (99.5% probability), preference vs Jaquar, Grohe and Hindware −1.8 pts (25% probability, not significant), consideration −0.1 pts (flat). Top of funnel moved; preference did not. Brand CPV is up 32.8% YoY with no written explanation.

## 7. Dashboards and deployment

| Tracker | URL | Notes |
|---|---|---|
| Branding (Mega Campaign) | kohler-branding-tracker.sbprism.com | Served by Netlify site `kohler-branding-tracker-v2` |
| D2C | kohler-d2c-tracker.sbprism.com | |
| Lead Gen | kohler-leadgen-tracker.sbprism.com | |
| Social weekly | kohlersocialweeklyperformance.sbprism.com | |
| Competitor / trends | kohler-trend-analysis.sbprism.com | |
| Command Center (nav hub) | kohler-command-center.netlify.app | Only the 5 master trackers have real URLs; 41 others are placeholders |

A second site, `kohler-branding-tracker` (no `-v2`), has no custom domain. Deploying there publishes to a URL nobody watches while reporting success. Always pass `--verify-url`; the script refuses a host mismatch.

**Branding tracker rules.** Metric definitions are fixed by Sameer: spend (DV360 `revenue_advertiser`, Meta and LinkedIn `spend`); views (DV360 TrueView, falling back to complete views; Meta ThruPlays; LinkedIn video views); VTR = views / impressions; CPV = spend / views. Publishers count toward spend, impressions, clicks, CTR and CPM, and are excluded from reach, frequency, views, VTR and CPV. Adding publishers must leave total VTR unchanged. Plan vs Achieved ignores the date picker. Markets: AD is PAN India, Samsung is P0, others by `_P0_` / `_P1_` token with a visible Unmapped bucket.

**Auto-deploy.** Sameer authorised deploying tracker changes without asking him first. `sbprism_deploy.py` plus a token file in the project folder do it from the cloud sandbox. Report a deploy only after seeing the MD5 MATCH line. If the token is missing, say plainly nothing was deployed. `*.netlify.app` is off the sandbox egress list, so Command Center deploys cannot be MD5-verified; ask Sameer to confirm after each change. The Netlify token cannot attach a new `*.sbprism.com` subdomain; the sbprism.com team domain belongs to another Netlify account. The Command Center subdomain is still pending that manual attach.

**Security flags (open, accepted by Sameer on 18 Aug).**

1. The Branding and D2C trackers are public with no password, and the corporate connector API key sits in the page source. That key is shared across every client in the workspace. This breaches the org rule that client dashboards are password-protected on sbprism.com. The offered fix is a server-side function proxy (about 20 minutes, no number changes). Drag-drop deploys stop being safe once a function exists.
2. Netlify tokens sit in plain text in the project folder (`.netlify_token`, `netlify-deploy/`). The token is account-wide, with no per-site scope. Rotate it and move it to a secret store before the folder is shared or put under git.
3. Do not copy either token into this Project.

## 8. Recurring work and the skills behind it

- **Daily tracker** (scheduled, mornings): prior-day Meta and Google spend, split by objective, top campaigns, flags. Flags: CPA above ₹10,000, or zero conversions on spend above ₹5,000. Persistent watch items: DPA remarketing frequency (5 to 26x), PMax KitchenFaucet and FeedOnly zero-conversion days.
- **Weekly Account Health Audit** (Mondays; latest 12 Oct) and **Meta Creative Analysis weekly** (latest 12 Oct, with an email draft).
- **Region × day QL workbook** rebuilt each time Sameer re-uploads the Digital Campaign Report.
- **Skills in play:** `kohler-dod-ql-mapping` / `dod-ql-mapping`, `kohler-disposition-ql-mapping`, `kohler-d2c-tracker`, `kohler-d2c-copy`, `kohler-ql-dashboard-refresh`, `meta-creative-analysis`, `paid-media-brain`, `sbprism-dashboard`, `socialbeat-pptx`, `sb-voice`, `apify-scrape`.
- Cloud sandbox state does not persist between sessions. Rebuild scripts from the method notes here.
- The device link drops and reconnects mid-session. Treat "No such tool" as transient and retry once.

## 9. Decisions Sameer has made (newer supersedes older)

| Date | Decision |
|---|---|
| 25 Aug | City-wise leads: drop only fully blank rows, never dedupe on ID, August = API tab only |
| 20 Aug | Deploy tracker changes unprompted; verify by MD5 |
| 20 Aug | Publishers roll into spend, impressions, clicks, CTR, CPM only |
| 18 Aug | Branding tracker metric definitions (section 7) fixed; do not change without asking |
| 18 Aug | Public, no-password trackers accepted as a known risk |
| 1 Oct | Optimising on qualified leads starts in December |

## 10. Open items

1. Client's written QL definition and booking stage.
2. Whether Meta and Google Ads access is stable after 12 Oct, and the root cause of the drop-offs.
3. CAPI (Meta to Salesforce feedback). Over 100 days overdue as of June. Go-live unconfirmed.
4. GA4 e-commerce at zero; the June tag misfire (BathroomHealthFaucet DemandGen, ToiletAreaCombos PMax) never confirmed fixed.
5. October plan approval (V1, V2 and the ₹56.05L finance estimate disagree).
6. Lead-count gap between tracker and city-wise dump.
7. NIL forms: 1,327 enquiries and 135 QL in July cannot be assigned to a region.
8. Five Not Interested call recordings (June) never analysed. Recordings are personal data under the DPDP Act 2023; I'm not a lawyer, confirm retention terms with the data lead.
9. OND BAU video views (₹30L/month proposed): Parul's approval not found.
10. Brand CPV up 32.8% YoY with no explanation.
11. Command Center custom domain, Inshorts tab (no sheet tab yet), YouTube creative IDs (not supplied).
12. Pooja Meena's status and the roles of several contacts.

## 11. Folder inventory (what to attach to the Project)

Core, attach: `brain/brands/kohler.md`, `Kohler_Project_Summary_Jun2026.md`, `Kohler_OrgStructure_Notes.md`, `DEPLOY_README.md`, `Kohler_Weekly_Health_Audit_2026-10-12.md`, `kohler_lead_disposition_flow.svg`.

Reference, attach if useful: `Kohler_Client_Intelligence_June2026.docx` (stakeholder detail; review before org-wide sharing), `KohlerMegaCampaignLiftStudy_with_insights.xlsx`, `Kohler_Mega_Campaign_Lift_Studies.pptx`.

Do not attach: `.netlify_token`, `netlify-deploy/`, `sbprism_deploy.py` (keep with the credentials), the many versioned zips, `~$` lock files, one-off parse scripts.
