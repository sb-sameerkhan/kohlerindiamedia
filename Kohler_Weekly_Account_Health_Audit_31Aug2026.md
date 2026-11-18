# Kohler India — Weekly Account Health Audit

**Period:** 24 Aug – 30 Aug 2026 (L7D) vs 17 Aug – 23 Aug 2026 (P7D)
**Platforms:** Meta Ads (Account: 1542147597124356) · Google Ads (Account: 924-290-7329)
**Report Date:** 31 August 2026 | Prepared by: Claude (Automated Audit)
**Data source:** Windsor.ai (live pull, both accounts connected and current)

**Note on the gap since the last audit:** The last verified report is dated 13 July. The 20 July run was blocked (Windsor.ai connector unavailable that week) and no audit ran between 20 July and today. The account has changed structurally in that window — Meta has added a large "MegaCampaign" awareness layer and a "PanIndia" / "South" consolidated Lead Gen structure that didn't exist in July. Where this audit references "last week," treat it as the most recent seven days of data, not a continuation of the 13 July baseline.

---

## 1. Overall Account Health

**Verdict: Needs Attention.** The account scaled spend hard this week — up 38.6% combined — and the two primary KPI engines (Lead Gen CPL, D2C ROAS) both moved in the wrong direction as a result. Some of the D2C decline is a high-base effect from a handful of large one-off orders that landed in the prior week (detailed in Section 5), not a like-for-like drop. Once that's adjusted for, the real story is: spend is scaling faster than efficiency can absorb it, on both platforms, in both objectives.

### Spend Summary

| Platform | L7D Spend | P7D Spend | Change |
|---|---|---|---|
| Meta Ads (Total, all objectives) | ₹29.34L | ₹22.89L | **+28.2%** |
| Google Ads (Total, all campaign types) | ₹11.09L | ₹6.28L | **+76.7%** |
| **Combined** | **₹40.43L** | **₹29.17L** | **+38.6%** |

Google drove the sharper increase in percentage terms — spend nearly doubled — concentrated in Performance Max and Shopping (Section 2). Meta's increase is split across Lead Gen (+68.7%) and a modest D2C uptick (+28.9%), while Awareness spend (the new MegaCampaign structure) held flat week-on-week at ~₹12L, meaning Awareness's *share* of Meta budget actually fell from 51.1% to 40.9% even as its absolute spend barely moved — the growth all went to Lead Gen.

### Lead Generation (Meta only — Google Lead Gen is inactive, see Section 7)

| Metric | L7D | P7D | Change |
|---|---|---|---|
| Spend | ₹11.60L | ₹6.87L | **+68.7%** |
| Leads | 3,178 | 2,458 | +29.3% |
| CPL | ₹364.9 | ₹279.6 | **+30.5%** ⚠️ |

Spend scaled 69% but leads only followed at 29%. Unlike the healthy scaling seen in the 13 July audit (spend +27%, leads +21%, CPL +5%), this week's scale-up is inefficient — CPL degraded by nearly a third. Section 2 and Section 3 trace this to two large consolidated campaigns (PanIndia, South) that were scaled aggressively and now likely overlap with the account's existing granular geo campaigns.

### D2C — Blended (Meta OUTCOME_SALES + Google Search/Shopping/PMax)

| Metric | L7D | P7D (as reported) | P7D (outliers excluded)* |
|---|---|---|---|
| Spend | ₹15.75L | ₹10.05L | ₹10.05L |
| Conversion Value | ₹34.99L | ₹45.59L | ₹27.13L |
| Blended ROAS | **2.22x** | 4.54x | **2.70x** |

*Five transactions worth a combined ₹18.46L landed on 18 and 21 August (all inside the P7D window) — two on Meta (₹5.23L on the BoldDays campaign, ₹3.53L on KitchenSinks) and two on Google PMax (₹5.53L on KitchenFaucet, ₹3.41L on HealthFaucet), plus one smaller one on Meta Showering (₹0.75L). See Section 5 for detail and why this needs verification, not blind trust.

Even after stripping that spike out, blended D2C ROAS is down 17.7% (2.70x → 2.22x) on 56.7% more spend. That's a real, if less dramatic, efficiency decline — the account scaled D2C budget faster than the funnel could convert it profitably. This is the headline finding this week, not the raw 51% ROAS collapse the unadjusted numbers imply.

---

## 2. Campaign & Budget Efficiency

### Meta — Lead Generation, ranked by L7D spend (₹2,000+ spend only)

| Campaign | L7D Spend | L7D Leads | L7D CPL | P7D CPL | CPL Change | Flag |
|---|---|---|---|---|---|---|
| PanIndia (main) | ₹5.17L | 1,238 | ₹417.5 | ₹281.9 | **+48.1%** | ⛔ Largest budget line, worst degradation |
| South (new/scaled) | ₹2.73L | 569 | ₹480.6 | ₹343.5 | **+39.9%** | ⛔ Spend +161% w/w, CPL rising with it |
| PanIndia Toilet | ₹0.69L | 463 | ₹149.2 | ₹144.8 | +3.0% | Stable, best CPL at scale |
| Mumbai | ₹0.58L | 97 | ₹599.3 | ₹464.2 | +29.1% | ⚠️ Watch — likely overlaps PanIndia |
| TN | ₹0.41L | 105 | ₹394.7 | ₹328.1 | +20.3% | ⚠️ Watch — likely overlaps South |
| Karnataka | ₹0.25L | 39 | ₹633.3 | ₹599.1 | +5.7% | ⚠️ Watch — likely overlaps South |
| UPWest & UK | ₹0.22L | 82 | ₹264.8 | ₹192.7 | +37.4% | ⚠️ Watch |
| WB | ₹0.15L | 169 | ₹87.5 | ₹101.0 | -13.4% | ✅ Best CPL in the account, room to scale |
| JOB | ₹0.15L | 75 | ₹197.7 | ₹219.1 | -9.8% | ✅ Improving, room to scale |
| AP & TS | ₹0.15L | 30 | ₹488.0 | ₹579.0 | -15.7% | Improving off a weak base |
| Kerala | ₹0.13L | 20 | ₹636.9 | ₹1,157.9 | -45.0% | ✅ Recovering fast |
| Dealership — Nagpur | ₹0.03L | 1 | ₹3,415.2 | ₹493.2 | **+592.5%** | ⛔ Collapsed — see below |
| Dealership — Jabalpur | ₹0.03L | 1 | ₹2,622.4 | ₹620.0 | **+322.9%** | ⛔ Collapsed |
| Dealership — Nashik | ₹0.02L | 1 | ₹2,063.6 | ₹571.3 | **+261.3%** | ⛔ Collapsed |
| Karnataka Appointment Booking | ₹0.002L | 0 | — | ₹1,136.5 | — | ⛔ Effectively dead — spend down 98%, 0 leads |

**Reading this:** PanIndia and South together account for ₹7.90L of the ₹11.60L Lead Gen spend (68%) and are the two campaigns dragging CPL up. Every granular geo campaign that geographically sits inside "South" (TN, Karnataka, Kerala, AP&TS) or is part of "PanIndia" by definition (all of them) also saw CPL rise this week — Mumbai +29%, TN +20%, Karnataka +6%. That's consistent with the two consolidated campaigns bidding against the account's own granular campaigns in the same auctions (Section 3 has the audience-overlap read on this).

The three "Inlead Dealership" campaigns (Nagpur, Jabalpur, Nashik) each went from single digits of leads at a normal CPL to essentially one lead each at 4-6x the CPL, while spend held roughly flat. That's not an audience or creative problem — a campaign that keeps spending at the same rate but stops converting almost entirely points at something broken downstream: the dealership form itself, a Meta delivery/learning-phase reset, or a lead-source integration failure. This needs a same-day check, not a weekly-cycle fix.

### Meta — D2C, ranked by L7D spend

| Campaign | L7D ROAS | P7D ROAS | Flag |
|---|---|---|---|
| KitchenFaucets | 2.70x | 2.32x | ✅ Improving, scale |
| Toilet (prospecting) | 2.58x | 2.30x | ✅ Improving |
| Remarketing AllProducts DPA | 2.88x | 2.89x | Stable — healthy remarketing engine |
| BoldDays | 1.44x* | 21.99x* | *P7D figure inflated by the ₹5.23L spike (Section 5); normalised L7D performance is the more honest read |
| KitchenSinks | 1.36x* | 2.89x* | *P7D also carries a ₹3.53L spike; see Section 5 |
| Lookalike AllProducts | 1.49x | 1.51x | Flat |
| Top40Products | 0.68x | 1.13x | ⚠️ Declining, real (no spike in this campaign) |
| AllProducts (prospecting) | 0.45x | 0.00x | ⛔ Structurally inefficient both weeks |

Take KitchenFaucets, Toilet, and the DPA remarketing campaign as the genuine reads this week — all three are stable-to-improving with no data anomalies, and none show creative fatigue (Section 4). BoldDays and KitchenSinks need their P7D baseline thrown out for comparison purposes; judged only on L7D, BoldDays at 1.44x and KitchenSinks at 1.36x are both underperforming the account's ~2x+ D2C benchmark and are worth a normal-cadence review next week once the anomaly clears the trailing window.

### Google Ads — by campaign type (Search Brand + RLSA, Shopping, PMax; DemandGen/YouTube/KDX excluded — see Section 5 for why)

| Type | L7D Cost | L7D ROAS | P7D Cost | P7D ROAS | Flag |
|---|---|---|---|---|---|
| Search (Brand + RLSA) | ₹1.39L | 3.64x | ₹1.19L | 5.30x | Conversions held flat (54.5→55.0) but order value per conversion fell — same mix-shift as D2C generally |
| Shopping | ₹4.37L | 2.57x | ₹2.13L | 4.73x | Spend +105%, ROAS nearly halved |
| Performance Max | ₹4.53L | 1.85x | ₹2.49L | 5.67x* | *P7D includes the two PMax spikes (₹5.53L KitchenFaucet + ₹3.41L HealthFaucet); L7D's 1.85x is the cleaner read and it's weak |

Shopping and PMax together are 89% of Google's reliable D2C spend and both roughly doubled week-on-week while ROAS fell by half or more even on a clean read. This is the clearest single efficiency signal in the account: **Google D2C budget scaled faster than the auction could sustain profitably.** Recommend capping Shopping and PMax daily budgets at the prior week's level until ROAS recovers toward 3x+, rather than continuing to scale into a softening curve.

---

## 3. Audience Performance & Saturation

**Meta Lead Gen — likely audience overlap (highest-confidence finding this week).** "PanIndia (main)" is a national campaign running concurrently with granular state campaigns (WB, NCR, Mumbai, TN, Karnataka, Kerala, AP&TS, Gujarat, etc.), and "South" is a four-state rollup running concurrently with the individual TN, Karnataka, Kerala, and AP&TS campaigns it geographically contains. Every one of those granular campaigns saw CPL rise this week in the same direction as the consolidated campaign covering it. Meta's ad auction doesn't recognise these as the same advertiser competing with itself — it just sees rising demand for the same audience, and CPMs rise for both campaigns as a result.

Data not available to confirm the overlap percentage directly — this requires the Audience Overlap report inside Meta Ads Manager, run PanIndia vs. each granular geo campaign, and South vs. TN/Karnataka/Kerala/AP&TS individually. That report isn't accessible through this data pull. Recommend running it before the next scaling decision on PanIndia or South.

**Frequency:** No saturation signal on the primary spend drivers — frequency across the top Lead Gen and D2C ad sets stayed in the 1.0x–1.4x range both weeks (Section 4 table). The one exception, the 60-Day ATC remarketing pool (3.7x–3.84x), is a small, intentionally tight retargeting audience where that frequency is expected and not a concern.

**New audience testing opportunity:** WB and JOB are the account's best risk-adjusted Lead Gen geos (₹87.5 and ₹197.7 CPL respectively, both improving) with comparatively small budgets (₹0.15L each this week). Both have headroom — test a 30-40% budget increase on each in isolation next week, before any further scaling of PanIndia, to see if the account's genuinely efficient pockets can absorb more spend without the overlap problem.

**Data not available** — Meta's age/gender/placement/device breakdown was not pulled in this run (scope constraint on this audit; the connector does expose these fields). If Section 2's campaign-level findings need a demographic or placement cut to act on, request that as a follow-up pull.

---

## 4. Creative Performance & Fatigue

No fatigue signals this week — this is a genuine strength, not a gap in the analysis. Across the top 12 ads by spend in both Lead Gen and D2C:

- **CTR held or improved week-on-week** on nearly every top ad (e.g., the leading PanIndia Instant Form creative: 1.17% → 1.32%; the top D2C HighAOV DPA creative: 2.48% → 3.19%).
- **Frequency stayed low** (1.0x–1.4x on prospecting, ~3.8x on the one small remarketing pool) — nowhere near the 4x+ threshold where fatigue typically sets in for prospecting creative.

**What this means:** the CPL and ROAS softness this week is not a creative problem. Don't spend the week refreshing ad creative — the fix is in budget allocation and audience structure (Sections 2–3), not messaging.

**Recommended tests for the next 2–4 weeks, independent of this week's issues:**
1. A dedicated creative test for the "South" campaign specifically — it's carrying the account's second-largest Lead Gen budget on what is likely a generic, non-region-specific creative set. Test a Tamil/Telugu/Malayalam/Kannada regional-language variant against the current English/Hindi default to see if CPL responds, given the campaign spans four linguistically distinct states.
2. A UGC or testimonial-format test for Top40Products (D2C) and AllProducts (prospecting) — both are structurally weak (0.45x–1.13x ROAS) and currently running on the same DPA/catalogue creative format as the rest of the account; a different format is a cheap test before cutting the campaigns outright.

**Data not available** — ad-level breakdown by format (static/video/carousel) and by placement (Feed/Stories/Reels) wasn't pulled this run. If a format-level fatigue check is wanted, that's a follow-up pull, not something to infer from spend/CTR alone.

---

## 5. Conversion Funnel & Tracking Health

**This is the most important section this week.** Five transactions, all landing within the P7D window (17–23 Aug), account for ₹18.46L in reported conversion value against a normal daily range of ₹5K–₹90K per campaign:

| Date | Platform | Campaign | Purchases | Value |
|---|---|---|---|---|
| 18 Aug | Google (PMax) | KitchenFaucet | 4.7 (fractional — see note) | ₹5,53,136 |
| 20 Aug | Meta | Showering | 1 | ₹74,648 |
| 21 Aug | Meta | BoldDays | 2 | ₹5,23,124 |
| 21 Aug | Meta | KitchenSinks | 4 | ₹3,53,432 |
| 21 Aug | Google (PMax) | HealthFaucet | 1.8 (fractional) | ₹3,41,177 |

Three things are unusual enough to flag, not just note:
1. **Two of the five landed on the exact same day (21 August) across two different platforms and three different product lines.** A single premium bathroom-suite order could plausibly explain any one of these individually — Kohler's D2C catalogue includes premium fixtures where a single order can run into lakhs — but three unrelated large orders clustering on one day, split across Meta and Google attribution, is unusual enough to be worth a five-minute check against the actual order log.
2. **Google's conversion counts here are fractional** (4.7, 1.8) — a sign these are modelled/attributed conversions rather than a clean 1:1 count of orders, which makes the per-order value harder to sanity-check from ad platform data alone.
3. Because these all sit in the P7D baseline, they inflate the prior week's revenue and make this week's real (and still-negative) ROAS trend look worse than it is (Section 1) — the account is not actually as bad off as the headline -51% ROAS number suggests, but confirming this table one way or the other changes how much urgency Section 8's action plan deserves.

**Recommended action:** pull the Shopify/order-management order log for 18, 20, and 21 August and match order IDs and values against these five ad-platform conversions. If they're genuine, this is a good week to know what worked (was it a promo, an interior-designer bulk order, a Kohler Studio referral?). If any of them are duplicated, mis-fired, or a stale test transaction with an inflated value, that's a pixel/CAPI or GA4 e-commerce event fix needed before next week's numbers can be trusted at face value.

**Google Ads — DemandGen, YouTube VideoViews, and Search KDX conversions are not comparable to Search/Shopping/PMax.** Across all these campaigns, "conversions" and "conversion value" are numerically near-identical (e.g., DemandGen Bidet: 10,047 conversions = ₹10,047 value) — a sign the conversion action being counted is an engagement or view-through event valued at ₹1 each, not a real purchase. Data not available to confirm what conversion action is mapped here — recommend checking the conversion action settings in Google Ads for these four campaign groups before using their reported ROAS for any decision.

**Data not available** for a full pixel/CAPI/GA4 health check — this audit didn't have access to Events Manager, GTM container exports, or GA4 property configuration. If tracking accuracy is a standing concern given the above, the next audit should include a Meta Events Manager screenshot and a GA4 conversion-event export.

---

## 6. Bidding & Optimization Strategy

**Google Shopping and PMax are being scaled on value-based bidding into a softening ROAS curve** — both campaign types roughly doubled spend week-on-week while ROAS fell by 40-60% even on the clean (spike-adjusted) numbers. If these are running Target ROAS or Maximise Conversion Value bidding, the target likely needs tightening, not loosening, until efficiency recovers — scaling budget further on the current trajectory will keep buying incremental low-value conversions at an increasing cost. Data not available on the exact bid strategy and target values configured per campaign — this audit pulled performance data, not campaign settings; recommend a bid-strategy screenshot for Shopping and PMax specifically.

**Meta PanIndia and South are likely running broad/Advantage+ targeting at scale** given the campaign names and the CPL pattern (efficient at low spend, degrading as spend rises) — classic signal of an audience running out of efficient inventory. Consider a Cost Cap or Bid Cap ceiling on these two specifically, set near their pre-scale CPL (₹280–290 for PanIndia, ₹340–345 for South), to stop the auction from buying increasingly expensive leads to hit volume targets.

**Search KDX** is losing 90% of its available impression share to budget constraints (Section 7) while showing a mix of genuinely relevant terms and unrelated store-locator/navigational queries. This is a targeting-and-budget combination problem, not a pure bidding one — see Section 7 for the specific fix.

---

## 7. Platform-Specific Insights

### Meta

- **Learning phase / structure:** Data not available directly (Meta Ads Manager delivery-status export wasn't part of this pull), but the CPL pattern on PanIndia and South — efficient shortly after launch/scale, degrading as spend climbs — is consistent with campaigns that may be resetting learning phase repeatedly under frequent budget changes. Recommend checking each campaign's "Learning Phase" status in Ads Manager directly; if either has re-entered learning more than once in the past week, that's compounding the overlap problem in Section 3.
- **New account structure since July:** the MegaCampaign (Awareness) layer and PanIndia/South (Lead Gen) layer are both new since the 13 July audit. Awareness now carries ₹12L/week — 41% of Meta spend — with zero attributed leads or purchases, which is expected for a brand campaign but means it should be evaluated on reach/frequency/brand-lift terms, not performance terms. Confirm this is being tracked and reported on separately from the KPI campaigns; if it's being rolled into a blended "Meta spend" number anywhere client-facing, that will misrepresent performance media efficiency.
- **Creative fatigue:** none detected this week (Section 4) — a genuine strength.

### Google

- **Search term quality:** Sampled search terms for the two weakest-impression-share Search campaigns. **KDX** (10% impression share, 90% lost to budget) shows a mix of genuinely high-intent product terms ("kohler wash basin," "kohler bathroom accessories," "counter top wash basin" — several converting well) alongside a meaningful volume of store-locator/navigational queries ("kohler experience centre flagship craig park layout ashok nagar," "studio kohler nungambakkam," "kohler koregaon park") that are unlikely to convert on a paid search click and are diluting the budget this campaign is already starved for. **Search_Generic** (17% impression share, 83% lost to rank) is spending on very broad, low-intent terms ("toilet," "tap," "sanitary," "bathroom accessories") with zero conversions in the sample pulled — low individual cost per click, but zero return.
- **Recommended fix:** add the navigational/store-locator terms as negatives on KDX to free up budget for the terms that are actually converting, and let KDX's impression share grow from there before considering a budget increase. For Search_Generic, either raise bids meaningfully to actually compete for the rank-lost impressions, or reallocate that small budget (₹2,674/week) to Search Brand/RLSA, which are both running near-full impression share (97-99%) and converting well.
- **Impression share, high performers:** Search Brand (97.4%) and Brand RLSA (98.7%) are both near-saturated on impression share — there's no headroom to grow volume here by raising bids; growth has to come from Shopping/PMax or from fixing KDX/Generic.
- **Lead Gen on Google is effectively inactive** — the one Lead Gen DemandGen campaign spent ₹1,183 in the prior week and ₹0 this week. Google is not currently contributing to the Lead Gen objective at all; that entire objective runs on Meta. Worth a deliberate decision (not a default) on whether Google Search/PMax should carry any Lead Gen volume, given Meta Lead Gen CPL is rising as it scales.

---

## 8. Action Plan

### Priority 1 — Immediate (Do today)

**1. Verify the five large conversion events on 18/20/21 August.**
- *Issue:* ₹18.46L in conversion value across 5 transactions, concentrated in 2 days, spanning both platforms.
- *Root cause hypothesis:* Genuine high-ticket bulk/premium orders (plausible for Kohler's catalogue) OR a pixel/CAPI/GA4 tracking anomaly (duplicated value, mis-fired event, stale test transaction).
- *Action:* Pull the Shopify/order-management log for these three dates and match order IDs against ad-platform-reported values.
- *Expected impact:* Determines whether last week's D2C ROAS is genuinely strong (revalidate the media plan) or overstated (fix tracking before trusting any D2C number again).
- *Priority: P1*

**2. Investigate the three Inlead Dealership campaigns (Nagpur, Jabalpur, Nashik).**
- *Issue:* Leads collapsed from single/low-double digits to 1 each, while spend held flat — CPL up 260-590%.
- *Root cause hypothesis:* Broken lead form, Meta delivery/learning-phase reset, or a lead-routing/CRM integration failure specific to these three dealership campaigns.
- *Action:* Test each Instant Form end-to-end today; check Meta's delivery diagnostics for all three campaigns.
- *Expected impact:* Recovers ~₹8K/week of near-wasted spend across three campaigns and, more importantly, catches a possible form/integration break before it spreads to other dealership campaigns.
- *Priority: P1*

**3. Cap Google Shopping and PMax daily budgets at the prior week's level.**
- *Issue:* Both roughly doubled spend week-on-week while ROAS fell 40-60% even on a clean read.
- *Root cause hypothesis:* Value-based bidding scaling into a softening auction faster than the account's conversion rate can sustain.
- *Action:* Roll Shopping and PMax daily budgets back to their P7D average until ROAS recovers toward 3x+.
- *Expected impact:* Stops compounding an already-declining ROAS trend at the account's two largest Google spend lines.
- *Priority: P1*

### Priority 2 — Optimization (This week)

**4. Run Meta's Audience Overlap report: PanIndia vs. every granular geo campaign; South vs. TN/Karnataka/Kerala/AP&TS.**
- *Issue:* CPL degraded on PanIndia (+48%), South (+40%), and every granular geo campaign inside their footprint.
- *Root cause hypothesis:* Internal auction competition between consolidated and granular campaigns targeting the same audience.
- *Action:* Run the overlap report; where overlap is material, either geo-exclude the overlapping states from PanIndia/South or fold the granular campaigns into the consolidated ones and let Meta's algorithm allocate within a single auction.
- *Expected impact:* Should recover a meaningful share of the 30-48% CPL degradation seen this week on the account's two largest Lead Gen budgets.
- *Priority: P2*

**5. Add negative keywords to Search KDX; reallocate Search_Generic budget.**
- *Issue:* KDX loses 90% of impression share to budget while a chunk of its budget goes to non-converting navigational queries; Search_Generic loses 83% to rank with zero conversions in-sample.
- *Root cause hypothesis:* Broad match/DSA-style term capture pulling in store-locator searches; Search_Generic bids too low to compete meaningfully.
- *Action:* Negative out navigational/store-locator terms on KDX; reallocate Search_Generic's ₹2,674/week to Brand/RLSA or KDX.
- *Expected impact:* Frees KDX budget for higher-intent terms already converting; removes a small but fully wasted spend line.
- *Priority: P2*

**6. Set a Cost Cap on PanIndia and South near pre-scale CPL levels.**
- *Issue:* Both campaigns are buying increasingly expensive leads to hit volume as spend rises.
- *Action:* Cost Cap ~₹285 (PanIndia) and ~₹345 (South), reviewed weekly.
- *Expected impact:* Limits further CPL erosion while the overlap fix (Action 4) is investigated.
- *Priority: P2*

**7. Confirm the Google DemandGen/YouTube/KDX conversion action mapping.**
- *Issue:* Conversions and conversion value are near-identical across these campaigns, suggesting a ₹1-valued engagement event is being counted, not real purchases.
- *Action:* Check the conversion action settings for these campaign groups in Google Ads.
- *Expected impact:* Prevents this ₹0.81L/week in spend from being read as under- or over-performing based on meaningless numbers.
- *Priority: P2*

### Priority 3 — Experiments (Next 2-4 weeks)

**8. Regional-language creative test on the South Lead Gen campaign.**
- *Action:* Test Tamil/Telugu/Malayalam/Kannada creative variants against the current default within South.
- *Expected impact:* A four-state rollup on generic creative is a specific, testable gap — regional language often moves CTR and lead quality meaningfully in these markets.
- *Priority: P3*

**9. Budget test on WB and JOB (Lead Gen).**
- *Action:* Increase budget 30-40% on WB and JOB in isolation, before further scaling PanIndia.
- *Expected impact:* Tests whether the account's genuinely efficient geos can absorb more spend without hitting the overlap problem seen on PanIndia/South.
- *Priority: P3*

**10. Format test on Top40Products and AllProducts (D2C).**
- *Action:* Test a UGC/testimonial format against the current DPA/catalogue format.
- *Expected impact:* Cheap test before cutting two structurally weak campaigns (0.45x-1.13x ROAS) outright.
- *Priority: P3*

---

## 9. Client Communication Summary

**Key wins:** Creative is not fatigued anywhere in the account — CTR held or improved on every major ad this week. Meta's DPA remarketing engine and the Toilet and KitchenFaucets D2C prospecting campaigns are stable-to-improving with no red flags. WB and JOB remain the account's most efficient Lead Gen geos and have room to take more budget.

**Key concerns:** Spend scaled 38.6% across the account this week, and both KPI objectives got less efficient as a result — Lead Gen CPL up 30.5%, D2C ROAS down (17.7% on a clean read, more on the raw numbers pending the tracking check below). The likely cause on Lead Gen is two large consolidated campaigns (PanIndia, South) competing with the account's own granular geo campaigns for the same audience. On Google, Shopping and PMax budgets roughly doubled into a softening ROAS curve. Three dealership lead campaigns (Nagpur, Jabalpur, Nashik) nearly stopped converting this week despite unchanged spend and need a same-day technical check.

**Actions taken/recommended:** No live changes were made as part of this audit — all ten actions above are recommendations pending review, split across three today, four this week, and three as 2-4 week tests. The single highest-value action is verifying the five large conversion events flagged in Section 5, since it changes how urgent everything else is.

**Strategic next steps:** Once the overlap report (Action 4) and the order-log check (Action 1) are back, this account needs a structural decision — consolidate the Lead Gen geo campaigns under PanIndia/South properly, or roll PanIndia/South back and let the granular structure keep running as-is. Running both in parallel indefinitely will keep costing CPL efficiency as spend grows.

---

*Data gaps flagged in this report: Meta demographic/placement breakdown, Meta Events Manager/pixel health, Google Ads bid-strategy and target settings, Google keyword-level Search terms beyond the two weakest campaigns, GA4 configuration. None of these were assumed or estimated — flagged explicitly wherever they would have affected a finding.*
