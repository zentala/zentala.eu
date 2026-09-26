---
title: Designing Our Retirement
description: Europe is aging, the pension model is ending, and we have roughly thirty years of working economy left to build what replaces it.
date: 2026-09-20
url: https://zentala.eu/book/designing-our-retirement
---
import ComparisonTable from '../../../components/ComparisonTable.astro';
import EvidenceBox from '../../../components/EvidenceBox.astro';
import KeyFigure from '../../../components/KeyFigure.astro';
import MeansForYou from '../../../components/MeansForYou.astro';
import Objection from '../../../components/Objection.astro';
import ObjectionList from '../../../components/ObjectionList.astro';
import ProvenanceNote from '../../../components/ProvenanceNote.astro';
import PullQuote from '../../../components/PullQuote.astro';
import SideNote from '../../../components/SideNote.astro';
import { default as T } from '../../../components/TermRef.astro';

{/* SPINE: a pension is a claim on somebody's labour, and the labour will not exist — so we shift our expectations onto machines, deliberately, while we still have thirty years of working economy. */}

Everyone talks about the demographic crisis. Nobody does anything about it.

That sentence is the reason this site exists. We have known the numbers for
thirty years. Birth rates across Europe are below replacement. The generation
now in its thirties will retire into a continent with far fewer workers than
pensioners. This is not a forecast that might not happen — it already happened,
in the maternity wards, decades ago. **The people who will not be working in
2056 were not born in 1996.**

And still the response is a shrug, a headline, and a return to quarterly
business.

<KeyFigure value="1.34" label="live births per woman in the EU in 2024; replacement is about 2.1, and the highest member state, Bulgaria, stood at 1.72" source="Eurostat, Fertility statistics" href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Fertility_statistics" />

## The thing that connects us

I was looking for a problem common to the whole Union. Not a Polish problem,
not a German one — something every member state has, whatever its politics.
The search had a practical motive. The Union is transforming, and it is
transforming toward the right and toward the national. I take that as given.
If we want to stay together through it — and from where I sit, in Poland,
staying together is the priority — we need something everyone can look at and
call sensible, regardless of how they vote.

Demographics is that thing. Fertility is below replacement in every member
state. It is the one condition we genuinely share, which makes it the strongest
available argument for acting together.

## What actually breaks

A pension is not a savings account. Whatever the paperwork says, it is a claim
on the work of people who are alive when you retire. Money buys nothing by
itself; it buys somebody's labour, or the output of somebody's machine. So the
question for 2056 is not whether the pension fund has enough zeros in it. The
question is: **who is going to do the work?**

Somebody has to care for an eighty-year-old. Somebody has to grow, move and
deliver food. Somebody has to run the water, the power, the waste, the buses.
When the working-age population shrinks and the dependent population grows,
those services do not merely get expensive — they stop being available. You
stand there with money and nobody comes.

<PullQuote>You stand there with money and nobody comes.</PullQuote>

That is the specific thing worth being afraid of. Not an abstraction about GDP:
a pension that buys nothing, because the system still assumes workers who no
longer exist — no one to care for us, no one to bring food.

## Two sources of work, and only two

If the work has to be done and there are not enough people, the labour can
come from exactly two places: **more people, or machines.** There will not be
enough people. The proposal is to shift our expectations onto robotics —
deliberately, as a strategy, not as a hope.

Europe's reflex has been the first source, and it is failing. It does not add
up economically: migrants arriving without the skills the economy needs cost
more in support than they contribute, and the highly skilled ones, who are
scarce, do not come here to wipe anyone's backside. It has not worked at scale
anywhere we can point to, and we would need it at scale. And there is
something degrading in the premise itself: planning to import people so they
can do the care work we will not do is not a policy anyone should be proud of.
What I would do instead — teach first, publish the criteria, then invite — is
[its own chapter](/book/education-and-migration).

<ObjectionList title="Three objections, answered where they belong">
  <Objection claim="You see robots because you are a programmer." verdict="Yes. Read what follows knowing that.">
    I should name my own bias. I am a programmer, so I see a nail everywhere,
    because I have a hammer. It is the one place on this site where I say it,
    and it applies to every chapter after this one.
  </Objection>
  <Objection claim="Immigration is the answer, and Europe has always used it." verdict="Three parts, none of them comfortable.">
    Answered above in three sentences and at length in [Education and
    Migration](/book/education-and-migration), which is where I say what I would
    do instead.
  </Objection>
  <Objection claim="Longevity dissolves the premise: if we rejuvenate, there is no labour problem." verdict="My bet is that the shortage arrives first — and the demand is the same either way.">
    It is possible that we will extend life significantly and rejuvenate. If
    that happens, there is probably no labour-force problem in the shape this
    chapter argues about. I do not know. Whether
    Europeans get access to that — to bioengineering, and to a long life of
    decent quality — depends on whether we organise ourselves so that it happens
    here. So the bet this site makes is that the shortage arrives before the
    cure does; and if the cure comes first, the thing we have to do to get it is
    the thing this site asks for anyway. The speculation is written out, and
    flagged as speculation, in [Redesigning the
    State](/book/redesigning-the-state#longevity-changes-the-equation).
  </Objection>
</ObjectionList>

## The case for machines

We are lucky in one specific way: the technology arrived in time. Robotics is
not a bet on something that might exist one day. Machines that move, sense and
manipulate the physical world — humanoid and otherwise — are being deployed
now, and the open question is no longer *whether*. It is whether Europe deploys
them at scale, and whether ordinary people see the benefit.

<ComparisonTable
  caption="Where the machines go, in the order they are ready"
  columns={[
    { label: "Municipal and communal services", kind: "fact" },
    { label: "Food production and delivery", kind: "fact" },
    { label: "Predictive medicine and healthcare", kind: "fact" },
  ]}
  rows={[
    { dimension: "What it covers", cells: ["Cleaning, maintenance, waste, basic logistics", "Autonomous farming and autonomous transport", "Catching what would become a hospitalisation"] },
    { dimension: "Why it comes first", cells: ["The most mechanical, the most staffed, the first to lose workers", "The most advanced civilian robotics we already have", "The cost that grows fastest as a population ages"] },
  ]}
  source="The author's ordering, dictated 2026-09-20; argued in Robotic Reindustrialisation"
/>

Said plainly, as a strategy a country could adopt: **we will automate as much
of old-age provision as we can, so that the few young people left are not
crushed carrying it.** Where the machines go first, and what is not machinery
at all — systems that let older people support each other, live together, work
if they want to, and stay connected — is argued in [Robotic
Reindustrialisation](/book/robotic-reindustrialisation#where-the-machines-go-first).

We are building the world we will retire into. That is a strange sentence to
write at thirty-five, and it is the most practical thing I know.

## Who pays for it

Two answers, and both turn the question around.

**We already pay.** Twenty-seven member states each fund their own
digitalisation, their own systems, their own procurement, their own mistakes.
Doing it once, together, is not a new budget. It is a less wasteful use of the
one we have.

**And we already saved.** Pension contributions are money set aside for exactly
this future. Part of it can be invested in building the robotics that will
serve that future — so that we *own* it, publicly, rather than renting it later
from whoever got there first — and so that it starts delivering public services
from the beginning rather than after some distant payoff.

**And daily life during the transition is paid for the way it is paid for
now.** Thirty years of living is paid from what was paid for earlier; nothing
about that changes. What changes is whether there is anything to buy at the end
of it. There will be, if we spent those thirty years building rather than
destroying, and if we built cheaply rather than expensively.

## Who ends up owning it

<T slug="who-captures-the-gains">Who captures the gains</T> decides whether any
of the above is worth doing: if automation replaces the labour our pensions
depend on and the returns go to a handful of owners, we have solved production
and destroyed the distribution that made solving it worthwhile. Ownership is
the second question, though, and models will be mixed; what matters more is
that the machines are <T slug="cheap-is-wealth">cheap</T> — affordable, open,
hard to monopolise.

<SideNote label="Argued in full">
  Why cheapness, not ownership, is the target: [Cheap Is
  Wealth](/book/cheap-is-wealth). Who the surplus has to reach, and the school
  meal as the worked example: [Who It Earns For](/book/who-it-earns-for).
</SideNote>

## The window

We are not old yet. We have roughly thirty years of functioning economy —
enough tax base, enough workers, enough industrial capacity — to build the
thing that will carry us once we have none of them. This is the last generation
that can pay for it. That is the urgency, and also the reason for optimism:
this is not a catastrophe we can only brace for. It is a construction project
with a deadline.

<KeyFigure qualifier="≈" value="30 years" label="of working economy left to build what carries us — the author's rough figure, not a projection" source="Paweł Żentała, dictation of 2026-09-20 (aging-society-frame.md:34-37)" />

<EvidenceBox>
  The claim that no national policy has reversed the birth rate is falsifiable:
  one member state back above replacement for a decade would do it. None is
  there today — the highest rate in the Union in 2024 was Bulgaria's [1.72](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Fertility_statistics).
  If one appears, this chapter's third step weakens and the site should say so.
</EvidenceBox>

<MeansForYou actions={["The next time someone says 'demographic crisis', ask the one question this chapter turns on: who is going to do the work in 2056? 'More people' is answered in Education and Migration; 'machines' is built in Robotic Reindustrialisation.", "Pick the layer you could build a piece of — the language, the digital state, the machines — and go to that chapter. The frame is only the roof."]}>
  If you are an engineer in Europe, you are not the audience for this argument;
  you are [the condition of it](/manifesto).
</MeansForYou>

<ProvenanceNote
  source={[
    "aging-society-frame.md:9-37 (the argument in order), :88-100 (the targets), :111-120 (who captures the gains), :127-151 (why robotics and not immigration; the hammer), :153-162 (ownership second, cheap first), :171-182 (who pays), :184-209 (where the frame came from; the fears), :228-245 (the reader as the condition)",
    "2026-09-25-answers-and-safeguards-dump.md:96-100 (thirty years of daily life paid from what was paid earlier)",
    "2026-09-25-redesigning-the-state-dump.md:57-67 (longevity may dissolve the problem; whether we get it depends on organising ourselves)",
  ]}
  dictated={[
    "Everyone talks about the demographic crisis and nobody does anything; a common problem for the whole Union; staying together is the priority from a Polish point of view.",
    "Money is a claim on labour; two sources, people or machines; not enough people; shift expectations onto robotics as a strategy.",
    "The three-part immigration answer, including 'do not come here to wipe anyone's backside'; 'I am a programmer, so I see a nail everywhere'.",
    "The three targets in order; automate old-age provision so the few young are not crushed; systems for older people to support each other.",
    "Who pays: we already pay, we already saved, thirty years of daily life paid as now; cheap before owned; roughly thirty years of working economy.",
    "Longevity as speculation: possibly no labour problem if we rejuvenate; whether we get it depends on organising ourselves.",
  ]}
  added={[
    "Eurostat fertility figures (1.34 EU 2024; Bulgaria 1.72) — sourced, fact.",
    "The 'targets' table — editorial shape for his list.",
    "The longevity objection's framing as 'his bet' — editorial resolution of R4 contradiction 4, resting on the dump's own 'possibly' and 'depends on whether we organise ourselves'.",
    "'The people who will not be working in 2056 were not born in 1996' and 'you stand there with money and nobody comes' — editorial images for his mechanism, kept from the earlier draft.",
  ]}
  cut={[
    "The full immigration argument and the 'humanoid form is close enough' sentence — one home, and his later preference for simple robots over humanoids (direct-democracy dump :301-304) is in the robotics chapter.",
    "The full ownership argument — one home, cheap-is-wealth and who-it-earns-for.",
    "The generic closing (carry the argument, build a piece) — the generated footer's line.",
  ]}
  open={["None."]}
/>
