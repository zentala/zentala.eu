---
title: "Environmental Sustainability & Digital Infrastructure (Green Digitalization)"
description: "Data-driven assessment of digital infrastructure's environmental footprint: data centers, chip manufacturing, e-waste, blockchain energy, and whether digital government is a net climate positive."
tags: ["sustainability", "green-tech", "data-centers", "e-waste", "research"]
author: zentala
---

# Environmental Sustainability & Digital Infrastructure (Green Digitalization)

## Summary

Digital infrastructure is not carbon-neutral — and the AI boom is making it worse before it
gets better. Global data centers consumed ~415 TWh in 2024 (1.5% of world electricity); that
figure is projected to nearly double to 945 TWh by 2030 driven by AI acceleration. Yet the
picture is not uniformly bleak. Leading hyperscalers have achieved meaningful efficiency gains
(Google's fleet PUE hit 1.09 in 2024), renewable procurement is scaling fast, and Ethereum's
2022 switch from Proof-of-Work to Proof-of-Stake cut blockchain energy use by ~99.95%. The EU
is tightening policy — mandatory sustainability reporting for large data centers started
September 2024 under the revised Energy Efficiency Directive, with a full Data Centre Energy
Efficiency Package expected in 2026. For zentala.eu's argument that Europe needs bold digital
transformation: the sustainability challenge is real, but solvable with the right policy levers.
Digitalization also generates measurable emission savings — in transport optimization, paperless
government, and reduced physical mobility — that, when properly accounted for, tip the net
balance positive.

---

## Key Findings

- Global data centers consumed ~415 TWh in 2024, ~1.5% of world electricity; projected to
  reach 945 TWh by 2030 (IEA, 2025).
- Google's fleet-average PUE dropped to 1.09 in 2024, vs. an industry average of 1.56 — roughly
  84% less overhead energy per unit of IT equipment.
- Hyperscaler renewable energy coverage reached ~88% among the top 20 in 2023; all are targeting
  100% by 2030. The EU data center sector as a whole sits at ~27% renewables globally.
- EU WEEE collection rate was 37.5% in 2023, well below the 65% target; only 3 member states
  hit the target.
- TSMC emitted ~15 million tonnes CO₂e in 2020; Samsung's chip plants emitted ~12.9 million
  tonnes; the global semiconductor industry is projected to emit 86 million tonnes CO₂e by 2030.
- Ethereum's post-Merge energy use fell from ~83 TWh/year to ~6.56 GWh/year — a >99.9%
  reduction; Bitcoin still consumes ~87–150 TWh/year on Proof-of-Work.
- Fully digitalizing government trade procedures saves 32–86 kg CO₂e per transaction (UNCTAD);
  digital invoicing cuts emissions by 63% vs. paper.
- Digital technologies have the potential to help other industries reduce global CO₂ emissions
  by 20% by 2030, primarily through transport optimization, industrial efficiency, and smart
  buildings (DigitalEurope / GeSI SMARTer2030).

---

## Q1. Energy Footprint of Data Centers

### Global Scale

The IEA's 2025 "Energy and AI" report pegs global data center electricity consumption at
approximately **415 TWh in 2024**, representing about 1.5% of total global electricity demand.
Growth has averaged 12% per year over the past five years. The United States accounts for 45%
of that total, China 25%, and Europe roughly 15%.

The US alone consumed 183 TWh in data centers in 2024, representing over 4% of US national
electricity use. Lawrence Berkeley National Laboratory's 2024 report projects US data center
consumption to grow 133% to 426 TWh by 2030.

### kWh per GB: What the Data Actually Shows

Specific per-GB energy figures vary widely by workload type and are not systematically
disclosed by cloud providers at that granularity. What the public data does show:

- A standard **Google search query** uses approximately **0.0003 kWh** (0.3 Wh).
- An **AI inference query** (e.g., ChatGPT) uses approximately **0.3–0.34 Wh** — roughly
  10x a Google search.
- **Hyperscale data centers** achieve PUE (Power Usage Effectiveness) ratings as low as
  **1.09** (Google, 2024), meaning 9 cents of overhead per dollar of compute. The industry
  average PUE is 1.56.

The absence of standardized per-GB disclosures from Google, AWS, and Azure is itself a policy
gap — one the EU Energy Efficiency Directive's 2024 reporting mandate is designed to address.

### Provider Efficiency Comparison

| Provider | Fleet PUE (2024) | Renewable Energy % | Net-Zero Target |
|----------|------------------|--------------------|-----------------|
| Google   | 1.09             | 66% (hourly CFE)   | 2030            |
| Microsoft Azure | ~1.12–1.15 (est.) | 100% matched (annual) | 2030 (carbon negative) |
| AWS      | ~1.14 (est.)     | 100% matched (annual) | 2025 (100% renewable match) |

Note: Microsoft and AWS figures are estimates drawn from sustainability reports; provider
reporting methodologies differ (annual matching vs. hourly carbon-free energy).

---

## Q2. Renewable Energy in Data Centers (Trend 2020–2025)

Renewable energy share has grown substantially, though the baseline differs sharply between
hyperscalers and the broader industry.

**Global data centers:** Renewables supply approximately **27% of electricity consumed by
data centers globally** as of 2024–2025 (IEA). In the US specifically, renewables cover
roughly 24% of data center electricity.

**Top 20 hyperscalers:** This cohort is far ahead of the industry average — **88% low-carbon
energy in 2023**, targeting **100% by 2030**. Amazon, Microsoft, Meta, and Google account for
98.7% of tracked large-scale corporate Power Purchase Agreements (PPAs) in the US, with a
combined 84 GW under contract — a figure that grew 69% in just 12 months.

**Key milestones by company:**
- **Meta**: achieved 100% renewable energy for operations in 2020.
- **Amazon**: 100% renewable match across global operations, with 20+ GW of capacity across
  500+ projects globally as of 2024. Targeting hourly (not just annual) matching by 2030.
- **Google**: 66% hourly carbon-free energy (CFE) in 2024, up from 64% in 2023. Nine of
  its 20 grid regions already exceed 80% CFE. Data center emissions fell 17% despite power
  use rising 27% in 2024 — the first year-on-year emissions reduction since 2019.

**The gap between leaders and the industry:** The hyperscaler figures mask a long tail of
colocation and enterprise data centers running well below 30% renewable. EU policy is targeting
this gap through mandatory reporting and procurement criteria.

---

## Q3. Chip Manufacturing: Carbon Footprint

### Total Emissions by Manufacturer

Chip fabrication is extraordinarily energy-intensive. Total annual emissions from the three
leading foundries:

| Company | Year | Total CO₂e Emissions |
|---------|------|----------------------|
| TSMC    | 2020 | ~15 million tonnes   |
| Samsung | 2020 | ~12.9 million tonnes |
| Intel   | 2020 | ~2.88 million tonnes |

TSMC's emissions have grown from 6 million tonnes (2017) to 8 million tonnes (2019) to
15 million tonnes (2020), tracking its rapid capacity expansion to advanced nodes.

### Industry Trajectory

The global semiconductor industry is projected to emit **86 million tonnes CO₂e by 2030**
and consume **237 TWh of electricity** — roughly equivalent to Australia's 2021 total
electricity consumption (Greenpeace East Asia analysis).

Samsung's chip manufacturing alone is projected to exceed **32 million tonnes CO₂e annually
by 2030**.

### Per-Chip Figures

No major foundry publicly discloses carbon footprint on a per-chip (per-die) or per-wafer
basis as a standard sustainability metric. TSMC's 2024 Sustainability Report covers overall
facility emissions and water intensity per wafer but does not publish a single normalized
"kg CO₂e per chip" figure. This is a material transparency gap: chips differ by 100x in
area and complexity, making aggregate company figures difficult to translate to product-level
accountability.

TSMC's 2024 report highlights an indirect metric: its chips enabled savings of **141 billion
kWh of electricity globally** (and ~59 million tonnes of CO₂ avoided) through energy-efficient
end products — a "carbon handprint" claim that illustrates the net benefit of semiconductor
miniaturization but does not substitute for supply-side manufacturing footprint disclosure.

**Commitments:** All three companies target net-zero scope 1+2 emissions by 2040–2050. Intel
targets scope 1+2 net-zero by 2040, scope 3 by 2050. TSMC targets net-zero by 2050.

---

## Q4. E-Waste: EU WEEE Data

### The Collection Gap

The EU WEEE Directive mandates that member states collect at least **65% of WEEE** generated
annually (target operative since 2019). The actual 2023 result:

- **EU average WEEE collection rate: 37.5%** — barely above half the target.
- Only **3 member states** (Bulgaria, Slovakia, Latvia) hit the 65% target in 2023.
- In 2023, **11.6 kg of e-waste per person** was officially collected in the EU.
- But **32.2 kg of new electrical and electronic equipment per person** was put on the market.

The 20+ kg gap per person represents devices either still in use, being hoarded at home,
handled via informal channels, or lost to unmonitored waste treatment — including export to
third countries where recovery rates are far lower.

### Recycling vs. Landfill

The e-waste recycling rate across the EU in 2023 was **30.8%** — compared to 67.5% for
packaging and 47.7% for municipal waste. E-waste is performing worst among major waste
categories.

Globally, the picture is even worse. The Global E-waste Statistics Partnership estimates that
only about 17–22% of e-waste generated globally is formally recycled. The majority ends up
in landfills or informal processing operations, particularly in West Africa and Southeast Asia,
where burning circuit boards to recover metals releases toxic fumes and heavy metals into soil
and groundwater.

### The 2024 WEEE Directive Amendment

The EU amended the WEEE Directive in 2024, strengthening reporting obligations and cost-sharing
rules. The amendment is designed to support the EU's transition to a sustainable electronics
economy, but enforcement and collection infrastructure remain the binding constraints — not
legislative ambition.

---

## Q5. Is Digital Infrastructure Getting More Efficient?

### The Historical Record: Koomey's Law

The period from 2000 to 2015 saw dramatic infrastructure efficiency gains:

- **2000–2005**: US data center electricity use doubled, driven by early internet expansion.
- **2005–2010**: Growth slowed to ~56%, already much lower than the prior doubling.
- **2010–2020**: Energy use grew very slowly relative to computing output, due to advances
  in server virtualization, liquid cooling, and the rise of hyperscale architecture.
- **Koomey's Law** (named after researcher Jonathan Koomey) holds that the energy efficiency
  of computing doubles roughly every 18 months — mirroring Moore's Law in transistor density
  but applied to performance-per-watt.

This efficiency trend was real and significant: global computing output grew by orders of
magnitude while electricity consumption grew modestly.

### PUE Trend

Average data center PUE improved from **~2.5 in 2007** to **~1.65 in 2013** — a sharp gain.
From 2013 to 2022, improvement plateaued at ~1.55–1.59 industry-wide, reflecting diminishing
returns at older facilities. Google's hyperscale fleet hit **1.09 in 2024**, but many enterprise
and older colocation facilities remain above 1.5.

### The AI Inflection

The post-2022 era marks a structural break. AI workloads — particularly large language model
training and inference — are:

1. **Compute-intensive at a new scale**: GPU clusters running LLM training can sustain
   100%+ utilization for weeks; traditional enterprise workloads average 10–20%.
2. **Growing faster than efficiency gains**: The IEA projects data center electricity demand
   to grow 15% per year 2024–2030, four times faster than all other sectors combined.
3. **Driving new chip designs**: Accelerated computing (GPUs, TPUs) has better
   performance-per-watt than general-purpose CPUs for AI workloads, but total energy still
   rises because volume grows faster.

**Verdict**: Digital infrastructure is more efficient per unit of compute than it was 15 years
ago. But absolute energy consumption is rising sharply due to AI demand. Efficiency gains are
no longer outpacing volume growth — for the first time in the modern data center era.

---

## Q6. How Can the EU Mandate Green Digital Infrastructure?

The EU has four primary policy levers, all either active or in development:

### 1. Mandatory Sustainability Reporting (Active from Sept 2024)

The revised **Energy Efficiency Directive (EED)**, effective September 15, 2024, requires all
data centers with IT power demand of 500 kW or more to report sustainability metrics including:
- PUE (Power Usage Effectiveness)
- Water Usage Effectiveness (WUE)
- Energy reuse factor
- Renewable energy share

This makes the EU the first major economic bloc to mandate data center emissions reporting at
scale. The data will feed into a European data center database and inform future binding limits.

### 2. PUE Standards (In Development)

A Draft Delegated Act under the EED proposes technical requirements including PUE thresholds
and limits on energy consumption for servers and cooling systems. The EU is expected to propose
a **Data Centre Energy Efficiency Package in Q1 2026** setting binding PUE standards and
carbon-neutrality targets for 2030.

### 3. Renewable Energy Mandates

**RED III (Renewable Energy Directive III)** sets a legally binding EU target of at least
**42.5% renewable energy** in gross final energy consumption by 2030, with a 45% aspiration.

Under **EU Green Public Procurement (GPP) Criteria**, data centers serving public sector
contracts must use **100% renewable energy** verified under EN 50600-4-3. This procurement
lever can drive adoption faster than economy-wide regulation.

### 4. WEEE and Circular Economy

The amended WEEE Directive (2024) strengthens collection targets and cost-sharing for producer
responsibility. Combined with the **Ecodesign for Sustainable Products Regulation** (ESPR),
the EU is moving toward mandatory repairability requirements, minimum recycled content rules,
and digital product passports — tracking device lifecycle from manufacture to end-of-life.

### Policy Gap: Scope 3 Emissions

Current EU data center policy focuses on operational (scope 1+2) energy. Scope 3 emissions —
including embodied carbon in servers, chips, and cooling infrastructure — remain unregulated.
A lifecycle assessment (LCA) mandate would extend accountability upstream into chip supply
chains.

---

## Q7. Blockchain Energy: PoW vs. PoS

### Bitcoin (Proof-of-Work): The Ongoing Cost

Bitcoin continues to use Proof-of-Work consensus, requiring miners to compete for block rewards
through computational effort. Current estimates from the Cambridge Centre for Alternative
Finance (CCAF) and other sources:

- **Bitcoin energy consumption: ~87–150 TWh per year** (depending on source and year).
- For comparison, that is comparable to Poland's total annual electricity consumption
  (~140 TWh).
- Bitcoin's share of renewable energy in mining has grown — **over 50% of Bitcoin mining
  uses renewables** as of recent estimates, with stranded natural gas and hydro making up
  much of that share. But even 50% renewable still means 40–75 TWh of non-renewable consumption.

### Ethereum (Proof-of-Stake): The Merge as a Case Study

In September 2022, Ethereum completed "the Merge" — switching from PoW to PoS. The result:

- **Energy consumption fell by approximately 99.95%**.
- From ~83 TWh per year (pre-Merge) to approximately **6.56 GWh per year** (post-Merge).
- The Ethereum network's annual energy use is now comparable to the Eiffel Tower's consumption
  (~6.70 GWh/year).
- Pre-Merge, Ethereum's cumulative lifetime energy use was equivalent to Switzerland's annual
  electricity consumption for a year (CoinDesk, 2023).

### PoW vs. PoS: Climate Compatibility

| Metric | Bitcoin (PoW) | Ethereum (PoS) |
|--------|--------------|----------------|
| Annual energy use | ~87–150 TWh | ~6.56 GWh |
| Energy per transaction | ~700–1,400 kWh | ~0.03 kWh |
| Comparison | ~Poland's annual electricity | ~Eiffel Tower |
| Renewable share | ~50%+ | N/A (validators use minimal energy) |
| Climate compatibility | Problematic at scale | Compatible |

**The verdict on blockchain and climate goals**: PoW blockchain (Bitcoin) is fundamentally
incompatible with aggressive decarbonization targets at scale. PoS systems like Ethereum
post-Merge are compatible — their energy overhead is negligible. The EU's implicit policy
stance — allowing crypto asset services but with MiCA regulation not mandating PoS — leaves
the PoW question unresolved. A mandate requiring PoS for any blockchain infrastructure
seeking regulatory recognition would be a high-leverage, low-cost policy move.

---

## Q8. Net Assessment: Does Digital Government Save More Than It Costs?

### The Savings Side

**Paperless trade and government transactions:**
UNCTAD research quantifies that fully digitalizing regulatory procedures around trade saves
**32–86 kg of CO₂e per end-to-end transaction** — primarily through reduced office space,
commuting, and physical document movement.

**Digital invoicing:** A Finnish logistics study found that digital invoices produce **63%
fewer greenhouse gas emissions** per invoice versus paper equivalents.

**Avoided printing:** The Jammu & Kashmir state government study (2018–2025) documented
avoidance of 405.7 million pages since 2021, with over 62,000 tonnes of CO₂ avoided from
reduced physical movement of files.

**Transport optimization:** Digital technologies (route planning, connected vehicles, MaaS
platforms) can reduce CO₂ emissions in transport substantially. DigitalEurope and GeSI
project that digital technologies could help other industries achieve a **20% reduction in
global CO₂ emissions by 2030** — roughly ten times the digital sector's own footprint.

**Remote work and reduced commuting:** COVID-demonstrated that large-scale digital work
infrastructure reduces urban transport emissions, though rebound effects and location shifts
complicate the long-run calculus.

### The Cost Side

**Data center electricity** (~415 TWh globally in 2024) is the primary direct cost.
Digital government specifically is a fraction of this total — but the AI-powered services
that would underpin smart government (predictive permitting, AI welfare assessment, automated
document processing) carry AI inference costs 10x higher per query than conventional search.

**Embodied carbon in devices:** Governments issuing citizen-facing digital services require
hardware — smartphones, tablets, kiosks — whose manufacturing footprint must be counted.

**Rebound effects:** Research shows that digital governance "promotes the low-carbon transition
in the short term, but may hinder it in the long term" through income and demand effects —
efficiency gains free resources that get spent on higher-carbon activities.

### Net Assessment

The balance of evidence favors a net climate positive for well-designed digital government:

1. **Scope is decisive**: A government that moves 100 million paper-form transactions per year
   to digital processing saves orders of magnitude more CO₂ than its servers consume.
2. **Transport is the key multiplier**: Smart mobility and route optimization dwarf data center
   costs as a source of digital climate benefit.
3. **The AI caveat**: If digital government becomes AI-intensive (LLM-driven services at scale),
   energy costs rise significantly and the margin narrows.
4. **Renewable sourcing matters**: Government cloud procured from data centers on 100% renewable
   energy approaches carbon-neutrality on operational emissions; government cloud on coal-heavy
   grids closes the gap.

The academic literature (ScienceDirect, 2025; Nature, 2025) confirms the direction: digital
governance empirically reduces carbon emissions across a global sample of countries, with the
caveat that long-run gains require the digital infrastructure itself to run on clean energy.

---

## Implications for EU Reform Argument

The zentala.eu manifest argues that Europe needs ambitious digital transformation. The
environmental evidence does not undermine this — it clarifies the conditions under which it
holds:

**Digital transformation is a net climate positive — with conditions:**

1. **It must be powered by renewables.** Digital infrastructure running on fossil energy is
   not a climate argument. The EU's competitive advantage is its renewable energy buildout
   (wind, solar). Hosting digital government in EU-regulated, renewables-mandated data centers
   makes the climate case clean.

2. **It must replace heavier-footprint alternatives.** Paper bureaucracy, physical commuting,
   office buildings, printed documents, and in-person travel all carry carbon costs. Digital
   government systematically reduces these at scale faster than it adds data center load.

3. **E-waste requires a circular economy complement.** The 37.5% WEEE collection rate is a
   policy failure, not a reason to slow digitalization. The solution is stronger WEEE
   enforcement and ESPR-mandated device durability — not fewer devices.

4. **PoW blockchain has no place in EU digital public infrastructure.** Any EU digital identity
   or record-keeping infrastructure built on PoS (or non-blockchain distributed ledger) avoids
   the Bitcoin-scale energy problem entirely.

5. **The AI efficiency frontier is the critical unknown.** If the EU's digital transformation
   agenda relies on AI-intensive services at scale, the energy equation tightens. Policy must
   drive efficiency (PUE standards, carbon-free procurement) and demand-side optimization
   (right-sizing AI usage to task complexity) simultaneously.

The core argument stands: **a Europe that digitizes its government, logistics, and public
services on clean-energy infrastructure saves more carbon than it spends** — and does so
while building competitive advantage in the industries that will define the next 30 years.

---

## Sources

- [IEA — Energy and AI Report 2025: Energy Demand from AI](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)
- [IEA — Global Data Centre Electricity Consumption 2020–2030 (chart data)](https://www.iea.org/data-and-statistics/charts/global-data-centre-electricity-consumption-by-equipment-base-case-2020-2030)
- [Lawrence Berkeley National Laboratory — 2024 US Data Center Energy Usage Report](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)
- [Google — Power Usage Effectiveness (official data center efficiency page)](https://datacenters.google/efficiency/)
- [Google — 2024 Environmental Report (blog post)](https://blog.google/company-news/outreach-and-initiatives/sustainability/2024-environmental-report/)
- [Eurostat — Waste Statistics: Electrical and Electronic Equipment](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Waste_statistics_-_electrical_and_electronic_equipment)
- [European Environment Agency — WEEE Collection Rate Indicator](https://www.eea.europa.eu/en/european-zero-pollution-dashboards/indicators/waste-electrical-and-electronic-equipment-weee-collection-rate-indicator)
- [European Parliament — E-waste in the EU: Facts and Figures](https://www.europarl.europa.eu/news/en/headlines/society/20201208STO93325/e-waste-in-the-eu-facts-and-figures-infographic)
- [White & Case — Data Centres and Energy Consumption: Evolving EU Regulatory Landscape 2026](https://www.whitecase.com/insight-alert/data-centres-and-energy-consumption-evolving-eu-regulatory-landscape-and-outlook-2026)
- [EU Energy Efficiency Directive — Data Center Reporting Requirements (Sept 2024)](https://energy.ec.europa.eu/document/download/5a0e5416-676a-48dc-a20c-14a24a72a127_en)
- [EU Digital Strategy — Green Digital Sector Policy](https://digital-strategy.ec.europa.eu/en/policies/green-digital)
- [Greenpeace East Asia — Semiconductor Industry Electricity Consumption to Double by 2030](https://www.greenpeace.org/eastasia/press/7930/semiconductor-industry-electricity-consumption-to-more-than-double-by-2030-study/)
- [TSMC 2024 Sustainability Report (PDF)](https://esg.tsmc.com/file/public/2024-TSMC-Sustainability-Report-e.pdf)
- [CNBC — TSMC, Samsung and Intel Have a Huge Carbon Footprint](https://www.cnbc.com/2021/11/03/tsmc-samsung-and-intel-have-a-huge-carbon-footprint.html)
- [MDPI — Cleaner Chips: Decarbonization in Semiconductor Manufacturing](https://www.mdpi.com/2071-1050/16/1/218)
- [CoinDesk — Ethereum's Lifetime Energy Use Before the Merge](https://www.coindesk.com/tech/2023/04/26/ethereums-lifetime-energy-use-before-the-merge-equaled-switzerlands-for-a-year/)
- [CoinTelegraph — Bitcoin vs Ethereum Mining Before and After the Merge](https://cointelegraph.com/learn/articles/bitcoin-vs-ethereum-mining)
- [UNCTAD — Quantifying the Environmental Benefits from Paperless Trade Facilitation](https://unctad.org/news/quantifying-environmental-benefits-paperless-trade-facilitation)
- [ScienceDirect — Does Digital Government Reduce Carbon Emissions? (2025)](https://www.sciencedirect.com/science/article/abs/pii/S0301479725010576)
- [Nature / Humanities and Social Sciences Communications — Digital Governance and the Low-Carbon Transition (2025)](https://www.nature.com/articles/s41599-025-05144-9)
- [DigitalEurope — Digital Action = Climate Action: 8 Ideas to Accelerate the Twin Transition](https://www.digitaleurope.org/resources/digital-action-climate-action-8-ideas-to-accelerate-the-twin-transition/)
- [European Environment Agency — Digitalisation Can Support Shifting to Sustainable Transport](https://www.eea.europa.eu/en/newsroom/news/digitalisation-can-support-shifting-to-more-sustainable-transport-in-europe)
- [Azura Consultancy — PUE Trends in Data Centers](https://www.azuraconsultancy.com/power-usage-effectiveness-pue-trends-in-data-centers/)
