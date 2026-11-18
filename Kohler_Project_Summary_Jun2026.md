# Kohler × Social Beat — Project Summary
**Period covered:** ~April – June 23, 2026 (53 sessions)
**Compiled:** June 23, 2026

---

## Overview

53 Cowork sessions across this project. They fall into seven themes: daily automated reporting, lead gen quality analysis, regional performance diagnosis, D2C creative analysis, account health audits, automation & tooling builds, and client intelligence. The daily tracker alone accounts for ~38 sessions (all identical structure, scheduled task). The remaining 15 are substantive analytical or build sessions.

---

## Theme 1: Daily Automated Performance Tracker

**Sessions:** ~38 (all titled "Kohler daily tracker", scheduled to run automatically each morning)

A scheduled task pulls the previous day's Meta Ads and Google Ads data from Windsor.ai every morning and produces a structured daily report. No human input required.

**What the report covers:**
- Combined spend (Meta + Google), impressions, clicks
- Meta: split by objective (LeadGen / D2C / Engagement), top 3 campaigns by spend, CTR, CPC
- Google: split by campaign type (Branding / PMax / Search / Shopping / DemandGen), conversions, CPA
- Auto-flags: any campaign with CPA > ₹10,000 or zero conversions on > ₹5,000 spend

**Recurring watch items spotted across daily reports:**
- D2C Remarketing DPA (Meta): frequency consistently hitting 5–6x, CPC elevated (₹17–21). Audience fatigue is a persistent pattern.
- PMax KitchenFaucet and PMax FeedOnly AllProducts (Google): regular zero-conversion days on meaningful spend.
- PMax FocusProducts NonBrand: ROAS volatile, frequently flagged.

**Accounts monitored:**
- Meta: Account 1542147597124356 (Kohler India)
- Google: Account 924-290-7329 (Kohler India Ecomm)

---

## Theme 2: Lead Gen — QL Quality Crisis (H1 2026)

**Sessions:** Kohler India Lead Generation Review, Kohler India Campaigns Analysis

This was the most substantive analytical work of the period. Built a full H1 Lead Gen Review deck (both a narrative version and a data variant with raw tables) covering January through June 15.

**The core finding — CPL and QL% moved in exactly opposite directions across every single month:**

| Month | Spend | Leads | CPL | QL Count | QL% | CPQL |
|-------|-------|-------|-----|----------|-----|------|
| Jan | ₹18.1L | 8,560 | ₹212 | 2,410 | 28.15% | ₹753 |
| Feb | ₹34.9L | 10,041 | ₹347 | 1,845 | 18.37% | ₹1,890 |
| Mar | ₹34.6L | 10,863 | ₹318 | 1,636 | 15.06% | ₹2,114 |
| Apr | ₹34.5L | 17,652 | ₹195 | 2,092 | 11.85% | ₹1,650 |
| May | ₹55.4L | 30,123 | ₹184 | 2,715 | 9.01% | ₹2,040 |
| Jun (to 15th) | ₹24L | 14,169 | ₹170 | 885 | 6.25% | ₹2,716 |

**What this means:** The account optimised hard for CPL efficiency and volume — and it worked. But lead quality is the untouched lever. Every scale-up brought lower-intent audiences into the pool. The PAN India restructuring in March (went live Mar 20) accelerated volume but accelerated quality dilution simultaneously.

**Experiments run:**
- WB Question Form: 20.4% QL vs 4.3% regular (4.7x lift) — confirmed winner
- UP Manual Fields: 16.3% QL vs 6.2% regular — confirmed winner
- NE cluster: ₹6,446 CPQL on Day 1 — red flag, wound down
- Kerala: high CPL (₹297–₹347), no quality benefit — paused

**Key structural signal (June):** All four audience types (Lookalikes, AdvPlus, Interest, Remarketing) QL% declining simultaneously. This is not a targeting miss — it's a structural problem requiring the CAPI feedback loop to close.

---

## Theme 3: Lead Gen — Regional & Audience Diagnosis

**Sessions:** Kohler Lead Gen Analysis by Region, Kohler Region-wise Performance Analysis, Kohler Disposition Mapping

**NC% / NI% (Not Connected / Not Interested) analysis by region and audience, March–June:**

Key finding: NI% grew from 19.5% (March) to 42.8% (June). The market had genuine interest in March — phone contact was the bottleneck. By June, nearly 1 in 2 leads reached are saying no. Audience fatigue is structural.

**Consistent performers:**
- Rajasthan: best or near-best every month. AdvPlus in Rajasthan is the single most reliable audience-region combination.
- Kerala: high CPL (₹256) but genuine quality. AdvPlus and Interest both hold NC+NI in the 40% range — lower than most.

**Consistent underperformers (structural, not seasonal):**
- MPCG: worst-5 across all four months
- JOB: worst-5 across all four months — audience-region mismatch, not a blip
- UPNorth1: June crisis territory, NC+NI exceeds 100% (virtually no lead converting)

**Audience type finding:** Interest audience underperforms everywhere, every month. AdvPlus consistently beats Interest on both NC% and NI% in strong regions. Recommend shifting budget allocation away from Interest.

**Disposition mapping work:**
Built a 4-sheet Excel mapping QL disposition data from Innovative Incentives (call center) to adset level. 1,064 QLs mapped across 172 adsets. Three unmapped entries flagged (including 27 QL tagged as "Website" — likely a channel attribution entry, not a form name). Validation confirmed 100% QL match.

---

## Theme 4: D2C — Creative & Campaign Analysis

**Sessions:** Kohler D2C Campaign Analysis (skill build), Kohler Creative Analysis Report, Google and Meta Data for Kohler (tracker), Google & Meta Campaign Data Automation

**Creative Analysis skill:**
Built and packaged a reusable skill (`meta-creative-analysis.skill`) for D2C Meta creative analysis via Windsor. Workflow covers: category mapping (Faucets, Showering, Basins, etc.), format classification, hero/zombie thresholds, video completion diagnostics (P25/P50/P75/P100), period comparison. Also built `parse_windsor_actions.py` to handle oversized Windsor action JSON files.

**Creative Analysis deck:**
4-slide PPTX covering combo creative overview (2×2 grid) and video metrics for D2C Meta campaigns.

**D2C Tracker dashboard:**
Live at kohler-d2c-tracker.netlify.app. Fixed during this period: AdvantagePlus parsing in region detection (was misidentifying audience tokens as regions), Mumbai case-sensitivity (merged capital/lowercase variants), added FullBathroom/Toilet QL split columns sourced from Campaign Wise form-name mapping.

**Campaign data automation:**
Built a "June 2026 Auto" Google Sheet tab with 233 rows of campaign-level data (14 Google + 14 Meta campaigns, search terms, shopping terms). Confirmed: Windsor does not expose Add to Cart data for Google Ads — only available via GA4.

---

## Theme 5: Account Health Audits

**Sessions:** Kohler Account Health Audit (×2 — June 12–18 and June 19)

**Week of June 12–18:**
- Meta Lead Gen CPL worsened 22% (₹187 → ₹228) with flat spend. Root cause: audience saturation, CPM up 34%, impressions fell 25%.
- UPEast CPL at ₹1,348 (frequency 3.26x) — paused.
- Meta D2C ROAS jumped from 1.52x → 3.59x. BoldDays campaign launched at 8.78x ROAS. DPA Remarketing 2.1x → 5.51x.
- Three D2C campaigns below 1x ROAS: ToiletCombos (0.42x), Basins (0.60x), Top40Products (0.80x).
- **Critical tracking alert:** BathroomHealthFaucet DemandGen showed 32.92 conversions at ₹486 CPA (prior period) → collapsed to 3 conversions. ToiletAreaCombos PMax showed 2,257 conversions at ₹15 CPA — both indicate a misfiring conversion tag in GTM/GA4. Must be audited before budget decisions.

**Week of June 19 (following week):**
- Combined spend dropped 34.4% (₹23L vs ₹35L) — Bold Days wind-down on Google Branding Traffic, Meta Lead Gen scale-back.
- Meta D2C ROAS improved further to 3.73x (from 2.26x prior week). Google Shopping SIS gained +6.7pp to 73.1%.
- 5 PMax campaigns below 1x ROAS: KitchenFaucet (0.39x) and Showering (0.20x) are worst.
- UPWest Lead Gen at ₹1,478 CPL — flagged for immediate pause.
- DPA Remarketing frequency at 26.2x — near burnout.

**Open issue:** GTM/GA4 conversion tag misfiring was flagged in the June 12–18 audit. Confirmation of resolution not found in subsequent sessions.

---

## Theme 6: Automation & Tooling Builds

**Sessions:** Kohler Affiliate RO Automation, Google and Meta Data for Kohler, Google & Meta Campaign Data Automation

**Affiliate RO Generator:**
Built and deployed a web tool at kohler-affiliates-ro-gen.netlify.app for automating affiliate Release Order (RO) generation. Pulls data from the affiliate tracker. UI features: read-only amount fields, "From tracker ✓" badge, sticky navy header, mobile responsive. Fixed date range display: current month shows "1 – [yesterday]" instead of full month. Past months show full range.

**Kohler D2C Tracker (live dashboard):**
Ongoing development. Key fixes made during this period: region parsing (whitelist approach), Mumbai deduplication, FullBathroom/Toilet QL split sourced from static Campaign Wise mapping.

**Automated Google Sheet:**
Automation to populate campaign-level Google Sheet tabs from Windsor data. Reduces manual monthly reporting work. Covers Google + Meta with correct column headers (Add to Cart, not ATC) and handles the Windsor API's limitations on Google ATC data.

---

## Theme 7: Client Intelligence & Stakeholder Profiling

**Sessions:** Current session (June 23) + "Not Interested Call Recordings" (June 15–16)

**Intelligence document:**
Built `Kohler_Client_Intelligence_June2026.docx` — comprehensive account intel pulled from Gmail threads, Fireflies meeting recaps, and Google Drive. Covers brand overview, all four stakeholders, what's worked/what hasn't, and eight open risks.

**Org structure clarified (June 23):**
- Niyati Sharma = Head of Marketing (most senior)
- Parul Tandon, Hari Prasad Nair, Pooja Meena all report to Niyati
- Pooja Meena currently on leave — Hari covering her CRM/data responsibilities in addition to his own

**Stakeholder profiles built** (see separate card widget + docx):
- Parul: data-first, terse, checks her own numbers, annoys when analysis is late for PO decisions
- Hari: WhatsApp approvals are a documentation risk — one formal dispute already resolved via screenshots. Covering Pooja's role while she's out.
- Niyati: one-line emails, zero softening, directs her reports publicly, 150–160 QL/day is non-negotiable
- Pooja: systems thinker, manages SFDC routing and custom audiences, on leave

**Not Interested call recordings:**
Hari forwarded 5 WAV recordings from Innovative Incentives (contact: Ritika Sharma) for NI dispositions from June 15–16. Session could not download WAV files via Gmail connector. Status: incomplete — files need to be downloaded manually and re-shared for transcription and analysis.

---

## Open Items & Unresolved Threads

1. **CAPI integration** — Meta → Salesforce conversion feedback loop, 100+ days overdue. No go-live signal found in any session. Until live, Meta optimises for lead volume not QL quality.
2. **GTM/GA4 misfiring tag** — flagged in June 12–18 audit (BathroomHealthFaucet DemandGen, ToiletAreaCombos PMax). Resolution not confirmed.
3. **NI call recording analysis** — 5 WAV files from Innovative Incentives unanalysed. Hari forwarded them for a reason — likely looking for qual insight into why leads are saying no.
4. **CPV increase (brand)** — 32.8% YoY, flagged by Niyati. No documented resolution.
5. **Amazon price parity** — 13–20 SKUs daily cheaper on Amazon than Kohler.com. Ongoing, no resolution visible.
6. **QL% root cause** — 4-month gap between planned and actual QL% with no agreed root cause or fix. Niyati is actively frustrated.
7. **DPA Remarketing audience fatigue** — frequency 5–26x across different audit weeks. Recurring flag, not structurally fixed.

---

## Key Numbers to Know (H1 2026)

| Metric | Figure | Source |
|--------|--------|--------|
| D2C annual budget (AOP) | ₹72 Cr | D2C Tracker |
| Lead Gen monthly budget | ₹33–55L | Lead Gen Tracker |
| Meta lead gen CPL (May) | ₹184 | Lead Gen Tracker |
| Meta lead gen CPL (Jun, partial) | ₹170 | LeadGen Review |
| QL% (May) | 9.01% vs 17% planned | Lead Gen Tracker |
| QL% (Jun to 15th) | 6.25% | LeadGen Review |
| D2C ROAS (Meta, June 12–18) | 3.59x | Account Audit |
| D2C ROAS (Meta, June 19) | 3.73x | Account Audit |
| Google Shopping SIS (June 19) | 73.1% | Account Audit |
| NI% across regions (June) | 42.8% avg | Region Analysis |
| Best QL% experiment (WB) | 20.4% vs 4.3% baseline | LeadGen Review |
