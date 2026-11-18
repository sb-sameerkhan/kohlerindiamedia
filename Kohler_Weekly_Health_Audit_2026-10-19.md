# Kohler India: Weekly Paid Media Health Audit

**Run date:** Mon 19 Oct 2026 | **Latest 7 days:** 12–18 Oct | **Previous 7 days:** 5–11 Oct
**Source:** Windsor.ai, Meta Ads account 1542147597124356 (campaign, ad set, ad and placement level). All figures in ₹. Attribution as reported by Meta (Windsor default window). Internal document. Vendor names to be stripped before any client version.

> ⚠️ **Google Ads: Data not available.** Account 924-290-7329 is not connected in Windsor. The connected Google Ads accounts are Forevermark, Concorde Mayfair, Concorde Sienna and Glen Appliances. Nothing in Google Ads is audited this week. Reconnect at https://onboard.windsor.ai?datasource=google_ads and Sections 7 (Google), plus the Google halves of 1, 2, 5 and 6, can be completed on the next run.

> Confidence note: lead counts and purchases below are Meta-reported. Lead quality (QL/SQL) and Shopify order data were not available, so "efficient" here means cheap, not proven good. Revenue and ROAS are Meta-reported purchase value.

---

## 1. Overall Account Health (Meta)

**Verdict: Needs Attention.** D2C improved on efficiency. Lead Gen is flat-to-slightly worse and carries a large structural inefficiency. A funnel-leak signal on D2C landing pages needs checking.

### D2C (OUTCOME_SALES)

| Metric | Prev 7d | Last 7d | Change |
|---|---|---|---|
| Spend | 7,33,271 | 6,14,123 | -16.2% |
| Impressions | 14.40M | 15.42M | +7.1% |
| Link clicks | 96,408 | 79,876 | -17.1% |
| Link CTR | 0.67% | 0.52% | -0.15 pts |
| CPC (link) | 7.61 | 7.69 | +1% |
| CPM | 50.9 | 39.8 | -21.8% |
| Landing page views | 26,265 | 14,330 | -45.4% |
| LPV / link click | 27% | 18% | -9 pts |
| Purchases | 194 | 225 | +16.0% |
| CPA | 3,780 | 2,729 | -27.8% |
| Purchase value | 10,35,182 | 12,45,536 | +20.3% |
| ROAS | 1.41 | 2.03 | +44% |
| Click-to-purchase rate (link clicks) | 0.20% | 0.28% | up |

Why: spend moved out of expensive, low-return ad sets (Kitchen Faucets Low AOV, BoldDays, Lookalike) and into cheaper-CPM broad delivery (KitchenSinks, Showering, which both ran at roughly ₹27–34 CPM). Cheaper reach plus a strong remarketing week lifted purchases while spend fell.

The concern is the landing page view drop. Link clicks fell 17%, but landing page views fell 45%. Fewer than one in five clicks now registers a page load, versus more than one in four last week. Either the page is slow or failing for Meta in-app traffic, the pixel is firing late, or the click mix has moved to more accidental-click placements. Purchases still rose, so this is not a tracking blackout, but it is a leak worth fixing.

### Lead Generation (OUTCOME_LEADS, Instant Forms)

| Metric | Prev 7d | Last 7d | Change |
|---|---|---|---|
| Spend | 14,80,287 | 13,22,305 | -10.7% |
| Impressions | 9.96M | 8.74M | -12.2% |
| Link clicks | 66,035 | 84,585 | +28.1% |
| Link CTR | 0.66% | 0.97% | +0.31 pts |
| CPC (link) | 22.42 | 15.63 | -30.3% |
| CPM | 148.6 | 151.2 | +1.8% |
| Leads | 2,704 | 2,341 | -13.4% |
| CPL | 547 | 565 | +3.2% |

Why: CTR and CPC improved sharply but leads fell more than spend. Higher clicks did not turn into more form submissions. That points to a form-completion or lead-quality-of-click issue, not a creative-attraction issue. Link clicks on Instant Forms are not a useful success metric here. Leads per ₹1 lakh spent fell from 183 to 177.

### Outside scope but material: Engagement post-boosting
Spend rose from ₹10.9k to ₹84.8k week on week (about 8x) across 25+ post-boost campaigns. Several carry link CTR of 0.01–0.02% at CPM ₹8–10 (Audience Network and low-quality placements). Flagged because it competes for the same account budget and looks unplanned. Confirm that this is an approved brand-art push.

---

## 2. Campaign & Budget Efficiency

### Lead Gen: spend is going the wrong way

| Campaign | Prev spend | Last spend | Prev CPL | Last CPL | Read |
|---|---|---|---|---|---|
| PanIndia InstantForms | 6.00L | 6.25L | 624 | 677 | 47% of lead spend. CPL +8.5%. Largest drag. |
| South InstantForms | 3.35L | 2.22L | 628 | 619 | Spend -34%, CPL flat at a high level. |
| PanIndia Toilet | 1.45L | 1.48L | 401 | 413 | Stable and better than the average. |
| WB | 24.1k | 26.6k | 162 | 167 | Best CPL in the account. Check lead quality first. |
| ROM1 | 17.9k | 9.7k | 459 | 325 | Cheap, but budget was cut in half. |
| NCR | 28.5k | 9.5k | 431 | 305 | Cheap, but budget was cut by two-thirds. |
| Gujarat | 26.8k | 10.1k | 406 | 347 | Cheap, but budget was cut by two-thirds. |
| TN | 25.3k | 21.0k | 378 | 637 | CPL +69%. Deteriorating. |
| Rajasthan | 9.9k | 18.4k | 619 | 971 | Spend nearly doubled while CPL worsened 57%. |
| Mumbai | 15.1k | 11.2k | 631 | 1,014 | CPL above ₹1,000. |
| AP&TS | 14.8k | 23.9k | 1,138 | 663 | Better, still above average, spend up 61%. |
| Kerala / Karnataka | 22.5k / 23.2k | 18.7k / 23.5k | 977 / 662 | 717 / 713 | High CPL, both in Learning Limited territory. |

Pattern: the states with the lowest CPL (WB, NCR, Gujarat, ROM1) lost budget this week while states above ₹700 gained or held it. The two PanIndia campaigns plus South absorb about 73% of lead spend at ₹620–680 CPL, against ₹305–350 in the best state campaigns. I am guessing the mix shift is from delivery, not planned reallocation. Check the campaign budget settings, since the daily budget field returned empty for these campaigns.

Reallocation: move about 20% of PanIndia and South spend (roughly ₹1.1–1.2L a week) to NCR, Gujarat, ROM1 and Toilet PanIndia, in steps no larger than 20% to avoid resetting learning. Do not raise WB until lead quality is confirmed (see Section 5).

### D2C

| Campaign | Prev spend / ROAS / CPA | Last spend / ROAS / CPA | Read |
|---|---|---|---|
| Remarketing AllProducts DPA | 38.1k / 11.48 / 2,933 | 42.5k / 8.64 / 1,465 | Best in account. CPA halved. Frequency 10.1 in 7 days, so the pool is the cap. |
| Lookalike AllProducts (paused) | 36.8k / 1.00 / 6,127 | 12.2k / 24.2 / 1,107 | Paused. 11 purchases only, ROAS looks like an outlier order. Do not scale off one week. |
| Prospecting KitchenSinks | 100.1k / 1.18 / 6,257 | 109.9k / 1.42 / 9,158 | Largest D2C spend. CPA +46%. Single video ad (Strive Single Bowl) drives it. |
| Prospecting KitchenFaucets High AOV | 238.1k / 1.22 / 2,835 | 191.8k / 0.85 / 2,398 | Cheaper CPA but ROAS under 1. Order value fell. |
| Prospecting Toilets | 135.5k / 0.68 / 4,106 | 92.0k / 0.47 / 2,141 | CPA good, ROAS 0.47. Order value looks too low (see Section 5). |
| CategoryPLP KitchenSink&Faucet MaxVol | 27.3k / 0.48 / 1,051 | 36.4k / 1.72 / 1,518 | Improving, now above average ROAS. |
| Showering | 19.7k / 1.26 / 3,280 | 38.4k / 1.71 / 4,801 | Doubled spend, ROAS up, CPA up. Still in Learning. |
| BoldDays | 40.6k / 0.00 (2 purchases, no value) / 20,300 | 31.4k / 1.43 / 3,492 | Recovered. Prior week shows 2 purchases with zero value (see Section 5). |
| Kitchen Faucets Low AOV | 74.7k / 0.06 / 24,900 | 45.5k / 1.08 / 6,494 | Still poor. |
| CategoryPLP MaxVal (paused) | 16.9k / 0.57 | 10.1k / 0.00 | Paused. Fine. |

Scaling opportunity: the DPA remarketing campaign. Cap issue is audience size, so scale by widening the pool, not by raising budget (Section 3).

Budget-constrained or inefficient: 16 ad sets show a "Learning Limited" failure status. They spent ₹2.62L in the 7 days (about 13% of total Meta spend, and 28% of D2C spend), including Toilet A+ High AOV (₹56.7k), Kitchen Faucets A+ PanIndia (₹45.5k), CategoryPLP Interests (₹36.4k), Toilet A+ Low AOV (₹30.9k) and six lead ad sets in AP&TS, Karnataka, UPNorth1, MPCG, Rajasthan and ROM2. These do not get 50 optimisation events a week, so Meta cannot optimise them.

---

## 3. Audience Performance & Saturation

- **DPA 180-day ATC pool is saturated on frequency.** 10.06 frequency in 7 days on ₹42.5k. It still converts (ROAS 8.64, CPA ₹1,465) but CPM is ₹276 and ROAS fell from 11.5. Expect decay if budget rises without a bigger pool. The ad set is named "180Days_ATC" while the ad is named "60Days_ATC", so confirm which window is live.
- **Prospecting frequency is healthy.** Lead Gen ad sets average about 1.4 and D2C prospecting 1.6 to 2.3 in the 7-day window. No prospecting saturation signal yet. KitchenFaucets A+ PanIndia is the highest at 2.11 and Showering A+ at 2.31.
- **Overlap risk is high on Lead Gen.** 20+ state campaigns run alongside two PanIndia campaigns and a South campaign, all with Interests, Lookalike and Advantage+ ad sets on the same FullBathroom form. PanIndia and South are bidding for users in the same states as the state campaigns. This inflates CPM and splits learning. I cannot confirm the overlap magnitude. Meta's audience overlap tool is needed.
- **Placement split on D2C is lopsided.** Facebook feeds returned ROAS 5.03 on ₹1.34L (71 purchases, CPA ₹1,889). Instagram returned ROAS 1.19 on ₹4.80L (154 purchases, CPA ₹3,117). Part of this is the DPA campaign, whose placement split I could not isolate, so verify at campaign × placement level before moving money.
- **Audiences to test:**
  1. 60-day Add-to-Cart and Initiate-Checkout exclusion-based layered pools, plus 30-day product-page viewers, to refill the DPA pool.
  2. Value-based lookalike (1–2%) off purchasers with order value above ₹15,000, in a clean campaign, since the paused Lookalike looked strong in one week.
  3. Lead Gen lookalike off qualified leads (QL) instead of raw leads, once CRM QL data is uploaded.
  4. Architect/designer and renovation-intent interest layers for Kitchen Sinks, where order values are high.

---

## 4. Creative Performance & Fatigue

**D2C top and bottom (7 days):**

| Ad | Spend | CTR | Purchases | ROAS | Read |
|---|---|---|---|---|---|
| Remarketing 60Days ATC FocusedProducts | 42.5k | 1.03% | 29 | 8.64 | Winner. |
| CategoryPLP Video | 36.4k | 0.50% | 24 | 1.72 | Best prospecting ROAS at scale. |
| Toilet ComplementaryHealthFaucet Video | 22.7k | 1.42% | 18 | 0.78 | Highest prospecting CTR. Low value. |
| KitchenFaucets Malleco Static | 41.5k | 0.43% | 29 | 1.13 | Average. |
| KitchenFaucets Emile PullDown GIF | 84.1k | 0.26% | 31 | 1.11 | Takes 2nd-largest spend on a 0.26% CTR. |
| KitchenSinks StriveSingleBowl Video | 109.9k | 0.53% | 12 | 1.42 | Largest spend, CPA ₹9,158. Poor return. |
| Faucets Atom PullDown Static | 28.2k | 0.18% | 6 | 0.28 | Cut. |
| Faucets Emile PullDown Video | 23.9k | 0.10% | 8 | 0.35 | Cut. |
| Showering Rainduet Static | 15.7k | 0.48% | 3 | 0.32 | Cut. |
| Toilet OveOnePiece Video | 56.7k | 0.72% | 19 | 0.34 | Low value, Learning Limited. |

Quality, engagement and conversion rankings were returned for only 9–13 of 106 ad rows, so ranking-based fatigue analysis is not reliable. Day-level CTR and CPM trends by ad were not pulled this run. Fatigue conclusion: no clear fatigue in prospecting from frequency, but the Strive Single Bowl video is consuming budget without returns, which looks like poor creative-to-audience fit more than fatigue.

**Lead Gen creative:** the two top PanIndia A+ creatives (Video, Static) cost ₹688 per lead at ₹1.0L and ₹0.9L spend. Static carries the highest CTR (1.75%) but the same CPL as Video, which tells me clicks are not the constraint. The best CPL ads are the A+ Carousel (₹542) and the Toilet Lookalike/Interest question forms (₹533–625). The A+ South "Others" ad is at ₹474.

**Creative tests to run:**
1. Kitchen Sinks: replace the single Strive video with a three-ad test: price-led (hero price + EMI), installation-led (before/after), and capacity-led (single vs double bowl). Hold audience constant.
2. Faucets: swap the GIF/static Emile and Atom creatives for a 15s Reel showing the pull-down in use, with price on screen.
3. Lead forms: test a higher-intent form with a budget or project-stage question ("Renovating in 3 months / 6+ months") against the current form, to lift lead quality, accepting a higher CPL.
4. Add Hindi and Tamil/Telugu/Bengali voiceover versions to the state campaigns. I could not confirm which languages are live.

---

## 5. Conversion Funnel & Tracking Health

- **Landing page view collapse (D2C).** LPV per link click fell from 27% to 18% while link clicks dropped 17% and LPV dropped 45%. Hypothesis: slower page load for Meta in-app browser traffic, or a pixel firing change, or the CTR/click mix shifting to Instagram Reels placements. Suspected, not confirmed. Check PageSpeed and Shopify analytics sessions for the same days.
- **Purchase value looks wrong on Toilets.** 43 purchases for ₹43k value works out to roughly ₹1,000 per order, which is far below the price of a Kohler toilet. Either the value parameter is being sent incorrectly for this product feed, orders are accessory-only, or the DPA/catalogue mapping is wrong. High confidence that this needs a tracking check before anyone judges Toilets on ROAS.
- **Zero-value purchases.** BoldDays had 2 purchases and ₹0 value in 5–11 Oct. Pixel or CAPI value was not passed on those events.
- **Lead Gen campaigns record purchases** (5 this week, ₹7.9k value). This is noise from the shared pixel and could pollute optimisation signals if any lead ad set optimises on a wider event.
- **Instant Form leads vs LPV.** Landing page views on lead campaigns are tiny (824), as expected for in-app forms. Judgement on lead quality has to come from CRM.
- **Lead drop vs clicks up.** Link clicks +28%, leads -13%. For Instant Forms, "link clicks" on creatives often means someone opened the profile or the form. If the form has an OTP step, drop-off at OTP may have risen. Data not available: form-level open-to-submit rate from Meta Lead Center, OTP success rate.
- **Data not available:** GA4 sessions for Kohler, Shopify order and AOV data, CAPI Event Match Quality, CRM QL/disposition status by campaign. The Kohler QL mapping and D2C tracker skills exist for this but need current CRM exports.

---

## 6. Bidding & Optimization Strategy

- Bid strategy, optimisation event and attribution window per ad set could not be pulled in this run (bid-strategy fields were not requested). **Data not available: ad set bid strategy and optimisation event.**
- 16 ad sets in Learning Limited is the main structural flag. The cause is fragmentation: 20+ lead state campaigns each with 2–4 ad sets of ₹5–25k a week, and D2C split into Interests, A+ and PLP ad sets per product line.
- **Lead Gen consolidation.** Merge the low-volume state campaigns into 4 regional campaigns (North, South, West, East+Central), with one A+ ad set and one Lookalike ad set each. Target at least 50 leads a week per ad set. This removes the PanIndia-vs-state overlap and gives Meta more volume to optimise.
- **Optimisation event for D2C.** Prospecting ad sets with under 10 purchases a week (Faucets Low AOV, Showering, Top40, BoldDays) should optimise for Add to Cart or Initiate Checkout until they cross 50 events, or be merged into the winning ad set.
- **Cost-cap test on DPA.** Because the pool is small and ROAS is above 8, set a ROAS floor (min ROAS bid) around 5 so that spend on repeat views past frequency 10 stops when ROAS drops. Treat as a test, since I do not have margin data to set the right floor.

---

## 7. Platform-Specific Insights

### Meta
- **Learning:** 65 ad-set rows Success, 23 Fail (16 unique ad sets, ₹2.62L spend), 7 Learning. Listed in Section 2.
- **Saturation:** only the DPA pool. Prospecting frequency is fine.
- **Creative fatigue:** not evidenced. Poor creative selection is the issue (Strive, Emile GIF, Atom, Emile video).
- **Structure:** over-fragmented. Naming convention is consistent and readable (date_Cheil_Kohler_Objective_Type_Audience), which helps. A date prefix such as 280426 sits on campaigns still running in October, so date prefixes cannot be used to judge age.
- **Placement:** Audience Network is spending on Engagement boosts (₹13.9k, CTR about 0.3% on 219,936 impressions). Exclude it from boosts.
- **Engagement boosts:** 25+ campaigns launched in the last two weeks. CPM ₹8 with CTR 0.01–0.02% on the 17 Oct batch looks like low-quality reach. Check whether paused boosts (14 Oct batch, 3 paused) were stopped for this reason.

### Google
> ⚠️ **Data not available.** Account 924-290-7329 is not accessible through Windsor. Needed on the next run: campaign-level performance, search terms report, impression share (lost to budget / rank), asset-level performance, audience signals, bid strategy and conversion actions. No Google conclusions are drawn.

---

## 8. Action Plan

### Priority 1: Immediate (today)

| # | Issue | Root-cause hypothesis | Action | Expected impact |
|---|---|---|---|---|
| 1 | D2C LPV per link click fell from 27% to 18% | Slow page for in-app traffic, pixel timing, or placement mix change (suspected) | Run PageSpeed on the top 3 landing URLs on mobile. Compare Shopify sessions with Meta link clicks for 5–18 Oct. Check pixel fire timing in Events Manager. | Recovers part of the 45% LPV drop. Even +5 pts of LPV rate adds roughly 4,000 more page views a week at the same spend. |
| 2 | Toilet purchase value about ₹1,000 per order; BoldDays zero-value purchases | Value parameter or catalogue mapping error | Test-order or inspect the purchase event payload on the Toilet and BoldDays flows. Fix the value field. | Makes ROAS usable. Avoids cutting or scaling Toilets on wrong data. |
| 3 | Lead spend rising in the worst CPL states | Budget moving by delivery, not plan | Cut Rajasthan (CPL ₹971) and Mumbai (₹1,014) by 30–40%. Cap TN until CPL returns near ₹400. Raise NCR, Gujarat and ROM1 by 20%. | Moves about ₹40–50k a week to ₹305–350 CPL territory, roughly +50 leads a week at the same spend. Estimate, not a forecast. |
| 4 | Engagement boosts up 8x | Unplanned or unmanaged boosts | Confirm approval. Remove Audience Network from boosts. Pause the 17 Oct batch ad sets with CTR under 0.05% (AtIndiaDesign, Wherecraftsmanship, ArtTakesForm, Cubix, Avan, Tejomaya, ArtistEditions). | Saves roughly ₹15–18k a week. |
| 5 | Google Ads not audited | Account 924-290-7329 not authorised in Windsor | Reconnect it via the Windsor link. | Enables full audit next week. |

### Priority 2: Optimisation (this week)

| # | Issue | Root-cause hypothesis | Action | Expected impact |
|---|---|---|---|---|
| 6 | 16 ad sets Learning Limited (₹2.62L) | Budget split too thin | Merge Toilet A+ High and Low AOV into one ad set. Fold Faucets A+ PanIndia and CategoryPLP Interests into KitchenFaucets High AOV A+. Combine AP&TS, Karnataka, Kerala, Rajasthan, MPCG, ROM2 lead ad sets into regional ad sets. | Faster learning, lower CPM variance. Typical gain is a CPA reduction of 10–20% once exited from Learning Limited (industry rule of thumb, verify on this account). |
| 7 | Strive Single Bowl video: ₹1.1L, CPA ₹9,158 | Weak creative-to-audience fit | Cap at ₹60k a week. Launch two new Sink creatives (price+EMI, install before/after). Move the saving to CategoryPLP (ROAS 1.72). | Targets CPA under ₹5,000 on Sinks. |
| 8 | Weak faucet/shower ads (Atom 0.28, Emile video 0.35, Rainduet 0.32) | Low CTR, low ROAS | Pause these three. Shift budget to Emile GIF only if CPA stays below ₹3,500, otherwise replace with a Reel. | Saves about ₹68k a week of low-return spend. |
| 9 | DPA frequency 10, pool-capped | Small 180/60-day ATC pool | Add IC 30d, product-page viewers 30d, IG engagers 60d. Keep a 7-day purchaser exclusion. Hold budget flat until pool grows. | Keeps ROAS above 6 while scaling 30–50%. |
| 10 | Lead quality unknown | No QL feedback to Meta | Pull QL status for 12–18 Oct leads by campaign using the Kohler QL mapping workflow. Rank states by CPQL, not CPL. Do not scale WB until this is done. | Stops optimising toward cheap, low-intent leads. |
| 11 | Lookalike AllProducts paused after a ROAS 24 week | One-week outlier | Reactivate at ₹1,500 a day for 7 days with a value-based seed, and judge on 20+ purchases. | Tests a possible second efficient prospecting lane. |

### Priority 3: Experiments (next 2–4 weeks)

| # | Test | Hypothesis | Success metric |
|---|---|---|---|
| 12 | Lead form A/B: current form vs project-stage + budget question form | Higher friction cuts volume but lifts QL rate | CPQL, not CPL |
| 13 | Regional consolidation of state lead campaigns into 4 clusters | Less overlap, faster learning | CPL down 10%+, Learning Limited ad sets to under 5 |
| 14 | Value-based lookalike from purchasers above ₹15k | Lifts AOV on prospecting | ROAS above 2.5 on 20+ purchases |
| 15 | Facebook-only vs Instagram-only D2C prospecting ad sets | Facebook ROAS 5.0 vs Instagram 1.2 may be real or may be DPA skew | ROAS per placement with DPA excluded |
| 16 | Regional-language creative cuts (Tamil, Telugu, Bengali, Hindi) on top state campaigns | Native language lifts form completion | Form completion rate, CPL |
| 17 | Min-ROAS bid on DPA | Stops waste past saturation | ROAS holds above 6 at 1.3x spend |

---

## 9. Client Communication Summary (draft, human approval needed before sending)

**Key wins**
- D2C ROAS rose from 1.41 to 2.03 on lower spend. Purchases grew 16% to 225 and cost per purchase fell 28% to ₹2,729.
- Product remarketing returned ROAS 8.6 at ₹1,465 per purchase.
- Lead cost per click fell 30% and click-through rate rose from 0.66% to 0.97%.

**Key concerns**
- Lead volume fell 13% to 2,341, and cost per lead rose to ₹565. Spend is sitting in higher-cost states while lower-cost states lost budget.
- Fewer D2C visitors are reaching the product pages after clicking. We are checking page speed and tracking.
- Order value on some products is not recording correctly, which makes ROAS for those lines unreliable.

**Actions taken / recommended**
- Shift lead budget toward Delhi NCR, Gujarat and Madhya Pradesh/Chhattisgarh-adjacent lower-cost regions and the Toilet campaign, and trim the highest-cost cities.
- Pause the weakest product ads and rebuild kitchen sink creative.
- Fix the page load and purchase-value tracking.
- Widen the remarketing audience before scaling it.

**Strategic next steps**
- Add lead quality (qualified lead rate) as the optimisation yardstick, not cost per lead.
- Consolidate state campaigns into regional ones to cut overlap.
- Complete the Google Ads review once account access is restored.

---

*Open data gaps: Google Ads (not connected), CRM QL data, Shopify orders and AOV, GA4 sessions, bid strategy and optimisation event per ad set, ad-level daily trend data, audience overlap, CAPI Event Match Quality.*
