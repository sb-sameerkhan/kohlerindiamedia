# Kohler India: Weekly Paid Media Health Audit

**Run date:** Mon 16 Nov 2026 (scheduled run) | **Latest 7 days:** 9-15 Nov | **Previous 7 days:** 2-8 Nov
**Source:** Windsor, Meta Ads 1542147597124356 and Google Ads 924-290-7329, account-scoped. All figures in ₹, platform-reported. Internal document. Vendor and tool names must be stripped before any client version.
**Data limits (read first):** No QL/SQL data, so CPQL cannot be judged, only CPL. No GA4 or Shopify orders, so D2C revenue is platform-reported and unverified (30% employee-GMV haircut not applied). Not pulled this run: Meta ad-level and audience/placement breakdowns, frequency by ad set, Google search terms, asset reports, audience signals. Sections 3, 4 and 7 are therefore partly "data required". Meta engagement post-boost campaigns (₹21k) and the WhatsApp CTWA campaign (₹14k, no lead events) are excluded from Lead Gen and D2C totals. Google Demand Gen, the new PMax "AssetsOnly" and KDX are excluded from Google D2C totals (see Section 5).

---

## 1. Overall Account Health

**Verdict: Needs attention.** Lead Gen got worse: CPL up 7% week on week and up 23% in two weeks (₹454 on 2 Nov to ₹557), after budget was pushed into state campaigns that did not hold efficiency. Meta D2C sells more orders but of much smaller baskets. Google D2C recovered after the 10-11 Nov Shopping rebuild.

### Lead Generation, Meta (OUTCOME_LEADS, Instant Forms)

| Metric | Prev 7d | Last 7d | Change |
|---|---|---|---|
| Spend | 10,57,675 | 12,82,396 | +21% |
| Impressions | 61.4L | 85.1L | +39% |
| Link clicks | 69,103 | 1,42,210 | +106% |
| Link CTR | 1.13% | 1.67% | +0.54 pts |
| CPC (link) | 15.3 | 9.0 | -41% |
| CPM | 172 | 151 | -12% |
| Leads | 2,030 | 2,302 | +13% |
| CPL | 521 | 557 | +7% |
| Leads per link click | 2.94% | 1.62% | -1.3 pts |

Why: spend rose 21% but leads only 13%. Clicks doubled while leads per click almost halved, so the extra clicks are cheap and low-intent (PanIndia clicks went 41k to 92k at about ₹5.6 a click against ₹11 before). Instant Form lead volume did not follow. This pattern usually means delivery drifted to cheap placements or a high-CTR creative that attracts curiosity clicks. I cannot confirm which without placement and ad-level data. Treat the CTR and CPC "improvement" as a warning, not a win.

### Lead Generation, Google
None. Account 924-290-7329 is the D2C (Ecomm) account.

### D2C, Meta (OUTCOME_SALES)

| Metric | Prev 7d | Last 7d | Change |
|---|---|---|---|
| Spend | 3,74,289 | 3,82,741 | +2% |
| Impressions | 61.2L | 85.1L | +39% |
| Link clicks | 27,848 | 44,858 | +61% |
| CPC (link) | 13.4 | 8.5 | -36% |
| CPM | 61 | 45 | -26% |
| Landing page views | 11,644 | 19,570 | +68% |
| Purchases | 184 | 250 | +36% |
| CPA | 2,034 | 1,531 | -25% |
| Purchase value | 8,94,359 | 4,68,263 | -48% |
| ROAS | 2.39 | 1.22 | -49% |
| AOV | 4,861 | 1,873 | -61% |

Why: the headline ROAS drop is overstated. Last week's KitchenSinks showed 12 purchases worth ₹3,30,224 (an average of ₹27.5k per order), which is almost certainly a one-off large order or a value-tracking spike. Excluding it, ROAS went from 1.66 to 1.30 (-22%) and AOV from about ₹3,280 to ₹1,873 (-43%). Volume is up and CPA is better, but the mix moved to low-ticket orders. This is a real basket-size decline, not just noise.

### D2C, Google (Search, Shopping, PMax only)

| Metric | Prev 7d | Last 7d | Change |
|---|---|---|---|
| Spend | 2,97,284 | 3,63,681 | +22% |
| Impressions | 9.5L | 13.9L | +46% |
| Clicks | 25,053 | 46,807 | +87% |
| CTR | 2.64% | 3.37% | +0.73 pts |
| CPC | 11.9 | 7.8 | -35% |
| Conversions | 93 | 160 | +72% |
| Conv. rate | 0.37% | 0.34% | flat |
| CPA | 3,205 | 2,269 | -29% |
| Conv. value | 5,29,933 | 7,45,218 | +41% |
| ROAS | 1.78 | 2.05 | +15% |

Why: new Shopping campaigns launched on 10-11 Nov. "Shopping_Brand" (new) spent ₹56.7k for 45.7 conversions and ₹1.95L value (ROAS 3.44), which is 26% of all core conversion value. Brand Search also improved (ROAS 2.14 to 2.71). The old Shopping campaign (190525) was cut from ₹42k to ₹17k and 021126 was paused, so this is a deliberate restructure that is working. Note the ₹1,000 daily budget on several PMax campaigns means most non-brand PMax is limited by budget as well as rank.

### Most important shifts
1. Meta Lead Gen CPL ₹454 (2 Nov) to ₹521 (2-8 Nov) to ₹557, with leads per click down 45% in a week.
2. State campaigns took 30% of Lead Gen spend (up from 21%) and their CPL went from ₹505 to ₹589 (+17%). Scaling them did not work.
3. Meta D2C average order value fell about 43% (ex-outlier) as spend tilted to low-ticket category campaigns.
4. Google new Shopping_Brand is budget-limited (70.6% of impression share lost to budget) at 3.4 ROAS.
5. Google Demand Gen spend rose 65% (₹87k to ₹143k) and the new PMax AssetsOnly spent ₹25k in 10 days of existence on junk-click traffic (Section 5).

---

## 2. Campaign and Budget Efficiency

### Lead Gen (Meta)

| Group | Prev spend / leads / CPL | Last spend / leads / CPL | Read |
|---|---|---|---|
| PanIndia FullBathroom | 4.55L / 777 / 585 | 5.11L / 813 / 629 | Spend +12%, CPL +7%. Biggest line, worst efficiency among national. |
| PanIndia Toilet | 1.50L / 391 / 384 | 1.92L / 471 / 408 | Spend +28%, CPL +6%. Scales cleanly, best large campaign. |
| South | 2.31L / 424 / 546 | 1.97L / 369 / 534 | Spend -15%, CPL flat. |
| All state campaigns (20) | 2.21L / 438 / 505 | 3.82L / 649 / 589 | Spend +73%, CPL +17%. |

State campaign detail (CPL prev to last): Gujarat 182 to 576 (spend 3.2x), NorthEast 299 to 726 (6.3x), Karnataka 2,298 to 725, UP East 314 to 468 (+80%), WB 338 to 600 (+81%), Guwahati 595 to 989, TN 473 to 686, Mumbai 1,824 to 924 (still poor). Holding or improving: JOB 478 to 410 (+24% spend), NCR 658 to 563 (+55% spend), Rajasthan 925 to 584, UP West & UK flat at 415. Weak and still spending: Chandigarh 1,036, ROM1 636 / ROM2 838, Kerala 1,074 (5 leads), UPNorth1 1,210 (7 leads), Guwahati 989.

Why: the 2 Nov audit recommended moving budget into the cheap states. They were cheap because they were throttled. Jumps of 2x to 6x on small budgets sent them back into learning and into broader, costlier audiences, so the low CPL did not survive. Lesson: the cheap CPL was a small-sample result, not headroom.

Reallocation (steps of 20% or less, one change a week per campaign):
- Pull back: Gujarat, NorthEast and Karnataka to last week's pre-jump levels; Chandigarh, ROM1, ROM2, Kerala, UPNorth1 and Guwahati to a floor budget or pause until CPL is under ₹700 on 3 consecutive days.
- Fund: PanIndia Toilet (+15-20% a week, watch CPL under ₹450), JOB, NCR, UP West & UK, Rajasthan.
- Hold PanIndia FullBathroom flat and rework its creative before any further budget (Section 4).
- Cannot confirm without data: budget caps per campaign (Meta budget fields returned empty for LG campaigns, so I cannot tell CBO from ad set budgets) and QL quality by region. CPL ranking should not drive final allocation until QL by campaign is overlaid.

### D2C Meta

| Campaign | Prev ROAS / CPA | Last ROAS / CPA | Read |
|---|---|---|---|
| DPA Remarketing | 3.71 / 1,022 | 2.24 / 1,139 | Still the best earner; value dropped (AOV 3.8k to 2.5k). |
| Toilets | 1.46 / 2,639 | 1.05 / 1,243 | CPA halved, value per order fell. |
| KitchenFaucets High AOV | 1.06 / 2,303 | 1.03 / 1,407 | Stable, largest budget (₹93k). |
| KitchenFaucets Low AOV | 0.43 / 3,021 | 1.05 / 1,828 | Improving but barely break-even. |
| Lookalike AllProducts | 3.76 / 1,538 | 1.38 / 1,494 | ROAS fell with order value. |
| PLP KitchenSink&Faucet MaxVolume | 1.77 / 1,876 | 0.34 / 2,858 | Failing. AOV about ₹960. |
| KitchenSinks | 9.41* / 2,925 | 0.51 / 3,936 | *Prev inflated by one outlier. Real ROAS well under 1. |
| Showering | none / none | 15.7 / 598 | 6 purchases on ₹3.6k spend. Too small to trust. |

Why: PLP (₹48.6k) and KitchenSinks (₹35.4k) are buying 1.4M and 0.75M cheap impressions for orders that do not pay back. Together they are ₹84k a week at ROAS under 0.5. Roughly 22% of Meta D2C spend is earning almost nothing. The 14 Sep High AOV campaign is the only prospecting line near 1.0 at scale, so prospecting overall is at or below break-even and DPA is carrying the account.

### D2C Google (core)
- Scale: Shopping_Brand (new) at ROAS 3.44 with 70.6% budget lost; raise its ₹15,000 budget in steps of 20%. Brand Search ROAS 2.71 at 88% impression share, nothing to add. PMax ToiletAreaCombos ROAS 2.03 (IS 36%, budget lost 19%) and FocusProducts NonBrand ROAS 4.5 on ₹27k (11.4 conv, up from 3.5) are the best PMax lines.
- Waste: PMax BoldDays KitchenFaucet ₹20.8k, 14k clicks, zero conversions at ₹1.47 CPC (budget ₹5,000 a day). PMax KitchenFaucet (240425) ROAS 0.02 on ₹12.3k. PMax Bidet ROAS 0.44 on ₹8.2k (prev 6.2, so volatile; 1.2 conversions is too few to call). PMax HealthFaucet ROAS 0.62 on ₹25.9k. Shopping General (new) ROAS 0.87 on ₹12.4k. Combined sub-1.0 spend about ₹80k a week.

---

## 3. Audience Performance and Saturation

Data required: audience, age/gender, placement and frequency breakdowns for Meta (not pulled) and Google audience signals. What the campaign data does suggest:
- DPA remarketing reached only 23-28k people with 3.2L impressions (about 12 impressions per person this week, prev 11). That is heavy for a retargeting pool and fits the value-per-order fall: DPA is serving a saturated pool and converting the low-ticket browsers first. Test a frequency cap or 3-day vs 7-day exclusion window and add a high-AOV-only product set.
- Lookalike AllProducts reach 197k for ₹17.9k, ROAS 3.76 to 1.38: the lookalike seed probably includes low-AOV buyers. Rebuild a seed from purchasers above ₹5,000 only, and a separate value-based lookalike.
- Lead Gen: states were scaled on small audiences (NorthEast reach 98k, Gujarat 79k, Kerala 17k). CPL jumped as frequency and reach limits hit. Check frequency by state ad set; I expect most above 2.5.
- Test: Advantage+ audience with age floor 28+ and homeowner/renovation interest signals for PanIndia FullBathroom; separate builder/architect/interior-designer interest ad sets for the high-AOV D2C line; exclude past 90-day lead submitters (Pooja Meena's CRM list) from all LG prospecting to cut duplicate lead cost.

---

## 4. Creative Performance and Fatigue

Data required: ad-level CTR, CPM, frequency and leads/purchases by creative (not pulled). The existing weekly Meta creative analysis (Nov 10) in the folder covers the previous week; ad-level data should be pulled this week to compare.
Signals from campaign data:
- PanIndia FullBathroom clicks +122% with leads +5%, CPC halved: a creative or placement change last week produced cheap clicks. Pull ad-level data to find the ad(s) with CTR above 2% and lead-per-click below 1.5%; cut those first.
- Post-boost engagement posts (₹21k across 14 posts) are separate from LG/D2C; no conversion read is possible.
- Recommended tests (specific): (a) Lead Gen: 3 Instant Form variants with a higher-intent question ("When do you plan to start? Within 1 month / 1-3 months / just exploring") to filter, and a "more volume" form for comparison, measured on QL; (b) PanIndia Toilet creative clones for FullBathroom with price-anchored copy ("Bathroom upgrade starting ₹X"); (c) D2C: carousel and catalogue-collection ads grouped by premium range (₹8k+) instead of PLP/Sinks category ads; (d) a 15-second video cutdown of the best Showering ad with the actual product price.

---

## 5. Conversion Funnel and Tracking Health

- **Google Demand Gen conversions are not purchases.** Conversions equal conversion value on every Demand Gen line (e.g. 3.66L conversions, 3.66L value, CTR 8.9%, CPC ₹0.40). This is a micro-event (value 1 each) counted as a conversion, probably engaged-view or view-through. Do not read their "ROAS 2.55" as revenue. Spend rose 65% to ₹1.43L, of which BoldDays alone is ₹1.09L (3.3x). Check which conversion actions are set as Primary and bidding-eligible; Target ROAS is optimising towards the micro-event.
- **New PMax "051126_Pmax_AssetsOnly"**: ₹24.9k, 92k clicks, CTR 11.9%, CPC ₹0.27, 1.28L "conversions" with value equal to count. Same micro-event inflation and display/video-style traffic. Immediate review; excluded from my totals.
- Meta D2C: one KitchenSinks week with ₹3.3L from 12 purchases (prev week). Reconcile against Shopify orders before it is quoted anywhere.
- Meta Lead Gen: landing page views are near zero by design (Instant Forms), so click quality can only be judged by lead rate. Leads per click fell 2.9% to 1.6%. CTWA (WhatsApp) campaign "231026_CTWA_KOCO": ₹14.2k, 2,954 clicks, no lead events recorded. Confirm that conversation starts are tracked and fed to the CRM, or the campaign cannot be evaluated.
- KDX (paused) shows 1,018 conversions on ₹5.5k from 245 clicks (prev week) and 141 on 65 clicks last week: impossible, another micro-event or misfire. Keep paused and exclude from every report.
- Data required: GA4 e-commerce and Shopify orders to reconcile Google (160 core conversions) and Meta (250 purchases) against actual orders; dialer QL by campaign for LG.

---

## 6. Bidding and Optimization Strategy

- Google D2C: all PMax/Shopping/Search run Maximize Conversion Value without a ROAS target; Demand Gen runs Target ROAS on a micro-event. Once the conversion-action issue is fixed, set a tROAS on Shopping_Brand (start at about 70% of trailing ROAS, i.e. about 2.4) and keep PMax NonBrand on Max Conversion Value with a daily budget floor of ₹3,000, not ₹1,000, so it exits the learning limit.
- Structure: split Shopping by margin/AOV tier (premium vs low-ticket) so budget follows value, not volume. Separate branded from non-branded PMax with brand exclusions to stop PMax cannibalising Brand Search.
- Meta LG: optimise Instant Forms to Leads today. Move PanIndia FullBathroom to a higher-intent form (or "Conversion Leads" optimisation if CRM feedback via Conversions API is available) so Meta optimises for QL-like events, not form fills.
- Meta D2C: prospecting at or under 1.0 ROAS should move from "Highest volume" to "Cost cap" or a minimum ROAS floor (start 1.3) on KitchenSinks, PLP and Low AOV.

---

## 7. Platform-Specific Insights

**Meta**
- Learning phase: Gujarat, NorthEast, Karnataka, Kerala and UPNorth1 changed budget by 2-6x; assume learning-limited with unstable CPL. Hold budgets for 7 days after each change.
- Saturation: DPA reach is only 23-28k; Lead Gen state audiences are small.
- Structure: 23 Lead Gen ad sets/campaigns, 20 of them state-level at sub-₹25k a week. Too fragmented for the algorithm; consolidate the weak ones (ROM1+ROM2, UPNorth1+UPNorth2, NorthEast+Guwahati, Chandigarh into UP West or NCR) so each has enough volume (30+ leads a week).

**Google**
- Impression share: Brand Search 88%; new Shopping_Brand 22% with 70.6% lost to budget; Shopping General 23% with 60.8% lost to budget; PMax BoldDays KitchenFaucet 12% (57.8% budget lost) but zero conversions; PMax lines on ₹1,000-1,500 budgets lose mostly on rank (37-51%), meaning poor ad strength or feed quality, not budget.
- Search terms, assets, audience signals: not pulled. Required before judging keyword intent and asset quality.

---

## 8. Action Plan

### Priority 1: Immediate (today)

| # | Issue | Root cause hypothesis | Action | Expected impact |
|---|---|---|---|---|
| 1 | Google PMax AssetsOnly spending ₹5k a day on 0.27 CPC clicks with micro-event conversions | New campaign built on asset-only inventory, bidding to a soft conversion | Pause or cut to ₹500 a day; audit Primary conversion actions | Saves about ₹25k a week of unverifiable spend |
| 2 | Google PMax BoldDays KitchenFaucet: ₹20.8k, 14k clicks, zero conversions | Display-heavy PMax with no purchase signal | Pause; relaunch only with feed and a brand exclusion | Saves about ₹20k a week |
| 3 | Meta LG: Gujarat, NorthEast, Karnataka CPL up 2-3x after 3-6x budget jumps | Scaled small pools too fast, back in learning | Return to prior budgets; no more than +20% a week | Brings these states back toward ₹350-450 CPL |
| 4 | Meta LG: Chandigarh, ROM1, ROM2, Kerala, UPNorth1, Guwahati CPL ₹640-1,210 | Weak markets, thin pools | Pause Kerala and UPNorth1; cap the rest at floor budget | Frees about ₹60-70k a week |
| 5 | Meta D2C: PLP MaxVolume and KitchenSinks ROAS 0.34 and 0.51 on ₹84k | Volume bidding buying cheap, low-ticket orders | Cut each 50%, shift to DPA and High AOV | Lifts blended D2C ROAS 0.1-0.2 |
| 6 | Demand Gen Target ROAS optimising a micro-event | Wrong Primary conversion action | Hold Demand Gen budget at last week's level, review conversion actions | Stops spend growth on unmeasurable volume |

### Priority 2: Optimization (this week)

| # | Issue | Root cause | Action | Expected impact |
|---|---|---|---|---|
| 7 | Shopping_Brand limited by budget (70.6% lost), ROAS 3.44 | Budget ₹15k too low for demand | Raise 20% now, again in 3 days if ROAS above 3 | +₹40-60k value a week |
| 8 | PanIndia Toilet scales cleanly (CPL ₹408) | Tighter intent, focused creative | +15-20% a week for 2 weeks | +60-80 leads a week at about ₹410-450 |
| 9 | PanIndia FullBathroom: clicks +122%, leads +5% | Creative or placement drift to cheap clicks | Pull ad-level and placement data; pause ads with leads per click under 1.5%; test placement exclusion of Audience Network | CPL toward ₹520 |
| 10 | Fragmented state campaigns | Too little volume per ad set | Consolidate as in Section 7 | Fewer learning resets, steadier CPL |
| 11 | DPA saturation (about 12 impressions per person) | Small pool, high frequency | Add frequency cap, high-AOV product set, 7-day and 14-day split | Protects the best ROAS line |
| 12 | Meta D2C outlier (₹3.3L from 12 orders) | Possible bad value event | Reconcile with Shopify, correct reporting | Clean ROAS baseline |
| 13 | CTWA campaign has no lead event | Conversation tracking not wired | Confirm WhatsApp events and CRM routing | Makes the campaign evaluable |

### Priority 3: Experiments (2-4 weeks)

| # | Issue | Root cause | Action | Expected impact |
|---|---|---|---|---|
| 14 | LG lead quality unknown | Instant Forms low friction | A/B high-intent form vs volume form, judged on CPQL | Cheaper QL even if CPL rises |
| 15 | D2C AOV falling | Low-ticket category campaigns drive orders | Premium-only catalogue sets, builder/architect audiences, value-based lookalike on orders above ₹5k | AOV back above ₹3,000 |
| 16 | Google PMax mixed intent | Brand, non-brand and categories overlap | Split brand-excluded non-brand PMax by Toilet, Faucet and Sink with ₹3k+ budgets | Cleaner learnings, less cannibalisation |
| 17 | Meta LG bidding | Optimising for form fills | Conversions API feedback of QL to Meta, test "Conversion Leads" optimisation | Higher-quality lead mix |
| 18 | State consolidation | Thin pools | Regional clusters (North, East, West, Central) vs individual states | Lower CPL variance |

---

## 9. Client Communication Summary (draft, vendor names stripped, needs Utkarsh or Sameer sign-off)

**Key wins**
- Google D2C returned 2.05x ROAS (from 1.78x) and cost per order fell 29% after the 10-11 Nov Shopping restructure; the new brand Shopping campaign is at 3.4x.
- PanIndia Toilet leads grew 20% (471 vs 391) at a steady cost per lead of about ₹408.
- Orders on Meta D2C rose 36% at a 25% lower cost per order.

**Key concerns**
- Lead Gen cost per lead rose to ₹557 (from ₹521 a week earlier and ₹454 two weeks ago). Raising state budgets by large steps pushed several states into higher cost. We have rolled these back to controlled steps.
- Average order value on Meta D2C fell, so return on spend dropped even as orders rose. Low-ticket category campaigns are being cut back.
- Two Google campaigns and one Demand Gen setup counted low-value events as conversions; we are correcting the conversion setup.

**Actions taken or recommended (pending approval for budget changes)**
- Pause the two zero-return Google campaigns; scale brand Shopping in 20% steps.
- Hold and rebalance state budgets; consolidate weak states.
- Cut low-return D2C category campaigns and move spend to remarketing and high-order-value products.

**Strategic next steps**
- Overlay lead quality (QL) by campaign before the next Lead Gen budget decision.
- Test a higher-intent Lead Gen form and a premium-only D2C catalogue.
- Reconcile D2C revenue against Shopify orders for the weekly report.

---
Sources: Windsor pulls for Meta account 1542147597124356 and Google Ads 924-290-7329, 2-15 Nov 2026. All week-on-week math computed from those pulls. No benchmarks used.
