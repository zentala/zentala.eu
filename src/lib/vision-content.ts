/**
 * The frame, the three layers and the ownership question — authored once.
 *
 * `/` and `/vision` used to declare their own copies of this text and had
 * already drifted apart (different frame wording, bullets present on one page
 * and missing on the other). Both pages now import from here: the frame steps
 * and the ownership note are identical on both, and the layers render in a
 * short or long form driven by a prop rather than by a second copy of the text.
 *
 * Source of the argument: `.plan/vision/aging-society-frame.md`.
 * The horizon is stated one way everywhere: roughly thirty years of working
 * economy left.
 */
import type {
  Action,
  FrameForm,
  FrameStep,
  Layer,
  LayerContent,
} from '../components/vision/types';

/**
 * The four beats of the argument, in order: the shared condition, the
 * consequence, the choice, the window. Rendered verbatim on `/` and `/vision`.
 */
export const frameSteps: FrameStep[] = [
  {
    label: 'The shared condition',
    text: 'Europe is aging. Birth rates are below replacement in every member state. This is not a national problem with national fixes; it is the same problem everywhere, which makes it the strongest argument for acting together — and preparing for a future without generational replacement is one of the most important decisions our societies and economies face.',
  },
  {
    label: 'The consequence, and the official answer',
    text: 'Pensions and public services rest on growth plus generational replacement. Both end within roughly thirty years, and governments already say so: they warn of an economic crisis and of changes that could shake the economy. Their answer is to bring in migrants, so that someone is left to do the work.',
  },
  {
    label: 'That is not the only answer',
    text: 'Those warnings show the problem is real. They do not show that importing workers is the only way to deal with it. Money is a claim on someone else’s labour, and that labour comes from people or from machines. There will not be enough people.',
  },
  {
    label: 'The window, and the goal',
    text: 'We are not old yet. We have roughly thirty years of working economy left to build what will carry us; this is the last generation that can pay for it, and the technology arrived in time. So name the goal: a robotic economy that pays for our retirement. Machines that do the work there will not be enough people to do.',
  },
];

/** Page-level framing for the homepage, where the frame is the reader's entry. */
export const homeFrameIntro = {
  eyebrow: 'Why this site exists',
  title: 'What should Europe look like when we are old?',
  conclusion:
    'Let us decide what we want the European Union, and our Europe, to look like when we are older, and use the next thirty years to build it.',
};

/** Page-level framing for /vision, which goes on to the layers at full length. */
export const visionFrameIntro = {
  eyebrow: 'The frame',
  title: 'We are an aging society. We can design what comes next.',
  conclusion:
    'So the plan is to shift our expectations onto robotics, deliberately, as a strategy, not as a hope. Robotics needs the layers beneath it. Build them in order.',
};

/** Heading and lead for the layer section, shared by both pages. */
export const layersSection = {
  title: 'Three layers, in build order',
  lead: 'Not three parallel pillars. Each level is what makes the next one possible, and the ownership question runs through all of them.',
};

/**
 * The three layers, floor first. Every supporting point is authored in its
 * long form; `shortText` compresses a point for the homepage and `longOnly`
 * keeps it on /vision alone.
 */
export const layers: LayerContent[] = [
  {
    level: 1,
    position: 'Floor',
    title: 'One economy, one working language',
    summary:
      'A shrinking workforce has to be organised well, because there is no slack left. English as the official working language of European business and administration is the precondition.',
    points: [
      {
        text: 'English is the bottleneck of the European information economy: the most capable people cannot work with each other across borders without it.',
      },
      {
        text: 'No common language is the likely reason Europe has produced no startups or corporations of European scale, ones whose capital cannot be called French, German or Dutch.',
        shortText:
          'No common language is the likely reason Europe has produced no startups or corporations of European scale.',
      },
      {
        text: 'A shared working language produces a European political consciousness, not only a business one.',
      },
      {
        text: 'A shared interest is what keeps us from the next war. The Union was built so there would be no more war; this is the mechanism for this century.',
        longOnly: true,
      },
    ],
    href: '/book/european-english',
    linkText: 'Read the language proposal',
    tone: 'indigo',
  },
  {
    level: 2,
    position: 'Middle',
    title: 'The digital state',
    summary:
      'With a common working language the state itself can be rebuilt: digital administration, digital public services, and direct democracy in place of representation that serves lobbies.',
    points: [
      {
        text: 'Digital administration and public services cut the cost of running a state that will have fewer taxpayers.',
      },
      {
        text: 'Direct democracy is the route out of dependence on a political class we did not choose and cannot correct between elections.',
      },
      {
        text: 'Regulation becomes a tool for improving how the state works, not a substitute for it.',
        longOnly: true,
      },
    ],
    href: '/book/european-egovernment',
    linkText: 'Read the digital state proposal',
    tone: 'blue',
  },
  {
    level: 3,
    position: 'Ceiling',
    title: 'Robotics and autonomous systems',
    summary:
      'On top of a digital state, automation becomes possible at scale. The goal, stated plainly: automate as much of old-age provision as possible, so the few young people left are not crushed carrying it.',
    points: [
      {
        text: 'Communal and municipal services: the most mechanical, the most staffed, the first to lose workers.',
        shortText:
          'Communal services, food production and logistics, and predictive medicine: the most staffed and the first to lose workers as the population ages.',
      },
      {
        text: 'Food production and delivery: autonomous farming and logistics.',
        longOnly: true,
      },
      {
        text: 'Predictive medicine and healthcare: the cost that grows fastest as a population ages.',
        longOnly: true,
      },
      {
        text: 'Military robotics research funded by the war with Russia can be converted to civilian use afterwards. This is the realistic route to funding robotics at European scale.',
      },
    ],
    href: '/book/robotic-reindustrialisation',
    linkText: 'Read the robotics proposal',
    tone: 'green',
  },
];

/** The ownership question, rendered beside the layers on both pages. */
export const crossCuttingNote = {
  eyebrow: 'Runs through every layer',
  title: 'Who captures the gains?',
  paragraphs: [
    'If automation replaces the labour our pensions depend on and the returns go to a handful of owners, we have solved production and destroyed the distribution that made it worth solving.',
    'Ownership will be mixed: state, cooperative, private, dividend. Who owns the robots matters less than one thing: robots must not be expensive.',
  ],
  principles: [
    'Cheap to buy and run',
    'Available to every municipality, farm and clinic',
    'Built on open standards',
    'Hard to monopolise',
  ],
};

/** The closing call, identical on both pages. */
export const callToAction = {
  title: 'You are not the audience for this. You are the condition of it.',
  paragraphs: [
    'Nothing here needs permission to begin. Direct democracy, a working common language, automating what an aging society cannot staff: none of it waits for an institution to approve it. It waits for enough people to want it that wanting it becomes a fact politicians have to answer to.',
    'If you repeat the idea, argue it, send it to someone, or build a piece of it, the probability of it happening goes up. That is the only way such things have ever happened. Pick a layer and carry it.',
  ],
};

/**
 * Where the call to action sends the reader. `/support` is last and is the one
 * that answers "what do I do" — the CTA used to end without it.
 */
export const ctaActions: Action[] = [
  { label: 'Why Europe needs this', href: '/why' },
  { label: 'What your country gains', href: '/benefits' },
  { label: 'The principles behind it', href: '/principles' },
  { label: 'How to help', href: '/support' },
];

/**
 * Flatten the authored layers into the shape `LayerStack` renders.
 *
 * @param form `long` keeps every point; `short` drops the long-only ones and
 *   prefers the compressed wording where one exists.
 */
export function resolveLayers(form: FrameForm): Layer[] {
  return layers.map((layer) => ({
    ...layer,
    points: layer.points
      .filter((point) => form === 'long' || !point.longOnly)
      .map((point) => (form === 'short' && point.shortText ? point.shortText : point.text)),
  }));
}
