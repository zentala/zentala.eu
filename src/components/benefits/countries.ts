import type { BenefitEntry } from './types'

/**
 * Country entries. Each one starts from that country's own demographic
 * arithmetic, then says what the three layers — a shared working language, a
 * digital state, cheap robots — pay it back, and who ends up owning the gains.
 */
export const countries: BenefitEntry[] = [
  {
    slug: 'germany',
    name: 'Germany',
    kind: 'country',
    flag: 'DE',
    lead: 'Germany will lose workers faster than it can replace them, and it holds the factories that could build the machines to cover the gap. It has the most to gain from making robots cheap and the most to lose from waiting.',
    tiles: [
      {
        title: 'Turn the car industry into the robot industry',
        body: 'German factories already do precision assembly at scale, and the market they were built for is shrinking. The same plants, suppliers and engineers can build service robots and autonomous machines. This is the reindustrialisation Germany is looking for, aimed at demand that demographics guarantee.',
      },
      {
        title: 'Care work nobody will be left to do',
        body: 'German hospitals and care homes cannot hire enough staff today, and the people who will need care are the largest group the country has ever had. Automating what can be automated — logistics, monitoring, routine physical work — is the only plan that does not rest on importing carers at a scale no European country has managed.',
      },
      {
        title: 'One working language, so skilled people stay reachable',
        body: 'Germany competes for scarce engineers against the United States, and it competes in German. English as the working language of European business lets a Portuguese or Polish specialist take a job in Munich without a two-year detour through a language course.',
      },
      {
        title: 'An administration that costs less to run',
        body: 'German bureaucracy is slow and paper-bound, and soon it will be staffed by fewer people. A shared European digital administration pays to build it once, instead of sixteen states building sixteen versions.',
      },
    ],
    links: [
      { href: '/book/robotic-reindustrialisation', label: 'The robotics proposal' },
      { href: '/docs/book/european-egovernment', label: 'The digital state proposal' },
    ],
  },
  {
    slug: 'france',
    name: 'France',
    kind: 'country',
    flag: 'FR',
    lead: 'France has the two things automation needs most and Europe is short of: electricity it can count on, and a defence industry already building autonomous systems. Both can be pointed at the demographic problem.',
    tiles: [
      {
        title: 'Cheap power is what makes robots cheap',
        body: 'Machines that run all day are an electricity bill. French nuclear output, sold across an integrated European grid, decides whether an automated service costs a town less than the staff it can no longer hire.',
      },
      {
        title: 'Defence research that converts',
        body: 'The war on Europe’s eastern border is funding autonomy, sensing and manufacturing. France builds these systems. The same capability, once the emergency passes, is what farms, clinics and city services will run on — and that conversion is the realistic way Europe pays for robotics at all.',
      },
      {
        title: 'Farming with fewer farmers',
        body: 'The average French farmer is near retirement and few are taking over. Autonomous field machinery and logistics keep food production in French hands rather than leaving it to imports as the generation that farms today stops.',
      },
      {
        title: 'A language layer that does not cost you your own',
        body: 'English as a working language of business and administration is a tool for trade and government, not a replacement for French culture. France keeps that distinction honest — and gains a European public that can hear its case.',
      },
    ],
    links: [
      { href: '/docs/book/european-english', label: 'The language proposal' },
      { href: '/why', label: 'Why Europe has to reform' },
    ],
  },
  {
    slug: 'poland',
    name: 'Poland',
    kind: 'country',
    flag: 'PL',
    lead: 'Poland is aging faster than the Europe it joined, and it has one of the largest pools of software engineers on the continent. Writing the software that runs Europe’s machines is the contribution Poland can actually make, and the one that pays for its own retirement.',
    tiles: [
      {
        title: 'Software is the layer Poland can own',
        body: 'Poland will not out-build German factories. It can write the control systems, fleet software and safety layers those machines run on — work that scales without raw materials and pays well enough to keep engineers here.',
      },
      {
        title: 'Your pension depends on this, sooner than most',
        body: 'Polish demographics are among the worst in Europe: a small group of workers will be asked to carry a large group of retirees within thirty years. Automating old-age provision is not a technology project here, it is the pension plan.',
      },
      {
        title: 'Security and automation are one investment',
        body: 'Poland is paying for defence anyway. Robotics funded for the eastern border becomes the manufacturing and autonomy capacity that later runs civilian services — if we plan the conversion instead of discovering it.',
      },
      {
        title: 'English ends the discount on Polish work',
        body: 'Polish firms sell into Europe at a disadvantage that has nothing to do with quality: the meeting happens in somebody else’s language. A common working language turns a regional supplier into a European one.',
      },
    ],
    links: [
      { href: '/book/designing-our-retirement', label: 'Designing our retirement' },
      { href: '/book/political-path', label: 'How this happens politically' },
    ],
  },
  {
    slug: 'italy',
    name: 'Italy',
    kind: 'country',
    flag: 'IT',
    lead: 'Italy is the oldest country in Europe and the clearest preview of where the rest is heading: emptying towns, a pension bill that grows every year, young people leaving for work elsewhere. Whatever works here will work everywhere.',
    tiles: [
      {
        title: 'Towns that keep running with a tenth of the staff',
        body: 'Hundreds of Italian communes cannot fill the jobs that keep them going — waste collection, transport, home visits. Cheap municipal robotics and remote services are what stop a falling population from turning into abandonment.',
      },
      {
        title: 'Machine builders with a new market',
        body: 'Italy is second only to Germany in industrial machinery, much of it in family firms. Service and farm robots are the same craft aimed at a market that grows with every retirement.',
      },
      {
        title: 'Keep your engineers by giving them European work',
        body: 'Italian graduates leave because the interesting jobs are abroad. A single European labour market with one working language means the interesting job can sit in Turin or Bari and still be European.',
      },
      {
        title: 'Health spending that does not eat the budget',
        body: 'Predictive medicine and digital health cut the cost that grows fastest in an aging country. Built once at European scale, Italy pays a share instead of the whole bill.',
      },
    ],
    links: [
      { href: '/book/designing-our-retirement', label: 'Designing our retirement' },
      { href: '/vision', label: 'The full vision' },
    ],
  },
  {
    slug: 'spain',
    name: 'Spain',
    kind: 'country',
    flag: 'ES',
    lead: 'Spain has young people without work and old people without carers at the same time. That is a broken match between skills and needs, and the layers fix the match rather than the mood.',
    tiles: [
      {
        title: 'Work that exists where the young people are',
        body: 'Remote European work is blocked less by bandwidth than by language. With English as the working language of European business, a graduate in Seville can hold a European job without leaving Seville — and the tax stays in Spain.',
      },
      {
        title: 'Sun, power and automated food',
        body: 'Spain grows much of Europe’s produce with labour it can no longer find, and it generates the cheap electricity automation needs. Autonomous farming and logistics keep that industry Spanish instead of moving it outside Europe.',
      },
      {
        title: 'Care for a coast full of retirees',
        body: 'Spain hosts Europe’s retirees as well as its own. Automated home support, monitoring and delivery are what make that workable when there are not enough working-age people to staff it by hand.',
      },
      {
        title: 'One digital administration, built once',
        body: 'Spain runs seventeen regional administrations plus the state. Shared European digital public services cut duplicated spending, and the saving is largest where the duplication is thickest.',
      },
    ],
    links: [
      { href: '/docs/book/european-english', label: 'The language proposal' },
      { href: '/benefits/southern-europe', label: 'Southern Europe' },
    ],
  },
  {
    slug: 'sweden',
    name: 'Sweden',
    kind: 'country',
    flag: 'SE',
    lead: 'Sweden already works in English, already runs a digital state, and still faces the same arithmetic: fewer workers, more retirees, a welfare model built on having plenty of both. It is furthest along, which makes it the place to prove the rest.',
    tiles: [
      {
        title: 'A small market gets a large one',
        body: 'Swedish companies build for ten million people and export to survive. A European market that works in one language is the home market Sweden never had — and the reason a Swedish robotics firm could reach European scale instead of being bought early.',
      },
      {
        title: 'Automation negotiated, not imposed',
        body: 'Sweden has Europe’s strongest tradition of unions treating machines as a shared gain rather than a threat. That is an answer to who captures the gains, and it is a Swedish export.',
      },
      {
        title: 'Welfare that survives the demographic bill',
        body: 'Swedish care is publicly funded and staff-intensive. Automating the mechanical parts of elderly care is how the model keeps its promises when the working-age share falls.',
      },
      {
        title: 'Your digital state becomes the template',
        body: 'Sweden and its neighbours have already built services other states are still arguing about. Making them the European baseline saves everyone else the first attempt.',
      },
    ],
    links: [
      { href: '/benefits/northern-europe', label: 'Northern Europe' },
      { href: '/docs/book/european-egovernment', label: 'The digital state proposal' },
    ],
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    kind: 'country',
    flag: 'NL',
    lead: 'The Netherlands moves Europe’s goods and grows food on almost no land, and does both with labour that is already scarce. It is where automation pays back fastest.',
    tiles: [
      {
        title: 'Ports and warehouses without the workers',
        body: 'Dutch logistics runs on shifts nobody wants and a workforce that is getting older. Autonomous handling and transport keep Rotterdam central to Europe rather than letting a labour shortage decide the matter.',
      },
      {
        title: 'Greenhouses are already robots',
        body: 'Dutch horticulture is the most automated farming in the world. Making that technology cheap and standard across Europe turns a national advantage into an export industry with demand demographics guarantee.',
      },
      {
        title: 'English is already the working language',
        body: 'Dutch business proves the point the rest of Europe argues about: a country can work in English and keep its own language and culture intact. The Netherlands loses nothing by making it official and gains a market that works the way it already does.',
      },
      {
        title: 'A pension pot that could own the machines',
        body: 'Dutch pension funds are among the largest in Europe. Money already set aside for retirement can buy a share of the automation that will serve that retirement — held publicly, rather than rented back from whoever got there first.',
      },
    ],
    links: [
      { href: '/docs/book/european-english', label: 'The language proposal' },
      { href: '/principles', label: 'How we decide' },
    ],
  },
  {
    slug: 'ukraine',
    name: 'Ukraine',
    kind: 'country',
    flag: 'UA',
    lead: 'Ukraine is building autonomous machines under fire and will have to rebuild a country with fewer people than it started with. Both facts put it at the centre of this plan rather than at the door.',
    tiles: [
      {
        title: 'The continent’s fastest robotics industry',
        body: 'Ukrainian teams design, build and improve autonomous systems in weeks. That is exactly the capability Europe needs pointed at farms, clinics and city services once the war allows, and it is the clearest case of defence research converting to civilian use.',
      },
      {
        title: 'Rebuild digital first',
        body: 'Ukraine already runs public services through a phone app better than most member states do. Reconstruction can start from a digital administration instead of retrofitting one, and set the European standard while doing it.',
      },
      {
        title: 'Accession in a working language',
        body: 'Joining a Union that works in one language is a far shorter road than joining twenty-four. English as the working language turns Ukrainian integration into a question of institutions, not translation backlogs.',
      },
      {
        title: 'A shared interest worth more than the quarrel',
        body: 'The Union was built so there would be no more war. Ukraine inside a common venture — language, digital state, automated production — is that idea applied to this century instead of remembered from the last one.',
      },
    ],
    links: [
      { href: '/book/political-path', label: 'How this happens politically' },
      { href: '/benefits/european-security', label: 'European security' },
    ],
  },
]
