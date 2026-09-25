import type { BenefitEntry } from './types'

/**
 * Stakeholder entries — the reader's role rather than their country. The four
 * groups the old site carried (citizens, business, regional development,
 * European integration) plus the four the homepage rewrite dropped: eCommerce,
 * IT startups, European security, the information economy.
 */
export const stakeholders: BenefitEntry[] = [
  {
    slug: 'citizens',
    name: 'Citizens',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '👥',
    lead: 'You will retire into whatever we build now. The question this site asks on your behalf is who will do the work when there are not enough working people left, and who ends up owning the machines that do it.',
    tiles: [
      {
        title: 'A pension that buys something',
        body: 'Money is a claim on other people’s labour. If the workers are not there, savings buy nothing, however large the number. Automating care, food and transport is what keeps a pension worth having.',
      },
      {
        title: 'Public services that still answer',
        body: 'Tax offices, clinics and town halls will be staffed by fewer people every year. Digital administration is how the queue does not simply get longer.',
      },
      {
        title: 'A say between elections',
        body: 'The digital state layer includes direct democracy: a way to correct a political class we did not choose and cannot otherwise correct until the next vote.',
      },
      {
        title: 'The gains, or somebody else’s gains',
        body: 'If machines replace the labour our pensions depend on and the returns go to a handful of owners, we solved production and broke the distribution. Cheap, open, hard-to-monopolise technology is how ordinary people stay on the right side of that.',
      },
    ],
    links: [
      { href: '/book/designing-our-retirement', label: 'Designing our retirement' },
      { href: '/support', label: 'What you can do' },
    ],
  },
  {
    slug: 'businesses',
    name: 'Businesses',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '💼',
    lead: 'Your customers are getting older and your hiring pool is shrinking. Europe’s answer has to be a market that behaves like one market, and machines cheap enough to cover the work nobody can be hired to do.',
    tiles: [
      {
        title: 'One market, not twenty-seven procedures',
        body: 'Cross-border trade still costs legal advice, translation and duplicated compliance. A shared working language and a shared digital administration turn that cost into a form you file once.',
      },
      {
        title: 'Hire from the whole continent',
        body: 'The scarce resource is capable people, and they are scarce everywhere. A common working language and recognised qualifications put every European candidate within reach of your job advert.',
      },
      {
        title: 'Automate what you cannot staff',
        body: 'Shifts that go unfilled today will go unfilled permanently. Affordable robotics is the difference between shrinking to fit the workforce and growing past it.',
      },
      {
        title: 'Buy machines, not subscriptions',
        body: 'Automation built on open standards can be bought, repaired and replaced. Automation that is rented from a single vendor moves your margin to them. Insist on the first kind.',
      },
    ],
    links: [
      { href: '/principles', label: 'How we decide' },
      { href: '/book/european-english', label: 'The language proposal' },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'eCommerce',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '🛒',
    lead: 'Online trade is the part of the single market that already works — until the parcel crosses a border, the payment hits a different rail, or the returns policy meets a different legal language. Fixing that is a floor-layer job, and an aging continent will shop from home far more than it does now.',
    tiles: [
      {
        title: 'Payments that cost nearly nothing',
        body: 'Every fee on a cross-border sale is a tax on European trade that American and Chinese sellers do not pay inside their own markets. A unified payment zone with near-zero transaction costs removes it.',
      },
      {
        title: 'Deliveries that keep running with fewer drivers',
        body: 'Logistics is already short of staff and the shortage grows each year. Autonomous freight and automated warehouses are what stop delivery from becoming slow and expensive exactly when housebound customers need it most.',
      },
      {
        title: 'One legal text, one product page',
        body: 'Selling into six countries today means six sets of terms, six translations and six disputes procedures. A working language and a shared digital administration cut that to one.',
      },
      {
        title: 'An older customer who shops online',
        body: 'The fastest-growing group of customers will be people who find it hard to reach a shop. Reliable, cheap home delivery is not a convenience business in that Europe — it is a public service that happens to be commercial.',
      },
    ],
    links: [
      { href: '/book/european-egovernment', label: 'The digital state proposal' },
      { href: '/why', label: 'Why Europe has to reform' },
    ],
  },
  {
    slug: 'it-startups',
    name: 'IT Startups',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '🚀',
    lead: 'Europe has not produced companies of European scale, and the likeliest reason is that it never had one market or one working language. If you are building something, that is your problem before it is anyone’s theory — and the machines an aging Europe needs have to be built by somebody.',
    tiles: [
      {
        title: 'A home market worth the name',
        body: 'American founders sell to 340 million people in one language before they touch a border. European founders hit their first translation, legal review and payment rail at customer three. One working language is the cheapest fix available to you.',
      },
      {
        title: 'Demand nobody has to invent',
        body: 'Care, logistics, farming and municipal services will be short of workers for the next thirty years. That is a market defined by arithmetic rather than by fashion, and it is mostly unbuilt.',
      },
      {
        title: 'Public procurement you can actually win',
        body: 'A shared European digital administration with open standards is a market a small firm can sell into. Twenty-seven bespoke national systems is a market only consultancies can sell into.',
      },
      {
        title: 'The engineer is the point',
        body: 'This whole proposal is addressed to the person who could build a piece of it. Nothing here needs permission to start: the software, the standards and the first working machines are all things you can begin without asking an institution.',
      },
    ],
    links: [
      { href: '/support', label: 'What you can do' },
      { href: '/book/robotic-reindustrialisation', label: 'The robotics proposal' },
    ],
  },
  {
    slug: 'european-security',
    name: 'European Security',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '🛡️',
    lead: 'A continent with fewer young people cannot defend itself by fielding more of them. Security and the demographic problem have the same answer — autonomous systems — and the war on Europe’s eastern border is already paying for the research.',
    tiles: [
      {
        title: 'Defence research that converts to civilian use',
        body: 'Autonomy, sensing and rapid manufacturing are being funded now for military reasons. The same capability, deliberately converted afterwards, is what runs farms, clinics and city services. Plan the conversion now, or pay for the technology twice.',
      },
      {
        title: 'Fewer soldiers, not less defence',
        body: 'Every European army is competing for the same shrinking group of young people as every hospital and every factory. Machines are how defence stops being a bidding war against the care sector.',
      },
      {
        title: 'Forces that can talk to each other',
        body: 'Joint operations run on a working language and shared systems. The language layer is not only a business measure; it is what makes European defence cooperation something other than a photograph.',
      },
      {
        title: 'Administration that works in wartime',
        body: 'A digital state keeps paying pensions, moving supplies and registering people when buildings and staff are not available. Ukraine demonstrated this; the rest of Europe should not need the same lesson.',
      },
    ],
    links: [
      { href: '/benefits/ukraine', label: 'Ukraine' },
      { href: '/why', label: 'Why Europe has to reform' },
    ],
  },
  {
    slug: 'information-economy',
    name: 'Information Economy',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '📊',
    lead: 'Europe’s data is split into two dozen languages and as many legal systems, which is why so little of it turns into companies. Language is not a cultural detail in an information economy, it is the bottleneck.',
    tiles: [
      {
        title: 'One corpus instead of twenty-four',
        body: 'Research, law, records and public data written in one working language become a single resource that can be searched, compared and built on. Split across languages, the same material is the reason European services stop at the border.',
      },
      {
        title: 'Models trained on European material',
        body: 'Language technology follows the size of the corpus. A continent that writes its working documents in one language can build systems on its own text instead of renting them from whoever trained on more.',
      },
      {
        title: 'Public records that outlive the government',
        body: 'Digital archives with verifiable history make public data trustworthy over decades — which is what an aging society needs, because entitlements earned now are claimed forty years later.',
      },
      {
        title: 'Who holds the data holds the gains',
        body: 'The ownership question applies to information before it applies to machines. European public data should be a common resource, not a licence somebody sells back to the people who produced it.',
      },
    ],
    links: [
      { href: '/book/european-english', label: 'The language proposal' },
      { href: '/book/european-egovernment', label: 'The digital state proposal' },
    ],
  },
  {
    slug: 'regional-development',
    name: 'Regional Development',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '🏙️',
    lead: 'Regions empty out before countries do. The places that lose people first are the ones where automated services decide whether anything keeps running, and where a shared language decides whether the work can arrive without the worker moving away.',
    tiles: [
      {
        title: 'Services that survive a small population',
        body: 'Transport, waste, home care and delivery all assume staff a thin region cannot hire. Cheap machines keep a village with 400 residents supplied instead of writing it off.',
      },
      {
        title: 'The job can come to the region',
        body: 'Remote European work is limited by language far more than by infrastructure. One working language turns broadband in a rural district into actual employment.',
      },
      {
        title: 'Build once, deploy everywhere',
        body: 'A small municipality cannot commission its own digital services. Shared European systems put the same administration in a market town and a capital, at a cost a market town can pay.',
      },
      {
        title: 'Municipal ownership is a real option',
        body: 'For communal services, a town or a cooperative can own the machines outright — provided they are cheap and built on open standards. That is the difference between a region saving money and a region renting its own streets.',
      },
    ],
    links: [
      { href: '/principles', label: 'How we decide' },
      { href: '/vision', label: 'The full vision' },
    ],
  },
  {
    slug: 'european-integration',
    name: 'European Integration',
    kind: 'stakeholder',
    flag: 'EU',
    icon: '🇪🇺',
    lead: 'Integration has been argued about in terms of institutions for thirty years and moves when it offers something everyone wants. Aging is the first problem every member state genuinely shares, which makes it the strongest argument for acting together that anyone has had in a generation.',
    tiles: [
      {
        title: 'A common problem, not a common procedure',
        body: 'Birth rates are below replacement everywhere in Europe. That is not a national problem with national fixes, and it does not require anyone to love Brussels to see the case for a shared answer.',
      },
      {
        title: 'A European public needs a shared language',
        body: 'There is no European politics while there are only national publics talking past each other. The awareness people build working together in business becomes, over time, the awareness they bring to European politics.',
      },
      {
        title: 'Doing it once instead of twenty-seven times',
        body: 'Every member state funds its own digitalisation separately today. Building it together is not a new budget, it is a less wasteful use of the one we already spend.',
      },
      {
        title: 'Unanimity you can actually get',
        body: 'Treaty change needs everyone to agree, and agreement follows conviction. A proposal built so each country wins something concrete is the only kind that earns it — which is why this site answers the question country by country.',
      },
    ],
    links: [
      { href: '/book/political-path', label: 'How this happens politically' },
      { href: '/principles', label: 'How we decide' },
    ],
  },
]
