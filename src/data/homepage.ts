/**
 * Public homepage content.
 * Single source of truth for live homepage sections and the historical
 * /resources/preview/homepage.astro comparison page.
 */

export interface FAQItem {
  question: string;
  answer: string;
  /** Subtle visual weight — heavier left border + larger summary padding. */
  emphasis?: boolean;
}

export interface AdoptionWave {
  label: string;
  horizon: string;
  regions: string[];
  rationale: string;
}

export interface NumberStat {
  value: string;
  label: string;
  /** Relative comparison — what this number means next to a familiar benchmark.
   *  Without this, big numbers are just noise. */
  compare: string;
  sub: string;
  source: string;
}

export interface BenefitCard {
  title: string;
  icon: string;
  color: 'blue' | 'green' | 'red' | 'indigo' | 'purple' | 'teal' | 'yellow' | 'gray';
  body: string;
  href?: string;
}

// ---------------------------------------------------------------------------
// NUMBERS — NEW section under hero. Each number has a research source.
// Order: demographic problem → consequence → diagnosis → proof it works.
// ---------------------------------------------------------------------------

export const numbers: NumberStat[] = [
  {
    value: '1.46',
    label: 'EU fertility rate',
    compare: '30% below replacement (2.1 needed). USA: 1.66. France: 1.79. Niger: 6.7.',
    sub: 'We are not making enough Europeans to staff the system that pays our pensions. Every cohort entering working age is a third smaller than the cohort retiring.',
    source: 'Eurostat 2024 — research/t1-1-demographic-crisis.md',
  },
  {
    value: '4.1M',
    label: 'missing care workers by 2030',
    compare: 'Roughly 15% of the entire EU healthcare workforce — or the combined total of Italian and Spanish healthcare staff today.',
    sub: 'The same generation that will need care will not have anyone to provide it — unless we build robotic and AI infrastructure now.',
    source: 'OECD Health at a Glance — research/t2-4a-care-robotics.md',
  },
  {
    value: '€800B/yr',
    label: 'EU investment gap vs US',
    compare: '~€1,800 per EU citizen per year. ~5x the entire EU budget (€170B). Roughly the size of the German federal budget.',
    sub: 'Mario Draghi: this is what Europe is short every year just to keep up. The gap is the bill for legacy infrastructure.',
    source: 'Draghi Report 2024 — research/t1-2-draghi-report.md',
  },
  {
    value: '€1,500',
    label: 'saved per Estonian citizen per year',
    compare: '99% of services online. Scaled to EU 450M citizens = ~€675B/yr potential — close to the Draghi gap above.',
    sub: 'Estonia (1.3M people) saves €2B/yr by running its state digitally. The method is documented and exportable. The opportunity is to apply it across 27 countries.',
    source: 'e-Estonia 2023 — research/t1-3-estonia-egovernment.md',
  },
];

// ---------------------------------------------------------------------------
// PILLARS — current copy stays. NEW adds one positive-frame line per pillar.
// Tone: opportunity, what we GAIN by acting together. No country shaming.
// ---------------------------------------------------------------------------

export const pillarsOld = [
  {
    title: 'I. Language Integration',
    icon: '🗣️',
    color: 'green' as const,
    body: 'English as a second official language across all EU states to remove communication barriers',
    href: '/vision/language-integration',
  },
  {
    title: 'II. Digital Integration',
    icon: '💻',
    color: 'red' as const,
    body: 'Unified digital government, e-health, e-learning, and blockchain-based public services',
    href: '/vision/digital-integration',
  },
  {
    title: 'III. Robotic Reindustrialization',
    icon: '🤖',
    color: 'indigo' as const,
    body: 'Autonomous logistics, robotic production, and sustainable, localized manufacturing',
    href: '/vision/robotic-reindustrialization',
  },
];

// NEW — same copy, plus one positive-data sub-line per pillar (research-backed).
export const pillarsNew = [
  {
    title: 'I. Language Integration',
    iconKey: 'language',
    color: 'green' as const,
    body: 'English as a second official language across all EU states to remove communication barriers.',
    addendum: '€507B/year is the upside of one shared working language across the single market — that is the prize, not a punishment for anyone.',
    sourceTag: 't2-1',
    href: '/vision/language-integration',
  },
  {
    title: 'II. Digital Integration',
    iconKey: 'digital',
    color: 'red' as const,
    body: 'Unified digital government, e-health, e-learning, and blockchain-based public services.',
    addendum: 'Estonia proves it works: 99% of services online, €2B/year saved. The opportunity is to apply that method across 27 countries — including Poland, where digital court reform alone would unblock years of backlog.',
    sourceTag: 't1-3',
    href: '/vision/digital-integration',
  },
  {
    title: 'III. Robotic Reindustrialization',
    iconKey: 'robot',
    color: 'indigo' as const,
    body: 'Autonomous logistics, robotic production, and sustainable, localized manufacturing.',
    addendum: 'The MASAI study shows AI radiology detects 28% more cancers than human-only screening. Robotization is not "replacing humans" — it is the only way to keep services running when half the workforce retires.',
    sourceTag: 't2-4b',
    href: '/vision/robotic-reindustrialization',
  },
];

// ---------------------------------------------------------------------------
// CEE FOCUS — NEW small section, addresses primary audience directly.
// ---------------------------------------------------------------------------

export const ceeFocus = {
  title: 'Where this lands first: Central and Eastern Europe',
  intro:
    'I am writing as a Polish engineer, but the manifesto is written for everyone who will retire in the next 30 years. The reason CEE matters first is straightforward: the demographic curve is steeper here, the security threat is at the border, and the digital base — Estonia, Polish tech, Czech industry — is already strong enough to lead.',
  bullets: [
    {
      country: 'Poland',
      line: 'Lost over 2 million people to emigration in two decades. Digital court reform and reindustrialization are not abstract — they are the difference between a functioning state in 2050 and a hollow one.',
    },
    {
      country: 'Baltics + Ukraine',
      line: 'A €700 FPV drone disabling a €5M tank in Ukraine is not a curiosity — it is the new defense economics. EU strategic autonomy starts here.',
    },
    {
      country: 'Trójmorze 2.0',
      line: 'If Berlin and Paris hesitate, the Baltic-to-Adriatic corridor can move first. A voluntary coalition of the willing — and once it works, the rest joins.',
    },
  ],
  href: '/benefits',
};

// ---------------------------------------------------------------------------
// "WHAT I AM NOT PROPOSING" — NEW section. Disarms common objections up front.
// ---------------------------------------------------------------------------

export const notProposing = {
  title: 'What I am not proposing',
  intro:
    'A manifesto is read more honestly when its scope is explicit. So before the FAQ — here is what this is not.',
  items: [
    {
      headline: 'Replacing national languages.',
      detail:
        'Polish, French, German, Estonian — all stay official in their countries. English becomes a second official layer for cross-border work, the same way Estonia already operates in Estonian, Russian, and English in practice.',
    },
    {
      headline: 'A federal European super-state.',
      detail:
        'The EU stays a union of nation-states. What I propose is sharing the layer below the state — the digital infrastructure, the standards, the robotic capacity — so each state stays sovereign on a stronger foundation.',
    },
    {
      headline: 'A common pension system.',
      detail:
        'Each country keeps its own retirement scheme. I am proposing the infrastructure that makes any pension scheme viable when there are two workers per retiree instead of four — the robotic and digital base, not the contract.',
    },
    {
      headline: 'Cultural unification.',
      detail:
        'The cultures of Europe are the asset, not the obstacle. The manifesto assumes nations stay distinct and proud — and that distinctness is exactly what makes shared infrastructure worth building.',
    },
  ],
};

// ---------------------------------------------------------------------------
// FAQ — OLD (current, defensive) and NEW (offensive, A7 from editor's plan).
// ---------------------------------------------------------------------------

export const faqOld: FAQItem[] = [
  {
    question: 'Why do we need yet another European integration project?',
    answer:
      "This vision addresses today's multipolar world challenges, focusing on strategic independence and economic efficiency. Without a new cooperation framework, Europe risks internal economic conflicts and external manipulation. We need a practical approach to keep Europe competitive and united.",
  },
  {
    question: 'Isn\'t English as a second language unfair to non-English speaking countries?',
    answer:
      'A common language allows us to function as one economic entity. It enables European-scale companies and eliminates translation barriers for goods, services, and contracts. Embracing English—already the language of innovation and commerce—creates a unified economic space while preserving national languages and identities.',
  },
  {
    question: 'How will these changes benefit ordinary citizens?',
    answer:
      'Citizens gain EU-wide digital healthcare with predictive analytics, universal e-learning platforms, and streamlined administration. The digital infrastructure we build will support a future economy with robotized retirement solutions as populations age. This creates a Europe with fewer bureaucratic obstacles and greater opportunities.',
  },
  {
    question: "What if Germany or other powerful countries don't agree?",
    answer:
      'The initiative could begin as an Intermarium 2.0 project among Central European, Baltic, and Scandinavian nations. Given eastern security threats, regional integration is necessary. Would skeptical nations risk being left behind? The voluntary model allows countries to join when benefits become apparent, while creating economic pressure on those who remain outside.',
  },
  {
    question: 'How would this be funded?',
    answer:
      "We've already mobilized enormous resources for COVID-19 and security challenges. The issue isn't funding capacity but directing funds wisely. Centralizing digital development saves costs across 27 countries. Strategic borrowing for high-return projects creates self-sustaining improvements that generate resources for repayment.",
  },
  {
    question: 'How long would implementation take?',
    answer:
      'We must begin immediately given the Russian threat and changing geopolitical landscape. English language adoption can start now with formal agreements and implementation within a year. Robotization and AI projects should launch immediately as they\'re critical for defense against Russian aggression while simultaneously building civilian capabilities.',
  },
  {
    question: 'What are the main challenges?',
    answer:
      'First, effectively communicating this vision to Europeans and building broad support. Second, executing them successfully, being adaptive if needed, and hopefully efficiently solving Europe\'s challenges within this framework. We must navigate regulatory complexity, address resistance from status quo beneficiaries.',
  },
];

export const faqNew: FAQItem[] = [
  {
    question: 'Why is this different from previous EU integration plans?',
    answer:
      'Previous plans started from politics — treaties, institutions, votes. I start from a deadline: in 2035 the workforce that funds European pensions retires. The argument is not ideological, it is arithmetic. Every reform here is judged by one test: does it keep retirement viable when the worker-to-retiree ratio halves? Most policy debates fail that test. This one is built around it.',
    emphasis: true,
  },
  {
    question: 'Isn\'t a second official language a threat to national languages?',
    answer:
      'No — it is additive, not substitutive. Polish, French, German, Italian remain the languages of life, education, courts, and culture in their countries. English becomes the second layer used between countries — for contracts, science, EU-scale companies, healthcare data exchange. Estonia already does this in practice with Estonian, Russian, and English. Nobody there is less Estonian for it.',
  },
  {
    question: 'What does this mean for me when I retire in 25 years?',
    answer:
      'It is the difference between a pension you can actually live on and one that exists on paper. By 2050 the EU will have roughly two workers per retiree, down from four today. There is no political fix for that — only an infrastructure fix. The robotic care, AI healthcare, and automated public services we build in the next decade are the system that takes care of you. There is no other.',
  },
  {
    question: 'What if Berlin and Paris drag their feet?',
    answer:
      'Then we start without them. The Baltic-to-Adriatic corridor — Poland, the Baltics, Czechia, Slovakia, Romania, the Nordics, Ukraine — has the strongest motive: demography is steeper, security threat is at the border, digital base is already strong (Estonia, Polish tech, Czech industry). A voluntary coalition of the willing builds first. Once it works, joining is rational, and the rest follows.',
  },
  {
    question: 'Where does the money come from?',
    answer:
      'Mostly from money already being spent. The EU spends roughly €170B/year on agricultural subsidies and €50B/year on cohesion funds — reallocating a fraction toward digital and robotic infrastructure changes the trajectory. Add the Estonia precedent: their digital state pays for itself in single-digit years through saved bureaucratic cost. This is reinvestment, not new debt.',
  },
  {
    question: 'Don\'t we have 20 years to figure this out?',
    answer:
      'No. The demographic peak is now. The retirement wave hits 2030–2035. Digital infrastructure at this scale takes 8–14 years from decision to functioning system — research file t4-5 covers this in detail. If we start the political conversation in 2030, the infrastructure is ready in 2045 — ten years too late. The window is the next five years.',
  },
  {
    question: 'What is the biggest risk if we do not act?',
    answer:
      'Economic euthanasia — the slow, dignified decline of countries that did not modernize their public services in time. Pension funds run dry, hospitals run short of staff, courts stop processing, public services degrade until people stop trusting them. It does not look catastrophic from the outside. It just looks like everything getting slower, every year, until you cannot get out.',
  },
];

// ---------------------------------------------------------------------------
// BENEFITS — three variants of the cards section. User picks one.
// ---------------------------------------------------------------------------

// Variant A — CEE-focused (4 cards, matches WRITING.md target audience)
export const benefitsVariantA: BenefitCard[] = [
  {
    title: 'Poland',
    icon: '🇵🇱',
    color: 'red',
    body:
      'Over 2 million Poles emigrated in two decades. Digital court reform and reindustrialization are the difference between a functional state in 2050 and a hollow one. CEE leadership starts here.',
    href: '/benefits',
  },
  {
    title: 'Baltics & Ukraine',
    icon: '🇪🇺',
    color: 'blue',
    body:
      'Estonia is the proof-of-concept of digital statehood. Ukraine is proving that a $700 drone neutralizes a $5M tank. Together, this is the model — and the security argument — for European autonomy.',
    href: '/benefits',
  },
  {
    title: 'Trójmorze 2.0',
    icon: '🌍',
    color: 'green',
    body:
      'A Baltic-to-Adriatic corridor of willing partners. Demography is steeper here, the threat is closer, and the appetite for reform is higher. The natural starting block for the manifesto.',
    href: '/benefits',
  },
  {
    title: 'Scandinavia',
    icon: '❄️',
    color: 'indigo',
    body:
      'High digital adoption, strong manufacturing, demographic pressure starting to bite. Natural ally for the technical side of the program — and a credible second voice alongside CEE.',
    href: '/benefits',
  },
];

// Variant B — Per persona (3 cards, narrative angle)
export const benefitsVariantB: BenefitCard[] = [
  {
    title: 'For citizens',
    icon: '👤',
    color: 'blue',
    body:
      'A retirement that still works in 2050. AI healthcare that catches what tired doctors miss. Public services you do not have to physically queue for. Cross-border life that does not need a translator or a lawyer for every form.',
    href: '/benefits/citizens',
  },
  {
    title: 'For builders & businesses',
    icon: '🛠️',
    color: 'green',
    body:
      'A real single market — one language, one digital identity, one regulatory surface. €507B/year of friction unlocked. Capital flows to where engineers can build at European scale instead of fragmenting into 27 sub-markets.',
    href: '/benefits/businesses',
  },
  {
    title: 'For nation-states',
    icon: '🏛️',
    color: 'indigo',
    body:
      'Sovereignty on a stronger foundation, not a thinner one. Shared digital and robotic infrastructure costs less than building it 27 times. Strategic autonomy in defense, energy, and tech — without giving up identity.',
    href: '/benefits',
  },
];

// Variant C — Current 12 cards, each with one research-backed number
export const benefitsVariantC: BenefitCard[] = [
  {
    title: 'European Integration',
    icon: '🇪🇺',
    color: 'blue',
    body: '€507B/year unlocked from translation friction alone (Eurostat). Shared digital base, faster decisions, fewer 27-way negotiations.',
    href: '/benefits/european-integration',
  },
  {
    title: 'Germany',
    icon: '🇩🇪',
    color: 'indigo',
    body: 'Industrial 4.0 leadership extended to a 450M-citizen single market. Robotics export market scaled, not capped at 80M.',
    href: '/benefits/germany',
  },
  {
    title: 'France',
    icon: '🇫🇷',
    color: 'blue',
    body: 'Cultural and diplomatic leadership in the EU strengthened by a digital backbone, not weakened. Strong second voice in AI governance.',
  },
  {
    title: 'Southern Europe',
    icon: '🏛️',
    color: 'indigo',
    body: 'Logistics and tourism gain from autonomous transport corridors. Digital-first administration cuts the bureaucratic tax that hits Italy and Greece hardest.',
  },
  {
    title: 'Scandinavia',
    icon: '❄️',
    color: 'blue',
    body: 'Already at the digital frontier. Now the EU catches up, and the Nordic methods become continental defaults — with the matching economic upside.',
  },
  {
    title: 'Central Europe',
    icon: '🏭',
    color: 'indigo',
    body: 'Polish and Czech engineering capacity gets a 450M-person market to ship into. Reindustrialization is not a slogan here — it is the natural next decade.',
  },
  {
    title: 'Businesses',
    icon: '💼',
    color: 'blue',
    body: 'One legal surface instead of 27. SEPA Instant at €0.002/tx is the kind of unit economics that lets a startup in Tallinn compete with one in San Francisco.',
  },
  {
    title: 'Citizens',
    icon: '👨‍👩‍👧‍👦',
    color: 'indigo',
    body: 'AI radiology catches 28% more cancer (MASAI study). E-residency, e-health, e-learning — life with the bureaucratic friction taken out.',
  },
  {
    title: 'eCommerce',
    icon: '🛒',
    color: 'blue',
    body: 'Cross-border tax, returns, and identity solved at the protocol layer, not the warehouse layer. The thing that makes shopping in 27 markets actually feel like one.',
  },
  {
    title: 'IT Startups',
    icon: '💻',
    color: 'indigo',
    body: 'A real European single market for SaaS — one VAT regime, one identity layer, one labor market. The Tallinn-to-Lisbon scale story finally exists.',
  },
  {
    title: 'European Security',
    icon: '🛡️',
    color: 'blue',
    body: 'Ukraine produces 4M drones/year. EU defense R&D is 7¢ on the US dollar. A continental robotics base closes the gap — and shifts the deterrence math.',
  },
  {
    title: 'Information Economy',
    icon: '📊',
    color: 'indigo',
    body: 'European data, European AI training, European citizens not as a product but as a constituency. Digital euro and SEPA Instant under one roof.',
  },
];

export const adoptionWaves: AdoptionWave[] = [
  {
    label: 'Wave 1',
    horizon: 'now → 5 years',
    regions: ['Poland', 'Baltic states', 'Ukraine', 'Czechia', 'Scandinavia'],
    rationale:
      'Demographic curve is steeper, the security threat is at the border, and the digital base — Estonia, Polish tech, Czech industry, Nordic e-government — is already strong enough to lead. English is operational here.',
  },
  {
    label: 'Wave 2',
    horizon: '5 → 10 years',
    regions: ['Germany', 'France', 'Benelux'],
    rationale:
      'Economic gravity follows once the toolkit is proven. Harder to move first because legacy administrative systems are deeper — easier to adopt once the migration path is documented by the first wave.',
  },
  {
    label: 'Wave 3',
    horizon: '10 → 15 years',
    regions: ['Southern Europe'],
    rationale:
      'Catching up once the platform is mature and the migration patterns are well-trodden. Joining late is not a failure — it is the rational moment when the cost of adoption drops below the cost of staying out.',
  },
];
