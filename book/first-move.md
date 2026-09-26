---
title: The First Move
description: The European Citizens' Initiative lets ordinary people put a demand on the Commission's desk. It binds nobody, and that is why it is the right first move.
date: 2026-09-25
url: https://zentala.eu/book/first-move
---

import Playbook from '../../../components/Playbook.astro';
import ComparisonTable from '../../../components/ComparisonTable.astro';
import EvidenceBox from '../../../components/EvidenceBox.astro';
import KeyFigure from '../../../components/KeyFigure.astro';
import Callout from '../../../components/Callout.astro';
import MeansForYou from '../../../components/MeansForYou.astro';
import ProvenanceNote from '../../../components/ProvenanceNote.astro';

{/* SPINE: the weakest instrument in the Union is the right first move, because either it works or it proves the thesis. */}

Everything else on this site is an argument. This chapter is an instruction.

If you accept that [direct democracy](/book/direct-democracy) is the lever, the
questions that follow are the ones I asked when the instrument was first put in
front of me: how do you do it? How do you register it? How do you collect the
signatures? There is exactly one instrument in the European Union that lets
people who hold no office put a demand formally on the Commission's desk, and it
is called the **European Citizens' Initiative**. A citizens' initiative is the
instrument by which citizens propose, so the name is the right one; the European
version stops where the Swiss one starts working. It binds nobody, and there is
no optional referendum beside it to strike a law down. I want to use it anyway,
and the second half of this chapter says why the weakness is the point.

First the mechanics, checked against the Commission's own pages, with the holes
marked as holes.

## How it actually works

<Playbook title="From seven people to a Commission reply" steps={[
  {
    action: "Find six other people, resident in six other member states.",
    why: "The organiser group is at least seven EU citizens living in seven different member states, each old enough to vote in European elections. You may form a legal entity to run it; you are not required to.",
    href: "https://citizens-initiative.europa.eu/how-it-works_en",
  },
  {
    action: "Register the initiative before collecting anything.",
    why: "You submit the text in an official EU language, with the organisers' names and your funding sources. The Commission answers within two months, four in some cases, and is not obliged to register you: it refuses an initiative outside its power to propose a legal act, one that is abusive, frivolous or vexatious, or one against the values in Article 2 TEU.",
    href: "https://citizens-initiative.europa.eu/how-it-works/faq_en",
  },
  {
    action: "Set the start date and collect for twelve months.",
    why: "Collection must start no later than six months after registration and runs for twelve months from the start date, on paper or through the central online collection system the Commission hosts free of charge. Nobody has to build or certify software.",
    href: "https://citizens-initiative.europa.eu/how-it-works_en",
  },
  {
    action: "Clear one million signatures, and the minimum in at least seven countries.",
    why: "Signatures count in the country of the signatory's nationality, not residence. The per-country minimums are in the table below.",
    href: "https://citizens-initiative.europa.eu/thresholds_en",
  },
  {
    action: "Hand the grouped statements to the national authorities.",
    why: "Within three months of closing, sorted by nationality. Each authority then has three months to verify and certify. Assume attrition and collect a margin above every threshold.",
    href: "https://citizens-initiative.europa.eu/how-it-works_en",
  },
  {
    action: "Take the meeting, the hearing and the reply.",
    why: "Within one month the Commission receives the organisers; within three months there is a public hearing at the European Parliament; within six months the Commission publishes a communication saying what it will do and why. That is the whole of what you are owed.",
    href: "https://citizens-initiative.europa.eu/how-it-works_en",
  },
]} />

The per-country minimums are arithmetic, not politics. Each country's threshold
is the number of MEPs it elects multiplied by the total number of MEPs,
currently 720. Germany elects 96, so 96 × 720 = 69,120. Poland elects 53, so
53 × 720 = 38,160.

<ComparisonTable
  caption="Minimum signatures per member state, initiatives registered from 16 July 2024"
  columns={[
    { label: "MEPs elected", kind: "fact" },
    { label: "Minimum signatures", kind: "fact" },
  ]}
  rows={[
    { dimension: "Germany", cells: ["96", "69,120"] },
    { dimension: "France", cells: ["81", "58,320"] },
    { dimension: "Italy", cells: ["76", "54,720"] },
    { dimension: "Spain", cells: ["61", "43,920"] },
    { dimension: "Poland", cells: ["53", "38,160"] },
    { dimension: "Netherlands", cells: ["31", "22,320"] },
    { dimension: "Czechia, Greece, Hungary, Portugal, Sweden", cells: ["21 each", "15,120 each"] },
    { dimension: "Malta, Cyprus, Luxembourg", cells: ["6 each", "4,320 each"] },
  ]}
  numeric
  source="European Commission, official threshold table (citizens-initiative.europa.eu/thresholds_en), checked 25 September 2026"
/>

Read that table the way an organiser reads it. You do not need seven big
countries. Malta, Cyprus and Luxembourg cost 4,320 each; seven of the cheapest
countries together come to under sixty thousand signatures. The binding
constraint is the one million in total, not the country spread. The spread is a
planning problem; the million is the campaign.

<EvidenceBox title="What was checked, and where">

Every step and number above was read off the Commission's own pages on 25
September 2026: [how it works](https://citizens-initiative.europa.eu/how-it-works_en),
the [FAQ](https://citizens-initiative.europa.eu/how-it-works/faq_en), the
[threshold table](https://citizens-initiative.europa.eu/thresholds_en) and the
[results page](https://citizens-initiative.europa.eu/how-it-works/results_en).
The voting age varies by member state (16 in Belgium, Germany, Malta and
Austria, 17 in Greece, 18 elsewhere); that detail is from the FAQ. If you read
this later than it was written, the pages win over this chapter.

</EvidenceBox>

## What it cannot do, said out loud

**The Commission is not obliged to propose a single line of law.** It must
answer, it must give reasons, and it may answer with a non-legislative measure,
a review, a roadmap, or a polite no. That is the whole of the obligation.

<KeyFigure
  value="14 of 135"
  label="initiatives registered since 2012 reached a million signatures and received a Commission reply"
  source="European Commission, ECI results page, checked 25 September 2026"
  href="https://citizens-initiative.europa.eu/how-it-works/results_en"
  aside
/>

The record bears that out. Of 135 initiatives registered since the instrument
opened in 2012, fourteen have reached a million and received a formal reply:
Right2Water, One of Us, Stop Vivisection, Ban Glyphosate, Minority SafePack, End
the Cage Age, Save Bees and Farmers, Stop Finning, Save Cruelty Free Cosmetics,
Fur Free Europe, Cohesion Policy for the Equality of the Regions, My Voice My
Choice, Ban on Conversion Practices, and Stop Destroying Videogames. Roughly one
in ten. The outcomes are real but partial: tighter drinking-water rules after
Right2Water, new customs codes to track the shark-fin trade after Stop Finning, a
roadmap to phase out animal testing after Save Cruelty Free Cosmetics, scientific
reviews after End the Cage Age. Secondary accounts add that no successful
initiative has yet produced a legislative proposal that gave the campaign the
whole of what it asked for
([Verfassungsblog](https://verfassungsblog.de/european-citizens-initiative/),
[The Good Lobby](https://thegoodlobby.eu/are-european-citizens-initiatives-worth-the-effort/));
that claim is theirs, not the Commission's.

<EvidenceBox variant="against" title="The hardest problem with our particular demand">

A Union-wide right to binding citizens' initiative and referendum probably
requires changing the Treaties. Article 11(4) TEU lets an initiative invite the
Commission to propose *a legal act of the Union*, and an ordinary Treaty
revision is not a legal act of the Union; it is a new treaty that every member
state has to ratify. Lawyers have argued both ways, and the admissibility of a
Treaty-change initiative is contested rather than settled
([Athanasiadou, "The European citizens' initiative: Lost in admissibility?"](https://journals.sagepub.com/doi/full/10.1177/1023263X18824772)).
There is a narrow opening: under
[Article 48 TEU](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:12008M048)
the Commission itself may submit proposals to amend the Treaties, so an
initiative that asks the Commission to use a power it demonstrably has is not
obviously outside its competence. What would settle it: a written legal opinion,
published before registration, from somebody who practises this law.

</EvidenceBox>

When that problem was put to me, I did not understand it at first, and then I
did: the Treaty speaks of a legal act of the Union, and a Treaty change is not
one. So the honest way to say it to people is that the first step is to find out
which legal act can be changed on the way to a Treaty change, and to call it the
first step. I am not a lawyer and I will not pretend this is resolved. I do not
know everything, and I would rather ask than pretend: if lawyers can speak to
this, please do, in public, before a single signature is collected.

## Why do it anyway

Now the part that is mine rather than the Commission's.

This instrument is weak, non-binding, slow, and has never yet given anybody the
whole of what they asked for. That is precisely why it is the right first move.
Not despite the weakness; because of it.

Look at what the two outcomes are.

- **If it works**, we have a Commission communication engaging with a demand
  for direct democracy across the Union, a hearing in the Parliament, and a
  million named Europeans on the record. That is a beginning, and a beginning
  is what we do not currently have.
- **If it fails**, because the Commission refuses to register it, or registers
  it and then replies with six months of prose that changes nothing, then a
  million citizens from seven countries asked politely, through the official
  channel, in the exact manner the Union designed for them, and were told no.
  That is the thesis of this site, demonstrated rather than asserted. Several
  chapters here argue that representative institutions do not listen. An
  initiative is the cheapest available experiment to find out whether that is
  true, and an experiment whose failure proves your point is not a risk. It is
  an argument you cannot lose.

{/* ASK-1 (answers-and-safeguards-dump.md:83): you said "słabe, niewiążące, właśnie dlatego z dobrym pierwszym ruchem". The chapter reads that as "if it fails, the failure proves the thesis". Is that your reasoning, or only that a weak instrument is a cheap start? */}

There is a third thing it does whatever the result, and I care about it as much
as the first two. Seven committees in seven countries collecting the same
signature for the same sentence is itself an act of European identity, the kind
that comes from doing something together rather than from being told we are a
community. Standing up to power and demanding direct democracy jointly is
something that can build a European political identity, and be healthy for a
common European future. Even a Europe of nations would find out how much it has
in common.

## The ask

An initiative has to fit on one line, because that line is what a stranger
signs on a market square. The line below is a draft, written at my request, and
I am asking for it to be improved rather than signed as it stands.

<Callout kind="demand" label="A draft line, proposed here">
  That every citizen of the Union shall have the right to initiate and to decide
  by binding referendum, at Union level and in every member state, and that the
  Commission shall propose the legal acts and, where necessary, the Treaty
  amendment required to establish it.
</Callout>

{/* ASK-2 (answers-and-safeguards-dump.md:82-86): you said "zróbmy to" and asked how; the one-line text is the editor's draft. Do you endorse it as the ask, amend it, or leave it marked as a draft? */}

Around that line, four commitments. Each is mine, and each is argued in full
elsewhere on this site:

1. **Binding, not consultative.** A vote the institutions may note and ignore is
   the thing we already have. Both instruments bind: the citizens' initiative
   that proposes, and the optional referendum that strikes a passed law down.
2. **The Swiss model, copied, not reinvented.** Their two instruments and their
   safeguards. The thresholds are one number, stated once, in
   [Direct Democracy](/book/direct-democracy#the-words-in-one-place); this
   chapter does not restate them.
3. **Paper first, digital in parallel.** Paper works now and nobody can dismiss
   it as a technology experiment. We build and learn the digital layer
   alongside, and keep paper as the permanent fallback. Voting in schools and
   town halls, as we already do.
4. **Safeguards named up front.** We are buying the safeguards too. The
   protections that stop a majority voting against a minority are taken from
   Swiss practice and written down beside the demand, in
   [Safeguards](/book/safeguards), rather than promised later. That mapping is
   a proposal I asked for and have not yet adopted; the rights floor it names is
   the non-derogable core of the European Convention on Human Rights, no more.

The safeguards point is not decoration. It is the first thing a serious
opponent attacks, and the honest position is that we owe a worked answer before
we ask anyone to sign.

## What a committee would need

Seven residents of seven member states, of voting age, willing to be named in
public, because organisers are published, along with their funding. That is the
whole legal requirement. Everything else is capacity:

- **A legal opinion** on the Article 11(4) and Article 48 question, obtained
  before registration, because the registration decision turns on it.
- **A drafted text** short enough to sign and precise enough to survive the
  admissibility check.
- **Seven national campaigns**, because a million signatures is not won
  centrally. Pick the seven that clear their thresholds first, then keep going;
  the million, not the spread, is the wall.
- **Funding declared from the start.** Sources are published; plan for that
  rather than discovering it.
- **Twelve months of stamina.** The window does not pause.

I am an activist in this, not a politician. Somebody who shouts *do it, do it,
do it* and then has to admit he does not know how. I want to gather people
around the thing, and I do not know how that is done either; if you do, tell me.

<MeansForYou actions={[
  "If you are an EU citizen resident outside Poland and you would put your name on an organiser committee, say so. Seven people from seven states decides whether this exists at all, and it is the one thing I cannot do alone.",
  "If you are a lawyer, answer the admissibility question in public. Then read the Commission's own pages rather than my summary of them and tell me where this chapter is wrong.",
  "Sign somebody else's initiative and watch the machine work; then ask your MEP the question from The Political Path: a binding citizens' initiative and a binding optional referendum, yes or no?",
]}>
  A chapter is not a campaign. These are the three things that turn one into
  the other.
</MeansForYou>

## The odds

Low. Roughly one in ten initiatives reaches a million, none has yet obtained in
full what it asked for, and ours carries an admissibility problem the others did
not.

That goes first, because the alternative is recruiting people on a promise
nobody can keep, and this project does not survive that. But the cost of trying
is seven volunteers and a year, and the losing outcome is a documented public
demonstration that the Union's own instrument for hearing a million citizens
does not, in fact, hear them.

**Either it works, or it proves the point.** Weak and non-binding, and for
exactly that reason the right first move.

<ProvenanceNote
  source={[
    "2026-09-25-answers-and-safeguards-dump.md:10-23 (binding, Swiss model, paper first, identity), :42-45 (buying the safeguards too), :80-86 (ECI: yes, let us do it; how to register, how to collect)",
    "2026-09-25-education-migration-workweek-dump.md:122-142 (the admissibility point as he understood it; asking lawyers; activist, not politician)",
  ]}
  dictated={[
    "Do the European Citizens' Initiative; how do you register it and collect signatures? (:82-86)",
    "Weak and non-binding, and exactly for that reason a good first move (:83)",
    "Binding referendum, safeguards and thresholds as the Swiss have them; paper first, digital alongside; voting in schools and town halls (:10-13, :49-58)",
    "Doing this together builds a European identity; even a Europe of nations would find how much it shares (:18-23)",
    "The Treaty speaks of a legal act, a Treaty change is not one; find the first legal step and call it that; ask lawyers; he does not know everything (education dump :124-134)",
    "He is an activist, not a politician, and does not know how to gather people (education dump :138-142)",
  ]}
  added={[
    "ECI mechanics, thresholds and the 14-of-135 record: sourced to the Commission's pages, checked 2026-09-25",
    "Article 11(4) / Article 48 admissibility analysis, with sources: researched, offered",
    "The one-line initiative text: proposed, not adopted (ASK-2)",
    "The reading of :83 as 'failure proves the thesis': proposed (ASK-1)",
    "Thresholds cited by link to Direct Democracy (2 % / 1 %, editorial default of 2026-09-25); rights floor named as the non-derogable ECHR core (editorial default)",
  ]}
  cut={[
    "His '80 % of us' figure for when the change becomes possible (education dump :130): a rhetorical number, not an estimate; left out rather than labelled",
    "The one-in-nine success rate from secondary sources: replaced by the Commission's own 14 of 135",
  ]}
  open={["ASK-1", "ASK-2"]}
/>
