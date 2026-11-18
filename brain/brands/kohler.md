# Kohler — Brand Brain

Category: D2C (inferred; see §0). Built 2026-10-05 for the SB Media Brain. Internal operating memory. Not a client surface.

Tag key: [E] email-confirmed · [T] transcript or call notes, verify before external use · [V] verify, may have changed · [SB] self-reported by Social Beat · [DATA] from a client or SB data file · [calc] computed here from tagged inputs.

---

## 0. Why this client matters / the bar it sets

Kohler India buys media on two separate P&Ls. D2C sells bath and kitchen fittings on Kohler.com. Lead Gen collects renovation-intent enquiries that a call centre qualifies and a dealer or territory sales manager closes. [E: client intelligence doc, Jun 2026; Jul–Oct emails]

The category is premium and the client is numerate. Parul Tandon checks Social Beat data herself and treats AOP revenue as a commitment. Niyati Sharma treats any unexplained zero as a defect. Hari Prasad Nair disputes any invoice that does not match the shared tracker. [SB: Jun 2026 intelligence doc, consistent with Jul–Oct threads]

That sets the trust bar for PRISM on this account. Every number must reconcile to the tracker or the dialer report before it leaves the building. A recommendation without a plan attached is read as an excuse. Kohler is the account where PRISM's "insights, not numbers" claim gets tested against a client that already audits us.

Why Kohler is a good proof case: the funnel is fully visible from Meta spend to a qualified lead (§3). Few Indian accounts expose that chain.

## 1. Who they are

**Positioning.** Premium and aspirational bath and kitchen fittings: faucets, showers, toilets, bidets, kitchen mixers, mirrors, accessories. Competes with Hindware at lower price points. Brand-level strategy is quality over volume: top household-income cohorts, CTV, premium YouTube. [SB: Jun 2026]

**Credentials.** Global brand guidelines exist (Kohler Global Brand Team PDF and a Digital Brand Guidelines deck in Drive). No awards or certifications were pulled. Do not claim any. [DATA: Drive]

**Locations.** Kohler Experience Centres (KEC) are the physical showrooms. Dealers and territory sales managers (TSM) close leads. Gurugram is the client office (AOP invite room: India Gurgaon). City and state spread of leads: Delhi, Jaipur, Mumbai, Bengaluru, Gurugram, Chennai, Pune lead volume. [DATA: citywise leads Mar–Aug 2026]

**Naming discipline. Exact terms, do not mix:**

- *Lead Gen* is the renovation-lead P&L. *D2C* is the Kohler.com e-commerce P&L. They have separate budgets, owners and metrics. Never blend their CPA or ROAS.
- *QL* means qualified lead as the dialer report counts it (§3). *Lead* means an enquiry received. *CPL* divides by leads. *CPQL* divides by QL.
- *Dealership* campaigns (Inlead_Dealership) are a separate lead stream. Exclude them from Lead Gen totals unless asked.
- *Mega Campaign* is the brand awareness layer. Written three ways in the accounts: `MegaCampaign` (Meta), `Mega_Campaign` or `Mega` (DV360), "Mega Campaign" (plans). Same thing.
- *Bold Days* is the sale and festive creative theme. Written `BoldDays` in Meta and Google campaign names.
- *P0 / P1* are brand market tiers for the Mega Campaign. They are not lead-gen regions.
- Campaign names carry a `Cheil_Kohler` prefix. The Cheil name appears in account names and campaign strings.
- AI call notes from Sep 2026 transcribe "Lead Gen" as "Legion" and "crore" as "cores". Read them that way. [T]
- Google Ads account is named "Kohler India Ecomm". Treat that as the D2C Google account.

## 2. The ONE thing that governs every recommendation

**Qualified leads at an agreed cost, not leads.** For Lead Gen, every budget, bid and audience call is ranked by QL volume and QL%, with CPL as a secondary check. A cheaper lead that does not qualify loses to a dearer lead that does.

Why this reranks everything: from Jan to Jun 2026 CPL fell from ₹212 to ₹174 while QL% fell from 28.15% to 9.12%. Cheaper leads, fewer qualified ones. [DATA: Lead Gen tracker] Niyati Sharma set the floor at 150–160 QL a day and called misses "not acceptable". [E: 1 May 2026 thread, via Hari thread log]

One live qualifier on the priority. On 1 Oct the Oct plan was raised and Sameer wrote that December is "the month when we start optimising for qualified leads". [E] Until then the account buys lead volume with a QL% target of ~30%. Do not tell the client the account already optimises on QL signals. Meta is not yet fed qualification outcomes (§11, CAPI).

D2C has its own governing line: revenue at a ROAS the client accepts after the 30% employee-purchase GMV haircut (§7). The FY27 ask is ROAS ~6. [T: 8 Sep call]

## 3. Qualified-lead definition (crown jewel)

**Status: INCOMPLETE. First §11 gate.** The client's written qualification criteria were not found in any source. What follows is what the data shows.

**Pipeline.** Meta instant form (OTP-validated) → Salesforce (SFDC, KPMG is implementation partner) → dialer at Innovative Incentives (client's call-centre vendor). [SB: Jun 2026 intelligence doc]

**What the client's dialer report calls a QL.** The daily "Digital Campaign Report" counts "Lead Qualified" in three places: from the 1st attempt on fresh enquiries, from the 2nd and 3rd attempt callback pool, and from the 4th-attempt-onward recall pool. Day-wise Lead Qualified % divides total QL that day by that day's fresh enquiries. So a Sunday with few fresh enquiries and a big recall pool can show an odd %. Judge QL% month to date, not day by day. [E: Innovative Incentives report 4 Oct 2026; calc]

**The disposition tree** (SB's own diagram of the dialer outcomes): [SB]

- Connected → Lead Generated (the QL), Not Interested, or Others (Hangup, Language Barrier, Asking for Catalog, Required Later, Asking for callback).
- Not Connected → Not Answering, Not Reachable, Invalid Number.
- Hangup, Asking for callback, Not Answering and Not Reachable go to the Call Back Pool.

"Lead Generated" in the dispatch report's Day Wise tab is the same thing as "Eligible Lead" in its Campaign Wise tab. [DATA: Digital Campaign Report, Jul 2026]

**Booking stage.** The booking or visit stage (KEC appointment, dealer meeting, order) is not in any file I read. Appointment-booking forms exist in Meta ("AppointmentBooking" tokens) but their outcome is not reported. [DATA: form names]

**Routing rule, said by the client.** Budget above ₹1.5L goes to the territory sales manager. Budget below ₹1.5L goes to the dealer. Owned by Pooja Meena (SFDC routing). [SB: Jun 2026 intelligence doc, V]

**Low-budget share.** The dialer report carries a "Low Budget (<1.5L)" column next to SFDC leads. In September it shows 1,627 against 3,667 QL, about 44%. I'm reading that column as a subset of QL. I'm guessing here. Confirm with Hari or Pooja. [E: 1 Oct report; calc]

**The numbers that make QL derivable (Sep 2026, dialer report):** [E: report sent 1 Oct 2026]

| Step | Count | Rate |
|---|---|---|
| Fresh enquiries | 11,029 | |
| 1st-attempt connected | 4,913 | 44.5% of fresh |
| QL from 1st attempt | 1,708 | 34.8% of connected |
| QL from callback pool (2nd–3rd) | 931 | |
| QL from recall pool (4th+) | 1,028 | |
| Total QL | 3,667 | 33.2% of fresh [calc] |
| Total dials | 77,033 | about 21 dials per QL [calc] |

28% of September QL came from the 4th-attempt-onward pool. [calc] That makes call-centre persistence a real lever, not media alone.

**CPL vs CPQL.** CPQL = CPL ÷ QL%. September: ₹399 ÷ 33.07% = ₹1,206, matching the tracker. [DATA: Lead Gen tracker; calc]

**The lead-quality levers, with evidence:**

1. Question Forms and manual fields. WB Question Form 20.4% QL vs 4.3% regular. UP manual fields 16.3% vs 6.2%. [SB: H1 review, Jun 2026] Aug: Question Forms 35.2% vs 19.4% for regular forms, 17–20 Aug. [SB: Aug analysis, V]
2. Audience type. June QL: Lookalikes 579 of 1,067 (54%), AdvPlus 279, Interest 179, Remarketing 0. [DATA: June QL mapping]
3. Instagram over Facebook. Hari calls Facebook leads "junk"; target 70–80% Instagram. [E: May 2026]
4. Region. Rajasthan and Kerala held quality in Mar–Jun; MPCG and JOB were bottom-five. [SB: region analysis, Jun 2026, V]
5. Daily lead cap at ~1,500 to protect dialer capacity. [E: Hari, 1 Jun 2026]
6. Closing the feedback loop (CAPI) so Meta sees qualification. Not live as far as the sources show.

## 4. Segments (dim_segments)

The real cuts the client uses:

1. **Vertical**: Lead Gen · D2C · Mega Campaign (brand) · Dealership (separate).
2. **Region / cluster (Lead Gen)**: 21 clusters in the Oct 2026 plan (list in §13).
3. **Audience type (Lead Gen)**: Lookalikes (1%LAL, KEC, Convertors, QL seeds) · AdvPlus · Interest & Behaviour · Remarketing.
4. **Category (Lead Gen)**: FullBathroom · Toilets · Others (the "Three Pillars" sheet).
5. **Form type**: InstantForms · OTP · QuestionForm · ManualForm · Vernacular · AppointmentBooking.
6. **D2C product line**: KitchenFaucets · KitchenSinks · Showering · Toilet · Basins · HealthFaucet · Top40Products · AllProducts · BoldDays. Best sellers named in the Oct festive brief: Emile 26448IN-4-VS, Atom 25981IN-4-CP, Strive sink 38796IN-NA. [E: 1 Oct]
7. **D2C funnel**: Prospecting · Lookalike · Remarketing (DPA) · Branding.
8. **Platform**: Meta · Google · Bing · DV360 / YouTube · LinkedIn · Pinterest · Affiliates (16 networks) · Publishers.
9. **Brand market tier**: P0 · P1.
10. **Time band**: day / night. Night band gave best CPL in Apr–Jun. [DATA: TimeBand deck, V]

**Campaign-name parse rules**

- Lead Gen ad set: `DDMMYY_Cheil_Kohler_LeadGen_Prospecting_<Audience>_<Region>_InstantForms_<OTP|Others>_<Category>`. The leading six digits are the date the ad set was created, not the report date.
- Region sits between audience and `InstantForms`. Exceptions exist: `…_NCR_InstantForms_OTP_AdvPlus_FullBathroom` puts audience after.
- Question Forms end with `_QuestionForm`. Dealership contains `Inlead` or `Dealership`.
- Mega Campaign (Meta): `010826_Cheil_Kohler_MegaCampaign_<RnF_P0|Auction>_August2026`. Market comes from `P0` / `P1` in the name. `Auction` maps to P1 per the mapper. [DATA: Branding Campaign Mapper]
- Mega Campaign (DV360): campaign `Cheil_Kohler_Mega_Campaign_Aug'26`, line items carry `_P0_` or `_P1_`. [DATA]
- One form carries two region tokens (`Top5Cities` and `ROM1`). Classify as Top Cities, first match. [SB]
- Forms named `NIL`, `Incoming`, `Email`, `Website` carry no region. Report as Unmapped. Do not drop them.

**Ad accounts**

| Platform | Account | Status |
|---|---|---|
| Meta | 1542147597124356 (Kohler India) | Dropped from the data connector between 23 and 28 Sep. [SB] |
| Google Ads | 924-290-7329 (Kohler India Ecomm) | Missing from the connector since 18 Aug. [SB] |
| DV360 | 8394258957 | Last confirmed Aug 2026. [SB] |
| LinkedIn Ads | 519472255 (Cheil - Kohler) | Last confirmed Aug 2026. [SB] |
| Microsoft Ads (Bing) | not found | See §12. |

## 5. Diagnostic rules (propose-only)

These are if-then prompts for the analyst. PRISM proposes. A human approves before anything reaches the client.

1. **CPL up and QL% down together.** Do not recommend budget. Check delivery first. If ad-set budget utilisation is under ~85%, fix delivery before adding money (Aug finding: 71% utilisation). [SB: Aug 2026, V]
2. **Cost-cap throttle.** If cap sits within ~15% of actual CPL, widen it before raising budget. Aug case: caps ₹230–₹400 against ₹203 CPL. [SB, V] Raise budgets in steps of 30% a day or less.
3. **Consolidated vs granular overlap.** If PanIndia or South scale and the state campaigns inside them all show CPL rising the same week, suspect self-competition. Ask for the audience overlap report before scaling either. [SB: 31 Aug audit]
4. **Dealership form flat spend, leads near 1.** Same-day check of the form and the lead sync. This is a break, not a performance dip. [SB: 31 Aug audit]
5. **Zero leads or zero QL on a weekend.** First check the Sunday-to-Monday reporting lag and the vendor report. Send the note to Niyati before she asks. [E: May 2026 pattern]
6. **QL target ambiguity.** Before sizing budget, ask whether the QL target is Meta-only or all-platform. The Aug "Three Pillars" sheet counted 1,332 QL against 1,177 in the Meta tab. [SB, V]
7. **Weekend or low-volume QL%.** Never judge a day's QL% alone. Use month to date (recall-pool QL inflates low-fresh days). [calc from E]
8. **Geography with persistent high CPL and no quality gain** (Kerala ₹297–347 in Apr–Jun, NE, UP East/West spikes). Propose a cap or pause with the evidence. Hari has asked for caps before. [E, SB]
9. **Mega Campaign RnF.** Judge on CPM and reach, not CPC. CPC near ₹100 is normal for reach-and-frequency buys. Watch frequency: 3.66 in a day on 23 Sep and a campaign still named "August2026". [SB: 23 Sep daily]
10. **Duplicate prospecting campaigns.** Two KitchenFaucets prospecting campaigns ran side by side (new ₹13.3 CPC, old ₹26.7). Propose pausing the older. [SB: 23 Sep]
11. **D2C revenue spikes.** Any single order cluster above ~₹3L across platforms on one day: check the order log before reading ROAS. Google conversions with decimals (4.7, 1.8) are modelled, not orders. [SB: 31 Aug audit]
12. **DemandGen "conversions".** Exclude from real CPA. They overstate. [SB]
13. **Site analytics zero.** GA4 showed zero transactions and revenue across channels for two weeks as of 21 Sep. Until fixed, platform-reported D2C revenue is unverifiable. [SB: 28 Sep audit, V]
14. **Remarketing frequency.** DPA remarketing at 5–6x a day is a fatigue signal seen repeatedly. [SB]
15. **Sale window.** Sale runs 9–23 Oct. Expect higher auction pressure and CPC. Plan already assumes it. [E: 1 Oct]
16. **Price parity.** 42–45 SKUs a day are cheaper on Amazon than on Kohler.com (daily pricing email, 1–5 Oct). This is a client pricing decision. Flag it, do not own it. [E]

## 6. Platform-role rules

- **Meta, Lead Gen.** The lead engine. Instant forms with OTP, Instagram-first. Optimises for lead volume today, not QL.
- **Meta, D2C.** Prospecting by product line, lookalikes, and DPA remarketing for catalogue.
- **Meta, Mega Campaign.** Reach and frequency (P0) and auction (P1) for awareness. Not a performance line.
- **Google Search.** Brand and RLSA, protects demand.
- **Google Shopping and PMax.** The D2C revenue engine. Both scale faster than the auction rewards when pushed.
- **Google DemandGen.** Being explored for Lead Gen. Not yet a proven channel. [T: 8 Sep]
- **Pinterest.** Pending client inputs. [T: 8 Sep] A Pinterest line is also in the Aug Mega Campaign plan. [DATA]
- **YouTube / CTV via DV360 (PRISM YouTube).** Brand reach on affluent audiences. Skippable, non-skippable, YouTube Select lineups. [DATA]
- **LinkedIn.** Brand and professional audiences in the Mega Campaign.
- **Publishers.** Architectural Digest roadblock (CPM ₹450), Samsung and Android TV home-screen mastheads, Inshorts. [DATA]
- **Affiliates.** 16 networks on a revenue-share or payout model. New CPS brief to a network at 30% revenue share, all products, objective sales. [E: 5 Oct]
- **Bing.** Supplementary D2C.
- **WhatsApp (CTWA / WABA).** Qualification flow was a critical blocker in June. Current status not found.
- **Call centre.** Not media, but the largest single lever on QL (§3).

## 7. Corrections memory (newer supersedes older)

Each item says who said it.

| Date | Correction | Said by |
|---|---|---|
| May 2026 | Facebook leads are junk. Push Instagram to 70–80%. | Hari Prasad Nair [E] |
| 1 Jun 2026 | Cap daily lead inflow at ~1,500. Source from high-converting regions only. | Hari [E] |
| Jun 2026 | Budget approvals by WhatsApp must be confirmed by email the same day. The ₹50L vs ₹28–30L dispute came from skipping this. | Utkarsh Mehta, SB [E] |
| Jun 2026 | AOP revenue numbers are commitments, not estimates. Verify data before sending. | Parul Tandon [E] |
| Jun 2026 | 30% GMV haircut for employee purchases is accepted, but must be explained and validated. | Parul, Kohler [E] |
| 2 Jun 2026 | Exclude Assam. Scale down UP and Bihar volumes. | Innovative Incentives MoM [E] |
| 6 Jul 2026 | QL% "needs to be between 25–30%". | Niyati Sharma [E] |
| 25 Aug 2026 | Lead counts: drop only fully blank rows. Never dedupe on lead id; it deleted 2,434 real March leads. Aug = API tab only. | Sameer Khan [SB] |
| 8 Sep 2026 | Need 110 QL a day for FY27 +40%; trending 150–160. | Utkarsh Mehta [T] |
| 1 Oct 2026 | Oct targets raised for year-end. Optimising for qualified leads starts in December. | Sameer Khan to Hari [E] |
| 1 Oct 2026 | October D2C affiliate revenue target ₹22,50,000. Push in the 9–23 Oct sale. | Sameer to Ventes Avenues [E] |

**Conflict to resolve.** Niyati's 150–160 QL a day is a floor (Jun). Utkarsh's 110 a day is the FY27 requirement (Sep). They may measure different things (daily floor vs annual base). Prefer Niyati's until the client states otherwise. [E vs T]

## 8. Benchmarks and current numbers

**The recon-gated join is the truth.** Any figure here is a starting point. PRISM's number for QL, CPL or CPQL is valid only when spend (ad platform) joins to leads and QL (CRM or dialer) at the ad-set or region level and reconciles to the client's tracker. If it does not reconcile, say so and show the gap.

**Lead Gen, monthly achieved vs plan** [DATA: Lead Gen tracker, summary tab, pulled 5 Oct 2026]

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

September plan was ₹44.9L, 14,927 leads, 3,337 QL, 22.36%. September beat plan on QL and missed on lead count. [DATA]

September's 3,667 QL matches the dialer report's 3,667 Total Day Wise Lead Qualified. [E; calc] That is one clean reconciliation.

**October plan, V2 (sent 1 Oct)** [E]: budget ₹54,25,126; 13,362 leads; CPL ₹406; 4,007 QL; CPQL ₹1,354; QL% 29.99%; CPC ₹17.03; CTR 0.71%. V1 (29 Sep) was ₹45,85,074 and 3,353 QL at 30%. Pan India is 53.07% of budget. South is 15.04%. Note: plan CPQL (₹1,354) is above September's actual (₹1,206), and plan QL% (29.99%) is below it (33.07%). The plan is looser than the month that just closed.

**Finance estimate for October Lead Gen** is ₹55,00,000 plus 1.9% fixed = ₹56,04,500 (estimate INES2604549, under approval). [E: 1 Oct] This does not match the V2 plan budget of ₹54,25,126. Flag, do not smooth over.

**Lead counts disagree by source.** The city-wise dump holds 97,914 leads Mar–Aug and 10,773 QL (~11.0%). The tracker sums to ~104,300 leads and 12,319 QL for the same months. [DATA; calc] Cause not confirmed (Aug scoped to API tab, row rules). Quote the tracker for performance and the dump for geography. Say which.

**Brand (Mega Campaign) benchmarks** [SB: lift study]: YouTube BLS recall +5.2 pts absolute (90% certainty), ₹14.94 cost per lifted viewer. Meta BLS awareness +6.5 pts (99.5% probability); preference vs Jaquar, Grohe, Hindware −1.8 pts (25% probability, not significant). Branded-search lift in all four YouTube SLS flights. YouTube VTR 52% → 64.9% YoY, reach down 76% by design. Brand CPV up 32.8% YoY, unexplained in writing. [SB, V]

**D2C:** Meta spend, 23 Sep daily: ₹2.48L. Normal Meta daily range in Aug: ₹2.8L–₹3.8L. [SB] Blended D2C ROAS 2.22x for 24–30 Aug (2.70x after removing a one-off order spike). [SB: 31 Aug audit, V] FY27 ask: ROAS ~6; revenue goal "30 crore", plan at higher scenario "52". The two figures do not reconcile in the call notes. [T, V] Earlier figure of ₹72 Cr annual budget and ₹5–8 Cr monthly run-rate [SB: Jun intelligence doc] conflicts with the AOP media plan sheet, which shows monthly budgets of ₹43–62L and monthly revenue of ₹1.2–2.1 Cr for Jan–Jun. [DATA] Treat ₹72 Cr as unverified. It may be a revenue target, not spend.

**OND BAU video views:** ₹30L a month proposed, non-skip asset. Approval requested from Parul on 30 Sep; approval not found. [E]

## 9. Contacts + the client-side approval gate

**Kohler (client)**

| Person | Role | Notes |
|---|---|---|
| Niyati Sharma | Head of Marketing | Owns QL target and quality. Short emails. Wants plan before explanation. [SB: org notes, 23 Jun] |
| Parul Tandon | D2C Marketing Lead | D2C, brand, YouTube, AOP, POs. Checks data herself. 24-hour reply expected. |
| Hari Prasad Nair | Lead Gen / Digital Marketing | Lead Gen budget owner. Approves or claws back spend. Was covering CRM and SFDC while Pooja was on leave in June. |
| Pooja Meena | CRM, lead data, SFDC | On leave in June. Current status unknown. Owns routing rules and custom audience uploads. |
| Kiran Hrishikesh, Nisha Chaudhary, Jacob Kuriakose | On the 29 Sep AOP invite | Roles not found. |
| Manav Khurana | Raised the CTWA / WhatsApp escalation (June) | Role not found. |

**Partners:** Innovative Incentives (call centre; Ritika Sharma, Project Coordinator, sends the daily report; Sreshth on the lead-quality threads). KPMG (SFDC implementation; Aditi Gogia). Ventes Avenues (affiliate network; Chandan Godambe). Google (Osaid Razi, Ashrav Gupta; a Google account strategist wrote on 30 Sep about programme continuation and has had no reply). Digisoftnexus (new CPS partner, contact Vineet).

**Social Beat team:** Utkarsh Mehta (AVP, Paid Media and Partnerships), Sameer Khan (Digital Media Manager), Tarun Yadav, Subham Choudhary (Senior Specialist, Performance Marketing), Simran Singh (finance coordination), Kumari Natasha (creative), Harsh Shandilya, Maanesh Vasudeo, Vikas Chawla, Vasu Yadav, Meghana Chandani. Titles for the last eight are not confirmed.

**Cheil media finance:** Mritunjay Kumar (raises estimates).

**Approval gate (one per vertical)**

- Lead Gen budget, plan and region changes: **Hari Prasad Nair**, in writing by email, Niyati Sharma on copy. A WhatsApp approval is not an approval until the account team has emailed it back the same day. [E: Jun dispute]
- D2C, brand and YouTube budgets and POs: **Parul Tandon**, in writing.
- Invoice amount must equal the shared tracker. [E]

No single written client approval rule exists. This is how the threads behave. Ask the client to confirm it (§11).

PRISM insights go to a human at Social Beat for approval before any client sees them. Utkarsh Mehta or Sameer Khan sign off. [SB]

## 10. Governance

- **Client-safe naming.** On any client surface, only PRISM, GEO Pulse and Influencer.in may appear as Social Beat tools. Data connectors, scrapers, SEO tools and other vendor names stay internal. This file names none on purpose; where one is needed the text says "data connector". Raw vendor IDs and labels never reach the client.
- **Client dashboards.** Hosted on the sbprism.com domain, password-protected, never an open URL. Two builds: internal and client-facing. Strip internal tool names. A human approves insights before the client sees them.
- **Known breach of that rule.** Two live Kohler trackers are public with no password, and the shared connector key sits in the page source (§12). Fix before PRISM goes to the client.
- **Data sovereignty and DPDP.** Lead records hold names, phone numbers, cities and call recordings. The brain holds no personal data and must not. PRISM works on aggregates (counts by region, form, day). Raw lead files stay in the client's and Social Beat's controlled storage. Call recordings (WAV) are personal data under the DPDP Act, 2023. I'm not a lawyer; have Social Beat's data lead confirm retention and consent terms with Kohler.
- **Tone.** Short sentences. Number first, plan second, reason third. No softening on misses. Never say "we are investigating" without a date. Premium brand voice for creative: measured, no aggressive promotion.
- **Provenance.** Every figure carries a tag and a source. Estimates carry "verify before using".
- **Writing standard.** Follow the sb-voice skill. PPTX goes through socialbeat-pptx unless a client template is required.

## 11. What's blocking a clean Phase-1

1. **Get the client's written QL definition** and the booking stage (Niyati, Hari, Pooja). Gate for §3.
2. **Confirm the CRM field that carries region or project** and the exact value the export writes. Today region is inferred from form names (§13). Gate for the join.
3. **Reconnect Meta and Google Ads** in the data connector. Meta dropped between 23 and 28 Sep; Google has been out since 18 Aug. A Standard-level user was added to the Kohler Google Ads account on 5 Oct and a security review request arrived the same day. Check whether that is the re-grant.
4. **Fix the NIL form names.** In the July cut, NIL carried 1,327 enquiries and 135 QL (7.7% and 8.8% of the month's total). They cannot be assigned to a region or ad set. [DATA, partial month]
5. **Meta-only vs all-platform QL** for every target. Get it in writing.
6. **Approve the October plan.** V1 vs V2 vs finance estimate (₹56.05L) disagree. Approval of V2 not found.
7. **CAPI.** Meta to SFDC feedback loop was 100+ days overdue in June. Go-live not confirmed. Recent Meta emails list conversion event categories updated on 30 Sep and 5 Oct; whether these are the qualification events is unknown.
8. **GA4 e-commerce at zero** for D2C. Needs the site analytics owner.
9. **Low-budget share of QL** (44% in Sep): confirm meaning and whether it counts toward the 150–160 target.
10. **Lead-count reconciliation** between the tracker and the dump (§8).
11. **Fireflies history for Kohler** (§12).
12. **Secret cleanup** (§12).

## 12. Access gaps

- **Fireflies transcripts were not readable.** No transcript tool was available. I saw only recap emails (29 Sep D2C AOP Connect; 29 Sep and 2 Oct Lead Gen Daily Standup) with no notes inside. The only call notes read were the Gemini notes of the 8 Sep AOP brief, which are AI-generated and can be wrong. Nothing here is attributed to a named speaker beyond what that document states. Run the Fireflies pull before relying on §3.
- **Gmail:** 201 Kohler threads matched in 60 days. I read about 14 in full and the subject lines of 50. Attachments (the Oct plan, the AOP 2027 Lead Gen and D2C plans and decks, the 1 and 4 Oct dialer workbooks) could not be opened.
- **Drive:** The Lead Gen tracker read returned sheet structure only, except the summary snippet used in §8. The Nomenclature, Mapper and Cluster Targets tabs were not read. The PRISM x Kohler mapper covers only brand lines.
- **CRM and SFDC:** no direct export column list. Region and project values in §13 come from dialer-report form names.
- **Microsoft Ads (Bing) account ID:** not found.
- **Platform data:** no live ad-platform numbers this run (both connectors dropped). Platform figures are from earlier SB reports and audits and may have moved.
- **Org roles:** several client and SB titles are not confirmed. Pooja Meena's return date is unknown.
- **D2C budget and revenue basis:** ₹72 Cr and the ₹30 / ₹52 crore figures could not be reconciled (§8).
- **Local project folder:** the shell mount failed (Windows update, Sep 8 notice), so files were read as staged copies. Nothing was changed in the folder except this file.
- **Security cleanup (separate from the task):**
  1. Two files in the Kohler project folder hold deploy tokens in plain text (`.netlify_token`, `netlify-deploy/netlify-token.txt`). Move to a secret store and rotate.
  2. The Branding tracker and D2C tracker are public and embed the corporate connector API key in page source. That key is shared across other clients. Move behind a server-side function and password-protect.
  3. A Teams meeting passcode sits in an email body. Not copied here.
  None of these values appear in this file.

## 13. PROJECT MAPPING

Kohler has no property projects. The reporting units are the Lead Gen regions in the October plan, plus the two non-CRM lines. Campaign words are as written in ad-set and form names. CRM values are the form-name tokens the dialer report writes; the CRM export's own field is unconfirmed (§12).

PRISM: read only the lines below.

## PROJECT MAPPING
Pan India: PanIndia, Pan India | CRM: PanIndia
Top Cities: TopCities, Top5Cities | CRM: TopCities
South: South | CRM: South
JOB: JOB | CRM: JOB
Kerala: Kerala | CRM: Kerala
NE: NorthEast, NE | CRM: NorthEast
WB: WB | CRM: WB
NCR: NCR | CRM: NCR
Rajasthan: Rajasthan | CRM: Rajasthan
UP North 1: UPNorth1 | CRM: UPNorth1
UP North 2: UPNorth2 | CRM: UPNorth2
UP West: UPWest&UK, UPWest | CRM: UPWest&UK
UP East: UPEast | CRM: UPEast
Mumbai: Mumbai, mumbai | CRM: Mumbai
ROM1: ROM1 | CRM: ROM1
ROM2: ROM2 | CRM: ROM2
Gujarat: Gujarat | CRM: Gujarat
MPCG: MPCG | CRM: MPCG
AP&TS: AP&TS | CRM: AP&TS
KTK: Karnataka, KTK | CRM: Karnataka
TN: TN | CRM: TN
Chandigarh: Chandigarh, CH | CRM: Chandigarh
Website: Website | CRM: Website
Dealership: Dealership, Inlead | CRM: Dealership
D2C: D2C | CRM: n/a
Mega Campaign: MegaCampaign, Mega_Campaign, Mega | CRM: n/a

---

## Sources

- Gmail (read in full): AOP discussion invite (29 Sep); Kohler Lead Gen Plan Oct 2026, V1 and V2 (29 Sep, 1 Oct); Innovative Incentives dialer reports (1 Oct to 4 Oct); Budget Confirmation with Ventes Avenues (1 Oct); Lead Gen finance estimate (1 Oct); Bold Days creatives request (1 Oct); OND BAU Video Views Plan (30 Sep); AOP decks and plans (30 Sep); Digisoftnexus CPS brief (5 Oct); Google Ads user-added and Google account strategist notices (30 Sep, 5 Oct); Kohler X SB X Google invite (2 Oct); Fireflies recap emails (29 Sep, 2 Oct, content empty).
- Drive: Kohler X Social Beat Lead Gen Tracker 2026 (summary snippet); Revised AOP Media Plan May 26 V2; D2C Tracker (to-do tab); PRISM x Kohler Mapper; Kohler Branding Campaign Mapper; Kohler AOP Brief Appreciation, Gemini notes (8 Sep); Digital Campaign Report 30-July26; file list for briefs, affiliate trackers, ID briefs.
- Project folder: Project Summary Jun 2026; Org Structure Notes; Client Intelligence Jun 2026; Hari Prasad Nair Lead Gen Issues log; Weekly Account Health Audit 31 Aug and 28 Sep (blocked); Daily Report 23 Sep; lead disposition flow diagram; QL mapping workbooks (June, 24 Jun); city-wise leads and QL (Mar–Aug); Mar–Jul lead gen data (mapped).
- Project memory notes on Meta lead-gen scale-up, Mega Campaign naming, connector drop-offs, daily baselines, lift studies, lead-count method.

**Newer supersedes older.** Where two sources disagree, the later, email-confirmed one wins: the 1 Oct Oct-plan V2 over the 29 Sep V1; the 4 Oct dialer report over the Jun intelligence doc for QL mechanics; the 23 Jun org notes over the Jun intelligence doc for reporting lines; the Lead Gen tracker over the H1 deck for monthly QL. Re-run this brain after any new client QL definition, CRM field confirmation, or connector restore.
