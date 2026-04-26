---
title: "EU's Digital Policy Foundation: eIDAS, GDPR, DSA, and the Gap Between Rules and Reality"
description: "Analysis of EU's existing digital initiatives — what's been built, where adoption is lagging, and what's missing for true digital integration."
tags: ["eidas", "gdpr", "dsa", "dma", "digital-decade", "eu-policy", "research"]
author: zentala
---

# EU's Digital Policy Foundation: eIDAS, GDPR, DSA, and the Gap Between Rules and Reality

## Summary

Europe has spent the past decade building an impressive stack of digital regulation: eIDAS
mandating cross-border digital identity, GDPR protecting personal data, the DSA and DMA
restructuring platform power, and the Digital Decade program setting 2030 targets. The
architecture on paper is coherent. The deployment reality is not. As of 2025, only 55.6%
of EU citizens have basic digital skills against an 80% target. Just 45% of cross-border
government services actually accept identity documents from other EU member states. The
original eIDAS (2014) spent a decade in optional-compliance limbo, and its successor
(eIDAS 2.0, 2024) has pushed the mandatory wallet deadline to 2026 — nearly three years
after publication. The EU has successfully built the regulatory framework. What is missing
is the unified execution infrastructure, the shared services layer, and the political will to
treat digital transformation as infrastructure — not as law.

---

## Key Findings

1. **eIDAS 2014 failed on adoption**: The original regulation was optional for member states
   — no obligation to notify eID schemes. A 2020–2021 Commission review found costs exceeded
   benefits due to "low uptake of eID/eIDAS notified schemes." Cross-border recognition covered
   only ~60% of EU citizens.
2. **eIDAS 2.0 (2024) mandates wallets — but compliance deadline is 2026**: All 27 member
   states must provide a European Digital Identity Wallet (EUDI) by September 2026. As of
   early 2025, only Austria has a functional wallet in rollout. Six pilot projects with 600+
   partners are testing implementations.
3. **GDPR has generated €5.65 billion in fines since 2018**, with €1.2 billion in 2024 alone.
   2,245 documented fines as of March 2025. Yet the largest fines hit US tech companies,
   not EU governments failing to digitize — indicating GDPR regulates data use, not digital
   service delivery.
4. **Digital public services gap**: Citizens' key services online: 82.3% (target: 100%).
   Business services: 86.2%. Only 45% of cross-border services let citizens from other
   member states authenticate with their national ID. Cross-border sending capacity in
   production: 37% of member states.
5. **Digital skills shortfall**: 55.6% of EU adults have basic digital skills vs. 80% target.
   ICT specialist count will reach ~12 million by 2030 — 40% below the 20 million target.
   Women: 19.5% of ICT specialists, flat for three years.
6. **Gigabit infrastructure**: 82.5% of EU households have Gigabit network coverage vs. 100%
   target. On track for 2030 — infrastructure is the one area close to target.
7. **DMA has designated 22 "gatekeeper" services** across six Big Tech companies. Apple paid
   €500 million in the first DMA enforcement action. But "malicious compliance" is widespread —
   gatekeepers technically comply while undermining the spirit of obligations.
8. **Draghi Report (September 2024)** called EU digital dependence an "existential challenge":
   US cloud providers held 65% of EU cloud market in 2021; EU providers hold under 16%.
   Proposed €800 billion/year in investment to close the competitiveness gap.

---

## eIDAS: Digital Identity Across Borders

### What It Mandates

The original eIDAS Regulation (EU 910/2014) established three things: electronic identification
(eID) — recognizing national identity systems across borders; trust services — legal equivalence
for electronic signatures, seals, and timestamps across all member states; and a mutual recognition
framework for eID schemes notified to the European Commission.

The critical design flaw: notification was **voluntary**. Member states could, but were not
required to, submit their national eID systems for mutual recognition. No participation, no
cross-border recognition.

### The Original eIDAS Adoption Failure (2014–2024)

A European Commission review in 2020–2021 identified the core problem: **member states opted
out**. Several member states either did not create national eID schemes or chose not to seek
mutual recognition. The result: cross-border recognition covered only approximately 60% of EU
citizens — not the seamless EU-wide system the regulation implied.

The Commission's own assessment found that "quantifiable costs have so far exceeded the benefits
for both eIDs and trust services, the main factor being the low uptake of the eID/eIDAS notified
schemes, due to which potential benefits remained hypothetical." A decade of a regulation that
existed on paper. This is the defining failure mode of EU digital policy: mandate the framework,
leave implementation optional.

### eIDAS 2.0: The Mandatory Wallet (Regulation EU 2024/1183)

eIDAS 2.0 entered into force on May 20, 2024. The central change: **mandatory**. Every EU member
state must provide citizens with a European Digital Identity Wallet (EUDI Wallet) by September
2026. Regulated sectors — banking, healthcare, telecommunications — must accept the wallet by
November 2027. The Commission's target: 80% of EU citizens actively using the wallet by 2030.

Key technical and scope upgrades over eIDAS 2014:
- **Wallet architecture**: not just ID, but a secure container for credentials — diplomas,
  driving licences, professional certificates, medical records.
- **Selective disclosure**: Electronic Attribute Attestation (EAA) allows proving a specific
  attribute (e.g., "over 18") without revealing underlying data — technically aligning identity
  with GDPR's data minimization principle.
- **Cross-sector acceptance obligation**: Private sector entities in regulated industries cannot
  reject the wallet. This was absent from eIDAS 2014.
- **Interoperability framework**: defined technical standards for cross-border compatibility,
  addressing the fragmentation that crippled eIDAS 2014.

### Current Status (2025)

As of early 2025: Austria has deployed "Valera," a functional EUDI Wallet ahead of the 2026
deadline. Most other member states are in development. The EU is running six large-scale pilot
programs with over 600 partner organizations testing real-world implementations across use cases
including travel, banking, education credentials, and healthcare. Nordic countries (Sweden's
BankID at ~70% penetration, Denmark's MitID near 100%) have strong national systems but these
are not yet EUDI-compliant wallets — they are precursors.

The 2026 deadline is achievable in principle. The eGovernment Benchmark 2025 found that 81%
of government services already provide secure authentication using eID — but only 45% of
cross-border services accept IDs from other member states. That 36-point gap is the baseline
problem EUDI must close.

### Can eIDAS Be the Foundation for Broader Digital Integration?

Architecturally, yes — but only if implementation proceeds differently than eIDAS 2014. The
wallet is a credential container that could support not just authentication but authorization
across education, healthcare, social services, and banking. The selective disclosure model
(proving an attribute without revealing its source data) is actually technically superior to
most existing identity systems. The risk is identical to 2014: opt-out implementation,
fragmented national interpretations, and the 2026 deadline slipping to 2028 by which point
the conversation restarts.

---

## GDPR: Feature or Barrier?

### What GDPR Regulates

The General Data Protection Regulation (2016/679), in effect since May 25, 2018, establishes
rights for EU data subjects (access, erasure, portability, objection) and obligations for data
controllers and processors. Core principles: **purpose limitation** (data collected for a
specific purpose), **data minimization** (only collect what is necessary), **storage limitation**
(retain only as long as needed), and **security by design**.

### Enforcement Track Record

By March 1, 2025: **2,245 documented fines totaling €5.65 billion** across EU member states.
2024 alone: €1.2 billion in fines — a 33% year-on-year fall, the first decline since GDPR
came into effect, possibly reflecting maturing compliance practices.

The largest single fine: **€1.2 billion** against Meta Platforms Ireland (May 2023) for
transferring EU user data to the United States without adequate protection mechanisms.
Other notable fines: Amazon €746 million (Luxembourg, 2021), LinkedIn €310 million (Ireland,
October 2024), WhatsApp €225 million (Ireland, 2021).

Enforcement is geographically concentrated. Spain leads in volume (932 fines), primarily
through high-frequency, lower-amount enforcement. Ireland's DPC imposes fewer but larger fines
because most US tech companies are domiciled in Ireland for EU tax purposes — giving Dublin
regulatory jurisdiction over Alphabet, Meta, Apple, and Microsoft in the EU. This "Irish
bottleneck" has been a persistent criticism: the DPC handles cases for companies with combined
global revenue exceeding $1 trillion.

### GDPR and Digital Government: Barrier or Feature?

This is the central tension for the manifest's digitalization argument. GDPR's data minimization
principle — "adequate, relevant, and limited to what is necessary" — creates friction with
centralized digital government that historically works by accumulating comprehensive citizen
records and then filtering.

**As barrier**: Machine learning systems, fraud detection, and proactive public services require
data aggregation that data minimization actively discourages. Academic literature notes that
"data minimisation may limit the innovative potential of data-intensive technologies, such as
machine learning and artificial intelligence." A joined-up digital welfare system that
cross-references tax, healthcare, and employment data — Estonia's model — requires handling
data that GDPR's purpose limitation would require explicitly justifying for each use case.

**As feature**: The EUDI Wallet's selective disclosure architecture (proving "over 18" without
revealing birthdate) is technically a GDPR compliance mechanism that also makes digital identity
more private and more adoptable. GDPR forced European digital services to build data hygiene
into architecture — which arguably produces more secure government systems than the US
approach of collecting everything and litigating breaches afterwards.

**The unresolved tension**: The EU has not published guidance on how GDPR applies to an
integrated EU-wide government service layer. Estonia navigated this by building X-Road as a
privacy-by-design peer-to-peer exchange where data never resides centrally — each agency owns
its database, queries go through logged, auditable API calls. An EU-scale X-Road could be
GDPR-compliant by design. The problem is not GDPR itself but the absence of a technical
architecture that embeds GDPR compliance from the ground up.

### The Irish Enforcement Problem

A structural issue rarely discussed: GDPR enforcement against government digital failures
barely exists. The 2,245 fines are overwhelmingly against private companies. EU member states
that maintain paper-based services, fail to interconnect databases, or leave citizens without
digital access are not GDPR violations — they are just administrative inertia. GDPR is a
privacy law, not a digitalization mandate. This distinction matters: Europe has a strong
enforcement regime for private data handling, and near-zero accountability mechanism for
governments that fail to build digital services.

---

## Digital Services Act and Digital Markets Act

### Digital Services Act (2022): Platform Accountability, Not Digital Infrastructure

The DSA (Regulation EU 2022/2065) became applicable to Very Large Online Platforms (VLOPs)
and Very Large Online Search Engines (VLOSEs) in August 2023, and to all intermediary services
from February 2024. It regulates: **platform liability** (conditional, not absolute immunity),
**content moderation** (transparency in decisions, appeals mechanisms), **algorithmic
transparency** (risk assessments for recommender systems), and **researcher data access**.

As of November 2025, the Commission has opened 14 investigations into DSA compliance. The
first non-compliance fine: **€120 million against X** (December 2025) for deceptive design,
ad transparency violations, and blocking researcher access. Platforms under investigation
include AliExpress, Facebook, Instagram, TikTok, Temu, and pornographic platforms.
Enforcement penalties can reach **6% of global annual turnover**.

### DSA vs. US Section 230: Incompatible Philosophies

The comparison reveals a fundamental architectural difference. **Section 230** (US Communications
Decency Act, 1996) provides near-absolute liability immunity to platforms for third-party content,
imposing no affirmative obligations. Innovation-by-permitting, lawsuit-shielded. **The DSA**
imposes tiered affirmative obligations: smaller platforms get basic requirements; VLOPs face
proactive risk assessments, algorithmic audits, and data access for researchers. The DSA
maintains conditional liability — once notified of illegal content, platforms must act or
become liable.

Academic analysis characterizes these as "predicated on fundamentally incompatible theories of
harm — systemic risk versus individual tort." Section 230 asks: "Was the platform the author?"
DSA asks: "Did the platform's design create systemic harm?" This is a meaningful distinction
for AI deployment: DSA requires VLOPs to assess how AI recommendation systems affect fundamental
rights, radicalization risk, and electoral interference — obligations that simply do not exist
in US law.

### DSA and AI

The AI Act (in force August 2024, GPAI rules effective August 2025) and DSA interact directly:
platforms deploying AI recommendation systems face overlapping obligations. The AI Office
has exclusive enforcement authority over AI systems deployed through VLOPs — creating a
joint DSA/AI Act enforcement track. The Commission concluded in its Article 33 review that
"in most cases, the DSA and surrounding frameworks operate in mutually reinforcing ways" with
identified provisions where coordination would benefit from clarification.

### Digital Markets Act (2022): Gatekeeper Regulation

The DMA (Regulation EU 2022/1925) designated six companies as "gatekeepers" — Alphabet,
Amazon, Apple, ByteDance, Meta, and Microsoft — covering 22 core platform services. Key
obligations: interoperability for messaging services, sideloading on mobile platforms,
self-preferencing prohibition, data sharing with business users.

First enforcement results in 2025: **Apple fined €500 million** for App Store steering
violations. Meta fined **€200 million** for its "pay or consent" model. Google faces
investigation for demoting media publishers' content in search results. Market impact
so far: independent browsers saw significant EU user growth after Apple was required to
offer browser choice screens — Vivaldi, Brave, and Ecosia all reported user increases.

**The compliance problem**: The Commission itself acknowledged that "malicious compliance is
a real issue" — gatekeepers technically satisfy obligations while undermining their intent.
Apple's browser choice screen technically presents options but was designed with a friction-heavy
UX that reduces actual switching. This is the fundamental challenge of rules-based regulation
against companies with superior technical knowledge and legal resources.

**Digital sovereignty relevance**: As of 2021, US cloud providers held **65% of the EU cloud
market**; EU-headquartered companies held under 16%. The DMA does not directly address cloud
concentration — it targets consumer-facing platform markets. The Draghi Report (September 2024)
identified cloud dependency as an existential risk and proposed the EU Cloud and AI Development
Act to create a unified framework for EU cloud and AI infrastructure.

---

## Digital Decade 2030: Targets and Reality

The Digital Decade Policy Programme (Decision EU 2022/2481) set four target areas for 2030:

### 1. Digital Skills

**Target**: 80% of EU population (aged 16–74) with at least basic digital skills.
**ICT specialists target**: 20 million.
**2025 reality**: 55.6% have basic digital skills — a 24.4-point gap requiring roughly 3
points per year. At current trajectory, the Commission's own 2025 State of the Digital Decade
report projects the EU will reach approximately **70–75%** by 2030, not 80%. ICT specialists:
on track for ~12 million — **40% below target**. Women in ICT: 19.5%, flat for three years.

### 2. Digital Infrastructure

**Target**: 100% Gigabit coverage, 100% 5G coverage of populated areas.
**2025 reality**: 82.5% Gigabit coverage. 5G deployment lagging in rural areas.
The Gigabit Infrastructure Act entered into force May 2024, fully applicable November 2025,
addressing deployment barriers (permitting, coordination between infrastructure owners).
Infrastructure is the closest-to-target category.

### 3. Business Digitalization

**Target**: 75% of EU companies using cloud, AI, or big data; 90% of SMEs reaching at least
basic digital intensity.
**2025 reality**: Progress reported but specific percentages unavailable. AI adoption increasing
among larger companies. SME digital intensity significantly behind large enterprises.

### 4. Digital Public Services

**Target**: 100% of key services for citizens and businesses available online; 100% of
citizens able to access their electronic health records; EU digital identity deployed and used
by 80% of citizens.
**2025 reality**:
- Citizens' key services online: **82.3%** (target: 100%)
- Business key services online: **86.2%** (target: 100%)
- Cross-border services accepting IDs from other member states: **45%** (target: 100%)
- Electronic health records: Unknown. No uniform EU-wide figure. National fragmentation.
- EUDI wallet adoption: Pre-deployment. Mandatory deadline: September 2026.

The Commission's own 2025 projection: business services will reach ~93.8 by 2030; citizen
services ~90.9. Both fall short of 100% — meaning the EU's official forecast already
acknowledges missing its own 10-year target.

### Overall Assessment of Digital Decade Alignment

The manifest argues EU needs radical digitalization. The Digital Decade targets are directionally
aligned — ambitious targets in all four areas. The execution problem is threefold:

1. **Non-binding at national level**: National governments commit to "taking account of"
   Digital Decade targets in their national strategic roadmaps — they are not legally enforceable.
2. **No unified execution infrastructure**: Each member state builds its own implementation.
   There is no EU-level service delivery layer — no shared identity system, no common case
   management platform, no interoperable healthcare record.
3. **Fragmentation is structural, not accidental**: The eGovernment Benchmark 2025 found that
   81% of government services offer eID-based authentication, but only 45% of cross-border
   services accept credentials from other member states. Building 27 national systems that work
   within each country but not across borders is the defining pattern.

---

## The Missing Layer: What EU Has vs. What It Needs

### What Exists

The EU has built, over 2014–2024, a complete regulatory stack:

| Layer | Regulation | Purpose |
|-------|-----------|---------|
| Identity | eIDAS 2.0 (2024) | Cross-border digital identity |
| Privacy | GDPR (2018) | Data subject rights, processing rules |
| Platform accountability | DSA (2022) | Platform liability, content moderation |
| Market power | DMA (2022) | Gatekeeper obligations, interoperability |
| AI governance | AI Act (2024) | Risk-based AI obligations |
| Infrastructure goal | Digital Decade (2022) | 2030 targets for skills, connectivity, services |
| Cross-border services | Single Digital Gateway (2018/2023) | 21 cross-border procedures online |

This is a complete framework on paper. No other jurisdiction has anything comparable in
breadth or coherence.

### What Is Missing

**1. The shared services layer**

Estonia's X-Road is a data exchange backbone — a peer-to-peer infrastructure that connects
government databases without centralizing them. The EU has no equivalent. The Single Digital
Gateway's OOTS (Once-Only Technical System, launched December 2023) covers 21 administrative
procedures. Estonia's X-Road connects thousands of services. The gap is not a lack of ambition;
it is a lack of investment in shared technical infrastructure.

**2. Cross-border identity that actually works**

The eGovernment Benchmark 2025 finding — 81% of services use eID, but only 45% of cross-border
services accept IDs from other member states — is the clearest single metric of EU digital
fragmentation. The regulation (eIDAS) mandating cross-border recognition exists. The technical
infrastructure to enforce it in practice does not yet exist at scale. EUDI wallets are supposed
to fix this by 2026–2027.

**3. A mandate for unified digital government, not just cross-border rules**

The manifest's Pillar 2 (digital government) requires not just cross-border recognition but
integrated services: filing taxes once across EU residency changes, healthcare records following
the patient, education credentials recognized automatically. These require not just identity
interoperability but data exchange standards, shared service definitions, and a political
commitment to treat EU-level digital services as a common infrastructure investment —
equivalent to roads or the power grid.

**4. Cloud independence**

65% US cloud market share for EU data is not merely a sovereignty concern — it is an
architectural dependency that makes an integrated EU digital government hostage to decisions
made in Seattle, Redmond, and Mountain View. The Draghi Report proposed the Cloud and AI
Development Act but as of 2025 this is in early legislative stages.

**5. Enforcement of digitalization, not just privacy**

The EU has created a powerful enforcement apparatus for privacy violations (GDPR fines) and
platform compliance (DSA, DMA). There is no equivalent mechanism for governments that fail
to digitize, fail to accept cross-border credentials, or fail to share data across ministries.
Accountability flows one way: towards the private sector.

---

## Implications for EU Reform Argument

The zentala.eu manifest argues that Europe needs a fundamental shift — not more regulation
but unified execution of what has already been agreed. This research supports that argument
with specific data:

**The regulatory foundation exists and is substantial**. GDPR, eIDAS 2.0, DSA, DMA, Digital
Decade — taken together, this is the most comprehensive digital governance framework on the
planet. No other jurisdiction has legally enforceable cross-border digital identity, mandatory
platform risk assessments, and quantified 10-year digital transformation targets simultaneously.

**The execution gap is large and measurable**. The 36-point gap between domestic eID acceptance
(81%) and cross-border eID acceptance (45%) is not a regulatory failure — it is an implementation
failure. The Digital Decade's own forecasts already show 2030 targets will be missed. The €800
billion investment gap identified by Draghi is not a governance problem but a political economy
problem: member states have not prioritized digital public infrastructure at the scale that roads,
rail, and energy networks received in the 20th century.

**GDPR is not the blocker, but its absence from the execution toolbox is**. The argument that
GDPR prevents digitalization conflates a privacy framework with a service delivery constraint.
Estonia operates one of the world's most sophisticated digital governments while complying with
GDPR — by building privacy into architecture (logged, auditable, consent-based data exchange)
rather than treating privacy and service delivery as opposites. The missing EU-level piece is
not a GDPR carve-out but a technical architecture standard that makes privacy-by-design the
default for government services.

**The mandate needs to shift from regulation to infrastructure**. The EU's political capital
has been spent on rules — defining what platforms cannot do, what data cannot be used for, what
identity systems must look like. The next phase requires investment in shared infrastructure:
a cross-EU data exchange backbone (EU X-Road), the EUDI wallet actually deployed at scale, a
shared cloud infrastructure not dependent on US hyperscalers. Rules without infrastructure
produce the current result: 27 well-regulated but nationally fragmented digital governments
that cannot talk to each other.

The manifest's central argument — that EU reform requires treating digital infrastructure the
way previous generations treated physical infrastructure — is supported by the data. The EU
has spent a decade writing the building code. The building has not been built.

---

## Sources

- [eIDAS 2.0 Regulation (EU 2024/1183) — European Commission](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/915931811/The+European+Digital+Identity+Regulation)
- [EUDI Wallet Status 2025 — asquared.company](https://asquared.company/en/blog/digital-identity-solutions-in-europe-2025-status-quo-1096/)
- [eIDAS 2.0 key legal changes — Signaturit](https://www.signaturit.com/blog/eidas-2-regulation/)
- [Differences between eIDAS and eIDAS 2 — Viafirma](https://www.viafirma.com/en/differences-between-eidas-and-eidas-2/)
- [European Parliament brief on eIDAS revision (2022)](https://www.europarl.europa.eu/RegData/etudes/BRIE/2022/699491/EPRS_BRI(2022)699491_EN.pdf)
- [GDPR Enforcement Tracker Report 2024/2025 — CMS Law](https://cms.law/en/int/publication/gdpr-enforcement-tracker-report/numbers-and-figures)
- [GDPR Enforcement Tracker — fines database](https://www.enforcementtracker.com/)
- [GDPR fines total €1.2bn in 2024 — Infosecurity Magazine](https://www.infosecurity-magazine.com/news/gdpr-fines-total-2024/)
- [DLA Piper GDPR Fines and Data Breach Survey January 2025](https://www.dlapiper.com/en/insights/publications/2025/01/dla-piper-gdpr-fines-and-data-breach-survey-january-2025/)
- [LinkedIn hit with €310M fine — SiliconANGLE](https://siliconangle.com/2024/10/24/linkedin-hit-334m-fine-violating-gdpr/)
- [State of the Digital Decade 2025 Report — European Commission](https://digital-strategy.ec.europa.eu/en/library/state-digital-decade-2025-report)
- [2025 State of the Digital Decade: renewed action urged — EC](https://digital-strategy.ec.europa.eu/en/news/2025-state-digital-decade-report-urges-renewed-action-digital-transformation-security-and)
- [Europe's digital decade: 2030 targets — European Commission](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/europes-digital-decade-digital-targets-2030_en)
- [Digital Decade 2025: eGovernment Benchmark — European Commission](https://digital-strategy.ec.europa.eu/en/library/digital-decade-2025-egovernment-benchmark-2025)
- [eGovernment Benchmark 2025 — Capgemini](https://www.capgemini.com/insights/research-library/egovernment-benchmark-report-towards-digital-government/)
- [Digital Services Act — European Commission](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act)
- [DSA vs Section 230 comparative analysis — ResearchGate](https://www.researchgate.net/publication/397696404_RESPONSIBILITY_OF_ONLINE_PLATFORMS_FOR_THIRD-PARTY_CONTENT_A_COMPARATIVE_ANALYSIS_OF_THE_EU_DIGITAL_SERVICES_ACT_AND_THE_US_SECTION_230)
- [DSA first fine against X — European Commission](https://commission.europa.eu/news-and-media/news/digital-services-act-keeping-us-safe-online-2025-09-22_en)
- [AI Act and DSA interplay — European Parliament (2025)](https://www.europarl.europa.eu/RegData/etudes/STUD/2025/778575/ECTI_STU(2025)778575_EN.pdf)
- [Digital Markets Act — EU official portal](https://digital-markets-act.ec.europa.eu/index_en)
- [DMA enforcement 2025: gatekeepers — CSIS](https://www.csis.org/blogs/charting-geoeconomics/guarding-gates-digital-markets-act-and-lessons-ex-ante-regulation)
- [What DMA has delivered — TechPolicy.Press](https://www.techpolicy.press/what-europes-digital-markets-act-has-delivered-so-far-and-what-comes-next/)
- [Draghi Report: EU digital sovereignty — Herbert Smith Freehills](https://www.hsfkramer.com/notes/data/2024-posts/a-new-direction-for-europe-draghi-report-focuses-on-technology-sovereignty)
- [The Future of European Competitiveness (Draghi Report) — European Sources Online](https://www.europeansources.info/record/the-future-of-european-competitiveness/)
- [EU cloud market dependence — Nextcloud analysis of Draghi Report](https://nextcloud.com/blog/the-draghi-report-how-europe-can-become-fit-for-a-competitive-digital-future/)
- [Cross-border digital government gap — Tony Blair Institute](https://institute.global/insights/tech-and-digitalisation/digital-government-europe-pursuit-cross-border-functionality)
- [EU interoperability gap — JRC Science Hub (2024)](https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/assessing-interoperability-digital-public-services-eu-sooner-better-2024-05-24_en)
- [Single Digital Gateway (OOTS) — European Commission](https://reforms-investments.ec.europa.eu/projects/single-digital-gateway_en)
- [GDPR and data minimization for government services — SpruceID](https://blog.spruceid.com/zerotrust-what-is-data-minimization-and-why-does-it-matter-for-government-services/)
- [Gigabit Infrastructure Act — European Commission](https://digital-strategy.ec.europa.eu/en/policies/gigabit-infrastructure-act)
