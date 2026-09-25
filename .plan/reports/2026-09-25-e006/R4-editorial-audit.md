# R4 — Editorial audit of every chapter

Read-only; nothing was edited. Read: all 19 `.md` and 13 `.mdx` under `src/content/docs/book/`,
plus `manifesto.mdx` and `why.mdx`, against the six verbatim dumps in `.plan/vision/`.

## TLDR

The problem is not the one you named. These chapters do **not** read like dictation. They read
like a good essayist working with your material — clean sentences, your voice mostly intact, and
the honesty devices ("I am not a lawyer", "what would settle it") are real. Twelve of the twenty
substantial chapters could publish after a light pass.

Three things are actually wrong, none at sentence level.

**1. The same arguments are re-argued in full across four or five chapters each.** The
accelerator-and-brake definition is written out fully four times; "cheap beats owned" five times;
the three-part immigration answer twice verbatim; "who pays" twice verbatim. A reader going
through the book in order meets the same paragraph rewritten. That is what reads as
unprofessional — the architecture, not the prose.

**2. Several chapters put research you did not do, and positions you did not take, into your
first person.** `safeguards.md` says "I propose" throughout, when you said of the Swiss
safeguards *"Ja nie znam, ale możesz mi zaproponować"*. `steering.md` has you citing Ashby and
Stafford Beer — the agent's suggestion in the dump, now your voice. `who-it-earns-for.md` has you
saying *"I found three"* words that were handed to you with "he decides". This is the largest risk
on the site: your credibility rests on marking exactly this line, and elsewhere you mark it well.

**3. A stratum of 2024–2025 boilerplate still sits in `/book`.** `principles.md`, the three eGov
files and ten stubs have no first person, invented percentages ("65-75% savings") and bullet mush.
They break your own rule against inventing numbers and they drag down what is filed beside them.

Unevenness runs by **vintage**, not topic: everything dated 2026-09-20 or later is strong;
2024–2025 is not.

## Chapter table

| Chapter | Verdict | Words | Rec. |
|---|---|---|---|
| `designing-our-retirement.md` | light edit | 1,552 | 1,400–1,600 |
| `robotic-reindustrialisation.md` | light edit | 1,254 | 1,100–1,300 |
| `the-total-state.md` | publish as is | 2,043 | 1,800–2,100 |
| `political-path.md` | light edit + question | 1,775 | 1,600–1,900 |
| `direct-democracy.md` | structural edit | 3,393 | 2,000–2,400 |
| `safeguards.md` | structural edit (re-voice) | 3,680 | 3,000–3,700 |
| `first-move.md` | light edit | 2,155 | 1,800–2,200 |
| `choosing-people.md` | publish as is | 2,790 | 2,200–2,600 |
| `education-and-migration.md` | light edit | 2,460 | 2,000–2,400 |
| `the-shorter-week.md` | publish as is | 1,871 | 1,700–1,900 |
| `who-it-earns-for.md` | structural edit | 2,342 | 1,600–1,900 |
| `steering.md` | light edit + question | 2,694 | 2,200–2,500 |
| `cheap-is-wealth.md` | light edit + decision | 1,657 | 1,400–1,600 |
| `redesigning-the-state.md` | light edit | 2,040 | 1,800–2,000 |
| `new-cities.md` | publish as is | 1,836 | 1,700–1,900 |
| `european-science.md` | light edit + question | 1,595 | 1,600–2,000 |
| `european-english.mdx` | structural edit (split) | 2,409 | 1,200 + appendix |
| `european-egovernment.mdx` | rewrite | 641 | 1,400–1,800 |
| `eGov-vison.mdx` / `eGov-challenges.mdx` | merge into above | 597 / 749 | — |
| `principles.md` | rewrite or retire | 788 | — |
| `language.md` / `language-integration-administrative-implementation.mdx` | merge into English chapter | 231 / 400 | — |
| 8 one-paragraph stubs | hold as drafts | 48–62 each | — |
| `manifesto.mdx` | light edit | 2,395 | 2,000–2,300 |
| `why.mdx` | structural edit | 2,335 | 1,400–1,700 |

**The three most common defects.** (1) Full restatement instead of a link — 20+ instances across
11 chapters, itemised below. (2) The honesty device has become a formula: "What I do not know" /
"What would settle it" / "I would rather name the holes than paper over them" / "that answer is
worth more to this project than another chapter of mine" appear in nine, eight, three and four
chapters in near-identical wording; disarming once, a template by the fourth time, and readers
start skipping it. (3) Closing sections that re-argue the chapter — "What this means for you"
appears in nine chapters and in six says the same two things (carry the argument, build a piece).

## Cross-chapter contradictions

1. **Communism.** `who-it-earns-for.md:170` *"So: not communism."* against
   `cheap-is-wealth.md:140-141` *"What I am describing is in effect communist — except that we
   will not do it by central control."* Two headline verdicts, same book, cross-linked. The dump
   is closer to the second (`surplus-and-steering-dump.md:31`).
2. **Thresholds.** `direct-democracy.md:156-157` and `safeguards.md:238-239` propose 2%/1%
   **rounded up**; `first-move.md:182-184` commits to Swiss thresholds *"adjusted proportionally
   to population"*, i.e. 1.78%/0.89%. The ask a reader would sign differs from the argued number.
3. **One state or all at once.** `political-path.md:102-103` *"English… can be adopted by a single
   state. Poland could do it."* against `direct-democracy.md:193-194` *"One state reforming alone
   is a target. A continent reforming together is a fact."* Reconcilable, unreconciled.
4. **Longevity dissolves the premise.** `redesigning-the-state.md:180-182` — *"there probably is
   no labour-force problem at all in the shape we currently argue about it"*. The site stands on
   `designing-our-retirement.md`. Flagged as speculation, never squared.
5. **eGov promises what The Total State calls the hard half.** `european-egovernment.mdx:80-95`
   hands governance to "citizen advisory boards" and promises "65-75% savings", while
   `the-total-state.md:72-75` says *"The governance question is the harder half, and it has to be
   settled first, in public"*.
6. **Electing ministers vs "elections do not stop".** `choosing-people.md:87-116` proposes electing
   by portfolio; `direct-democracy.md:231-235` reassures readers *"I am not proposing that we
   abolish parliaments or stop voting for governments"* and never mentions it.
7. **Bluntness is inconsistent.** `why.mdx:66` keeps *"do not come to Europe to wipe anybody's
   backside"*; `designing-our-retirement.md:68` softens the identical sentence to *"work in elder
   care"*.

**Full-restatement duplication** (argument written out again rather than linked):

| Argument | Written out in full at |
|---|---|
| Semi-direct democracy = initiative + optional referendum, "accelerator and brake" | `manifesto.mdx:214-220`, `the-total-state.md:101-113`, `political-path.md:66-73`, `direct-democracy.md:72-82`; glossaries at `direct-democracy.md:317-346` and `safeguards.md:27-50` |
| Ownership second, cheapness first | `designing-our-retirement.md:146-154`, `robotic-reindustrialisation.md:103-120`, `who-it-earns-for.md:111-124`, `why.mdx:120-131`, `cheap-is-wealth.md:31-48` |
| Where machines go first (+ "cared for by a machine and being alone are not the same thing") | `designing-our-retirement.md:93-109`, `robotic-reindustrialisation.md:81-101` |
| Three-part immigration answer | `designing-our-retirement.md:64-78`, `why.mdx:59-76` |
| "We already pay / we already saved" | `designing-our-retirement.md:114-135`, `why.mdx:215-237` |
| "I am a programmer, so I see a nail everywhere" | `designing-our-retirement.md:80-81`, `why.mdx:94-95` |
| "You are not the audience, you are the condition of it" | `designing-our-retirement.md:168-169`, `why.mdx:286-287`, `manifesto.mdx:254` |
| Discontent without an offer turns into nationalism | `political-path.md:56-64`, `direct-democracy.md:96-105` |
| "I have not worked for seven months" | `manifesto.mdx:93-94`, `the-shorter-week.md:87-88` |
| Why there is no European AI | `manifesto.mdx:138-152`, `european-science.md:10-33` |

## The ten questions for Paweł, ranked

1. **Communism — one verdict, which?** `cheap-is-wealth.md:140` says in effect communist;
   `who-it-earns-for.md:170` says not communism.
2. **`safeguards.md` is in your first person, but you said you did not know the Swiss safeguards
   and asked me to propose them.** Do you adopt it as yours, or re-voice it as research?
3. **Which threshold is the ask — 2%/1% rounded up, or the Swiss share scaled?** One number, three
   chapters.
4. **Is the military/deterrence argument for English (`political-path.md:110-118`) yours?** It is
   in no dictation and it is a substantive political position.
5. **How blunt are you allowed to be?** You called Japanese and Korean workers *"zajebiści
   ludzie"*; `education-and-migration.md:159-161` makes that "creative and hard-working" with a
   disclaimer. Same question at `why.mdx:66` vs `designing-our-retirement.md:68`.
6. **There is no chapter arguing why English, in your voice.** `european-english.mdx` is a
   standards spec; the argument exists only in `aging-society-frame.md:44-70`. Write it?
7. **Do you publish your own account of emotional isolation?**
   (`redesigning-the-state-dump.md:214-224`, dropped entirely from `european-science.md`.)
8. **Does `redesigning-the-state.md:180-182` stay?** As written it dissolves the site's premise.
9. **Do `principles.md` and the three eGov files stay?** No first person, and
   `european-egovernment.mdx:91-95` and `principles.md:70` carry invented figures.
10. **Are `choosing-people.md` and `direct-democracy.md` one programme?** One restructures how
    representatives are elected; the other says nothing about elections changes.

## Chapter notes

### `designing-our-retirement.md` — light edit · 1,552 → 1,400–1,600
**His.** `:10` *"Everyone talks about the demographic crisis. Nobody does anything about it."* ·
`:16-17` *"The people who will not be working in 2056 were not born in 1996."* · `:50-51` *"You
stand there with money and nobody comes."* · `:80-81` *"I am a programmer, so I see a nail
everywhere, because I have a hammer."* · `:111-112` *"That is a strange sentence to write at
thirty-five, and it is the most practical thing I know."*
**Residue.** `:57-82` restates the migration argument `education-and-migration.md` now owns —
compress to three sentences and link. `:93-109` duplicates `robotic-reindustrialisation.md:81-101`
including the "cared for by a machine / being alone" line — cut here, keep there.
**Overreach.** `:68` softens "wipe anybody's backside" to *"work in elder care"* while `why.mdx:66`
keeps it blunt.
**Ask him.** Which register? Does the migration section stay now that a chapter answers it?
**Structure.** One argument, well ordered. Spine: *a pension is a claim on somebody's labour, and
the labour will not exist.* The "targets in the order they are ready" list (`:93-102`) wants a table.

### `robotic-reindustrialisation.md` — light edit · 1,254 → 1,100–1,300
**His.** `:15-16` *"Robotics on its own, without those, is a trade fair."* · `:46` *"In robotics
the software *is* the product; the metal is a commodity."* · `:66-67` *"A drone company and an
agricultural robotics company are separated by their customers, not by their engineering."* ·
`:48-50` *"Central Europe has spent twenty years as the place where other people's systems get
maintained."*
**Residue.** `:103-120` is the fourth full statement of the ownership argument — compress to two
sentences and link. `:127-139` restates the five preceding sections as bullets; keep the bullets or
the prose, not both.
**Overreach.** `:122-126` *"Europe regulates. For once, that instinct has an obviously productive
target"* — the pro-regulation turn is not in the dumps, where the position is that robots must be
cheap and hard to monopolise, not that Brussels should mandate it.
**Ask him.** Is "mandate interoperability, insist on repairability" yours?
**Structure.** Two arguments; the defence-conversion one is the original. Spine: *the war is
already paying for the robots; make sure civilian demand is waiting.* `:69-79` wants a timeline.

### `the-total-state.md` — publish as is · 2,043 → 1,800–2,100
**His.** `:16-17` *"A state becomes total as it becomes digital."* · `:20-21` *"Anyone who only
says the first is selling software. Anyone who only says the second ends up defending the fax
machine."* · `:44-46` *"My mother retires in two years. That is roughly the window we have…"* ·
`:68-70` *"a switch exists, and somebody can turn a person off… today's government is not the last
one."* · `:82-85` *"Those costs are what protected ordinary citizens — not laws, friction."*
**Residue.** `:194-211` restates the chapter's two halves a third time — cut to the two bolded
sentences. `:101-113` is the third full accelerator/brake definition — link instead.
**Overreach.** None material; `:163-170` marks its own open questions in his register.
**Ask him.** None urgent.
**Structure.** One argument held as a deliberate contradiction, which is why it works. Spine:
*build the capability and the counterweight in the same decade, or you get the first alone.* The
three properties of the total state (`:59-64`) want a callout.

### `political-path.md` — light edit + question · 1,775 → 1,600–1,900
**His.** `:10-11` *"Every chapter here ends the same way, and I have been getting away with it."* ·
`:32-33` *"If you plan a reform that requires the enthusiasm of the people it demotes… you have
made a wish."* · `:53-54` *"A system where a lobbyist gets a meeting and you get a mailing list."* ·
`:59-60` *"We have seen this film. Some of us are living in the sequel."*
**Residue.** `:66-73` fourth full statement of the two instruments — link. `:82-87` restates
`direct-democracy.md:293-295` almost word for word.
**Overreach.** `:110-118` the entire "military argument" section. Not in any dictation; it
introduces a deterrence/Anglosphere alignment claim materially different from the economic and
political reasons given for English.
**Ask him.** Is the military argument yours (Q4)? Does `:102-103` sit comfortably beside
`direct-democracy.md:193`?
**Structure.** One clean argument. Spine: *the bottleneck is not Brussels or the treaties, it is
the number of people who have heard the argument.* The five legal open questions (`:145-157`)
should share one table with `why.mdx:193-202`, which lists the same five.

### `direct-democracy.md` — structural edit · 3,393 → 2,000–2,400
**His.** `:10` *"We vote every four years. For twenty years it has got worse."* · `:45-47` *"In
Poland a well-paid programmer earns more than the president, and does not have strangers throwing
filth at him for a living."* · `:50` *"We built a selection mechanism and then act surprised by
what it selects."* · `:135` *"A mandate you cannot correct for four years is not control, it is a
receipt."* · `:190-194` *"We wrote the Constitution of the Third of May in 1791… and within four
years Poland did not exist. One state reforming alone is a target."*
**Residue.** `:26-50` four bolded "Maybe…" explanations, ending `:51` *"Whichever mix is true, the
conclusion is the same"* — the chapter admits they were interchangeable; compress to two.
`:161-187` summarises a chapter that exists one link away, then links to it — cut the list.
`:310-346` duplicates `safeguards.md:27-50` — move to one shared glossary. `:72-82` is a 200-word
definition parked mid-section — move to the glossary.
**Overreach.** `:139-147` carries sourced Swiss claims in his voice; minor here, severe in
`safeguards.md`.
**Ask him.** Which threshold (Q3)? Does `choosing-people.md` belong inside this argument (Q10)?
**Structure.** Three chapters in one: the case, the playbook, a glossary. Spine: *representative
democracy is the wrong shape, and the highest-leverage demand is the Swiss instrument, demanded
everywhere at once.* The playbook (`:107-209`) should be a numbered table with one line of
rationale each, not eight prose sections of unequal weight.

### `safeguards.md` — structural edit (re-voice) · 3,680 → 3,000–3,700
**His.** `:16-18` *"We are not buying only the referendum. We are buying the safeguards too."* ·
`:190-191` *"The right is to ask. That is the whole difference between the two systems."* ·
`:338-343` *"history's record of mass harm is overwhelmingly a record of what governments did, not
what electorates voted for."* · `:328-329` *"If you want a case where a majority withheld a right
from a minority through the direct instruments, it is right here, in the model I am proposing to
copy."*
**Residue.** None — the problem is the opposite.
**Overreach — the largest on the site.** Written throughout as *"Proposed European equivalent"*,
*"My proposal is not those numbers"*, *"my arithmetic"*. Your dictation
(`answers-and-safeguards-dump.md:37-44`) says *"Ja nie znam, ale możesz mi zaproponować, jak to
zmapować"*. Every mapping at `:82-96`, `:108-112`, `:123-131`, `:151-153`, `:174-179`, `:193-195`,
`:209-214`, `:225-226` is a proposal you asked for and have not ratified. `:237-242` also supplies
a rationale for 2%/1% you did not give; your instruction was the bare `38M czyli daj u nas 1 i 2 %`.
**Ask him.** Adopt these mappings as yours (Q2)? `:82-96` and `:368-369` (voivodeships as a second
chamber) is a real constitutional position with your name on it.
**Structure.** A reference document, correctly built. Spine: *copying the instrument means copying
the safety mechanisms.* `:60-227` is already eight parallel blocks — make it a table with prose
beneath. `:320-334` (Swiss women's suffrage) is the strongest fact against you and deserves a
callout rather than burial two-thirds down.

### `first-move.md` — light edit · 2,155 → 1,800–2,200
**His.** `:10` *"Everything else on this site is an argument. This chapter is an instruction."* ·
`:13` *"the obvious question is the one I kept asking myself: *and what do I do on Monday?*"* ·
`:155-157` *"an experiment whose failure proves your point is not a risk. It is an argument you
cannot lose."* · `:246` *"Either it works, or it proves the point. I will take that trade."*
**Residue.** `:18-19` says "it binds nobody / it is weak / it binds nobody" three times in one
paragraph — compress to one. `:177-197` restates four other chapters; keep the four labels, cut
the explanations to a line each.
**Overreach.** `:170-175` *"Here is my draft"* of the initiative text. You did not draft it; you
asked *"Jak to zrobić, tak? Jak to zrobić?"* (`answers-and-safeguards-dump.md:84-86`). Present it
as a proposed draft inviting improvement, which is what you actually said.
**Ask him.** Do you endorse the one-line ask at `:172-175`? Which threshold standard does the
initiative demand — `:182-184` currently says the Swiss share (Q3).
**Structure.** One argument with a procedural spine: *the weakest instrument in the Union is the
right first move, because either it works or it proves the thesis.* `:59-73` (per-country
thresholds) wants a table. "What a committee would need" and "what you can do this week" ask for
the same seven people twice — merge.

### `choosing-people.md` — publish as is · 2,790 → 2,200–2,600
**His.** `:18-19` *"it cannot tell competence from popularity. It was never built to."* · `:48-50`
*"I voted for that man because he is from my district and I like him. I did not vote for him to run
defence procurement. Nobody asked me that question."* · `:67-69` *"A system that sometimes produces
the right person by accident is not a selection procedure. It is a lottery with a good story
attached."* · `:81-82` *"Goodwill is not a mechanism. It works on the days it works."*
**Residue.** `:72-86` restates `:52-57` — cut one. `:236-268` (the fifty-fifty argument) is a
second chapter bolted on; good, but it belongs with the manifesto's method section or on its own.
**Overreach.** `:117-190` is agent research presented as *"I went looking for prior art before
publishing this"*. The research is sound and you did ask for prior art, so this is the same pattern
as `safeguards.md` at much lower severity.
**Ask him.** Does the fifty-fifty section stay here? Is portfolio-election part of the
direct-democracy programme (Q10)?
**Structure.** One argument plus an appended hypothesis. Spine: *we have no procedure that admits
the competent and excludes the incompetent, and the ballot should ask about the job.* `:117-190`
(five kinds of prior art, each "exists / does not do X") and `:192-234` (five objections) are both
tables written as prose.

### `education-and-migration.md` — light edit · 2,460 → 2,000–2,400
**His.** `:36-39` *"It was not complicated. It was stupid."* followed immediately by the
distinction of who is being called stupid — the voice working properly. · `:42-43` *"If you never
state your criteria, you still have criteria — you just let geography, smugglers and luck pick for
you."* · `:83-85` *"the incentive that gets someone in the door is a piece of paper, and the thing
they walk out with is a skill."* · `:119-120` *"Either we take some responsibility for that, or we
spend the next fifty years arguing about boats."* · `:201-208` putting his own migration preference
to a citizens' vote — the most consistent passage on the site; point at it from elsewhere.
**Residue.** `:10-22` takes three paragraphs to say "this chapter is the other half" — one will do.
**Overreach.** `:159-161` *"my opinion and not a finding: the Japanese and Koreans I have met are
creative and hard-working"*. The dump says *"To są zajebiści ludzie"*. The disclaimer may be right;
the adjectives are not yours.
**Ask him.** How blunt (Q5)? Does "take responsibility for Africa" (`:116-125`) read as you intend
in English — it lands more paternalist than the Polish you dictated.
**Structure.** Three arguments in a defensible order. Spine: *decide openly who you are inviting,
publish the standard, and do something about why they are leaving.* `:102-110` (the curriculum) and
`:171-189` (working-holiday facts) both want tables.

### `the-shorter-week.md` — publish as is · 1,871 → 1,700–1,900
**His.** `:14-15` *"Otherwise it arrives as unemployment, which is the same hours with none of the
money and none of the dignity."* · `:33-34` *"Lifelong learning is not a question of will… It is a
question of days."* · `:87-94` *"Take my own case… the labour market offers me either a full week
or nothing, so I take nothing and live off savings. That is not flexibility; that is a market with
one setting."* · `:112` *"That objection is correct under a five-day week. It is a statement about
schedules, not about people's intelligence."*
**Residue.** Almost none. `:127-158` is four sub-sections where two would do; the third
(`:146-153`, nurses and bus drivers) is the real hole and it is buried third — promote it.
**Overreach.** None found. `:160-194` (Iceland and UK evidence, with the caveat that Iceland does
not show what the headlines claimed) is exactly the posture the site claims for itself.
**Ask him.** None urgent.
**Structure.** One argument, linear. Spine: *the freed hours are the only place the time for
democracy can come from, and four days must be the legal anchor or it becomes a pay cut.* The pay
mechanism (`:61-81`) would be clearer as a before/after table.

### `who-it-earns-for.md` — structural edit · 2,342 → 1,600–1,900
**His.** `:10` *"You can print as much money as you like. It will not make a nurse appear."* ·
`:29-30` *"If nobody does it, the service does not become expensive. It stops existing."* ·
`:71-73` *"when an ordinary person hears 'robots', they hear 'my job'. They are not being stupid;
that is the version they have been shown."* · `:74-77` *"A hot meal their child eats every day, for
free, produced by the thing everyone is arguing about, is not abstract."*
**Residue.** `:10`, `:21-24`, `:27-30`, `:33-34` state the same sentence four times in the first two
sections — keep `:10` and `:29-30`. `:111-124` re-summarises two chapters and then says *"I am not
going to relitigate the ownership question here"* — do that, cut the summary.
**Overreach.** `:173-221` "Words that fit better". The dump (`surplus-and-steering-dump.md:88-91`)
records these three terms as the agent's offer — *"Terms worth offering him… he decides."* The
chapter now reads *"While looking for that word, I found three"*. You have not chosen.
**Ask him.** Do you adopt predistribution / citizens' wealth fund / social market economy as your
vocabulary? And Q1 — this chapter says "not communism" while `cheap-is-wealth.md` says the reverse.
**Structure.** Two arguments; the first (money cannot buy absent labour) is load-bearing and
underexploited. Spine: *the shortage is physical, not monetary, so the only question left is who
the machines earn for.* `:177-216` wants a comparison table: method / instrument / legal ground.

### `steering.md` — light edit + question · 2,694 → 2,200–2,500
**His.** `:12-14` *"Watch anyone ride a bicycle. They are never upright… and that is what holds
them up."* · `:36-38` *"The cost is not in the wrong turn; the cost is in the distance travelled
before the wheel moved."* · `:86-88` *"That is the real damage of a slow system: it stops being
rational to trust it."* · `:222-224` *"the institution exists, and it has no teeth. We built the
channel and then made sure nothing has to come out of the other end."* · `:279` *"It is a fast
bicycle with no handlebars."*
**Residue.** `:12-23` states the bicycle point three times — keep the first and third. `:62-74` two
"honest qualifications" retract enough of the car example that a reader wonders why it was used —
merge into one. `:249-264` restates both loops a third time.
**Overreach.** `:92-108` Ashby's law of requisite variety and Beer's Viable System Model. Nowhere
in the dumps — the agent's own note at `surplus-and-steering-dump.md:93-95` proposed naming
cybernetics, and it is now your first-person text, mannerism included (*"I raise the name once and
then drop it"*).
**Ask him.** Ashby and Beer in your voice, or introduced as "there is a name for this"? Is
`:160-190` ("what to learn from China") a risk you have priced — it is carefully bounded and it
will still be the passage people quote.
**Structure.** Two arguments that belong together. Spine: *ask of any reform how long it takes to
find out it was wrong and what correcting it costs.* `:44-60` is a timeline written as prose — make
it one. The four fixes at `:231-241` are the chapter's only concrete asks and they are last.

### `cheap-is-wealth.md` — light edit + decision · 1,657 → 1,400–1,600
**His.** `:12-16` *"When something is expensive, nobody can afford it… the people at the bottom
live well, and the people above them live better still."* · `:22-23` *"If the machines arrive and
prices stay where they are, we built them for somebody else."* · `:75-77` the furniture
application — the one place on the site where you are a builder rather than an advocate; keep every
word. · `:89-94` *"This is also the uberisation of work… more work, on worse terms, unless we
decide the terms."*
**Residue.** `:12-16` and `:31-48` make the same point twice at length — compress the second to the
"keep the difference" paragraph. `:10` carries an H1 duplicating the frontmatter title, a
formatting defect shared only with `redesigning-the-state.md:10`.
**Overreach.** `:109-136` handles the cooperatives-subsidy claim well — states it, admits there is
no clean comparison, cites what exists, says what would settle it. Right pattern, 400 words for one
paragraph of argument.
**Ask him.** Does the communism sentence stay (Q1)? It is the sentence a hostile reader builds a
headline from.
**Structure.** One argument. Spine: *wealth is low prices, so scale and open standards are the
distribution mechanism.* `:31-48` is a two-column comparison written as prose.

### `redesigning-the-state.md` — light edit · 2,040 → 1,800–2,000
**His.** `:12-29` the whole spaceship dream, especially `:26-29` *"because it had been so good for
so long, the knowledge of how to tune the thing… did not survive."* · `:34-36` *"At some point
competition disappears and what counts is the access you inherited."* · `:99-106` *"They will build
it so that steering us is convenient for them… That is not malice. It is normal… The mistake is not
theirs; the mistake is handing them the pen."* · `:211-214` *"We are the fourth generation, and the
glue and tape are not going to hold."*
**Residue.** `:79-90` carries the dump's grievance passage over nearly intact and adds nothing —
cut to two sentences. `:194-209` restates three points the chapter has already made.
**Overreach.** `:10` stray H1. `:175-191` (longevity) is faithful to the dump but placed where it
undercuts the site's premise without acknowledging it.
**Ask him.** Does the longevity passage stay (Q8)? Do you want the offer to Germany (`:154-173`)
published — it is honestly labelled *"my idea, not an agreed plan, and nobody has been asked"*, and
it will still read as Poland telling Germany its job.
**Structure.** Three arguments; the second (who designs the digital state) is the one you called
your most important thesis and it sits third in reader attention. Spine: *systems expire, and
whoever writes the design brief decides everything.* The design brief (`:110-119`) is the chapter's
actual product and should be a callout.

### `new-cities.md` — publish as is · 1,836 → 1,700–1,900
**His.** `:10-11` *"Capital will not build you a large flat. It has no reason to. Rent is the point
of the exercise… so scarcity is the product."* · `:29-32` *"set a **minimum** height rather than a
maximum. That inversion is the whole policy in one line."* · `:53-54` *"We are animals that did not
grow up in a cave."* · `:94-97` *"They put the expensive, irreversible thing in first… I think that
ordering is correct and I think we have it backwards."* · `:193-195` *"The towers cannot be added
later. The pavements can."*
**Residue.** `:54-61` stacks three hedges on one claim — *"I suspect"*, *"turns out to have
support"*, *"real, if modest and uncertain"*. One hedge, then the number.
**Overreach.** `:56-58` the Guangzhou myopia RCT is good research, but it turns your offhand
*"podobno"* into a load-bearing evidence claim inside a housing chapter — check you want that
weight there. `:81-97` separates checkable fact from personal impression better than anywhere else
on the site.
**Ask him.** Is "anti-capitalist" (`:15`) the label you want, given the same programme is called
communist elsewhere?
**Structure.** One argument with a strong late reveal (`:114-136`, the Public Health Act 1875
parallel). Spine: *a new standard of what a person must be given is due, and towers and large flats
are what taking it seriously looks like.* Consider moving the 1875 parallel earlier — it is the
argument, and it currently arrives after the tour of Asia.

### `european-science.md` — light edit + question · 1,595 → 1,600–2,000
**His.** `:14-16` *"There is no European AI because there is no European science, and there is no
European science because we do not have a working language we share."* · `:24-26` *"There are
conferences. There are consortia that file reports. There is not a room."* · `:66-68` *"A research
programme that never checks whether its own methods work will produce a large amount of confident
nothing."* · `:107` *"You cannot learn to read other people without other people to read."*
**Residue.** `:80-91` hedges its own conclusion twice before stating it — cut the first hedge.
**Overreach — by deletion.** Your own account — *"Uważam, że jestem niedorozwinięty emocjonalnie i
obwiniam za to…"* (`redesigning-the-state-dump.md:214-216`) — is gone. `:98-106` generalises it into
"a child". That may be right, and it is your call, not the writer's.
**Ask him.** Publish the personal passage (Q7)? Does the 70/30 estimate at `:123-126` stay as a
number with your name on it?
**Structure.** Two chapters in one; the mental-health half is 40% of the words and could stand
alone. Spine: *no shared language, no shared science, no European AI — and psychology is where the
method can be proved fastest.*

### `european-english.mdx` — structural edit (split) · 2,409 → ~1,200 + appendix
**His.** Almost nothing. Nearest: `:19` *"should we use `chips` or `fries`?"* (his, from
`language.md:12`). `:43` *"These are the decisions I would make"* is the only first person in 2,400
words.
**Residue.** None; there is no dictation behind it.
**Overreach — by substitution.** The chapter answers *how to standardise English* while the site's
floor argument — `aging-society-frame.md:46-70` — is that English is the bottleneck of Europe's
information economy, that European political consciousness cannot exist without a shared language,
and that a shared interest is what keeps us from turning on each other. None of the three appear. A
reader reaching the language layer meets a 60-item vocabulary table instead of the argument.
**Ask him.** Write the argument chapter (Q6)? Does the EES spec stay in `/book` or move to
reference?
**Structure.** One specification. Spine as written: *do not invent a dialect, build a tested
interoperability standard.* Everything from `:41` onward is appendix material; the 60-item table
(`:130-192`) is correctly collapsed already.

### `european-egovernment.mdx` · `eGov-vison.mdx` · `eGov-challenges.mdx` — rewrite as one · 1,987 → 1,400–1,800 or none
**His.** Nothing. Zero first person across all three.
**Overreach — severe.** `european-egovernment.mdx:91-95` invents five figures (*"65-75% savings"*,
*"40-50% reduction"*, *"30% productivity improvement"*), unsourced, against the standard the 2026
chapters hold. `:53-60` commits to blockchain records, in no dictation. `:105-110` gives a ten-year
phased timeline with no basis. All three contradict `the-total-state.md:72-75`.
**Ask him.** Delete or rewrite (Q9)? Material for a real chapter exists
(`direct-democracy-dump.md:15-41`, `redesigning-the-state-dump.md:110-141`) but both passages are
already used in `the-total-state.md` and `redesigning-the-state.md` — a separate eGov chapter may
not be needed.
**Structure.** Three overlapping documents on one subject: system, vision, challenges. Spine if
rewritten: *build the core once, deploy it nationally, and the governance question decides whether
it is worth building.*

### `principles.md` — rewrite or retire · 788
**His.** Nothing; no first person. The only recognisable idea, `:14` *"Nothing unites people more
than common business"*, survives better in `aging-society-frame.md:67-70`.
**Residue.** The opposite: `:11` *"This vision isn't about compromise - it's about identifying and
developing areas where cooperation naturally generates greater value than individual action"* is
the corporate register the rest of the site avoids.
**Overreach.** `:70` *"a world where four retirees rely on one working individual"* — an invented
dependency ratio, unsourced, inconsistent with every other demographic statement on the site.
`:25` survives in better form at `designing-our-retirement.md:158-164`.
**Ask him.** Retire it (Q9)? Everything in it is said better elsewhere.
**Structure.** Five sections of unranked bullets with no argument connecting them. No spine.

### `language.md` · `language-integration-administrative-implementation.mdx` — merge · 631
Both `draft: true`, so nothing is live.
**His.** `language.md` is the closest thing on the site to his own voice on language: `:16`
*"wherever you are within the EU, you would always be able to communicate—speak and complete
forms—with local administrations in European English"*; `:24` *"What are your thoughts on this
proposal?"* — the asking-for-help register the manifesto names as method.
**Residue.** `language.md:22` stacks three separate arguments into one sentence (economies of
scale, most cost-effective reform, unlocks collaboration); each deserves a paragraph in the chapter
that does not yet exist.
**Overreach.** `language-integration-administrative-implementation.mdx:16-22` — a 16-year timeline
with seven dated milestones, invented. `:19-20` *"mandatory C1/C2 English exam before adulthood"* is
a significant policy with no basis in any dump.
**Ask him.** Is the 16-year timeline yours? Is a mandatory C1/C2 exam your position?
**Structure.** Card grids standing in for argument; no spine. Absorb into the English chapter.

### Eight one-paragraph stubs — hold as drafts · 48–62 words each
`digital-receipts.mdx`, `economic-growth-language-unity.mdx`, `european-blockchain-archives.mdx`,
`european-elearning-system.mdx`, `media-cultural-integration.mdx`, `near-zero-transaction-costs.md`,
`predictive-healthcare-system.mdx`, `unified-payment-zone.mdx`. All `draft: true`, all one sentence
restating their own title, all correctly recorded in `.plan/vision/CHAPTER-IDEAS.md`. They cost
nothing where they are. Two notes: `european-blockchain-archives.mdx` is the only basis for the
blockchain commitment at `european-egovernment.mdx:53-60`, and `predictive-healthcare-system.mdx`
is now substantially covered by `european-science.md`.

### `manifesto.mdx` — light edit · 2,395 → 2,000–2,300
**His.** `:13` *"I built this site because I was angry, and not at the government."* · `:18-19` *"I
do not think they are wrong about the facts. I think they stopped one step too early."* · `:93-98`
*"I had started this piece perhaps eight times over the years and abandoned it every time. I would
not have finished it without AI."* · `:126-127` *"politicians give us as much as we expect of them,
and no more"* · `:188-190` *"I once had the thought that love is the feeling with which you
naturally find the place where both of you win."* · `:232-237` *"I do not know whether any of it
matters. That is the honest state of it."*
**Residue.** `:26-44` restates `:11-24` — merge. `:197-224` restates `the-total-state.md` including
the fourth full definition of the two instruments — cut to the danger and the link. `:138-152`
duplicates `european-science.md:10-33` — cut here, keep there.
**Overreach.** `:214-220` inserts the semi-direct-democracy precision into a document whose
register is deliberately imprecise and personal. Correct, and out of voice here.
**Ask him.** Who is the reader? The manifesto addresses everyone,
`designing-our-retirement.md:168` addresses European engineers, and `aging-society-frame.md:219`
says the engineer.
**Structure.** Nine sections, ordered associatively. Spine: *complaint without a programme leaves
the agenda to whoever else has one, so know what you want.* The four `ManifestoDemand` callouts are
the document's real structure — a reader should be able to see all four together.

### `why.mdx` — structural edit · 2,335 → 1,400–1,700
**His.** `:66` *"do not come to Europe to wipe anybody's backside"* — the bluntest sentence on the
site, and it is his. · `:270-275` the four specific fears, ending *"a generation spends its best
years on bullshit jobs instead of on the concrete thing that needed building."* · `:277-281` *"Those
two mistakes are not the same size."* · `:19` *"Where an answer needs evidence I have not attached
yet, this page says so instead of quoting a number nobody checked."*
**Residue.** `:59-95` is `designing-our-retirement.md:64-95` rewritten; `:120-140` is
`robotic-reindustrialisation.md:103-120` rewritten; `:216-237` is
`designing-our-retirement.md:114-135` rewritten; `:189-206` is `political-path.md:145-157`
rewritten. Roughly 900 of 2,335 words restate four chapters this page links to — against its own
promise at `:16` (*"This page does not argue it again"*). Each objection should be three to five
sentences plus the link.
**Overreach.** `:44-50` the Draghi claim is unsourced on a page that at `:19` promises to mark
unsourced claims. `:133-140` (Ukraine, satellites, US alliance reliability) and `:88-92` (US pulls
know-how out, China takes sector after sector) introduce foreign-policy arguments in no dump.
**Ask him.** Are the Ukraine and US/China passages yours? Should the page be short answers plus
links, as its own lead says?
**Structure.** Five objections in parallel blocks — right shape, wrong depth. Spine: *if you accept
the demography, here are the five hard questions and where I am guessing.* The `WhyEvidenceNote`
blocks are the page's best feature and should be its centre of gravity, not its footnotes.

## GAPS — what I did not read or check

- **`src/content/docs/ideas/`, `articles/`, `reference/`, `support/`, `why/`** — not read.
  `CHAPTER-IDEAS.md:54-55` says the sharpest passage of the old `/why` page survives in
  `support/time-is-running-out.mdx`; I cannot say whether its register matches the chapters.
- **`index.mdx` and `all.mdx`** (22.6 KB, 18.6 KB) — not read. They may restate chapter arguments a
  fifth time; the duplication count above is a floor, not a ceiling.
- **`european-english.sidecar.mdx`** — skipped per instruction. 2,707 words; it may already contain
  the argument chapter I say is missing.
- **`.plan/reports/2026-09-25-salvaged-from-homepage.md`** — referenced by `CHAPTER-IDEAS.md:48` as
  holding passages cut from pages; not read. Some of what I call missing may sit there.
- **No external fact was verified.** Swiss articles, ECI thresholds, Iceland and UK trials, the
  Guangzhou RCT, Eurostat and Singapore figures, the EESC audit and the car-regulation dates are all
  taken as given. A source check is a separate job and should run before publication, above all on
  `safeguards.md` and `first-move.md` — the two chapters a critic would attack on facts.
- **Polish comprehension.** The dumps are spoken Polish with transcription errors (e.g.
  `direct-democracy-dump.md:184`, `:222`). Where a passage was garbled I compared against the
  chapter's claim rather than the reverse, so a misreading could mean I wrongly cleared a chapter or
  wrongly flagged an agent addition.
- **Rendering.** I did not build the site or view a page. `draft` flags are read from frontmatter; I
  did not verify which chapters actually appear at `/book`.
- **Chapter order.** No reading-order manifest was in what I read, so judgements about a reader
  "arriving at" a chapter assume the order in `CHAPTER-IDEAS.md` and the cross-links.
