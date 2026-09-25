import type { BenefitEntry } from './types'

/**
 * Regional entries. `members` lists the countries a region covers, so a reader
 * from Czechia or Portugal finds themselves in the picker even though the site
 * does not claim a separate answer for every member state.
 */
export const regions: BenefitEntry[] = [
  {
    slug: 'central-europe',
    name: 'Central Europe',
    kind: 'region',
    flag: 'EU',
    members: ['Poland', 'Czechia', 'Slovakia', 'Hungary', 'Austria', 'Slovenia'],
    lead: 'Central Europe has the engineers and the factories that already build for Germany, and it is aging as fast as the countries it supplies. Its answer to the demographic problem is to move up the stack: build the machines and write the software, instead of assembling somebody else’s.',
    tiles: [
      {
        title: 'The skilled workforce that can build the robots',
        body: 'The region trains engineers and runs the subcontracting plants of European industry. Robotics needs exactly that mix of software and manufacturing, and it is the first market in forty years where Central Europe could start at the same line as everyone else.',
      },
      {
        title: 'Stop being the cheap tier',
        body: 'Convergence stalled where the work stayed low in the value chain. Owning the software layer of automation is how a region moves from assembling products to defining them — and it is the one contribution Central Europe can make that the rest of Europe needs.',
      },
      {
        title: 'Emigration cut both ways',
        body: 'Millions left for work in the west; now the countries they left are short of workers too. A single labour market that works in one language makes the choice less final, because a European job no longer requires moving country.',
      },
      {
        title: 'The eastern border pays for the technology',
        body: 'Defence spending here is not optional. Directed at autonomy and manufacturing, it buys the same capability that will later run hospitals, farms and municipal services.',
      },
    ],
    links: [
      { href: '/benefits/poland', label: 'Poland in detail' },
      { href: '/book/robotic-reindustrialisation', label: 'The robotics proposal' },
    ],
  },
  {
    slug: 'southern-europe',
    name: 'Southern Europe',
    kind: 'region',
    flag: 'EU',
    members: ['Italy', 'Spain', 'Portugal', 'Greece', 'Malta', 'Cyprus'],
    lead: 'Southern Europe is where the demographic wall arrives first: the oldest populations in the Union, the youngest people leaving, and public services already short of staff. The gap with the north is not a matter of effort, it is a matter of distance, connections and language — and all three are fixable.',
    tiles: [
      {
        title: 'Distance stops mattering when the work is digital',
        body: 'A digital state and a common working language let a firm in Porto or Thessaloniki sell into the whole European market on the same terms as one in Frankfurt. That does more for regional disparity than any transfer payment has.',
      },
      {
        title: 'Logistics that connect, not just deliver',
        body: 'Southern ports handle goods for the whole continent while their own regions stay poorly connected. Automated freight and unified logistics turn geography from a penalty into an advantage: the south is Europe’s door to Africa and the Mediterranean.',
      },
      {
        title: 'Cheap robots are what keep small towns alive',
        body: 'Inland regions lose people faster than anywhere in Europe. Services that run with almost no staff — transport, waste, home care, delivery — decide whether those towns survive the next twenty years.',
      },
      {
        title: 'Sun into automation',
        body: 'The region generates Europe’s cheapest solar power. Machines that run constantly turn that into a location advantage for automated farming and manufacturing, provided the grid is genuinely European.',
      },
    ],
    links: [
      { href: '/benefits/italy', label: 'Italy in detail' },
      { href: '/benefits/spain', label: 'Spain in detail' },
    ],
  },
  {
    slug: 'northern-europe',
    name: 'Northern Europe',
    kind: 'region',
    flag: 'EU',
    members: ['Sweden', 'Denmark', 'Finland', 'Norway', 'Iceland', 'Scandinavia'],
    lead: 'The Nordic countries are furthest along on every layer — they work in English, run digital states, and treat automation as something to negotiate rather than resist. Their gain is scale: proven systems stop being national experiments and become the European baseline.',
    tiles: [
      {
        title: 'Your systems, running for 400 million people',
        body: 'Nordic digital identity, health records and tax filing already work. Adopting them as the European standard spares everyone else a decade of first attempts, and gives the firms that built them a market fifty times the size.',
      },
      {
        title: 'Clean power and heavy automation',
        body: 'Hydro, wind and nuclear plus cold climate make the north the sensible place for energy-hungry production. Automated manufacturing that needs cheap, steady, low-carbon electricity has an obvious home.',
      },
      {
        title: 'Welfare states meet their demographic bill',
        body: 'Nordic care promises the most and therefore has the most to lose when the working-age share falls. Automating the mechanical parts of care is how those promises survive contact with the numbers.',
      },
      {
        title: 'Small languages need a shared one',
        body: 'Nordic firms already work in English because six million speakers is not a market. Making it the official working language of European business simply admits what the region has practised for thirty years.',
      },
    ],
    links: [
      { href: '/benefits/sweden', label: 'Sweden in detail' },
      { href: '/book/european-egovernment', label: 'The digital state proposal' },
    ],
  },
  {
    slug: 'baltic-states',
    name: 'Baltic States',
    kind: 'region',
    flag: 'EU',
    members: ['Estonia', 'Latvia', 'Lithuania'],
    lead: 'The Baltics built digital states before anyone asked them to, and they live next to the war that is funding Europe’s robotics. They are small enough to move first and exposed enough to need to.',
    tiles: [
      {
        title: 'You already proved the middle layer works',
        body: 'Estonian digital government is the standing answer to everyone who says a European digital state is impossible. The region’s gain is that its proof stops being a curiosity and becomes the specification.',
      },
      {
        title: 'Defence technology with a second life',
        body: 'Border states are buying autonomous sensing, drones and logistics now. Building them here, with conversion to civilian use planned from the start, turns a security cost into an industry.',
      },
      {
        title: 'Populations too small to lose',
        body: 'Emigration and low birth rates hit the Baltics harder than almost anywhere. Automated public services are not a preference here, they are how a country of two million keeps functioning.',
      },
      {
        title: 'One language, one market, no disadvantage',
        body: 'Baltic firms carry the cost of operating in languages nobody else speaks. A common working language removes that tax and puts them level with far larger competitors.',
      },
    ],
    links: [
      { href: '/benefits/european-security', label: 'European security' },
      { href: '/book/european-egovernment', label: 'The digital state proposal' },
    ],
  },
  {
    slug: 'south-eastern-europe',
    name: 'South-Eastern Europe',
    kind: 'region',
    flag: 'EU',
    members: ['Romania', 'Bulgaria', 'Croatia', 'Serbia', 'Balkans', 'Moldova', 'Albania', 'North Macedonia'],
    lead: 'The Balkans and the lower Danube lose people twice: to low birth rates and to emigration. For the countries inside the Union and the ones still queuing, the same offer applies — join a Europe that works in one language, and the distance closes faster than accession talks ever did.',
    tiles: [
      {
        title: 'Accession in one working language',
        body: 'Candidate states spend years translating law and training officials. A Union that works in English shortens that road, and makes membership a question of institutions rather than of paperwork volume.',
      },
      {
        title: 'Reasons to come back',
        body: 'Emigration drained the working-age population. European work that can be done from Cluj, Sofia or Zagreb — in a language everyone shares — is the first realistic reason for that to reverse.',
      },
      {
        title: 'Build the infrastructure once, digitally',
        body: 'Administrations here are still being built. Starting from shared European digital services costs less than the analogue version and skips a generation of legacy systems.',
      },
      {
        title: 'Robotics for thinly staffed regions',
        body: 'Rural depopulation is further along here than in western Europe. Cheap machines for farming, transport and care are what let those regions keep services at all.',
      },
    ],
    links: [
      { href: '/book/political-path', label: 'How this happens politically' },
      { href: '/benefits/european-integration', label: 'European integration' },
    ],
  },
]
