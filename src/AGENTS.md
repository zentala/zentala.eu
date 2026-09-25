# Editorial standard for `src/content/`

Read this before you write, edit or review anything under `src/content/`. It is the
contract between Paweł Żentała, the author, and every agent that turns his dictation into
a page. The repo-root `AGENTS.md` covers architecture, sidecars and commands; this file
covers what goes on the page and how it gets there.

It lives in `src/`, not in `src/content/`, because Astro 4's content directory rejects any
`.md` file outside a collection (`[content] AGENTS.md must live in a content/... collection
subdirectory`, then `UnknownContentCollectionError`; only `_`-prefixed files are ignored).
`src/CLAUDE.md` imports it, so it loads for every file under `src/content/`.

## TLDR

The chapters were never the problem at sentence level. Three things were: the same
argument written out in full in four or five chapters; research and proposals an agent
supplied put into the author's first person; and a layer of 2024–25 text with no first
person and invented numbers. This standard fixes those three with hard rules — one
argument, one home; first person only for what he dictated; no number without a source —
and gives the procedure and the checklist that make a dictation into a chapter he
recognises as his and an editor recognises as edited.

Everything here builds on two house rules and does not repeat them:
`~/.claude/rules/writing-style.md` (Orwell's six rules, every sentence) and
`~/.claude/skills/authorship/SKILL.md` (reader-first shape, five rules, four formats).
Where this file and those disagree, this file wins for `src/content/` only, because it is
narrower.

## 1. Who writes here, for whom, and why

**The author** is Paweł Żentała: a Polish software engineer, thirty-five, writing a
political programme for Europe out of anger at an administration that names the
demographic crisis and does nothing about it. He dictates in Polish; the page is in
English. He is not a politician, not a lawyer, not an economist, and says so. His role, in
his words, is "watchdog and editor of direction" (`.plan/vision/aging-society-frame.md:222`).

**The reader** is the European engineer — "not the official, not the journalist — the
person who could build a piece of it" (`aging-society-frame.md:219-220`). Assume
competence. Do not explain what a treaty is, what a referendum is, or what an API is.

**The purpose** is critical mass. "A reader should finish a page believing something
specific: that carrying this idea further is itself the mechanism"
(`aging-society-frame.md:231-232`). This rules writing out: analysis that leaves the
reader informed and powerless fails, however correct. So does a proposal with no named
first step. Every chapter ends with something the reader can do or carry.

**The source** is the set of verbatim dumps in `.plan/vision/` — spoken Polish, transcribed,
with transcription errors. They are the only evidence of what he said. A chapter that cannot
point at a dump line for a first-person claim has invented it.

## 2. Voice

His voice is an engineer's: he sees mechanisms, names his own bias, says what he does not
know, and refuses the language of committees. On the page it looks like this.

### Keep this

Quoted from the chapters he considers good. When you find a sentence like these in a dump,
it goes on the page in his words, not in yours.

| Quote | Where | Why it works |
|---|---|---|
| "Everyone talks about the demographic crisis. Nobody does anything about it." | `book/designing-our-retirement.md:10` | The reader's problem stated as a fact, in eleven words, no question mark. |
| "The people who will not be working in 2056 were not born in 1996." | `designing-our-retirement.md:16-17` | A number turned into a mechanism. He argues from cause, not from statistics. |
| "You stand there with money and nobody comes." | `designing-our-retirement.md:50-51` | One concrete image in place of a paragraph about labour markets. |
| "I am a programmer, so I see a nail everywhere, because I have a hammer." | `designing-our-retirement.md:80-81` | He names his bias before the reader can. Keep it once, on the site, in this chapter. |
| "If you plan a reform that requires the enthusiasm of the people it demotes, you have not made a plan, you have made a wish." | `book/political-path.md:31-33` | A verdict with a mechanism inside it. |
| "A system where a lobbyist gets a meeting and you get a mailing list." | `political-path.md:53-54` | Blunt, specific, no adjective. |
| "Anyone who only says the first is selling software. Anyone who only says the second ends up defending the fax machine." | `book/the-total-state.md:19-20` | He holds two true things at once and refuses to pick the comfortable one. |
| "Those costs are what protected ordinary citizens — not laws, friction." | `the-total-state.md:85-86` | An engineer's reading of a political fact. |
| "I am not a lawyer, and I am not going to invent a reassuring legal conclusion for a website." | `political-path.md:139-140` | The admission is the argument's strength, not a weakness to hide. |

What these have in common, and what you test a draft against:

- **Declarative sentences.** No rhetorical questions. Authorship Rule 1 applies.
- **A mechanism behind every claim.** "Money is a claim on labour" beats "pensions face
  sustainability challenges".
- **One concrete image per abstraction.** The fax machine, the school hall, the mailing list.
- **He names what he does not know and what would settle it** — once, where there is a real
  gap. Not as a template (see §2.3).
- **Verdicts, not menus.** He picks a side and says why. When he has not picked, the page
  says he has not (§3), it does not pick for him.
- **First person does work.** "My mother retires in two years" is evidence; "I believe we
  must" is filler. Authorship Rule 2: if the sentence reads the same with "I" removed,
  remove it.

### Not this

Agent smoothing, all of it taken from the site as it stands. Recognise it and remove it.

| Defect | Example on the site | What to do |
|---|---|---|
| Corporate register | "This vision isn't about compromise - it's about identifying and developing areas where cooperation naturally generates greater value than individual action." (`book/principles.md:11`); "empathetic cooperation over egocentric competition" (`:59`) | Retire. He would never say it. If the idea is real, find the dump sentence that carries it. |
| Adjectives standing in for argument | "comprehensive security", "dynamic, secure, and sustainable Union" (`principles.md:21,41`) | Cut the adjectives; if nothing is left, cut the sentence. |
| Softened verdict | His dictation: "do not come here to wipe anyone's backside" (`aging-society-frame.md:134`, kept at `why.mdx:66`). Softened to "work in elder care" at `designing-our-retirement.md:68`. | Keep his sentence. The soft version is not his. |
| Added disclaimer | "my opinion and not a finding: the Japanese and Koreans I have met are creative and hard-working" (`book/education-and-migration.md:159-161`). He said "To są zajebiści ludzie" (`2026-09-25-open-door-and-choosing-people-dump.md:14-15`) as a verdict, with no hedge. | Drop the disclaimer he did not give. Keep the verdict and its force; drop the swearword (§2.3). |
| Hedge stacking | "I suspect", "turns out to have support", "real, if modest and uncertain" on one claim (`book/new-cities.md:54-61`) | One hedge, then the number. |
| The honesty formula | "What I do not know" / "What would settle it" / "I would rather name the holes than paper over them" / "that answer is worth more to this project than another chapter of mine" — in nine, eight, three and four chapters, near-identical wording (`R4-editorial-audit.md:65-69`) | At most one such block per chapter, in wording that is not copied from another chapter, and only where a real gap exists. |
| Agent mannerism in his mouth | "I raise the name once and then drop it" (`book/steering.md:103`) introducing Ashby and Beer, whom he never mentioned | Provenance rule, §3. |
| The identical closing | "What this means for you" in nine chapters, six of which say the same two things (carry the argument, build a piece) | The closing hands the reader one specific thing that belongs to this chapter. The heading is not required. |
| Throat-clearing | "This chapter is the other half" said three times in three paragraphs (`education-and-migration.md:10-22`); "it binds nobody / it is weak / it binds nobody" in one paragraph (`book/first-move.md:18-19`) | Once. |

### Register — how blunt the page may be

He is blunt in speech and wants the page blunt in substance, not in vocabulary.

1. **A blunt image stays.** "Wipe anybody's backside", "bullshit jobs", "a lottery with a
   good story attached", "we built a selection mechanism and then act surprised by what it
   selects". These are his sentences and they are why people will read this.
2. **A swearword goes, its force does not.** "To są zajebiści ludzie" becomes "They are
   exactly the people a country should want — creative, hard-working, and often looking for
   a way out of a work culture that grinds them down. It is a scandal that we make it hard
   for them." "Skandal" was his word (`open-door-and-choosing-people-dump.md:12`); the
   strength is his; only the vocabulary changed. What you may not do is replace the verdict
   with "creative and hard-working" plus a disclaimer.
3. **A slur, an insult to a named person, or a comparison he half-withdrew never appears.**
   When a dump carries "może nie pisz tego" or similar
   (`answers-and-safeguards-dump.md:165-166`, the dictatorship comparison), the passage is
   his private reading and stays out. Record it as a cut in the ProvenanceNote (§3).
4. **Bluntness is consistent across chapters.** The same fact is not blunt on one page and
   soft on another (R4 contradiction 7). Decision pending: Q5 in §12; until he answers,
   the blunt version is the default because it is the one he dictated.
5. **Never launder a belief into a safer one.** Repo-root `AGENTS.md`, "Mentor role":
   correct a term, not a belief. A position that will draw fire (communism, China, Germany's
   job) is published as he holds it, with the objection beside it (§7), or asked back (§10).
   It is not softened silently.

## 3. Authorship and provenance — the hard rule

**First person is allowed only for content present in a dictation dump.** "I", "my", "I
propose", "my draft", "I found", "my arithmetic" may appear on the page only where the
claim, position, example, number or question it introduces is in a file under
`.plan/vision/`, and the ProvenanceNote can point at the line.

**Everything an agent researched, proposed, inferred or supplied is written as offered.**
Forms that work: "one option is", "a proposed mapping, not yet adopted", "the nearest prior
art the research behind this chapter found is", "this draft", "the figure X gives is". Forms
that do not: "I propose", "I went looking", "my draft", "here is my arithmetic". Every such
passage carries its source — a link, or the dump line where he asked for it.

**A proposal becomes his only when he says so** — in a later dump, or in a dated note in
`.plan/vision/`. Then, and only then, the passage may move to first person, and the
ProvenanceNote records the date of adoption. An agent may not infer adoption from silence,
from a chapter having been published, or from him not objecting.

**Cuts are provenance too.** Something he dictated and the chapter leaves out — a personal
passage, a withdrawn comparison, a claim that contradicts another chapter — is listed in
the ProvenanceNote as cut, with the reason, so he can put it back.

### What the ProvenanceNote must say

`DESIGN.md` (written in parallel) defines the component's shape. Whatever the shape, every
chapter carries one, and it states:

| Field | Content | Example |
|---|---|---|
| **Source** | Which dump(s), with date, file name and the line range the chapter draws on | `2026-09-25-answers-and-safeguards-dump.md:35-45` |
| **Dictated** | What he actually said, as a short list of claims and instructions — including questions he asked the agent, marked as questions | "copy the Swiss model; asked for the safeguards to be mapped, said he does not know them" |
| **Added** | What the agent supplied: research, mappings, terms, numbers, prior art, structure — each with its status: `proposed` (awaiting his decision) or `adopted <date>` | "Swiss articles and thresholds (sourced); EU/Polish mappings — `proposed`; rationale for 2%/1% — `proposed`" |
| **Cut** | What was dictated and left out, and why | "dictatorship comparison, at his request (`:165`)" |
| **Open** | The `ASK` items still unanswered (§10), by number | "ASK-2, ASK-3" |

A chapter without a ProvenanceNote, or with an empty **Added** field where the chapter
plainly contains research, fails the checklist (§11).

### Worked example — `safeguards.md:82-96`, three ways

The dictation: "Ja nie znam, ale możesz mi zaproponować, jak to zmapować i rozpisać, jakby
to wyglądało zmapowane" (`answers-and-safeguards-dump.md:39-40`) — he does not know the
Swiss safeguards and asks for a mapping. He also said: "Trzeba napisać, że też kupujemy
bezpieczniki" (`:42`) — we are buying the safeguards too. That second sentence is his and
may be first person. The mapping is not.

**As it stands — wrong.** The whole mapping is in his voice:

> **Proposed European equivalent.** Member states as the second chamber: a European
> citizens' vote on anything of treaty or constitutional rank passes only with a majority
> of votes cast across the Union **and** a majority of member states — 14 of 27. […]
> Whether some states should carry a half vote, as six Swiss cantons do, I have no view
> on; the Swiss half votes are a historical artefact of cantons that split, not a formula
> anyone derived.
>
> **Proposed Polish equivalent.** Poland is not a federation, so this is the weakest of my
> analogies and I would rather say that than dress it up. […] I put it forward as the
> version worth arguing about, not as a settled answer.

"I have no view on", "my analogies", "I put it forward" — a constitutional position, a
second chamber of voivodeships, with his name on it, that he has never seen.

**As offered — correct today.**

> **A European equivalent, proposed here.** The author asked for the Swiss safeguards to be
> mapped onto the Union and has not yet adopted the result; this is the draft he asked for.
> Member states would be the second chamber: a European citizens' vote on anything of
> treaty or constitutional rank would pass only with a majority of votes cast across the
> Union **and** a majority of member states, 14 of 27. A European citizen veto of an
> ordinary legislative act would need only the popular majority, as in Switzerland
> (Art. 142 §1). The half-vote question is left open: the six Swiss half-cantons are a
> historical artefact of cantons that split, not a formula anyone derived.
>
> **A Polish equivalent, proposed here.** Poland is not a federation, so this is the weakest
> mapping in the set. The nearest unit is the voivodeship: a constitutional-rank vote would
> need a national majority plus a majority in 9 of 16 voivodeships. The objection is real —
> voivodeships are administrative, not constituent, and giving them a veto invents a
> federalism Poland does not have.
>
> <!-- ASK-2 (answers-and-safeguards-dump.md:39-40): adopt the 14-of-27 and 9-of-16 double
> majorities as your position, or keep them as a proposal? -->

Same facts, same sources, same structure. What changed: the voice says who is speaking, and
the question reaches him instead of being answered for him.

**As his — only after he adopts it.** If a later dump says "tak, 14 z 27, to moja
propozycja", the passage may read "My proposal is a double majority: […]", and the
ProvenanceNote's **Added** field changes from `proposed` to `adopted 2026-MM-DD`. Not
before.

## 4. From dictation to chapter — the procedure

Follow the steps in order. Each has an output you can show.

1. **Read the whole dump twice.** First pass for the argument; second pass with a pen. Read
   the "agent's reading" section at the bottom of a dump as what it is: an agent's notes,
   not his words. Nothing in it may be quoted as his.
2. **Write the spine sentence.** One sentence: what this chapter argues, in his words where
   a dump sentence will serve. Put it in an HTML comment at the top of the body:
   `<!-- SPINE: a pension is a claim on somebody's labour, and the labour will not exist -->`.
   If you cannot write it, you do not have a chapter; you have material for a section of
   one that exists. Go to step 6.
3. **List the claims.** Numbered, each with its dump line. Tag each one: `claim` (a position
   he holds), `example` (a story, a number, a person), `question` (something he asked you:
   "zaproponuj", "nie wiem", "jak to zrobić?"), `instruction` (how he wants it presented),
   `aside` (private, or "może nie pisz tego").
4. **Separate his claims from his questions.** A `question` is never a position. It becomes
   either research written as offered (§3) or an `ASK` (§10). This is the step that
   `safeguards.md` skipped.
5. **Decide keep / compress / cut / fix / ask for every item** with the table below. Write
   the decision next to the item; it becomes the ProvenanceNote.
6. **Check for duplication.** For every argument the chapter makes, look it up in the
   canonical table (§5) and `grep -rn` its key phrase across `src/content/docs/`. If it has a
   home, this chapter gets at most two sentences and a link.
7. **Do the research he asked for.** Sources, not memory. Write it as offered. Where the
   dump says "verify and name them rather than inventing a new institution", do exactly
   that.
8. **Check every number** (§8). His own rough numbers are labelled as his estimate; yours
   carry a source; none is invented to fill a gap.
9. **Draft to the structure in §6.** Prose where the argument moves; a table, timeline,
   evidence box or objection block where the audit found the pattern.
10. **Run the audit against the dump before leaving draft.** For every first-person
    sentence, find the dump line or rewrite it as offered. For every number, find the
    source. For every `ASK`, confirm it is still an open comment and not silently resolved.
    List what you cut. Fill the ProvenanceNote from this audit, not from memory.
11. **Run the checklist (§11)** and the Orwell pass (skill `rewrite`). Then `just build`.

### The decision table

| Decision | Apply when | Test |
|---|---|---|
| **Keep, in his words** | The sentence carries a claim, an image, a verdict or an admission, and is sharper than anything you would write. The "I" does work. | Would an editor quote it in a review? Does it survive with a stranger's name on it? |
| **Compress** | He said it three times in three wordings; dictation repeats. Or a passage argues at length what one paragraph does (`cheap-is-wealth.md:109-136`, 400 words for one paragraph). | Keep the sharpest wording once. The claim count does not drop. |
| **Cut** | Repetition; an argument another chapter owns (link instead); filler ("wiesz", "tak?", "no"); a private aside; anything he flagged not to write; a passage that only restates the chapter's own earlier section. | Nothing he holds is lost — the ProvenanceNote lists every cut with a reason. |
| **Fix** | A wrong or loose term ("direct democracy" where he means semi-direct — fix and teach, §7); a garbled transcription whose meaning is clear from context; a loose number, labelled as his estimate; grammar and idiom. | Only the term, the wording or the label changed. The belief is the same. If fixing it would change what he means, it is an `ask`. |
| **Ask** | A contradiction with another chapter (§12, R4 list); a position an agent would have to invent to complete the argument; a claim that needs evidence he did not give and you cannot find; a register call (how blunt); a passage that could cost him personally; a question he asked you that the page cannot answer as offered. | An `ASK` comment exists at the passage and the passage is written as offered or left out — never as his. |

Two rules of thumb from the audit: when unsure between **keep** and **compress**, keep —
his repetition costs less than your paraphrase. When unsure between **fix** and **ask**,
ask — a term is yours to correct, a belief is not.

## 5. One argument, one home

An argument is written out in full exactly once on the site. Every other page that needs it
gives at most two sentences and a link to the home. A reader who goes through the book in
order must never meet the same paragraph rewritten.

The ten arguments R4 found duplicated, with their homes. When the IA document names a
different home, the IA document wins; until then this table is the source.

| Argument | Home | What every other page does |
|---|---|---|
| Semi-direct democracy = citizens' initiative + optional referendum, "the accelerator and the brake" | `/book/direct-democracy` | One sentence naming the two instruments, link. No glossary block elsewhere (`safeguards.md:27-50` merges into the shared glossary). |
| Ownership is the second question; cheapness first; open standards, hard to monopolise | `/book/cheap-is-wealth` (cheap as the design goal); `/book/who-it-earns-for` (who the surplus reaches) | Two sentences, link. `designing-our-retirement.md:146-154`, `robotic-reindustrialisation.md:103-120`, `why.mdx:120-131` compress. |
| Where machines go first, and "being cared for by a machine and being alone are not the same thing" | `/book/robotic-reindustrialisation` | `designing-our-retirement.md:93-109` becomes the three targets as a list and a link. |
| The three-part immigration answer (does not add up; has not worked at scale; something rotten in the premise) | `/book/education-and-migration` | `designing-our-retirement.md:64-78` and `why.mdx:59-76` compress to three sentences. |
| "We already pay / we already saved" | `/book/designing-our-retirement` | `why.mdx:215-237` compresses to the two bold sentences and a link. |
| "I am a programmer, so I see a nail everywhere" | `/book/designing-our-retirement` | Nowhere else. Once on the site. |
| "You are not the audience, you are the condition of it" | `/manifesto` | `why.mdx:286-287` and `designing-our-retirement.md:168-169` link; the shared `callToAction` in `vision-content.ts` stays as the short form. |
| Discontent without an offer turns into nationalism | `/book/political-path` | `direct-democracy.md:96-105` compresses to one sentence and a link. |
| "I have not worked for seven months" | `/manifesto` | `the-shorter-week.md:87-88` may use the fact in one clause as its example, linking. |
| Why there is no European AI (no shared language, no shared science, no room) | `/book/european-science` | `manifesto.mdx:138-152` cuts to the claim and a link. |

Two more that the site already handles correctly and must stay that way: the four-step
demographic frame lives at `/book/designing-our-retirement` (short form in
`vision-content.ts` for `/` and `/vision`); "who captures the gains" lives at
`/vision#who-captures-the-gains` in short form and is argued in `/book/who-it-earns-for`.

How to link instead of restating: name the claim in the chapter's own sentence, then point.
"Robots have to be cheap before anyone argues about who owns them —
[the argument is here](/book/cheap-is-wealth)." Not a summary paragraph followed by "I am
not going to relitigate this here" (`who-it-earns-for.md:111-124` does both; do neither).

## 6. Structure of a chapter

`DESIGN.md` owns the visual grammar — which component, what it looks like. This section
owns what a chapter must contain and in what order.

- **Spine sentence** — in the `<!-- SPINE: -->` comment, and carried by the opening.
- **Opening** — the reader's problem or the chapter's claim stated as a fact, in the first
  two paragraphs, in his sentence when a dump has one. No "In this chapter", no "this is the
  other half of", no question.
- **Sections** — each moves the argument one step. The H2 states the claim, not the topic:
  "Why a digital state is a total state", not "Background". A section that restates a
  previous one is cut.
- **Evidence** — every number and every external claim sits in an evidence element with
  its source (§8). Prose carries the argument; the evidence element carries the proof.
- **Objection** — the strongest objection to the chapter, stated fairly, then answered or
  conceded. `the-total-state.md:54-75` ("The objection I have to make against myself") is
  the model. The Swiss women's-suffrage fact in `safeguards.md:320-334` is the kind of thing
  that belongs here, not two-thirds down.
- **What he does not know** — at most one block, only where there is a real gap, in wording
  not used by another chapter, naming what would settle it.
- **Closing** — one thing the reader can carry or do, specific to this chapter. Not a
  restatement of the argument (`the-total-state.md:194-211` restated its halves a third
  time; `first-move.md:246` — "Either it works, or it proves the point. I will take that
  trade." — is a closing). The heading "What this means for you" is optional; if six
  chapters use it and say the same thing, it means nothing.
- **Footer note** — the italic paragraph linking the chapter to the frame and its
  neighbours. Keep it; it is the reading-order device.

**Length.** An argument chapter runs 1,200–2,500 words. Over 3,000, split (R4's
recommended ranges per chapter are the target for the rewrite). A reference chapter
(`safeguards.md`) may run to 3,700 as tables with prose beneath, never as prose alone.
Authorship Rule 5 still holds: no chapter is padded to a range.

**Structural elements.** A chapter with more than eight consecutive paragraphs of prose
with no table, list, timeline, evidence element, callout or objection block is not
finished. Headings do not count. Every chapter uses at least one non-prose element where
R4 found the pattern ("wants a table", "wants a timeline", "wants a callout" in its chapter
notes) — the pattern was found in the material, so the element is not decoration.

**Prose or component.** Prose when the argument moves — cause, consequence, verdict. A
component when the material is parallel (five objections, eight safeguards, per-country
thresholds), sequential (a timeline of the car regulation), a comparison (before/after pay
under a four-day week), or a single fact that must not be buried (the design brief at
`redesigning-the-state.md:110-119`).

**Frontmatter.** `title`, `date`, `draft`, `description`, `tags`, `author`. `description`
is 70–160 characters and `src/content/config.ts` rejects anything else. The `H1` is the
frontmatter title; never repeat it in the body (`cheap-is-wealth.md:10`,
`redesigning-the-state.md:10` do).

## 7. Terms

**Use the established term, teach it once, then use it plainly.** He asked for this
himself: "będziemy się też powoływali na znane pojęcia i wdrażali je, tak żeby po prostu być
bliskim pojęciowo temu, co już istnieje, i żeby też precyzyjnie opisywać to"
(`2026-09-25-education-migration-workweek-dump.md:27-29`).

- **The glossary is the source of truth** for spelling, definition and canonical anchor.
  Until the IA document lands a glossary page, the table in
  `.plan/reports/2026-09-25-e006/R3-duplication-concepts-graph.md` Part B is that source.
  Its anchors: semi-direct democracy, citizens' initiative, optional referendum, unity of
  subject → `/book/direct-democracy`; double majority → `/book/safeguards`; European
  Citizens' Initiative (ECI) → `/book/first-move`; the total state → `/book/the-total-state`;
  cheap as a design goal → `/book/cheap-is-wealth`; predistribution, citizens' wealth fund →
  `/book/who-it-earns-for`.
- **Teach once per chapter, on first use:** the term in bold, one sentence of definition,
  the everyday equivalent if there is one, then plain use. "A **citizens' initiative** lets
  us propose a change and force a vote on it — the accelerator." After that: "the
  initiative".
- **"Direct democracy" is the banner word; "semi-direct democracy" is the precise one.** He
  chose the banner deliberately ("podoba mi się 'demokracja bezpośrednia', bo (…) to jest
  to, co dodajemy") and accepted the precise term. A chapter may use the banner in its title
  and opening, and states the precise term at the first point where precision matters.
- **One spelling.** `citizens' initiative`, `optional referendum`, `double majority`,
  `semi-direct democracy`, `European Citizens' Initiative (ECI)`. Not "citizen initiative",
  "facultative referendum", "peoples' initiative". The tag `direct-democracy` is the only
  form of that tag.
- **"The digital state" and "the total state" are the same system seen from two sides.**
  The first time either appears in a chapter, say so in one clause.
- **A term with no definition on the site is not used as if it had one.** "Social market
  economy" and "European Health Data Space" are named on the site with no plain-English
  definition (R3 Part B). Define on first use or link to a source that does.
- **Correct a term, not a belief.** When he says "referendum" and means the optional
  referendum specifically, fix it. When he says "communist" about his own position and
  adds "może to nie jest właściwe słowo", that is an `ASK` (§12, Q1), not a fix.

## 8. Numbers and claims

- **No invented statistics.** A number with no source is deleted, not softened. The
  2024–25 files carry invented figures — "65-75% savings", "40-50% reduction"
  (`book/european-egovernment.mdx:91-95`), "four retirees rely on one working individual"
  (`book/principles.md:70`), a sixteen-year timeline
  (`language-integration-administrative-implementation.mdx:16-22`). None survives a
  rewrite without a source.
- **Every number has a source or a label.** A source is a link or a citation the reader can
  check. A label is "the author's estimate" or "the author's rough figure", pointing at the
  dump line ("38M czyli daj u nas 1 i 2 %", `education-migration-workweek-dump.md:34`).
  Numbers an agent derived from his (2% of the Polish electorate ≈ 580,000 signatures) are
  labelled as derived, with the arithmetic shown once.
- **A rough figure is not promoted.** His "podobno" about myopia does not become a
  load-bearing RCT in a housing chapter (`new-cities.md:56-58`) without an `ASK` about the
  weight.
- **The "what would settle it" convention.** Where evidence is missing and the claim
  matters, the chapter says what observation, document or study would settle it, and who
  could produce it. Once per chapter at most, in fresh wording, and only for a real gap — not
  as a ritual at the end of every section.
- **Contested facts carry the objection.** A fact that cuts against him (Swiss women's
  suffrage, Iceland's four-day trial not showing what the headlines said) appears beside the
  claim, not in a footnote. This is the posture the site claims for itself
  (`the-shorter-week.md:160-194` does it right).
- **External facts are checked before publication, not assumed.** R4 verified no external
  fact. `safeguards.md` and `first-move.md` are the chapters a critic attacks on facts; a
  source check is a separate task before either leaves draft.

## 9. Sidecars

The repo-root `AGENTS.md` defines the sidecar (`<name>.sidecar.mdx`, `draft: true`, never in
navigation). For a chapter, the sidecar holds what the page must not: the full claims list
from step 3, research that did not make the page, the rejected alternatives, raw tables, and
the open `ASK` items with their context. A chapter that has research behind it has a
sidecar. Promote material from sidecar to page only when it is stable and the decision it
waits on has been taken.

## 10. Questions to the author

A question an agent cannot answer without inventing a position goes to him, on the record,
at the place it arose. It is never resolved silently, and it is never resolved by writing the
agent's guess in his voice.

**Convention.** An HTML comment at the passage, numbered within the chapter, with the dump
line that raised it:

```
<!-- ASK-3 (direct-democracy-dump.md:184): the threshold is 2%/1% rounded up here and
the Swiss share scaled in first-move.md:182-184. Which one is the ask? -->
```

- `ASK-n` numbers are unique within the chapter and listed in the ProvenanceNote's **Open**
  field and in the sidecar with context.
- `grep -rn "ASK-" src/content/docs` is the register of open questions. No separate file.
- An open `ASK` does not block publication when the passage is written as offered or left
  out. It blocks publication when the passage is in his first person.
- When he answers — in a dump, in a note in `.plan/vision/`, in chat recorded there — the
  comment is removed, the passage is rewritten, and the ProvenanceNote records the date.
- Do not batch questions at the end of a session. One question, one comment, at the moment
  the decision was needed.

## 11. Checklist before a chapter leaves draft

Every item is testable. A chapter that fails one stays `draft: true`.

- [ ] `<!-- SPINE: -->` exists, and the opening two paragraphs carry it.
- [ ] Every first-person sentence maps to a dump line, or is rewritten as offered. (List
      them; the ProvenanceNote's **Dictated** field is the list.)
- [ ] Every research, mapping, prior-art or proposal passage is written as offered, with
      its source, and appears in the ProvenanceNote's **Added** field with `proposed` or
      `adopted <date>`.
- [ ] The ProvenanceNote has all five fields filled; **Added** is not empty when the
      chapter contains anything he did not dictate.
- [ ] No argument from the §5 table is restated beyond two sentences and a link.
      (`grep -rn` the key phrase; count the hits.)
- [ ] Every number has a source link or an "estimate"/"derived" label; no figure from a
      2024–25 file survives without one.
- [ ] Terms use the §7 spelling; each is defined once on first use; "digital state" and
      "total state" are connected on first appearance.
- [ ] At most one "what I do not know / what would settle it" block, in wording that
      `grep` does not find in another chapter.
- [ ] No run of more than eight consecutive prose paragraphs without a structural element;
      at least one non-prose element where R4's chapter note asked for one.
- [ ] The chapter carries its strongest objection, stated fairly.
- [ ] The closing hands the reader one specific thing; it does not restate the argument.
- [ ] Every open question is an `ASK-n` comment at its passage; none was resolved by
      writing a guess in his voice; all are listed in the ProvenanceNote and the sidecar.
- [ ] The chapter's position agrees with the canonical chapter's on each of the seven R4
      contradictions that touch it, or carries an `ASK`.
- [ ] Nothing he flagged "do not write" appears; every cut is listed with a reason.
- [ ] Frontmatter complete; `description` 70–160 characters; body has no H1; links use
      canonical `/book/...` URLs; a sidecar exists if research sits behind the page.
- [ ] Word count inside the §6 range, or the split is done.
- [ ] Orwell pass done (skill `rewrite`); Authorship Rules 1–5 checked.
- [ ] `just build` green; `just audit` run if navigation or links changed.

## 12. Open decisions for Paweł

The ten questions from `.plan/reports/2026-09-25-e006/R4-editorial-audit.md:113-134`,
ranked as there, verbatim. This standard waits on them: until each is answered, the
default is the one stated beside it, and the passage stays as offered or carries an `ASK`.

1. **Communism — one verdict, which?** `cheap-is-wealth.md:140` says in effect communist;
   `who-it-earns-for.md:170` says not communism.
   *Default until answered:* the dump (`surplus-and-steering-dump.md:26-34`) — "delikatnie
   komunistyczne w tym ujęciu (…) poszukałbym lepszego [słowa]" — so: his own framing, with
   his own doubt about the word, in one place; the other chapter links.
2. **`safeguards.md` is in your first person, but you said you did not know the Swiss
   safeguards and asked me to propose them.** Do you adopt it as yours, or re-voice it as
   research?
   *Default:* re-voice as offered (§3 worked example).
3. **Which threshold is the ask — 2%/1% rounded up, or the Swiss share scaled?** One number,
   three chapters.
   *Default:* 2%/1%, because it is the number he dictated ("38M czyli daj u nas 1 i 2 %");
   the rationale at `safeguards.md:237-242` is marked as offered.
4. **Is the military/deterrence argument for English (`political-path.md:110-118`) yours?**
   It is in no dictation and it is a substantive political position.
   *Default:* rewrite as offered or cut; it is not in any dump.
5. **How blunt are you allowed to be?** You called Japanese and Korean workers *"zajebiści
   ludzie"*; `education-and-migration.md:159-161` makes that "creative and hard-working"
   with a disclaimer. Same question at `why.mdx:66` vs `designing-our-retirement.md:68`.
   *Default:* §2.3 — blunt image stays, swearword goes, no added disclaimer.
6. **There is no chapter arguing why English, in your voice.** `european-english.mdx` is a
   standards spec; the argument exists only in `aging-society-frame.md:44-70`. Write it?
   *Default:* yes, from `aging-society-frame.md:44-70`, which is his; the spec becomes an
   appendix or reference.
7. **Do you publish your own account of emotional isolation?**
   (`redesigning-the-state-dump.md:214-224`, dropped entirely from `european-science.md`.)
   *Default:* not published until he says so; listed as **Cut** in the ProvenanceNote.
8. **Does `redesigning-the-state.md:180-182` stay?** As written it dissolves the site's
   premise.
   *Default:* stays, with an `ASK` and one sentence squaring it with the frame as
   speculation.
9. **Do `principles.md` and the three eGov files stay?** No first person, and
   `european-egovernment.mdx:91-95` and `principles.md:70` carry invented figures.
   *Default:* `principles.md` retired; the eGov files merged into one chapter rebuilt from
   the dumps or retired; the invented figures go either way.
10. **Are `choosing-people.md` and `direct-democracy.md` one programme?** One restructures
    how representatives are elected; the other says nothing about elections changes.
    *Default:* `direct-democracy.md` gains one sentence and a link acknowledging the
    portfolio-election proposal; the programme question stays open.

When he answers, the answer goes into `.plan/vision/` with a date, the affected chapters
are rewritten, and the question is struck from this list with the date.

## Sources this standard rests on

- `.plan/reports/2026-09-25-e006/R4-editorial-audit.md` — the chapter audit; the quotes,
  defects and questions above come from it.
- `.plan/reports/2026-09-25-e006/R3-duplication-concepts-graph.md` — canonical homes and
  the term table.
- `.plan/vision/aging-society-frame.md` and the six `2026-09-25-*-dump.md` files — his
  voice in the original.
- `~/.claude/rules/writing-style.md`, `~/.claude/skills/authorship/SKILL.md` — the house
  rules this extends.
- Repo-root `AGENTS.md` — architecture, sidecars, the mentor role, the instruction-file
  convention.
- `DESIGN.md` — the visual grammar and the ProvenanceNote component (in progress).
