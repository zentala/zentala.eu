---
title: "Elderly Care Robotics: Technical Maturity, Costs, and Timeline to EU Deployment"
description: "Research summary on care robots — what exists today, TRL levels, adoption barriers, ROI vs human caregivers, and Japan precedent for EU planning."
tags: ["robotics", "elderly care", "automation", "healthcare", "research"]
author: zentala
---

# Elderly Care Robotics: Technical Maturity, Costs, and Timeline

## Summary

Care robots exist today across five functional categories — monitoring, social/therapeutic, mobility/rehabilitation, logistics, and hygiene. The technology readiness levels range from fully deployed (monitoring sensors, logistics transport) to early commercial (therapeutic companions, rehabilitation exoskeletons) to still-experimental (full-body personal care, hygiene robots). Japan spent $300 million since 2012 proving this out: robot adoption in nursing homes reached only 10–15%, practical usability failures abounded, and the inventor of ROBEAR himself concluded migrant labor was a better answer than his robot. The data points to a clear picture: supplementation is the only realistic near-term role — not replacement. For the EU, with a projected 4.1 million healthcare worker deficit by 2030 and an old-age dependency ratio climbing toward 57% by 2050, this matters enormously. The honest calculus is that care robots can handle some logistics, monitoring, and therapeutic engagement tasks at acceptable cost today, but physically demanding personal care — the bulk of the work — remains 5–15 years from viable mass deployment. The EU's response cannot be "wait for robots." It needs a workforce strategy now, with robots as a productivity multiplier alongside human caregivers.

---

## Key Findings

- The EU faces a deficit of **4.1 million healthcare workers by 2030** (WHO projection), including 2.3 million nurses; OECD estimates a 60% increase in eldercare workers needed by 2040.
- Japan's decade-long care robot experiment (2012–2024): over **$300 million in government R&D**, yet by 2019 only **10% of nursing homes** had adopted any robot; only 2% of home-care providers had ever used one.
- Most-deployed category: **monitoring robots** — 63% of Japanese nursing homes used them by 2022, average cost ~$1,370. Mobility robots: only 26% adoption at an average cost of ~$11,386.
- PARO therapeutic seal: **~$6,000**, deployed in 35+ countries, demonstrated reduction in agitation and medication use in dementia patients (cluster-RCT published 2018, *American Journal of Geriatric Psychiatry*).
- Logistics robots (Aethon TUG): deployed in **125+ hospitals**, operational since 2004, TRL 9 — the most mature category.
- Human caregiver salary: US average ~$29,253/year for home aides; EU nursing assistant wages range from €12,000/year in Eastern Europe to €38,000/year in Germany. NIH estimates average robot implementation at ~$85,000/year all-in — **competitive only against higher-wage EU markets**.
- A 2023 study of 182 adults aged 65+ found **76% had positive opinions** of companion robots; 65% said they would use them — but conditional on privacy and safety guarantees.
- EU AI Act (August 2024): care robots classified as **high-risk AI systems** from August 2027, requiring third-party conformity assessment — adding 12–24 months and €50,000–€200,000+ to certification timelines.

---

## Care Robots Available Today

| Robot | Manufacturer | Function | TRL | Approx. Cost |
|-------|-------------|----------|-----|-------------|
| **PARO** | AIST, Japan | Therapeutic companion (dementia care, emotional support) | TRL 9 — commercial | ~$6,000 capital; minimal maintenance |
| **Aethon TUG** | Aethon (USA) | Logistics: medication, linen, lab sample transport | TRL 9 — commercial | RaaS subscription; $80,000–$120,000 capital purchase |
| **Moxi** | Diligent Robotics (USA) | Hospital logistics: supply delivery, routine nurse task offloading | TRL 8–9 — deployed (100+ units, 30 hospitals as of 2023) | Robotics-as-a-Service subscription model |
| **HAL (Hybrid Assistive Limb)** | Cyberdyne, Japan | Rehabilitation exoskeleton for stroke, spinal cord injury, gait retraining | TRL 8 — CE-marked (EU), FDA-cleared (USA) | $65,000–$100,000; rental ~$2,000/month in Japan |
| **Pepper / NAO** | Aldebaran (France — bankrupt Feb 2025) | Social interaction, exercise facilitation, cognitive engagement | TRL 7–8 — piloted; discontinued | Was $20,000–$25,000; no longer available |
| **Lio** | F&P Robotics (Switzerland) | Mobile assistance: fetch objects, reminders, tablet interface, entertainment | TRL 7–8 — commercial pilots in German/Swiss nursing homes | ~€45,000–€65,000 |
| **ROBEAR** | RIKEN, Japan | Patient transfer and repositioning | TRL 5–6 — prototype only; never deployed commercially | Not sold; project retired |
| **AIREC** | AIST, Japan | Full-body personal care: turning, lifting, dressing | TRL 5 — testing since March 2025 | Pre-commercial |
| **Fourier GR-3** | Fourier Intelligence, China | Full humanoid care: mobility, emotional engagement | TRL 4–5 — introduced August 2025 | Pre-commercial |
| **Washing/hygiene robot** (various) | Multiple research labs | Body surface cleaning assistance | TRL 3–5 — lab/early prototype | Not available commercially |

**Note:** PEPPER's manufacturer Aldebaran filed for bankruptcy in February 2025, removing one of the most widely piloted social robots from the market. This is a significant setback for the social robotics category.

---

## Technology Readiness Assessment

### TRL Scale Reference
TRL 1–3 = basic research; TRL 4–6 = prototype and validation; TRL 7–8 = pilot deployment; TRL 9 = full commercial production.

### Category: Monitoring Robots (TRL 9)
Sensor-based monitoring systems — fall detection, sleep quality sensors, activity trackers, emergency alert systems. Fully commercialized. Average cost ~$1,370 in Japan. **Already the dominant robot category in eldercare globally.** No significant technical barriers remain; regulatory barriers are minimal (classified as consumer electronics, not medical devices in most jurisdictions). These are not "robots" in the popular imagination — they are smart sensors — but they represent the largest real deployment.

### Category: Logistics / Transport Robots (TRL 9)
TUG, Moxi, and equivalents handle point-to-point delivery in structured hospital environments. Mature, proven, commercially deployed at scale. Barrier to elder-care home deployment: these systems require predictable mapped environments with consistent layouts. Nursing homes with older infrastructure require significant renovation investment.

### Category: Therapeutic / Social Robots (TRL 8–9 for narrow applications; TRL 6–7 for general use)
PARO is the gold standard — its effectiveness for dementia symptom reduction is RCT-proven. Cost-effectiveness analysis (Birmingham, 2018) showed it was comparable to or better than group psychosocial activities and sensory interventions at lower cost. However, PARO does only one thing: provide comfort. It cannot respond to complex conversation, assist with tasks, or adapt to deteriorating patient cognition. More capable social robots (Pepper, NAO) were piloted at TRL 7–8 but showed significant usability issues in real deployments and the primary manufacturer has now failed. **Timeline to general social robot TRL 9:** 5–8 years, contingent on a viable commercial actor replacing Aldebaran.

### Category: Rehabilitation Exoskeletons (TRL 7–8)
HAL Lower Limb is CE-marked in Europe for neurological rehabilitation. Demonstrated efficacy in RCTs for stroke and progressive neuromuscular disease. Barriers to mass eldercare deployment: cost ($65,000–$100,000 per unit), requirement for trained physiotherapist supervision during each session, insurance non-reimbursement in most EU member states, and limited evidence for elderly populations without acute neurological injury. **Timeline to cost-effective deployment:** 6–10 years pending reimbursement pathway development and cost reduction.

### Category: Physical Care / Transfer Robots (TRL 4–6)
ROBEAR was the most prominent entrant — never made it out of the lab. Current-generation AIREC (Japan, 2025) represents the next attempt. The challenge is fundamental: patient transfer requires sensing a unique body, applying precise and variable force, maintaining safety when the patient moves unexpectedly, and doing this in a confined space. **No commercially available transfer robot exists as of 2026.** Timeline to TRL 9: 10–15 years minimum, with major open problems in soft manipulation, safety certification, and patient trust.

### Category: Hygiene Robots (TRL 3–5)
Lab prototypes exist for assisted body surface cleaning (demonstrated 94% effectiveness in controlled conditions). No commercial product available. Timeline to deployment: 8–12 years, hampered by the intimacy and variability of hygiene tasks and the serious regulatory burden for skin-contact devices.

---

## Adoption Rates and Elderly Acceptance

A 2023 study of 182 adults aged 65+ found 76% had positive opinions of companion robots and 65% stated they would use them. However, this positive framing is conditional on three factors: **privacy protection, demonstrated safety, and maintained human contact.**

A Chiba University survey covering 4,890 individuals (elderly, families, caregivers, developers) found approximately 80% willing to share vital health data with healthcare professionals, but fewer than half were comfortable sharing data with robotics companies.

Acceptance factors identified consistently across studies:
1. **Trust in technical reliability** — elderly users are risk-averse; one failure can terminate adoption permanently
2. **Prior technology familiarity** — people under 65 and those familiar with technology news are significantly more accepting
3. **Robot appearance** — childlike or animal-like robots risk feeling infantilizing; humanoid robots can trigger uncanny valley reactions
4. **Maintained human contact** — the most consistent finding: robots are acceptable as supplements, not replacements. Respondents who believed robots would reduce human contact were significantly less accepting.

One specific concern surfaced repeatedly in qualitative studies: **over-dependence**. A Japanese nursing home reported a resident who became so attached to a social robot that she refused to eat without it. Another tried to dismantle it. These edge cases illustrate that successful deployment requires clear protocols for managing attachment.

**Bottom line:** Conditional acceptance exists. But acceptance surveys do not equal deployment success — Japan's experience shows that even motivated users abandon robots when the operational reality (maintenance burden, setup time, unreliable performance) exceeds the benefit.

---

## Japan: The Global Precedent

Japan began its systematic push to automate eldercare in 2012. The context:
- 28% of population aged 65+ (2024), highest globally
- Nursing care job vacancy ratio: **1 applicant per 4.25 available jobs** as of December 2024
- Ministry of Health projects a shortfall of **380,000 care workers by 2025**
- Cultural context: significant discomfort with immigration as a workforce solution (political taboo, though policy has shifted somewhat after 2023)

**Government investment:** By 2018, Japan's national government had spent over $300 million funding care robot R&D. In 2012–2013, the Ministry of Health (MHLW) and Ministry of Economy, Trade and Industry (METI) jointly identified eight priority task areas for subsidy: transfer aid, mobility support, toileting, bathing, monitoring, communication, rehabilitation, and cognitive support. Subsidies to nursing homes for adoption began in 2015. In June 2024, the initiative was renamed "Priority Areas for the Use of Caregiving Technology" and broadened to include ICT.

**Adoption reality:**
- By 2016: ~15% of nursing homes had adopted any robot
- By 2019 (major national survey, 9,000+ institutions): only **10% reported using any care robot**
- By 2021 (444 home-care providers): only **2% had ever used one**
- By 2022: monitoring robots used in **63% of nursing homes** (low-cost, high-utility category); mobility robots in only **26%**

**Why adoption was disappointing:**

*ROBEAR* — the iconic 100 kg transfer robot developed by RIKEN — was never deployed commercially. Its inventor Toshiharu Mukai later stated publicly that it was not a practical solution to the care industry's problems and that migrant labor was a better answer.

*PEPPER* deployments in care homes revealed a fundamental operational problem: care workers had to stand beside the robot during exercise sessions, mimicking its movements to encourage resident participation. The robot did not reduce labor — it added a supervision requirement.

*HUG* (transfer-assist robot): Staff stopped using it within days, reporting it was cumbersome to wheel between rooms and set up, adding to rather than reducing workload.

*Attachment side effects*: As noted above, patients formed extreme attachments that created care complications, and robots required constant supervision during use.

**The key finding from Stanford FSI research** (published in the *Journal of Labor Economics*, 2024 NBER working paper): robot adoption in Japanese nursing homes **increased employment and retention** — particularly among non-regular workers and in monitoring categories. Robots reallocated care worker effort toward "human touch" tasks. They did not reduce headcount. **This is the Japan lesson: robots preserved workforce capacity, they did not replace it.**

The nursing care market is projected to grow 3x by 2030 in Japan, driven by demographics. But the technology reality is that after a decade of effort and $300M+, the only categories at meaningful scale are monitoring sensors and — to a degree — logistics.

---

## ROI vs. Human Caregivers

The ROI calculation for care robots depends heavily on geography (labor costs), robot category, and utilization rate.

**Human caregiver cost benchmarks (2024):**
- US home aide: ~$29,253/year (~$14/hour); certified nursing assistant: ~$15/hour
- Germany nursing assistant: €28,000–€38,000/year
- Poland care worker: €10,000–€16,000/year
- EU27 range: €12,000 (Bulgaria, Romania) to €45,000 (Netherlands, Denmark)

**Robot cost benchmarks:**
- PARO therapeutic seal: ~$6,000 capital + minimal maintenance → cost-effective for dementia symptom management vs. group psychosocial interventions (~$6,000/year)
- Monitoring sensor systems: ~$1,370 (Japan average) → near-universal ROI vs. night-watch labor costs
- Logistics robots (TUG): $80,000–$120,000 capital + $10,000–$20,000/year maintenance → payback period 2–5 years in high-wage US/EU hospital settings; 8–12 years in lower-wage contexts
- Rehabilitation exoskeleton (HAL): $65,000–$100,000 purchase + $10,000–$15,000/year → only ROI-positive in high-volume specialized rehab centers at full utilization
- NIH estimate for average robot implementation: **~$85,000/year all-in**

**The ROI gap by geography:** In Germany (nursing assistant at €35,000/year fully loaded), a $85,000/year robot would break even only if it displaces roughly 2.4 full-time equivalents — possible in logistics, not in personal care where human supervision remains required. In Poland (care worker at €13,000/year), the same robot requires displacing 6.5 FTEs to break even — **currently impossible for any single care robot.**

**One concrete positive ROI case:** Hygiene robots in high-wage US nursing homes — if a robot reduces daily nursing time from 15–20 minutes to 8 minutes per patient at $35/hour, the saving is ~$175/patient/day, or ~$63,875/year. With robot cost of $20,000 and $1,000 annual maintenance, payback is under 6 months. This is the category to watch — but no commercial product is available yet.

**Honest summary:** Today, care robots deliver ROI in narrow categories (monitoring sensors, hospital logistics) in high-wage markets. For the largest cost centers — personal care, toileting, transfer — no robot can replace a human, and the operational overhead often makes the robot a net cost increase.

---

## Regulatory Barriers in the EU

The EU has two overlapping regulatory regimes that affect care robots:

### EU Medical Device Regulation (MDR 2017/745)
Care robots that make contact with patients, influence diagnosis, or monitor vital signs are classified as medical devices. The MDR is one of the world's most stringent frameworks — 170+ pages, requiring:
- Selection of a notified body (EU has significantly reduced notified body count since MDR replaced the older MDD directive, creating a bottleneck)
- Comprehensive technical documentation with clinical evidence
- For Class IIa/IIb devices (where most contact-care robots would fall): third-party conformity assessment
- Post-market surveillance system

**Practical impact:** A new care robot requiring Class IIb certification faces 2–4 years of approval process and costs of €100,000–€500,000+ for the conformity assessment alone, before legal sale in any EU member state.

### EU AI Act (2024)
The AI Act entered into force August 2024, with high-risk AI system obligations for medical device robots applying from **August 2027**. Care robots embedded with AI decision-making (fall risk assessment, behavioral monitoring, autonomous navigation around patients) are classified as high-risk AI. Requirements:
- Third-party conformity assessment
- Risk management system
- Data governance documentation
- Human oversight mechanism
- Transparency obligations

The European Commission proposed in 2025 (COM(2025) 1023) to carve medical devices out of the AI Act entirely, routing them solely through the MDR. This simplification has not yet been adopted as of April 2026.

### Liability Gap
The new EU Product Liability Directive (adopted October 2024) updates liability for defective products including AI systems. However, **autonomous care robot liability remains legally ambiguous**: when an AI-driven robot makes a care decision that harms a patient, it is unclear whether liability falls on the manufacturer, the care facility, or the healthcare professional who delegated the task. This uncertainty makes care facilities risk-averse — insurance for robot-assisted care does not yet exist as a standardized product.

### Insurance Non-Reimbursement
In virtually no EU member state is rehabilitation exoskeleton use or social robot intervention reimbursed by statutory health insurance. Without a reimbursement pathway, commercial deployment is limited to private pay facilities or research pilots. This is the single most actionable barrier for near-term deployment.

---

## Ethical Concerns

The literature identifies four serious, non-theoretical ethical risks:

### 1. Consent and Cognitive Capacity
A resident with advanced dementia cannot give meaningful informed consent to robot-assisted care, robot surveillance, or data collection. Yet they are the primary population for therapeutic robots (PARO, social robots). The EU's GDPR imposes strict requirements on processing personal data of individuals who cannot consent — care facilities using monitoring robots with biometric sensors face genuine legal exposure. Qualitative research from frontline care staff consistently highlights this as an unresolved issue.

### 2. Surveillance and Privacy
Monitoring robots create a "Big Brother" environment — care workers in qualitative studies use this exact phrase. Residents with dementia may not know they are being monitored. Even among competent elderly, fewer than half are comfortable with health data being shared with robotics companies (Chiba University survey). The distinction between health monitoring (accepted) and behavioral surveillance (rejected) is ethically and legally meaningful but technically difficult to enforce.

### 3. Isolation and Reduced Human Contact
The consistent concern from practitioners: robots may be deployed not because they improve care but because they are cheaper than adequate staffing. If a robot replaces one hour of human contact per day — even while technically completing a task adequately — the net effect on the patient's wellbeing may be negative. Multiple studies flag that reduced human contact is the most feared consequence of care robotics, more feared than technical failure. The research is not settled on whether "robotic companionship" (e.g., PARO) increases or decreases total social interaction in facility contexts.

### 4. Infantilization and Dignity
Some social robots designed with animal or childlike characteristics are perceived by residents as infantilizing. Residents in qualitative research have used the word "patronizing." The design of robot appearance matters — this is not a superficial concern. A robot that makes an 80-year-old engineer feel they are being given a toy has failed regardless of its technical performance.

**One underreported ethical risk:** economic pressure on lower-income EU countries to adopt cheaper robot-augmented care to compete on cost with higher-wage Western European facilities, potentially lowering care quality while appearing to modernize.

---

## Timeline to Cost-Effective Deployment in EU

| Robot Category | Current TRL | Realistic EU Deployment Scale | Key Condition |
|---------------|------------|------------------------------|---------------|
| Monitoring/sensor systems | 9 | **Now — already viable** | Standardize data interoperability; clarify data governance |
| Logistics robots (hospital) | 9 | **2026–2028** for new-build/renovated facilities | CAPEX investment; EU procurement frameworks |
| Therapeutic companions (narrow, PARO-class) | 8–9 | **Now — limited use case** | Expand reimbursement; address consent framework |
| Social/conversational robots | 6–7 | **2030–2033** | Requires viable manufacturer post-Aldebaran bankruptcy; AI language capabilities |
| Rehabilitation exoskeletons | 7–8 | **2027–2030** for specialized centers | Reimbursement pathway; cost reduction |
| Physical assistance / transfer | 4–6 | **2033–2038** at best | Safety certification, soft robotics breakthroughs |
| Hygiene robots | 3–5 | **2035–2040** | Commercial product development; MDR certification |

**Overriding constraint:** EU MDR and AI Act compliance adds 2–4 years to any care robot's market entry timeline. A robot that reaches TRL 8 in a Japanese or US lab in 2026 will not be legally deployable across the EU at scale until 2028–2030 at the earliest.

**The honest 2030 picture:** In the EU, care robots will handle monitoring, logistics in modern facilities, and narrow therapeutic tasks. They will not handle personal hygiene, patient transfer, dressing, bathing, or complex conversational support at scale. The 4.1 million healthcare worker deficit will not be solved by robots before 2030 — the technology is not there, the regulatory pathway is not built, and the reimbursement infrastructure does not exist.

---

## Implications for EU Reform Argument

The aging crisis (Pillar 1 of this site's argument) and automation potential (Pillar 3) intersect here — and the intersection is more complicated than optimists suggest.

**What the data supports:**
- Care robots are real, commercially deployed in narrow categories today, and will expand meaningfully toward 2030–2035 in monitoring, logistics, and rehabilitation.
- The economic argument for automation is strongest in high-wage Western EU markets (Germany, Netherlands, Scandinavia), where labor cost pressure makes even expensive robots ROI-positive over 5–7 years.
- Japan demonstrates that government-backed R&D investment plus reimbursement reform plus workforce integration (not workforce replacement) is the workable model.

**What the data challenges:**
- The "robots will solve the care crisis" framing is a decade premature for physical personal care.
- Eastern and Central European care systems — Poland, Czech Republic, Hungary — operate on labor costs that make robot ROI negative for most categories until 2035+ without significant wage increases or targeted subsidies.
- The EU's fragmented regulatory environment (27 national health systems, varying reimbursement rules, no unified care robot certification pathway) is itself a structural barrier that policy reform — not technology — must solve first.

**The reform argument this data supports:** Europe needs an EU-level care technology policy framework — standardized reimbursement pathways, harmonized MDR/AI Act fast-track for validated care robots, joint procurement mechanisms for smaller member states, and a realistic public communication strategy that sets expectations at "productivity multiplier" not "replacement." The technology will arrive; the institutional infrastructure to receive it has not been built.

---

## Sources

- [Eldercare Assistive Robots Market — Grand View Research](https://www.grandviewresearch.com/industry-analysis/elder-care-assistive-robots-market-report)
- [Healthcare Companion Robots Market — Towards Healthcare](https://www.towardshealthcare.com/insights/healthcare-companion-robots-market-sizing)
- [Adoption of AI-Enabled Robots in Long-Term Care — JMIR Aging (2024)](https://aging.jmir.org/2024/1/e55257)
- [Inside Japan's Long Experiment in Automating Elder Care — MIT Technology Review (2023)](https://www.technologyreview.com/2023/01/09/1065135/japan-automating-eldercare-robots/)
- [Robots and Labor in Nursing Homes — NBER Working Paper (Lee, 2024)](https://www.nber.org/system/files/working_papers/w33116/w33116.pdf)
- [The Impact of Robots on Nursing Home Care in Japan — Stanford FSI](https://aparc.fsi.stanford.edu/research/impact-robots-nursing-home-care-japan)
- [Robots in Elderly Care: Lessons from Japan — Sinolytics](https://sinolytics.de/global-business-news/blog/geolytics/robots-elderly-care-lessons-from-japan/)
- [The Cost-Effectiveness of PARO for Dementia — ScienceDirect / American Journal of Geriatric Psychiatry (2018)](https://www.sciencedirect.com/science/article/abs/pii/S1525861017305820)
- [PARO robot — Wikipedia](https://en.wikipedia.org/wiki/Paro_(robot))
- [Robots Gain Guarded Acceptance in Elderly Care — SpaceDaily](https://www.spacedaily.com/reports/Robots_gain_guarded_acceptance_in_elderly_care_if_safety_and_trust_align_999.html)
- [Uncertainties About Accepting Care Robots — Frontiers in Digital Health (2023)](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2023.1092974/full)
- [Seniors Welcome Help from Robot Companions but Concerns Remain — FIU Business (2024)](https://business.fiu.edu/news/2024/seniors-welcome-help-from-robot-companions-but-concerns-remain.html)
- [Ethical Implications of Robots with Older Adults with Dementia — Frontiers in Psychiatry (2024)](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1436273/full)
- [Technological Risks and Ethical Implications of Robots in Long-Term Care — PMC (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9208036/)
- [Designing for Dignity: Ethics of AI Surveillance in Older Adult Care — PMC (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12411420/)
- [Regulatory Challenges and Liability Pathways for AI-Powered Robots in EU — Springer (2026)](https://link.springer.com/article/10.1007/s00146-026-02869-2)
- [AI Robotics in Healthcare: EU MDR and AI Act — SCUP](https://www.scup.com/doi/10.18261/olr.11.1.2)
- [EU AI Act — European Commission Digital Strategy](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [The EU AI Act and Medical Devices — Reed Smith](https://www.reedsmith.com/our-insights/blogs/viewpoints/102kq35/the-eu-ai-act-and-medical-devices-navigating-high-risk-compliance/)
- [Cyberdyne HAL — Exoskeleton Report](https://exoskeletonreport.com/product/hal-lower-limb/)
- [Diligent Robotics Moxi — 100 robots in 30 hospitals by end of 2023](https://www.diligentrobots.com/press/100-moxi-robots-to-be-in-30-hospitals-by-end-of-23)
- [Aethon TUG Hospital Robots](https://aethon.com/hospital-robots-healthcare/)
- [Humanoid Robots in Elder Care — Robozaps (2026)](https://blog.robozaps.com/b/humanoid-robots-in-elderly-care)
- [Nursing Robots Market Trends 2020–2030 — GlobeNewswire (2025)](https://www.globenewswire.com/news-release/2025/09/24/3155293/28124/en/Nursing-Robots-Market-Trends-and-Forecasts-2020-2024-2025-2030-Aging-Population-and-Nurse-Shortages-Drive-Growth-in-Japan-and-North-America.html)
- [The Shortage of Skilled Workers in Europe: Geriatric Medicine — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7176573/)
- [Prepare Now: Europe Must Get Ready for Long-Term Care Surge — Bruegel](https://www.bruegel.org/policy-brief/prepare-now-europe-must-get-ready-coming-long-term-care-surge)
- [Japan Robotics in Care — Hello World Japan](https://helloworldjapan.com/robotics-in-care-how-japan-is-using-ai-to-solve-its-elderly-care-crisis/)
- [Caregiver Salary Data 2024 — CareAcademy](https://careacademy.com/blog/caregiver-salary/)
- [Robotics Maintenance Costs — PatentPC](https://patentpc.com/blog/robotics-maintenance-costs-operating-efficiency-data)
- [How Will Robotics Change Nursing Care in 2030/2040? — Mitsubishi Research Institute](https://www.mri.co.jp/en/50th/columns/robotics/no03/)
