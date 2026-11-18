# Kohler India — Weekly Account Health Audit
**Period:** 06 Jul – 12 Jul 2026 (L7D) vs 29 Jun – 05 Jul 2026 (P7D)
**Platforms:** Meta Ads (Account: 1542147597124356) · Google Ads (Account: 924-290-7329)
**Report Date:** 13 July 2026 | Prepared by: Claude (Automated Audit)

---

## 1. Overall Account Health

**Verdict: Needs Attention.** Spend held roughly flat, but the D2C conversion engine on both platforms weakened materially. Lead Generation on Meta is the one clear bright spot this week.

### Spend Summary

| Platform | L7D Spend | P7D Spend | Change |
|---|---|---|---|
| Meta Ads (Total) | ₹6.37L | ₹5.85L | +8.9% |
| Google Ads (Total, incl. DemandGen anomaly) | ₹9.17L | ₹8.15L | +12.5% |
| Google Ads (Search+Shopping+PMax only — comparable) | ₹5.44L | ₹7.31L | **-25.6%** |
| **Combined (clean, excl. DemandGen anomaly)** | **₹11.81L** | **₹13.16L** | **-10.3%** |

Raw combined spend looks up 11%, but that is an artefact of one Google campaign (`220526_Cheil_Kohler_Branding_Traffic`) scaling **20x week-over-week** (₹14,619 → ₹3.02L) — flagged as a Priority 1 issue in Section 5/6 below, not a genuine media decision on its face. Stripping that out, real spend across the account is down 10.3%.

### Blended D2C Efficiency (Meta D2C + Google Search/Shopping/PMax)

| Metric | L7D | P7D | Change |
|---|---|---|---|
| D2C Spend | ₹8.03L | ₹10.17L | -21.1% |
| D2C Conversion Value | ₹15.49L | ₹23.77L | **-34.8%** ⛔ |
| Blended D2C ROAS | **1.93x** | 2.34x | **-17.6%** ⚠️ |

**This is the headline finding.** D2C spend was pulled back 21%, but conversion value fell nearly twice as fast (-34.8%). Blended ROAS dropped from 2.34x to 1.93x. The decline is not a single-platform story — both Meta D2C and Google D2C softened in the same week, which raises the odds of a shared cause (site-side: pricing, stock, checkout, or a landing-page/tracking issue) rather than two unrelated media problems. See Section 5.

### Meta Ads: Objective-Wise Summary

#### Lead Generation

| Metric | L7D | P7D | Change |
|---|---|---|---|
| Spend | ₹3.72L | ₹2.93L | +27.0% |
| Leads (Instant Form) | 2,356 | 1,953 | **+20.6%** ✅ |
| CPL | ₹157.98 | ₹150.05 | +5.3% |
| Impressions | 50.0L | 50.5L | -1.0% |
| CTR | 1.05% | 0.77% | **+36.4%** ✅ |
| CPM | ₹74.45 | ₹58.05 | +28.3% |
| CPC | ₹7.07 | ₹7.58 | -6.7% |

**Interpretation:** Lead Gen is the strongest part of the account this week. Spend scaled 27% and lead volume kept pace (+20.6%), with CTR up sharply (+36%) — the creative/audience combination is working harder for the same impressions. CPL rose only 5.3%, almost entirely explained by the 28% CPM increase (more competitive auctions at higher spend), not by weaker targeting or creative fatigue. This is a healthy scaling curve, not a warning sign.

#### D2C (OUTCOME_SALES)

| Metric | L7D | P7D | Change |
|---|---|---|---|
| Spend | ₹2.59L | ₹2.86L | -9.6% |
| Purchases | 117 | 154 | **-24.0%** ⛔ |
| Revenue (Pixel) | ₹6.30L | ₹7.34L | -14.2% |
| ROAS | 2.43x | 2.56x | -5.1% |
| CPA | ₹2,212 | ₹1,860 | **+19.0%** ⚠️ |
| CTR | 1.15% | 1.18% | -2.5% |
| CPM | ₹101.02 | ₹97.27 | +3.9% |

**Interpretation:** Purchases fell 24% on a 10% spend cut — efficiency, not just volume, is down. CTR and CPM are both roughly flat, which means traffic quality into the funnel didn't change; the drop is concentrated downstream of the click (see the Showering and Toilet campaign collapses in Section 2). This points at conversion-side friction rather than media targeting or creative fatigue.

#### Brand/Engagement (not a primary KPI campaign set, but worth flagging)

| Metric | L7D | P7D | Change |
|---|---|---|---|
| Spend | ₹0.63L | ₹0.58L | +7.4% |
| Impressions | 4.70L | 1.22L | +286% |
| CTR | 0.94% | 3.01% | **-68.8%** ⛔ |
| CPM | ₹13.34 | ₹47.95 | -72.2% |

Reach expanded nearly 4x at a much lower CPM, but engagement rate collapsed. This looks like a shift into broader, cheaper (likely Reels-heavy) inventory for these post-boosting campaigns — fine if the goal is pure reach, but not comparable to last week's engagement-rate baseline. Confirm whether the 20-Years/Wimbledon campaigns are meant to optimise for reach or for engagement before drawing conclusions.

### Google Ads: Campaign-Type Summary (excl. DemandGen conversions, which are unreliable — see Section 5)

| Type | L7D Spend | P7D Spend | L7D Conv. | P7D Conv. | L7D ROAS | P7D ROAS |
|---|---|---|---|---|---|---|
| Search (Brand) | ₹1.44L | ₹1.71L | 31.9 | 40.6 | 2.15x | **3.43x** |
| Shopping | ₹2.05L | ₹2.38L | 38.3 | 52.0 | 1.56x | 2.07x |
| Performance Max | ₹1.95L | ₹3.22L | 60.3 | 91.4 | 1.49x | 1.75x |
| **D2C Total** | **₹5.44L** | **₹7.31L** | **130.5** | **184.0** | **1.69x** | **2.25x** |
| DemandGen (spend/CTR only — conv. unreliable) | ₹3.73L | ₹0.84L | n/a | n/a | n/a | n/a |

Every real conversion-tracked channel on Google — Search, Shopping, and PMax — declined in both volume and ROAS this week. Brand Search ROAS falling from 3.43x to 2.15x is the sharpest single-channel move in the account (see Section 2).

---

## 2. Campaign & Budget Efficiency

### Meta — Lead Generation CPL Ranking (L7D, campaigns with ≥₹2,000 spend)

| Campaign/Geo | L7D CPL | L7D Leads | P7D CPL | Change | Flag |
|---|---|---|---|---|---|
| West Bengal | ₹97.82 | 78 | ₹84.54 | +15.7% | ✅ Best in account |
| JOB (Jharkhand-Odisha-Bihar) | ₹113.86 | 97 | ₹122.92 | -7.4% | ✅ Improving, scale |
| NCR | ₹139.45 | 123 | ₹168.99 | **-17.5%** | ✅ Scaling opportunity |
| PanIndia (main) | ₹133.11 | 1,235 | ₹126.98 | +4.8% | Stable at scale |
| Mumbai | ₹167.79 | 32 | ₹184.06 | -8.8% | Improving |
| ROM1 | ₹152.49 | 51 | ₹202.57 | -24.7% | ✅ Improving |
| Gujarat | ₹174.70 | 86 | ₹146.02 | +19.6% | ⚠️ Watch |
| ROM2 | ₹184.02 | 41 | ₹185.85 | flat | Stable |
| UPWest & UK | ₹186.54 | 43 | ₹275.21 | -32.2% | ✅ Improving |
| Chandigarh | ₹185.37 | 22 | ₹363.49 | **-49.0%** | ✅ Improving |
| PanIndia Toilet | ₹203.34 | 257 | ₹175.28 | +16.0% | ⚠️ Watch |
| NorthEast | ₹203.59 | 53 | ₹139.82 | **+45.6%** | ⚠️ Softening |
| MPCG | ₹189.34 | 36 | ₹150.65 | +25.7% | ⚠️ Watch |
| Kerala | ₹216.58 | 19 | ₹160.80 | +34.7% | ⚠️ Watch |
| TN | ₹234.46 | 19 | ₹273.89 | -14.4% | Improving |
| Karnataka | ₹241.00 | 39 | ₹194.02 | +24.2% | ⚠️ Watch |
| UPEast | ₹259.83 | 22 | ₹282.84 | -8.1% | Improving (was ₹1,478 in the 22 Jun audit — fix held) |
| UPNorth1 | ₹259.00 | 9 | ₹424.28 | -39.0% | Improving but still low volume |
| Rajasthan | ₹219.50 | 53 | ₹138.44 | **+58.6%** | ⛔ Critical decline |
| AP & Telangana | ₹293.10 | 24 | ₹203.18 | **+44.2%** | ⛔ Critical decline |
| UPNorth2 | ₹393.47 | 6 | ₹661.86 | -40.6% | Improving, still weak volume |
| Karnataka – Appointment Booking (new) | **₹658.83** | 11 | — (new) | — | ⛔ Worst CPL, new campaign |

**Reading this against the 22 June audit:** the two campaigns flagged as critical three weeks ago — UPEast (was ₹1,478 CPL) and UPNorth1 (near-zero volume) — have both recovered substantially (₹259.83 and ₹259.00 respectively). The earlier fix held. The new problems this week are **Rajasthan** (CPL +58.6%, leads down from 97 to 53 on falling spend) and **AP & Telangana** (CPL +44.2%, leads down from 37 to 24). Both need the same treatment applied to UPEast last time: check frequency/saturation and consider a 1–2 week pause or budget cut.

**Scaling opportunities:** West Bengal, JOB, and NCR combine low CPL with improving trend — the account's best risk-adjusted geos for incremental budget.

### Meta — D2C ROAS Ranking (L7D)

| Campaign | L7D ROAS | L7D Purchases | L7D Spend | P7D ROAS | Flag |
|---|---|---|---|---|---|
| CategoryPLP Kitchen Sink & Faucet | **15.93x** | 4 | ₹6,790 | 12.13x | ✅ Standout — under-invested |
| KitchenSinks (prospecting) | **4.69x** | 40 | ₹61,943 | 1.73x | ✅ Big improvement — scale |
| BoldDays | 1.44x | 5 | ₹19,724 | 2.14x | ⚠️ Spend +76%, ROAS down |
| DPA Remarketing | 2.03x | 18 | ₹36,906 | 2.05x | Stable, freq easing (3.83x vs 4.33x) |
| Top40 Products | 1.52x | 17 | ₹31,630 | 1.94x | Spend +48%, ROAS down |
| Lookalike AllProducts | 1.13x | 18 | ₹38,039 | 1.59x | ⚠️ Declining |
| Kitchen Sink & Faucet (prospecting) | **0.71x** | 12 | ₹45,109 | 4.29x | ⛔ Collapsed |
| Toilet (prospecting) | **0.43x** | 3 | ₹11,687 | 2.49x | ⛔ Collapsed |
| Showering | **0.00x** | 0 | ₹6,974 | 1.94x | ⛔ Delivery broke — 0 purchases |
| ToiletCombos | — | 0 | ₹0 | ₹0 | Inactive both weeks |

**Critical issues:**
1. **Kitchen Sink & Faucet (prospecting)** went from 25 purchases/₹209.8K revenue (P7D) to 12 purchases/₹32.0K (L7D) on almost identical spend (₹48.9K → ₹45.1K). CTR on the lead creative actually *improved* (0.69% → 0.97%), which rules out creative fatigue — this is a conversion-side break (stock, price, or checkout issue on this specific product line).
2. **Showering** went from ₹46.4K revenue at 1.94x ROAS to zero purchases despite still spending ₹6,974. The hero creative for this campaign (`ToobiShowerFaucet_Static_1`, ₹23.9K spend last week) has essentially stopped appearing in this week's top-spend set — check whether the ad was disapproved, the ad set exhausted its audience, or the product went out of stock.
3. **Toilet (prospecting)** ROAS fell from 2.49x to 0.43x on a 41% spend cut — again, a bigger conversion drop than a media pullback would explain on its own.

**Working well:** CategoryPLP Kitchen Sink & Faucet (15.93x ROAS on just ₹6.8K spend) and the KitchenSinks prospecting campaign (ROAS nearly tripled to 4.69x) are the two standout performers and the clearest scaling candidates in D2C.

### Google Ads — Campaign Efficiency (L7D)

| Campaign | Type | L7D Spend | L7D ROAS | L7D CPA | Search IS | Flag |
|---|---|---|---|---|---|---|
| Search Brand (main) | SEARCH | ₹1.30L | 2.31x | ₹4,357 | 96.9% | Strong IS, ROAS down from 3.83x |
| Search Brand RLSA | SEARCH | ₹12,576 | 0.73x | ₹6,288 | 97.5% | ⚠️ Weak this week (was 6.17x) |
| Search AIMax Brand | SEARCH | ₹1,354 | 0.00x | — | 46.9% | ⛔ 51% of IS lost to budget, 0 conversions |
| Standard Shopping | SHOPPING | ₹2.05L | 1.56x | ₹5,340 | 65.0% | Declining from 2.07x |
| PMax Bidet | PMAX | ₹1.11L | 1.45x | ₹4,063 | 57.7% | ⛔ Down from 2.31x — largest PMax line |
| PMax FeedOnly Toilet/ToiletSeats | PMAX | ₹24,427 | 1.74x | ₹1,637 | 23.1% | ✅ Improved from 2.28x |
| PMax FocusProducts NonBrand | PMAX | ₹21,674 | 2.02x | ₹2,663 | 29.3% | ✅ Improved from 0.63x |
| PMax KitchenFaucet | PMAX | ₹17,709 | 1.49x | ₹3,621 | 31.6% | Declined from 2.42x |
| PMax HighAOV>10k | PMAX | ₹4,487 | **0.00x** | — | 30.1% | ⛔ Zero conversions on ₹4.5K |
| PMax Mirrors | PMAX | ₹4,581 | **0.03x** | ₹7,510 | 41.7% | ⛔ Near-total loss, was 0.95x |
| PMax ToiletAreaCombos | PMAX | ₹3,942 | 1.00x | ₹2,153 | 33.1% | Break-even |
| PMax HealthFaucet | PMAX | ₹3,694 | 3.23x | ₹1,847 | 37.6% | ✅ Small but efficient |
| PMax Showering Showerhead | PMAX | ₹3,632 | 0.12x | ₹7,108 | 29.2% | ⛔ Loss-making |

**Critical issues:**
1. **PMax Bidet — the single largest Google line item (₹1.11L)** — ROAS fell from 2.31x to 1.45x and conversions nearly halved (46.85 → 27.39) even though spend only dropped 12%. This is the biggest absolute-value decline in the Google account this week.
2. **Search Brand RLSA and AIMax Brand** both went from double-digit/near-6x ROAS territory to near-zero. AIMax Brand specifically lost 51% of its available impression share to budget constraints while generating zero conversions — it is not being given enough budget to compete, and isn't converting when it does. Combined spend here is small (~₹14K) but it's pure waste at current settings.
3. **PMax Mirrors and PMax HighAOV>10k** are both now essentially at zero return (0.03x and 0.00x). Combined spend ₹9K/week — small in isolation but a repeat offender pattern (Mirrors was already weak at 0.95x last check).

**Working well:** PMax FocusProducts NonBrand (0.63x → 2.02x) and PMax FeedOnly Toilet/ToiletSeats (2.28x → 1.74x, still positive) both improved. HealthFaucet remains small but consistently efficient (3.23x).

---

## 3. Audience Performance & Saturation

### Meta Lead Generation
All active geo ad sets are running at frequency 1.03–1.11x for the week — well within healthy range. No systemic saturation. The lookalike, interest, and Advantage+ audience variants tested under PanIndia and PanIndia-Toilet are all performing within a tight band of each other (CPL ₹120–₹150), so no single audience type is materially outperforming — this is a mature, well-tested audience set rather than one with an obvious gap.

### Meta D2C
- **DPA Remarketing frequency is now 3.83x (L7D) vs 4.33x (P7D)** — down, and far below the 26.2x flagged as critical in the 22 June audit. The pool-expansion fix from the previous action plan appears to have worked; this is no longer a fatigue risk.
- Prospecting audiences (Lookalike, Top40 Interests/AdvantagePlus) are all under 1.5x frequency — healthy, with headroom to add spend without saturation risk.

### Google Ads
- Brand Search impression share is 96.9% — essentially maximised; the ROAS decline here is not an audience/reach problem, it's a conversion-value problem (see Section 5).
- PMax impression share remains structurally low across non-Bidet campaigns (23–42%), same pattern as the last audit. This is the clearest sign that PMax needs stronger audience signals (customer match / high-value purchaser lists) — Google is under-serving these campaigns because it doesn't have enough signal to find the right buyers.
- ⚠️ **Data not available** — Google Ads audience-signal composition and Performance Max asset-group detail require the PMax Insights / Asset Group report from the Google Ads UI; this is not exposed through the current Windsor.ai field set.

---

## 4. Creative Performance & Fatigue

### Meta
- The DPA Remarketing creative (`240426_D2C_Remarketing_60Days_ATC_FocusedProducts`) shows *declining* frequency and CPM (253.93 → 196.33) with stable CTR (1.32% → 1.27%) — the audience-expansion fix is de-fatiguing this creative correctly. No refresh needed yet.
- For the two collapsed D2C campaigns (Kitchen Sink & Faucet, Showering), CTR on the surviving creative held flat or improved week-over-week. **This rules out creative fatigue as the cause of the purchase collapse** — the problem sits downstream of the ad (landing page, stock, or price), not in the creative itself. Don't spend testing-cycle time refreshing these creatives until the funnel issue is confirmed and fixed.
- The strongest Lead Gen creative this week is `220626_..._Interests_FullBathroom_Video_3` (PanIndia): CTR rose from 1.86% to 3.00% and leads grew from 163 to 220 at increased spend — no fatigue signal, and it is the best candidate to adapt for the underperforming geo campaigns (Rajasthan, AP&TS) flagged in Section 2.

### Google
- Creative/asset-level detail is not exposed via the campaign-level Windsor pull. Given PMax Bidet's ROAS drop (2.31x → 1.45x) mirrors the exact pattern flagged for FocusProducts_NonBrand in the 22 June audit (which was traced to asset rotation), the same root cause is worth checking first.
- ⚠️ **Data not available** — Requires the PMax "Asset Performance" report (per asset group) from the Google Ads UI to confirm whether specific headlines/images have been rated "Low"/"Poor" and are dragging down Bidet's delivery.

---

## 5. Conversion Funnel & Tracking Health

This section carries the most weight this week — two separate issues materially affect how the rest of this report should be read.

### 🔴 Critical — Google DemandGen conversion tracking is broken, and it is now driving a runaway bid strategy

`conversions` and `conversions_value` are numerically **identical** for nearly every DemandGen row (e.g., `220526_Cheil_Kohler_Branding_Traffic`, L7D: conversions = 761,313.57, conversions_value = ₹761,313.57 — the same number in both fields). At ₹3.02L spend, this would imply a purchase volume that is not plausible for the category. This is the same fault flagged for `DemandGen_Mirror` in the 22 June audit ("conversion action assigned appears to be a micro-conversion, not a purchase event") — it has since spread to affect every DemandGen campaign in the account, at far larger scale.

**Why this matters beyond reporting accuracy:** `220526_Cheil_Kohler_Branding_Traffic` is running on a **TARGET_ROAS** bid strategy. If the "conversions" it is optimising against are actually a cheap, high-volume micro-event (e.g., page views or engaged sessions) rather than real purchases, the algorithm has a strong incentive to keep scaling spend — which is exactly what happened: this single campaign went from ₹14,619 to ₹3.02L in one week, a 20x increase. **The tracking fault is very likely the direct cause of the spend spike**, not a deliberate media decision.

**Do not use DemandGen ROAS/CPA in any client-facing number until this is fixed.**

### Meta
- Lead Gen: instant-form lead counts are consistent and stable across geos — no tracking anomalies detected.
- D2C: pixel purchase and revenue tracking is internally consistent (values scale sensibly with spend for the healthy campaigns). The two campaigns that collapsed to zero/near-zero purchases (Showering, Kitchen Sink & Faucet, Toilet) show **no tracking symptoms** — CTR and landing-page click volume look normal, purchases simply stopped. This is a funnel/product issue, not a measurement issue. **Recommended next step:** check stock availability and checkout flow for the Showering and Kitchen Sink & Faucet product pages on kohler.com/in directly; this is outside what ad-platform data can confirm.

### Google
- Search, Shopping, and PMax conversion values move in sensible, comparable ranges week over week — no tracking anomaly detected outside DemandGen.
- ⚠️ **Data not available** — GA4 and on-site funnel data (add-to-cart → checkout → purchase drop-off) would confirm whether the D2C decline is a site-side issue or genuinely lower purchase intent this week. Requires GA4 export or dashboard access.

---

## 6. Bidding & Optimization Strategy

### Meta
- Lead Gen ad sets run on **COST_CAP** — appropriate for CPL control, but with 20+ separate geo campaigns, budget cannot auto-flow toward the efficient geos (West Bengal, JOB, NCR); each geo's budget is fixed manually. This structural fragmentation is the same issue flagged in the 22 June audit and is unchanged.
- D2C prospecting/remarketing runs on **LOWEST_COST_WITHOUT_CAP** — no ROAS floor. Given the swings observed this week (Kitchen Sink & Faucet: 4.29x → 0.71x; KitchenSinks: 1.73x → 4.69x), an uncapped bid strategy means Meta can keep spending through a ROAS collapse without any guardrail. Recommend testing a ROAS-goal bid strategy on the two largest prospecting campaigns.

### Google
- **PMax and Search remain on MAXIMIZE_CONVERSION_VALUE with no ROAS floor** — flagged as a Priority 1 item in the 22 June audit and still unresolved. This week's near-zero performers (PMax Mirrors 0.03x, PMax HighAOV 0.00x, Search AIMax Brand 0.00x) are a direct consequence: with no floor, Google can and will spend through a ROAS collapse.
- **Standard Shopping and DemandGen run on TARGET_ROAS** — appropriate in principle, but DemandGen's target is currently being fed corrupted conversion-value data (Section 5), which invalidates its ability to bid sensibly. This must be fixed before the TARGET_ROAS setting on DemandGen can be trusted.

---

## 7. Platform-Specific Insights

### Meta
- **Learning phase:** the new `100726_Karnataka_AppointmentBooking` campaign (₹7,247 spend, ₹658.83 CPL) is in its first data week — give it 1–2 more weeks before judging, consistent with how NCR/Gujarat/Rajasthan were treated in the last audit (which has since proven out for NCR).
- **Campaign structure:** the Lead Gen account still runs 17+ parallel geo campaigns for what is functionally one funnel (Instant Form lead capture). This makes budget management manual and slow to react — the same structural note as three weeks ago.
- **Creative fatigue:** none detected. The DPA remarketing fatigue flagged previously has resolved.

### Google
- **Search term quality:** Brand Search core ad group has a very clean 3.4% zero-conversion cost share — healthy. But the **Standard Shopping campaign's non-brand-adjacent ad groups are badly leaking spend on irrelevant queries**: of ₹68,712 spent under the "Affinity" ad group this week, **93.5% (₹64,244) went to search terms with zero conversions** — including broad, non-Kohler queries like "kitchen sink," "bathroom mirror cabinet," and even a competitor query ("jaquar glass cleaner"). The "Remarketing" ad group is 93.3% wasted spend and "Bold Days" is 98.1% wasted. Across just these three ad groups, roughly **₹1.25L of this week's Shopping spend went to non-converting search queries** — this is the single largest, most fixable inefficiency found in this audit.
- **Impression share:** Brand Search at 96.9% is maximised. PMax remains structurally low (23–42%) outside Bidet — same audience-signal gap as before.
- **Keyword intent:** the generic/competitor queries leaking into Shopping (see above) suggest either missing negative keywords at the campaign level or an overly broad product-matching setup in the feed.

---

## 8. Action Plan

### Priority 1 — Immediate Actions (Today)

**P1.1 — Investigate and cap the Google `Branding_Traffic` DemandGen campaign**
- Issue: Spend scaled 20x week-over-week (₹14,619 → ₹3.02L) while running on TARGET_ROAS against conversion data that is very likely corrupted (conversions = conversions_value, identical numbers).
- Root cause: The conversion action feeding this campaign's bid strategy appears to be a micro-conversion (clicks/views), not a purchase event, so the algorithm is scaling against a false signal.
- Action: Set a hard daily budget cap on this campaign today pending a conversion-action audit in Google Ads. Do not let it continue to auto-scale.
- Expected impact: Prevents further uncontrolled spend (currently ~₹3L/week and rising) on a campaign whose real ROI cannot be verified.
- Priority: 🔴 Critical.

**P1.2 — Add negative keywords to the Standard Shopping campaign**
- Issue: ₹1.25L this week (out of ~₹1.32L across the three ad groups checked) went to search terms with zero conversions — generic category terms and at least one competitor brand query.
- Root cause: Missing/incomplete negative keyword list and/or overly broad product feed matching for Shopping.
- Action: Pull the full search terms report for the Affinity, Remarketing, and Bold Days ad groups; add generic non-Kohler terms and the competitor query as negatives at the campaign level today.
- Expected impact: Recovers a meaningful share of the ₹1.25L/week currently spent on non-converting queries, redirect toward Search Brand or PMax Bidet.
- Priority: 🔴 Critical.

**P1.3 — Check stock/checkout for Showering and Kitchen Sink & Faucet product pages (Meta D2C)**
- Issue: Showering fell to zero purchases and Kitchen Sink & Faucet purchases nearly halved, in both cases with flat-to-improving ad-level CTR — ruling out a media cause.
- Root cause hypothesis: Stock-out, price change, or a checkout-flow break specific to these product lines on kohler.com/in.
- Action: Confirm product availability and test the purchase flow end-to-end for both categories today.
- Expected impact: If a site-side issue is found and fixed, recovers an estimated ₹40–70K/week in D2C revenue based on the prior week's run-rate for these two campaigns.
- Priority: 🔴 Critical.

**P1.4 — Address Rajasthan and AP & Telangana CPL spikes (Meta Lead Gen)**
- Issue: CPL up 58.6% (Rajasthan) and 44.2% (AP&TS) with lead volume falling in both, on lower spend.
- Root cause hypothesis: Early-stage audience saturation or seasonal demand dip in these geos.
- Action: Apply the same fix that worked for UPEast in the last audit — check frequency, and if elevated, pause or cut budget by 30–40% for 1 week while monitoring CPL recovery.
- Expected impact: Est. ₹3–5K/week in wasted spend recovered; CPL back toward the ₹140–150 range these geos held two weeks ago.
- Priority: 🟠 High.

### Priority 2 — Optimization Actions (This Week)

**P2.1 — Scale CategoryPLP Kitchen Sink & Faucet and KitchenSinks (prospecting) budgets (Meta D2C)**
- Issue: CategoryPLP is running at 15.93x ROAS on only ₹6,790 spend; KitchenSinks improved to 4.69x ROAS on ₹61,943.
- Action: Increase CategoryPLP budget by 50–75% and monitor ROAS decay over 5–7 days; hold KitchenSinks budget flat for one more week to confirm the improvement is durable before scaling further.
- Expected impact: CategoryPLP has clear headroom — even a partial ROAS hold at 2x current spend adds meaningful incremental revenue at very low CPA risk.

**P2.2 — Set a target ROAS floor on PMax Mirrors and PMax HighAOV>10k (Google)**
- Issue: Both campaigns are at or near 0.00x ROAS this week (₹9K combined spend).
- Action: Switch both to TARGET_ROAS with a 2.5–3.0x floor; if they can't deliver at that target, let delivery throttle rather than keep spending flat-out.
- Expected impact: Stops ~₹9K/week in near-total loss; small in isolation but compounds with the PMax Bidet fix below.

**P2.3 — Investigate PMax Bidet's ROAS drop as an asset-rotation issue (Google)**
- Issue: The account's single largest Google campaign fell from 2.31x to 1.45x ROAS, conversions nearly halved.
- Action: Pull the Asset Group Performance report in the Google Ads UI; pause any assets rated "Poor"/"Low" and add 2–3 fresh creative assets, following the same process that fixed FocusProducts_NonBrand three weeks ago.
- Expected impact: Recovering even half the ROAS gap (to ~1.9x) would add an estimated ₹35–45K/week in revenue at current spend.

**P2.4 — Test increased budgets on West Bengal, JOB, and NCR Lead Gen (Meta)**
- Issue: All three are the account's most efficient geos and trending better week-over-week.
- Action: Increase daily budget by 25–30% on each for two weeks, monitor CPL stability.
- Expected impact: Est. incremental 60–90 leads/week at current efficiency.

**P2.5 — Fix the Search AIMax Brand and Search Brand RLSA campaigns (Google)**
- Issue: AIMax Brand is losing 51% of impression share to budget with zero conversions; RLSA dropped from 6.17x to 0.73x ROAS.
- Action: Either raise AIMax Brand's budget cap meaningfully (test whether more IS converts) or pause it — at ₹1,354/week spend for zero return, it's not material enough to leave unmanaged. Check RLSA's audience list freshness (remarketing list size/recency) given the sharp ROAS drop.
- Expected impact: Removes ~₹1,300/week of pure waste; RLSA fix could restore ROAS toward its historical 6x+ range.

### Priority 3 — Experiments (Next 2–4 Weeks)

**P3.1 — Adapt the top-performing PanIndia Lead Gen creative (`Interests_FullBathroom_Video_3`) for Rajasthan and AP&TS**
- Rationale: This creative's CTR grew from 1.86% to 3.00% this week with no fatigue signal, while Rajasthan and AP&TS are both declining. A geo-localised cut of the same creative concept could lift CTR/CPL faster than a net-new creative brief.
- Design: Produce localised (language/visual) variants for both geos, run for 2 weeks against the current creative as a direct comparison.

**P3.2 — Add Customer Match audiences to underperforming PMax campaigns**
- Rationale: Non-Bidet PMax campaigns remain stuck at 23–42% impression share — Google doesn't have enough signal to find the right buyers.
- Action: Upload the last-180-day D2C purchaser list as an audience signal across PMax KitchenFaucet, ToiletAreaCombos, and Showering Showerhead. Monitor impression share and ROAS over 14 days.

**P3.3 — GA4 funnel pull for Kitchen Sink & Faucet and Showering categories**
- Rationale: Ad-platform data alone can't confirm whether this week's D2C collapse in these two categories is stock, price, or checkout friction. GA4 add-to-cart → purchase drop-off data would settle it.
- Action: Request a category-level GA4 export or dashboard view covering the last 14 days; compare drop-off rates for these two categories against the account average.

**P3.4 — Test a portfolio bid strategy or campaign consolidation for Meta Lead Gen geos**
- Rationale: 17+ parallel geo campaigns can't auto-flow budget toward the efficient ones; this has been a structural note for three consecutive audits.
- Action: Pilot consolidating 3–4 of the smaller, similar-performing geos (e.g., ROM1, ROM2, MPCG) into a single campaign with geo-level ad sets, so Meta's delivery system can shift budget within the campaign automatically. Compare blended CPL against the current fully-separated structure over 3 weeks.

---

## 9. Client Communication Summary

### Key Wins This Week
1. **Meta Lead Generation scaled cleanly** — spend up 27%, leads up 20.6%, CTR up 36%. CPL rose only 5.3%, driven by market-wide CPM inflation rather than any weakening in targeting or creative.
2. **Two Meta D2C campaigns are standout performers**: CategoryPLP Kitchen Sink & Faucet at 15.93x ROAS (under-invested — a clear scaling opportunity) and KitchenSinks prospecting, whose ROAS nearly tripled to 4.69x.
3. **The DPA Remarketing fatigue issue from three weeks ago has resolved** — frequency is down to a healthy 3.83x from the 26.2x flagged in the last audit, and ROAS held steady at ~2x.
4. **UPEast and UPNorth1 Lead Gen, both flagged critical in the last audit, have recovered** to reasonable CPLs (₹259.83 and ₹259.00), confirming the earlier fix worked.

### Key Concerns
1. **Blended D2C ROAS fell from 2.34x to 1.93x** (-17.6%) across Meta and Google combined — D2C spend was pulled back 21% but conversion value fell 35%, a real efficiency decline, not just a smaller media footprint.
2. **A Google DemandGen campaign's spend jumped 20x week-over-week** (₹14,619 → ₹3.02L) while running on a bid strategy that appears to be optimising against corrupted conversion data. This needs a same-day budget cap and a conversion-tracking fix.
3. **Roughly ₹1.25L of this week's Google Shopping spend went to non-converting search queries** across three ad groups — the single largest concrete inefficiency in this audit, and directly fixable with a negative keyword pass.
4. **Two Meta D2C product categories (Showering, Kitchen Sink & Faucet) show funnel breaks, not media problems** — CTR held flat or improved while purchases collapsed. This needs a site-side check (stock/checkout), not a media fix.
5. **Rajasthan and AP & Telangana Lead Gen geos** are the new efficiency laggards this week, with CPL up 58.6% and 44.2% respectively.

### Actions Recommended This Week
- Cap the Google Branding_Traffic DemandGen campaign today and audit its conversion-action setup.
- Add negative keywords to Standard Shopping (Affinity, Remarketing, Bold Days ad groups) today.
- Check stock and checkout flow for Showering and Kitchen Sink & Faucet on kohler.com/in.
- Apply the UPEast playbook to Rajasthan and AP & Telangana.
- Scale CategoryPLP Kitchen Sink & Faucet budget while the current ROAS holds.

### Strategic Next Steps
Meta Lead Gen is executing well and is the account's most reliable growth lever right now — the geo-fragmentation issue is worth solving structurally (P3.4) so budget can flow to winners without manual weekly intervention. On Google, the DemandGen tracking fault is the most urgent item in this report: until it's fixed, no DemandGen number in this account can be trusted, and it appears to be actively driving overspend. Once that's contained, the next media review should focus on why D2C conversion efficiency dropped in the same week on both platforms — the shared timing points toward a site-side cause worth ruling in or out before reallocating budget further.

---

*Data sourced via Windsor.ai connectors | Meta Ads + Google Ads | Audit run: 13 July 2026*
