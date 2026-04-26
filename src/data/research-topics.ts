/** Research topic status */
export type TopicStatus = 'not-started' | 'in-progress' | 'complete'

/** Research effort level */
export type EffortLevel = 'Low' | 'Medium' | 'High'

/** Research depth level */
export type DepthLevel = 'Low' | 'Medium' | 'Medium-Deep' | 'Deep'

/** Concept group identifier */
export type ConceptId =
  | 'demographic'
  | 'language'
  | 'egov'
  | 'blockchain'
  | 'payment'
  | 'transportation'
  | 'robotics'
  | 'healthcare'
  | 'education'
  | 'culture'
  | 'security'
  | 'migration'
  | 'environment'
  | 'labor'
  | 'privacy'

/** Single research topic */
export interface ResearchTopic {
  /** Unique ID: T1.1, T2.3, etc. */
  id: string
  title: string
  description: string
  /** 1–4 */
  tier: 1 | 2 | 3 | 4
  depth: DepthLevel
  effort: EffortLevel
  /** 1 = lowest, 5 = critical */
  strategicValue: 1 | 2 | 3 | 4 | 5
  researchApproach: string[]
  relatedConcepts: ConceptId[]
  /** Links to existing pages this topic relates to */
  existingContent: string
  status: TopicStatus
  /** Link to published research page when complete */
  researchPath?: string
}

export const researchTopics: ResearchTopic[] = [
  // ── TIER 1: Foundational ────────────────────────────────────────────────
  {
    id: 'T1.1',
    title: "Europe's Demographic Crisis: Data, Projections, and Policy Implications",
    description:
      'Assemble the demographic foundation: Eurostat data on old-age dependency ratio, fertility rates by country, emigration losses (Poland, Romania especially), life expectancy trends, pension system stress tests.',
    tier: 1,
    depth: 'Deep',
    effort: 'Medium',
    strategicValue: 5,
    researchApproach: [
      'Eurostat (official EU statistics) for baseline data',
      'OECD aging societies reports',
      'Pension sustainability reports (EIOPA)',
      'Emigration/migration databases (UN, EU)',
      'Comparative analysis: Japan, Korea (aging precedents)',
    ],
    relatedConcepts: ['demographic', 'healthcare', 'robotics', 'migration'],
    existingContent: '/why, /support, /benefits',
    status: 'not-started',
  },
  {
    id: 'T1.2',
    title: 'Draghi Report Deep Dive: EU Competitiveness Crisis & Policy Recommendations',
    description:
      'Synthesize the 2024 Draghi Report on EU competitiveness. What does it actually say? Why do GDP projections shrink? What are the policy recommendations Draghi makes? How does the manifest align with or diverge from Draghi?',
    tier: 1,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 5,
    researchApproach: [
      'Read full Draghi Report (Mario Draghi, 2024, European Commission)',
      'Extract key findings, recommendations, timeline',
      'Compare with manifest proposals (alignment + divergences)',
      'Look for media analysis and policy response',
    ],
    relatedConcepts: ['egov', 'language', 'robotics', 'security'],
    existingContent: '/support (mentions Draghi), /why-reforms (uses Draghi argument)',
    status: 'not-started',
  },
  {
    id: 'T1.3',
    title: "Estonia's e-Government Model: 20-Year Case Study of Digital Transformation",
    description:
      'Estonia went digital-first. How? What was the architecture, timeline, costs, and outcomes? What can Europe learn? What are the pitfalls?',
    tier: 1,
    depth: 'Medium-Deep',
    effort: 'Medium',
    strategicValue: 5,
    researchApproach: [
      "Estonia's digital government (e-governance portal, digital ID, blockchain)",
      'Timeline: 1990s–2020s development',
      'Cost-benefit analysis (savings, efficiency gains)',
      'Technical architecture (public key infrastructure, interoperability)',
      'Lessons and challenges (cultural shift, elderly access, cost of updates)',
      'Media/reports: Estonian government, EU case studies, academic papers',
    ],
    relatedConcepts: ['egov', 'language', 'security'],
    existingContent: '/docs/book/eGov-vison (mentions Estonia briefly, needs depth)',
    status: 'not-started',
  },
  {
    id: 'T1.4',
    title: 'English Language Adoption in Europe: Proficiency, Barriers, and Policy Models',
    description:
      'Current English proficiency levels by country, age, education level. What are the barriers? What policy models work (immersion, traditional teaching)? What\'s the ROI of bilingual administration?',
    tier: 1,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 5,
    researchApproach: [
      'EF English Proficiency Index (annual rankings by country)',
      'Eurostat language proficiency surveys (EU citizens)',
      'National education policy (when English taught, hours, outcomes)',
      'Case studies: Belgium, Luxembourg, Netherlands (successful models)',
      'Economic cost-benefit (business case for bilingual admin)',
    ],
    relatedConcepts: ['language', 'education', 'migration'],
    existingContent: '/docs/ideas/culture/language-integration (claims bilingual is feasible, needs data)',
    status: 'not-started',
  },
  {
    id: 'T1.5',
    title: "Central & Eastern Europe's Tech Readiness and Strategic Position",
    description:
      'Why are Poland, Baltics, Ukraine natural allies? Data on tech sectors, demographic crisis (emigration losses), security concerns, e-government maturity.',
    tier: 1,
    depth: 'Deep',
    effort: 'High',
    strategicValue: 5,
    researchApproach: [
      'DESI Index (Digital Economy and Society Index) scores by country',
      'Tech sector size and growth (startup ecosystems, employment)',
      'Emigration data (Poland, Romania, Bulgaria — where did they go, why?)',
      'Demographics (birth rates, aging, workforce trends)',
      'Security perception (Russia proximity, NATO membership)',
      'Tech leaders (Estonia, Poland startups, Czech academic centers)',
      'Surveys: European identity, EU support by country',
    ],
    relatedConcepts: ['egov', 'language', 'robotics', 'migration', 'security'],
    existingContent: '/benefits (added CEE section, needs supporting data)',
    status: 'not-started',
  },

  // ── TIER 2: Pillar Support ───────────────────────────────────────────────
  {
    id: 'T2.1',
    title: 'Language as Economic Infrastructure: GDP Growth from Unified Markets',
    description:
      'The link between language unity and economic integration. How much of GDP growth in single-language markets is due to unified language? What\'s the cost of language fragmentation?',
    tier: 2,
    depth: 'Medium',
    effort: 'High',
    strategicValue: 4,
    researchApproach: [
      'Gravity models of trade (language as trade facilitator)',
      'Single market research (trade growth post-euro-zone)',
      'Tech industry: English as competitive advantage',
      'Comparative analysis: US internal market (single language) vs. EU',
      'Labor mobility literature (language as barrier/facilitator)',
    ],
    relatedConcepts: ['language', 'education'],
    existingContent: '',
    status: 'not-started',
  },
  {
    id: 'T2.2',
    title: 'Blockchain in Government: From Theory to Implementation Challenges',
    description:
      'When is blockchain actually useful in government? Where are the hype-kills? What are the real use cases (digital records, smart contracts, identity)? What are the regulatory and technical barriers?',
    tier: 2,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 4,
    researchApproach: [
      'Academic papers: blockchain for identity, smart contracts, public records',
      "Government pilots: Estonia, EU, UK (what worked, what didn't)",
      'Technical specs: scalability (throughput, storage), energy (PoW vs. PoS)',
      'Legal: GDPR compliance (right to be forgotten, blockchain immutability conflict)',
      'Precedents: Singapore, UAE digital government, El Salvador Bitcoin',
    ],
    relatedConcepts: ['blockchain', 'egov', 'security'],
    existingContent: '/docs/book/european-blockchain-archives',
    status: 'not-started',
  },
  {
    id: 'T2.3',
    title: 'Digital Payment Infrastructure: CBDC vs. Stablecoins vs. Instant Payments',
    description:
      'What are the options for near-zero transaction costs? Central bank digital currency (CBDC), cryptocurrency, or just better instant payments? Tradeoffs: control, privacy, speed, cost.',
    tier: 2,
    depth: 'Medium-Deep',
    effort: 'High',
    strategicValue: 4,
    researchApproach: [
      'CBDC projects: EU (digital euro), US (research stage), China (DCEP)',
      'Instant payments: ISO 20022, SEPA, Target Instant Payment Settlement',
      'Stablecoins: technical design, regulatory status, adoption',
      'Privacy tradeoff: surveillance vs. anonymity in payments',
      'Unbanked access (digital wallet ecosystems)',
      "Precedents: China's digital yuan (design, adoption), El Salvador Bitcoin",
    ],
    relatedConcepts: ['payment', 'blockchain', 'security'],
    existingContent: '/docs/book/unified-payment-zone',
    status: 'not-started',
  },
  {
    id: 'T2.4',
    title: 'Care Robots and Aging in Place: Current Maturity and Future Scenarios',
    description:
      'What robots exist today for elderly care? What\'s the timeline to maturity? Cost per robot, training needs, acceptance, regulatory status? Does this actually scale to solve the aging crisis?',
    tier: 2,
    depth: 'Medium-Deep',
    effort: 'High',
    strategicValue: 4,
    researchApproach: [
      'Robotics companies: exoskeleton makers, social robots (Pepper, Aibo, newer), manipulation robots',
      'Academic research: acceptance studies, safety, ethics',
      'Cost projections: capital cost, maintenance, training',
      'Regulatory: medical device status, liability, insurance',
      'Precedents: Japan (robotics for care), South Korea (public robot standards)',
      'Scenarios: 2030, 2040 adoption rates by region',
    ],
    relatedConcepts: ['robotics', 'healthcare', 'demographic'],
    existingContent: '/docs/book/predictive-healthcare-system (care context)',
    status: 'not-started',
  },
  {
    id: 'T2.5',
    title: 'Autonomous Vehicles for Logistics: Timeline, ROI, and Labor Displacement',
    description:
      "How far are autonomous trucks/buses? What's the ROI per vehicle? How many driving jobs will be lost, to when? Where will those workers go? What infrastructure (5G, road sensors) is needed?",
    tier: 2,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 4,
    researchApproach: [
      'AV maturity by vehicle class: trucks (furthest), buses, last-mile, trains',
      'Companies: Tesla, Waymo, Uber, Volvo, autonomous truck startups',
      'SAE automation levels (0–5) and realistic timelines per level',
      'Infrastructure requirements: V2X communication, mapping, coverage',
      'Cost-benefit: fuel, driver hours, accident reduction',
      'Labor displacement: how many drivers, retraining options',
      'Precedents: Singapore autonomous bus trial, Phoenix Waymo deployment',
    ],
    relatedConcepts: ['transportation', 'robotics', 'labor'],
    existingContent: '/docs/ideas/transportation/autonomous-transportation',
    status: 'not-started',
  },
  {
    id: 'T2.6',
    title: 'Manufacturing Robotics and EU Reindustrialization Potential',
    description:
      "Can robots bring manufacturing back to Europe? What sectors (automotive, electronics, pharma)? What's the cost vs. Asian labor? Timelines? Policy enablers?",
    tier: 2,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 4,
    researchApproach: [
      'Industrial robotics adoption rates by sector and region',
      'Cost of automation vs. labor (wage parity analysis)',
      "Supply chain complexity (why some industries localize, others don't)",
      "Policy incentives: German 'Industry 4.0', EU's digital agenda",
      'Precedents: Apple manufacturing, German automotive (still in EU)',
      'Skills needed: technicians, engineers, supervisors (career paths)',
    ],
    relatedConcepts: ['robotics', 'transportation', 'education'],
    existingContent: '/docs/ideas/technology/autonomous-robotics-system',
    status: 'not-started',
  },

  // ── TIER 3: Supporting Narratives ───────────────────────────────────────
  {
    id: 'T3.1',
    title: 'Successful Large-Scale Digital Integration: Case Studies Beyond Estonia',
    description:
      "What else has Europe or the world gotten right on this scale? Digital payment systems (SEPA, instant payments), healthcare (NHS, VA), education (UK Open University).",
    tier: 3,
    depth: 'Medium',
    effort: 'Low',
    strategicValue: 3,
    researchApproach: [
      'SEPA (Single Euro Payments Area): took 10+ years, now works',
      'NHS (UK National Health Service): centralized healthcare administration',
      'UK Open University: distance learning at scale',
      "India's Aadhaar (digital ID for 1.4B people): success and privacy concerns",
      "Singapore's digital government (smaller, faster than Estonia)",
    ],
    relatedConcepts: ['egov', 'education', 'healthcare'],
    existingContent: '',
    status: 'not-started',
  },
  {
    id: 'T3.2',
    title: 'Where Digitalization Fails: Cautionary Tales and Why They Matter',
    description:
      "What digital government projects have failed? Why? Healthcare.gov (US), various EU attempts. What do failures teach us?",
    tier: 3,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 3,
    researchApproach: [
      'Healthcare.gov (2013 fiasco: why it failed, how it was fixed)',
      'EU ITMS digitalization projects (various national attempts)',
      "UK's digital by default strategy (successes and stumbles)",
      'Blockchain hype cycles (promises vs. reality)',
      'Lessons: scope, timeline, stakeholder alignment, legacy system migration',
    ],
    relatedConcepts: ['egov', 'blockchain', 'security'],
    existingContent: '/docs/book/eGov-challenges',
    status: 'not-started',
  },
  {
    id: 'T3.3',
    title: "Geopolitical Competitors: US Tech Dominance, China's Digital State",
    description:
      "How are competitors doing digital integration? US (fragmented, private sector-led), China (centralized, state-controlled). What can Europe learn?",
    tier: 3,
    depth: 'Medium-Deep',
    effort: 'High',
    strategicValue: 3,
    researchApproach: [
      'US tech policy: fragmentation, innovation, but no unified government digital backbone',
      'China: digital ID, social credit, state surveillance, central platform',
      'Russia: sovereign internet architecture (isolation model)',
      'India: Aadhaar digital ID (comparison point)',
      'Tech sovereignty: EU AI Act, DMA, Digital Services Act',
    ],
    relatedConcepts: ['security', 'egov', 'robotics'],
    existingContent: '/docs/why (Technological Independence argument)',
    status: 'not-started',
  },
  {
    id: 'T3.4',
    title: 'Migration as Economic Opportunity: Data on Benefits and Integration',
    description:
      'European skeptics see migration as threat. Data on economic benefits: fiscal contribution, labor filling, innovation, cultural enrichment. What makes integration work? When does it fail?',
    tier: 3,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 3,
    researchApproach: [
      'Fiscal impact studies (tax contribution vs. benefit usage, varies by skill level)',
      'Labor market impact (wage pressure, sectors, skill match)',
      'Innovation contribution (immigrant entrepreneurs, patents)',
      'Integration outcomes by policy (housing, education, social support, language)',
      'Precedents: Canada (points-based), Germany (Willkommenskultur), Switzerland',
    ],
    relatedConcepts: ['migration', 'demographic', 'language'],
    existingContent: '/docs/why (migration argument), /benefits (regional specifics)',
    status: 'not-started',
  },
  {
    id: 'T3.5',
    title: "EU's Existing Digital Initiatives: eIDAS, GDPR, Digital Services Act, and Lessons",
    description:
      "What has the EU already started? eIDAS (digital identity regulation), GDPR (privacy), DSA (platform governance). Are these aligned with the manifest? Gaps and opportunities.",
    tier: 3,
    depth: 'Medium',
    effort: 'Low',
    strategicValue: 3,
    researchApproach: [
      'eIDAS Regulation (2014, updated 2024): digital identity framework, cross-border recognition',
      'GDPR (2018): privacy by design, data portability, consent',
      'Digital Services Act (2022): platform governance, liability',
      'Digital Markets Act (2022): tech monopoly regulation',
      'Digital Decade targets (2030: 90% digital skills, etc.)',
    ],
    relatedConcepts: ['egov', 'blockchain', 'security', 'privacy'],
    existingContent: '',
    status: 'not-started',
  },

  // ── TIER 4: Enrichment ───────────────────────────────────────────────────
  {
    id: 'T4.1',
    title: 'Environmental Sustainability and Digital Infrastructure: Greening EU Digitalization',
    description:
      'Digital infrastructure has environmental costs (data centers, semiconductors, e-waste). How can EU balance digital transformation with climate goals?',
    tier: 4,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 2,
    researchApproach: [
      'Energy footprint of data centers (Google, AWS, Azure emissions)',
      'Renewable energy powering digital infrastructure',
      'Chip manufacturing sustainability (TSMC, Intel emissions)',
      'E-waste and recycling (WEEE directive, rare earth metals)',
      'Green computing: efficiency improvements reducing power per computation',
    ],
    relatedConcepts: ['environment', 'egov', 'robotics'],
    existingContent: '/docs/ideas/environment/environment',
    status: 'not-started',
  },
  {
    id: 'T4.2',
    title: 'Cultural Resistance to Digital Government: Trust, Privacy, and Adoption Barriers',
    description:
      "Not everyone wants to give their data to the government. How deep is the privacy concern? Can it be addressed? Consent models, transparency.",
    tier: 4,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 2,
    researchApproach: [
      'Pew/Eurobarometer surveys on digital government trust by country',
      'Privacy concerns vs. convenience tradeoff (research findings)',
      'Transparency and audit mechanisms (how to build trust)',
      'GDPR as privacy floor (enforcement, data subject rights)',
      'Lessons from China (surveillance state) vs. Estonia (security without surveillance)',
    ],
    relatedConcepts: ['egov', 'privacy', 'migration'],
    existingContent: '',
    status: 'not-started',
  },
  {
    id: 'T4.3',
    title: 'Public Services Design for Equity: Digital Divide and Rural Access',
    description:
      'Digitalization can exclude: elderly, rural areas (bandwidth), low-income (devices). How does the manifest ensure no one is left behind?',
    tier: 4,
    depth: 'Medium',
    effort: 'Medium',
    strategicValue: 2,
    researchApproach: [
      'Digital divide metrics (access, skills, usage by demographics)',
      'Rural broadband coverage and investment (EU Connecting Europe Facility)',
      'Device access and affordability (public device programs)',
      'Accessibility standards (WCAG, elderly usability)',
      'Hybrid service delivery (digital + in-person options)',
    ],
    relatedConcepts: ['egov', 'education'],
    existingContent: '',
    status: 'not-started',
  },
  {
    id: 'T4.4',
    title: 'Skills and Workforce Retraining: Who Works in a Digitalized Europe?',
    description:
      'Digitalization + robotization = massive labor market shifts. What jobs disappear? What jobs appear? Who retrains whom?',
    tier: 4,
    depth: 'Medium-Deep',
    effort: 'High',
    strategicValue: 2,
    researchApproach: [
      'WEF Future of Jobs reports (skill displacement by sector)',
      'Occupational outlook (EU, US comparisons)',
      'Retraining success stories and failures (what works)',
      'Lifelong learning infrastructure (where are the gaps?)',
      'Income support during transition (UBI, active labor policies)',
    ],
    relatedConcepts: ['robotics', 'education', 'transportation', 'labor'],
    existingContent: '',
    status: 'not-started',
  },
  {
    id: 'T4.5',
    title: 'Timeline Realism: When Do These Changes Actually Happen? 2030, 2040, 2050?',
    description:
      'Manifest says "build for 2050." But what happens 2026–2030? Realistic phasing, quick wins, longer-term bets.',
    tier: 4,
    depth: 'Medium',
    effort: 'Low',
    strategicValue: 2,
    researchApproach: [
      'Existing technology roadmaps (autonomous vehicles, robotics, 5G/6G, quantum)',
      'Policy timelines (eIDAS implementation, AI Act roll-out)',
      'Infrastructure build times (precedents from other large EU projects)',
      'Investment cycles (FP9, Recovery Fund spending)',
      'Quick wins vs. long-term bets: what can start 2026–2030, what needs prep',
    ],
    relatedConcepts: ['egov', 'robotics', 'transportation', 'education', 'security'],
    existingContent: '',
    status: 'not-started',
  },
]
