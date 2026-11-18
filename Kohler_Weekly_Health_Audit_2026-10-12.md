# Kohler India: Weekly Paid Media Health Audit

**Mode: Audit.** Window: last 7 days (Mon 5 Oct to Sun 11 Oct 2026) vs previous 7 days (28 Sep to 4 Oct). Accounts: Google Ads 924-290-7329, Meta Ads 1542147597124356. All money in ₹. Data pulled from the connected ad platforms on 12 Oct. Platform-reported numbers; no Shopify, GA4 or CRM data was available to cross-check, so ROAS and lead counts are platform-attributed. Verify before using externally.

## The short version

Spend went up about 45% across both platforms and efficiency fell on both objectives' paid-search/lead side. Three things matter most.

1. **Meta Lead Gen spend stepped up from about ₹0.8L/day to ₹2.0-2.7L/day on 2 Oct.** Leads rose 26% (2,141 to 2,704) but spend rose 41%, so CPL went ₹491 to ₹547. Before the step-up CPL ran about ₹350-400/day; after it, ₹460-620. The extra money buys leads at roughly ₹800+ each at the margin (my calculation from daily data).
2. **Google D2C (excluding Demand Gen) spent ₹4.84L then ₹7.75L (+60%) while ROAS fell from 3.54 to 2.26.** Shopping, Brand Search and the non-brand PMax campaigns all took more money at much worse returns.
3. **Google Demand Gen and the KDX Search campaign report 290k and 815 "conversions" on ₹1.6L and ₹7k.** These are not sales. They inflate account-level conversion counts and may be training bidding on junk signals. Fix the conversion setup before trusting any Google total.

Cause of the spend jump is not visible in the data. I'm guessing it is a deliberate pre-festive budget raise (Navratri starts about 11 Oct, Diwali about 8 Nov). Check the change history; if it was deliberate, the efficiency loss is the cost of scaling and needs a cap, not a panic.

## 1. Overall account health

| Metric | Google D2C (excl. Demand Gen, KDX) prev | Last | Meta D2C prev | Last | Meta Lead Gen prev | Last |
|---|---|---|---|---|---|---|
| Spend | ₹4.84L | ₹7.75L (+60%) | ₹6.88L | ₹7.33L (+7%) | ₹10.51L | ₹14.80L (+41%) |
| Impressions | 14.4L | 21.6L | 110.8L | 143.9L | 87.1L | 99.6L |
| Clicks | 48.8k | 56.2k | 114.8k | 137.8k | 109.9k | 85.3k (-22%) |
| CTR | 3.39% | 2.60% | 1.04% | 0.96% | 1.26% | 0.86% |
| CPC | ₹9.9 | ₹13.8 | ₹6.0 | ₹5.3 | ₹9.6 | ₹17.3 |
| CPM | n/a | n/a | ₹62 | ₹51 | ₹121 | ₹149 |
| Conversions | 179 orders | 161 | 178 purchases | 194 | 2,141 leads | 2,704 |
| CPA / CPL | ₹2,707 | ₹4,818 | ₹3,864 | ₹3,779 | ₹491 CPL | ₹547 CPL |
| ROAS | 3.54 | 2.26 | 1.12 | 1.41 | n/a | n/a |

Not in the table: Meta "Other" campaigns (Mega Auction, post boosting, ₹2.94L prev, ₹0.11L last). The Mega Auction campaign ended, so total Meta spend (₹20.3L to ₹22.2L) hides a bigger underlying jump in always-on campaigns.

What the shifts say. Google D2C is the clear decline: more spend, fewer orders, CPC up 39% and CTR down 23%. That pattern means the extra budget is reaching colder, costlier clicks. Meta D2C is the one improvement: purchases up 9% and ROAS up from 1.12 to 1.41 on a cheaper CPM, but 1.41 is thin and concentrated in a few campaigns (section 2). Meta Lead Gen is buying more reach (impressions +14%) with fewer clicks (-22%), meaning the creative is being shown to people who engage less. Clicks per lead are not the issue; the lead form converts. The top of the funnel is getting weaker.

## 2. Campaign and budget efficiency

### Lead Generation (Meta)

PanIndia InstantForms (060226) takes 41% of lead spend: ₹6.0L, 962 leads, CPL ₹624 vs ₹514 prior (+21%). South InstantForms: ₹3.35L, 533 leads, CPL ₹628 vs ₹566. Together these two carry 63% of spend at the account's worst CPLs among scaled campaigns.

Efficient and under-funded: PanIndia Toilet InstantForms (160426) ₹1.45L, 361 leads, CPL ₹401 (prev ₹316, spend doubled, so some of the rise is scaling). WB at ₹24k and 149 leads (CPL ₹162), TN ₹378, Gujarat ₹406, NCR ₹431, UP East ₹453, JOB ₹452. WB leads doubled on twice the spend with CPL barely moving (₹140 to ₹162). That is the clearest scaling signal in the account.

Inefficient or fading: AP&TS CPL ₹1,138, Kerala ₹977, NorthEast ₹879 (up from ₹655), UP North2 ₹834, UP North1 ₹794, Chandigarh ₹540 on collapsing spend. Rajasthan, ROM2 and Chandigarh lost 50-65% of impressions week on week, which usually means the ad sets fell out of delivery or hit learning resets, not a demand drop. Confirm in Ads Manager.

Reallocation suggestion: pull about ₹40-50k/day (roughly a quarter of the post-2 Oct step-up) from PanIndia FullBathroom and South FullBathroom ads into WB, TN, Gujarat, NCR and the PanIndia Toilet campaign, in steps of 15-20% a day so the ad sets stay out of learning.

### D2C (Meta)

| Campaign | Spend | Purchases | ROAS | Read |
|---|---|---|---|---|
| High AOV Kitchen Faucets (140926) | ₹2.38L | 84 | 1.22 | Biggest budget, mediocre return. Carried by one creative (below). |
| Kitchen Sinks (280426) | ₹1.00L | 16 | 1.18 | Spend cut 41%, purchases cut 60%. CPA ₹6,256 vs ₹4,214. |
| Toilets (070426) | ₹1.35L | 33 | 0.68 | Flat orders, rising spend. Below break-even on any sensible margin (margin not provided). |
| Low AOV Kitchen Faucets (100326) | ₹75k | 3 | 0.06 | Was 16 purchases and ROAS 1.37. Collapsed. |
| Remarketing DPA (120326) | ₹38k | 13 | 11.5 | Looks great, but 13 orders producing ₹4.38L (₹33k per order) points to a few large baskets. Do not extrapolate. |
| Lookalike All Products | ₹37k | 6 | 1.00 | Was 2.75. |
| BoldDays (050626) | ₹41k | 2 | ~0 | New this week, reach-heavy (1.16M impressions), almost no sales. |
| CategoryPLP MaxVolume (250926) | ₹27k | 26 | 0.48 | 26 purchases worth ₹13k total (₹508 each). The campaign is optimising to cheap accessories. |
| CategoryPLP MaxValue (060626) | ₹17k | 3 | 0.57 | Was 5.51 on 5 purchases. Tiny sample. |

### D2C (Google)

| Campaign | Spend prev to last | ROAS prev to last | Note |
|---|---|---|---|
| Shopping, All Products | ₹0.87L to ₹1.99L | 5.02 to 2.69 | Spend +128%, orders +11%. CPA ₹1,654 to ₹3,384. |
| Brand Search | ₹1.98L to ₹2.83L | 4.40 to 3.03 | Orders fell 59.7 to 51 on 43% more spend. Impression share 77%, 13% lost to budget, 10% to rank. |
| PMax Focus Products Non-Brand | ₹0.37L to ₹0.72L | 2.40 to 1.07 | Spend nearly doubled. CPA ₹6,018. |
| PMax Bidet | ₹0.76L to ₹1.18L | 1.90 to 0.66 | CPA ₹7,053. 61% of lost impression share is rank. |
| PMax Toilet Feed-Only | ₹0.18L to ₹0.24L | 4.89 to 1.90 | Orders halved. |
| PMax Toilet Area Combos | ₹0.43L to ₹0.26L | 0.21 to 0.08 | About 2 orders on ₹69k over two weeks. CPA ₹32k. |
| PMax Health Faucet | ₹6.6k to ₹20.7k | 5.27 to 5.45 | Best performer, 59% of impression share lost to budget. Scale it. |
| PMax Kitchen Faucet | ₹13.6k to ₹7.7k | 2.64 to 1.18 | |
| PMax BoldDays Kitchen Faucet | new, ₹23k | 1.63 | 4 days of data. 79% of lost share is rank, so bids or quality are the limit. |
| Demand Gen (6 campaigns) | ₹1.46L to ₹1.60L | not usable | See section 5. |

Budget pattern: money moved into the broad, high-reach Google campaigns (Shopping, non-brand PMax, Bidet PMax) that convert at about half the prior rate, while the one campaign with proven return and unmet demand (Health Faucet) got ₹20k. That is where to fix allocation first.

## 3. Audience performance and saturation

Limit of this review: I did not pull ad-set or audience-level breakdowns, only campaign and ad data. Audience type appears in Meta ad names (AdvantagePlus, Interests, Lookalikes), so I read it from there. Platform frequency cannot be summed across days from the data I have, so frequency below is impressions divided by reach per ad over the 7 days.

PanIndia FullBathroom ads show near-identical CPL regardless of audience: AdvantagePlus Video ₹596, Lookalike Video ₹612, Interests Carousel ₹603, Lookalike Static ₹652. Audience type is not what separates results in this campaign. Creative and offer are. Don't spend the next two weeks rebuilding audiences.

Frequency is low everywhere on prospecting (1.1 to 2.5), so audience saturation is not the problem for Lead Gen. Two exceptions. The 60-day add-to-cart remarketing ad ran at a frequency of 10.0 (142.6k impressions on 14.2k people). The pool is small, so cap frequency and expect the ROAS to fall as the pool exhausts. The Malleco pull-down static reached 1.32M people at frequency 2.5 with CTR 0.6% and ROAS 0.58.

Lead Gen click drop with rising CPM (₹121 to ₹149) matches a wider audience getting more expensive after the budget step-up, not saturation. Overlap risk is real: 20+ geo ad sets plus two PanIndia ad sets (Full Bathroom and Toilet) all target overlapping states. I can't measure overlap from this data; run Meta's audience overlap tool on PanIndia vs South vs UP-region ad sets.

Tests to run:

1. A PanIndia exclusion test: exclude the 8 best-CPL states (WB, TN, Gujarat, NCR, UP East, UP West, MPCG, Karnataka) from PanIndia so it only buys the remaining states, and fund the state ad sets instead. This isolates whether PanIndia's CPL is inflated by competing with your own geo ad sets.
2. A customer-list lookalike (past buyers, past qualified leads from the CRM) at 1% for D2C High AOV. Current D2C lookalikes seem to be built on site visitors; ROAS on the Lookalike All Products campaign fell from 2.75 to 1.00.
3. A Google audience signal for Health Faucet PMax using buyers and cart abandoners from the last 90 days.

## 4. Creative performance and fatigue

### Lead Gen

Product-led creatives beat the FullBathroom concept in the same campaign. In South: Anthem Static (AdvPlus) CPL ₹363, Sveda Video Interests ₹513, against FullBathroom Carousel AdvPlus ₹618, FullBathroom Static Interests ₹921, FullBathroom Video AdvPlus ₹1,267 and FullBathroom Lookalike Video ₹1,432. In PanIndia Toilet: Anthem Static ₹243, Anthem Video ₹247, Sveda Video ₹280-283, against IntelligentToilets Carousel ₹585-839. Anthem and Sveda are the winners; IntelligentToilets carousel is the weak one in a campaign that otherwise works.

PanIndia FullBathroom top spender, the AdvPlus Video_3 ad, spent ₹1.53L for 257 leads at ₹596. It gets 3x the spend of any other ad and sits at the campaign average, so it is not an outlier winner. It is where the algorithm parks budget.

Fatigue signals: Lead Gen CTR fell from 1.26% to 0.86% and CPM rose 23% while frequency stayed low. That points to creative that is wearing out with the audience it reaches first, not over-exposure. Most live FullBathroom ads carry IDs of 070826 and earlier, now 9 or more weeks old. I can't see ad-level history to confirm; check week-by-week CTR on those ads.

### D2C Meta

Best: Emile PullDown GIF (High AOV), ₹76k, 36 purchases, ROAS 2.15, CPA ₹2,110. Emile Video: ROAS 1.54. Sink Strive Single Bowl video: 16 purchases, ROAS 1.18 on ₹1.0L.

Worst: Malleco static (₹62.6k, ROAS 0.58, 3.28M impressions); Malleco video (₹29k, 2 purchases, ₹214 value, almost certainly a value-tracking fault, see section 5); Beam Kitchen Faucet Static (₹59.5k, no purchases); OVE One Piece toilet video (₹84.8k, 15 purchases, ROAS 0.60); BoldDays statics (₹41k, ROAS about 0).

### Creative tests (next 2-4 weeks)

1. Lead Gen: build 4 new ads on the Anthem and Sveda product-led concept (pricing-led hook, installation-and-warranty hook, before/after bathroom, 15-second UGC-style walk-through) for PanIndia FullBathroom and South. Keep the instant form identical so only the creative changes.
2. Lead Gen: replace the IntelligentToilets carousel with a single-product video of the toilet in use, since the carousel runs CPL 2-3x the Anthem/Sveda ads in the same campaign.
3. D2C: build three more GIF/short-loop variants of the Emile pull-down that won (spec close-up, retractable spray demo, price-and-EMI frame). Pause Malleco static and Beam static.
4. D2C: for the Toilet campaign, test a bidet-seat and health-faucet bundle ad. ComplementaryHealthFaucet video returned ₹32k on ₹18.9k (1.70 ROAS) against the 0.60 for the OVE video.

## 5. Conversion funnel and tracking health

1. **Google Demand Gen conversions are not sales.** Six campaigns record about 292k conversions on ₹1.6L, conversion value equals conversion count (₹1 each), CPC is ₹0.6 and CTR 7.6%. A conversion action with a flat ₹1 value (likely view-based or micro events counted as primary) is attached to these campaigns. Account-level Google conversions (293k vs 298k) are therefore meaningless. If Smart Bidding sees these as conversions, it optimises for cheap engaged clicks, and it may also be sharing signal with PMax and Shopping. Confirm in Conversions settings which action is primary.
2. **KDX Search records 815 conversions on ₹7.3k (ROAS 0.11).** It is clearly counting a non-sale event. Its 88% lost impression share to budget suggests it is a very small test with real demand. Decide what it is meant to drive and what event it should optimise for.
3. **Meta purchase value gaps.** Several purchase events carry no value or near-zero value: BoldDays Emile static (2 purchases, no value), Malleco video (2 purchases, ₹214), PanIndia Toilet lead ads (purchases that should not exist on a lead campaign). Check that the Meta pixel value parameter fires for every product type and that lead-objective campaigns are not credited with web purchases.
4. **Large-basket spikes.** Google "kohler india" search term shows 8.9 conversions worth ₹4.85L; Meta remarketing shows 13 purchases worth ₹4.38L. Either these were high-value orders or value is mis-attributed. Reconcile against Shopify orders for 5-11 Oct.
5. **Platform double counting.** Google clean value (₹17.5L) plus Meta D2C value (₹10.4L) is ₹27.9L against ₹15.1L spend. Both platforms claim overlapping orders. A Shopify total for the week is the only way to find the true blended ROAS. This is the biggest data gap.
6. **Lead quality is unmeasured here.** CPL says nothing about qualified leads. The Kohler QL data (dashboard/disposition) was not in the sources pulled for this run. Without it, shifting budget toward the cheapest-CPL states (WB, TN) could be shifting toward unqualified leads. Check QL rate by state and by creative before committing to the reallocation above.
7. **Traffic quality vs conversion.** Meta D2C clicks rose 20% and CTR is stable, yet purchases rose 9%. Click-to-purchase worked, so landing pages are not the problem here. On Google, the CTR fall plus CPC rise points to auction pressure and broad matching, not the site.

## 6. Bidding and optimisation strategy

Bidding strategy types and target ROAS/CPA values were not retrieved in this run. I'm guessing PMax and Shopping run on Maximise Conversion Value, possibly with a target ROAS, given how quickly spend scaled. If so, a budget increase without raising the target tends to loosen delivery into lower-quality traffic, which matches what happened. Check:

1. Whether Shopping and non-brand PMax have a target ROAS, and whether it was loosened or removed around 2 Oct.
2. Whether Brand Search is on Target Impression Share or Max Conversions. A 43% spend rise for fewer orders on Brand suggests competitors are bidding on the Kohler name, or that Brand is being used as a catch-all for retargeting. Add brand exclusions to non-brand PMax so Brand Search and PMax do not compete.
3. Meta Lead Gen: ad sets optimise for the instant-form lead event. Many geo ad sets have under 50 leads a week, below Meta's usual threshold for stable learning. Consolidate the 12 smallest state ad sets into 3 regional ad sets (for example North, East+NE, Central), keeping WB, TN, Gujarat and NCR separate because they are efficient.
4. Meta D2C: the CategoryPLP MaxVolume campaign is optimising for count and producing ₹508 orders. Move budget to MaxValue with a minimum ROAS floor, or switch the event to purchases over a value threshold.

## 7. Platform-specific insights

### Meta

Learning: the Oct 2 step-up (₹0.85L to ₹2.5L on a day with CPL ₹1,221) is a textbook learning-reset spike. Doubling or tripling budgets in one move on many ad sets resets learning. CPL did not settle back to the pre-step level in the following nine days. Always scale in steps no larger than 20%.

Structure: 22 geo ad sets and two PanIndia ad sets is over-fragmented for a ₹15L/week lead budget. Consolidate as in section 6.

Creative fatigue: see section 4. Audience saturation: not present (frequency 1.1-2.5) except the retargeting pool.

### Google

Search term quality: Brand Search spent ₹86.7k on "kohler" and ₹20.3k on "kohler india" (both converting), but also ₹4.3k on "kohler co" and "kohler in" with no orders. Small waste, worth negating. I could only see terms above ₹1,500 spend; non-brand and PMax search categories are not visible in this pull, so I cannot judge non-brand keyword intent. PMax search term insights and the Generic Search campaign (₹1.2k, no conversions, 78% impression share lost to rank) need a manual review in the interface.

Impression share: Brand 77% (13% lost to budget, 10% to rank). Health Faucet PMax 13% share, 59% lost to budget. Bidet PMax 39% share, 61% lost to rank. Kitchen Faucet PMax 29% share, 66% to rank. Toilet Combos 15%, with 48% lost to budget and 40% to rank, yet it converts at ₹32k per order, so more budget would only waste more.

Asset and audience signal performance by asset group was not pulled; this needs the interface or an asset-level report.

## 8. Action plan

### Priority 1: do today

| # | Issue | Root cause hypothesis | Action | Expected impact |
|---|---|---|---|---|
| 1 | PMax Toilet Area Combos: ₹69k over 2 weeks for about 2 orders | Creative+feed asset group is serving to broad queries with no purchase intent | Pause it | Saves about ₹3.5-3.8k/day |
| 2 | Meta Low AOV Kitchen Faucets: 3 purchases on ₹75k, ROAS 0.06; no purchases from Beam static | Creative and audience exhausted after prior strong week; single dominant static | Pause the Beam static and cut campaign budget by 60%; keep one new creative live | Saves about ₹6k/day, removes a clear ROAS drag |
| 3 | Google Demand Gen and KDX conversion actions (see section 5) | A micro or view-based event is set as primary conversion | Set those conversion actions to secondary; confirm no other campaigns use them as primary | Cleans bidding signal; stops reporting from showing 290k fake conversions |
| 4 | Google Shopping All Products and non-brand PMax Focus: spend doubled, ROAS halved | Budget raised without a matching target ROAS rise | Return daily budgets to the 28 Sep to 4 Oct level and set target ROAS near the prior week's actual (about 4.5-5 on Shopping, 2.4 on PMax Focus) | Recovers roughly 40-50% of the efficiency loss; risk is lower volume, accept it until the cause is confirmed |
| 5 | Meta Lead Gen spend step-up on 2 Oct and CPL ₹350-400 to ₹520+ | Large one-step budget change reset learning and moved spend into costlier ad sets | Pull the PanIndia FullBathroom and South FullBathroom budgets down 15% today and again tomorrow, shift that to WB, TN, Gujarat, NCR and PanIndia Toilet | CPL back toward ₹450-480 (estimate); more leads from the same spend |
| 6 | Malleco pull-down static (ROAS 0.58) and OVE One Piece video (ROAS 0.60) on large budgets | Weak creative concepts at high reach | Pause both | Saves about ₹4-5k/day |

### Priority 2: this week

| # | Issue | Root cause hypothesis | Action | Expected impact |
|---|---|---|---|---|
| 7 | Health Faucet PMax budget-limited (59% share lost) at ROAS 5.45 | Daily budget too small for demand | Raise budget 20% every 2 days until lost-to-budget falls under 25%, to about ₹6-7k/day | An extra 8-12 orders a week at the current CPA (estimate, will fall as it scales) |
| 8 | Emile GIF creative is the only strong D2C Meta ad (ROAS 2.15) | Short-loop, spec-demo format suits this product | Duplicate it into the Low AOV and Kitchen Sinks campaigns with the same asset; build 3 variants | Lifts D2C blended ROAS toward 1.6-1.8 if it holds (estimate) |
| 9 | Brand Search cost per order rose 67% (₹3,317 to ₹5,539) | Competitor bids on the brand and PMax overlapping Brand | Check auction insights, add brand exclusions to PMax, negate "kohler co" and "kohler in" | Recovers the brand ROAS from 3.0 toward 4.0 |
| 10 | Shopify vs ad platform reconciliation | Both platforms claim the same orders | Pull Shopify orders and revenue for 28 Sep to 11 Oct; compute blended ROAS and a platform split | Gives the real efficiency number before more budget decisions |
| 11 | Lead quality unknown by state and creative | CPL used as the only lead metric | Pull QL rate by state and by creative from the Kohler CRM and compare with CPL | Prevents shifting budget into unqualified leads |
| 12 | Meta lead ad sets with falling delivery (Rajasthan, ROM2, Chandigarh, UP North1/2, AP&TS, Kerala) | Learning resets and small budgets | Merge the 8 weakest state ad sets into 2 regional ad sets | Fewer learning resets, CPL ₹800-1,100 states drop toward ₹550-650 (estimate) |
| 13 | Remarketing frequency 10 | Small ATC pool | Cap frequency in the ad set to 6 per 7 days and refresh the audience window to 30 days | Avoids the pool burning out before the festive window |

### Priority 3: experiments (2-4 weeks)

| # | Test | Why | Success measure |
|---|---|---|---|
| 14 | Product-led Anthem/Sveda creatives into FullBathroom campaigns | They beat FullBathroom concepts by 20-60% CPL where they run | CPL under ₹480 and no QL rate drop |
| 15 | PanIndia geo exclusion test | Checks whether PanIndia competes with own state ad sets | Combined CPL across state and PanIndia ad sets |
| 16 | Customer-list lookalike for D2C High AOV | Current lookalikes lost return (2.75 to 1.00) | ROAS above 1.6 on 7-day click attribution |
| 17 | Bundle ad (toilet plus health faucet) | ComplementaryHealthFaucet video returned ROAS 1.70 vs 0.60 on toilet-only video | AOV and ROAS vs the single-product ad |
| 18 | Standalone Search for high-intent non-brand terms (for example "wall hung toilet price", "kitchen faucet pull down") | Generic Search is starved (78% share lost to rank) and has no history | CPA below ₹3,000 over 3 weeks |
| 19 | Demand Gen: re-run on a purchase-optimised event once the conversion actions are fixed | Today's Demand Gen results can't be judged | CPA and incremental orders from the Shopify split |

## 9. Client communication summary

**Key wins.** Meta D2C return improved week on week (ROAS 1.12 to 1.41) with purchases up 9% on a cheaper CPM. The Emile pull-down GIF and the Health Faucet campaigns are delivering strong returns. West Bengal, Tamil Nadu and Gujarat lead campaigns are bringing in leads at ₹160-410 each. Lead volume grew 26% to 2,704 for the week.

**Key concerns.** Overall spend rose about 45% this week and efficiency did not follow. Meta Lead Gen cost per lead rose from ₹491 to ₹547 after a budget step-up. Google D2C return on ad spend fell from 3.5 to 2.3, driven by Shopping and non-brand Performance Max. A few campaigns (Toilet area combos, Low AOV Kitchen Faucets) are spending without producing orders. Some Google conversion reporting needs cleaning before we can trust it.

**Actions taken or recommended.** Pause the non-performing campaigns and creatives listed above, return Google budgets and targets to last week's levels, and move Meta Lead Gen budget from the highest-CPL campaigns to the best-performing states. Fix Google conversion tracking. Reconcile platform numbers against Shopify and lead quality against CRM data.

**Strategic next steps.** Scale in steps of 15-20% only. Roll the winning product-led lead creatives and the pull-down GIF format into more campaigns. Run a bundle offer and a customer-list lookalike test ahead of Diwali. Share a Shopify-reconciled ROAS and a lead-quality view by state at next week's review.

## Data gaps and caveats

- No Shopify or GA4 data: true blended ROAS and revenue are unknown.
- No CRM lead-quality data (QL, disposition) in this run.
- Bidding strategy types, targets and change history were not retrieved. The cause of the 2 Oct spend step-up is unconfirmed.
- No audience, ad-set or asset-group level breakdowns pulled. Audience read comes from ad names.
- Frequency is calculated per ad over 7 days; account-level weekly frequency is not available.
- 11 Oct figures may be partial. Platform-attributed conversions can still change for 1-7 days after the date.
