# Salvage list: what the homepage rewrite kept, moved, and dropped

Date: 2026-09-25. Read-only audit. Nothing on the site was changed to produce this file.

## TLDR

The old homepage (`src/pages/home-classic.astro`, 358 lines, preview-only) was rewritten
into `src/pages/index.astro` (287 lines) around the aging-society frame. Twelve blocks
existed on the old page. Five survive on the new homepage, two moved to other pages, and
**16 distinct content items are not carried anywhere** — the largest group being eight of
the twelve "Benefits" cards, which have no home on `/benefits` either. One of the sixteen
is a real navigation loss, not a trim: the button that was the site's only homepage link to
the frame chapter `/book/designing-our-retirement`. Every dropped item is quoted verbatim
below so it can be put back.

Two accidental improvements are also recorded: the rewrite removed two links that 404
(`/benefits/european-integration`, `/benefits/germany` — no such routes exist).

## How to read the verdicts

| Verdict | Means |
|---|---|
| **KEPT** | still on `/` (`src/pages/index.astro`), same or lightly edited |
| **MOVED** | no longer on `/`, but the content exists on the page named |
| **NOT CARRIED** | exists nowhere in production; original text quoted in full |

---

## Block 1 — Hero

`home-classic.astro:59-69` → `index.astro:109-117`. **KEPT, verbatim.**
Title "Design the Europe we will grow old in", both description lines, the EU logo image,
empty `actions={[]}`.

## Block 2 — Three IconLinks in a gradient band

`home-classic.astro:71-100` → `index.astro:119-148`. **KEPT, verbatim.**
"Why EU Needs Reform?" → `/why`, "Benefits For Your Country" → `/benefits`,
"Full Vision Overview" → `/vision`.

## Block 3 — FrameIntro, four steps

`home-classic.astro:28-45,104-110` → `index.astro:26-43,151-157`. **KEPT**, two steps
reworded. Eyebrow, title and conclusion are identical.

Two wording deltas worth knowing about, because one is a regression:

| Step | Old (`home-classic.astro`) | New (`index.astro`) |
|---|---|---|
| 1 | "is not speculation **about the future**; it is one of the most important decisions" | "is not speculation; it is one of the most important decisions" |
| 4 | "**Machines that do the work** there will not be enough people to do." | "**Machines do the work** there will not be enough people to do." |

Step 4's new phrasing reads as a broken sentence. The old relative clause ("Machines that
do the work…") was correct. **Verdict: restore the old wording of step 4** — this is a typo
introduced by the rewrite, not an editorial choice. The same sentence appears a third time,
differently again, in `.plan/vision/aging-society-frame.md:28-32`.

## Block 4 — "Read the full argument" button

`home-classic.astro:111-116`. **NOT CARRIED.** Original:

```astro
<Button href="/book/designing-our-retirement" variant="primary" size="lg">
  Read the full argument
  <i class="fa-solid fa-arrow-right ml-2"></i>
</Button>
```

**Verdict: put it back, directly under FrameIntro on `/`.** This is not a trimmed
decoration. `/book/designing-our-retirement` is the chapter that states the frame at
length, and `src/pages/book/index.astro:48-50` treats it as the book's opening
("Start with the frame"). The new homepage links `/docs/book/european-english`,
`/docs/book/european-egovernment`, `/book/robotic-reindustrialisation`, `/why`, `/benefits`
and `/principles` — and nothing to `/book` or to the frame chapter. A reader who accepts the
frame on the homepage has no way forward into the argument that supports it.

## Block 5 — "Three layers" heading and lead paragraph

`home-classic.astro:122-125` → `index.astro:162-165`. Heading **KEPT**, retitled
"Three layers, built in order" → "Three layers, in build order" (and demoted from
`DisplayTitle level={1}` to `level={2}`, correctly — a page should have one h1).

The lead paragraph is **NOT CARRIED**. Original:

> "By fostering smart collaboration and leveraging shared resources, we can create a Europe
> where abundance, security, and the freedom to truly live go hand in hand."

**Verdict: dropped, superseded** by `index.astro:163-165` ("Not three parallel pillars. Each
level is what makes the next one possible, and the ownership question runs through all of
them."), which does a job the old line did not: it explains why the layers are ordered. The
old line is also the sort of sentence `rules/writing-style.md` exists to delete
("fostering", "leveraging", four abstractions in one clause). Do not restore.

## Block 6 — Three pillar cards

`home-classic.astro:127-160`. **MOVED / superseded by `LayerStack`** (`index.astro:45-86,
168`), which carries the same three subjects with 2-3 supporting points each instead of one
line. Card by card:

| Old card | Old body | Where now |
|---|---|---|
| I. Language Integration → `/docs/book/european-english` | "English as a second official language across all EU states to remove communication barriers" | Layer 1 "One economy, one working language", same href |
| II. Digital Integration → `/docs/book/european-egovernment` | "Unified digital government, e-health, e-learning, and blockchain-based public services" | Layer 2 "The digital state", same href |
| III. Robotic Reindustrialization → `/book/robotic-reindustrialisation` | "Autonomous logistics, robotic production, and sustainable, localized manufacturing" | Layer 3 "Robotics and autonomous systems", same href; the old phrasing also survives verbatim on `/why` (`src/content/docs/why.mdx:184-194`) |

One item inside this block is a real loss: the old cards named **e-health, e-learning and
blockchain archives** as the content of the digital layer. `index.astro:65-68` does not
mention them, so three chapters (`src/content/docs/book/predictive-healthcare-system.mdx`,
`european-elearning-system.mdx`, `european-blockchain-archives.mdx`) lost their only
homepage reference. **Verdict: worth re-using as a sub-list under Layer 2** — which is also
exactly what `.plan/vision/aging-society-frame.md:261-263` asks for ("Several existing
topics … are components of a layer, and should be presented that way").

## Block 7 — "Why Digital Reform Is Necessary"

`home-classic.astro:163-193`: heading, the `WhyDigitalReform` timeline component, and a
button to `/why`. **MOVED to `/why`** — `src/content/docs/why.mdx:197-199` renders the same
heading and the same component. The homepage no longer carries any part of the old "why"
argument, which is the intended effect of the rewrite (the frame replaces it).

The component itself (`src/components/WhyDigitalReform.astro`) still holds four timeline
blocks, all intact on `/why`: "Adapting to a New Economic Era", "Europe as a Unified
Economic Organism", "The Economic Imperative", "Defense and Security".

## Block 8 — "Benefits", twelve cards

`home-classic.astro:194-263`. The heading and the grid are **NOT CARRIED** to `/`; the new
homepage has "Who this is for" (`index.astro:179-221`) with three audience cards instead.
That substitution is sound. The problem is the twelve card bodies: four have an equivalent
on `/benefits`, and **eight have nowhere at all.**

`/benefits` (`src/pages/benefits.astro`) offers a country picker listing 20 entries but
ships real content for only three — Germany (`:47-71`), France (`:73-97`), Poland
(`:99-123`) — everything else falls through to a generic four-tile template (`:126-150`).
Below that sits `StakeholderBenefits` (`src/components/StakeholderBenefits.astro`) with four
audience groups.

### Carried (text differs, subject survives)

| Old card | Now |
|---|---|
| Benefits for Germany | `/benefits` Germany tab (four richer tiles; the old one-liner is gone but fully subsumed) |
| Benefits for France | `/benefits` France tab; old body subsumed by "Cultural Leadership in Digital Europe" |
| Benefits for Citizens | `StakeholderBenefits` → "For Citizens" |
| Benefits for Businesses | `StakeholderBenefits` → "For Businesses" |

`/benefits` says more than these cards did, not less.

### NOT CARRIED — eight cards, quoted in full

1. **Benefits for European Integration** (`home-classic.astro:202-209`), linked to
   `/benefits/european-integration`:
   > "Highlighting the advantages of a more unified Europe, fostering collaboration and
   > shared growth across all member states."

   *Verdict: dropped, superseded* by `StakeholderBenefits` → "For European Integration",
   which lists four concrete items instead of one abstract sentence. The link target
   `/benefits/european-integration` never existed as a route — dropping it fixed a 404.

2. **Benefits for Southern Europe** (`:224-226`):
   > "Addressing economic disparities and promoting sustainable development through enhanced
   > logistics and digital services."

   *Verdict: worth re-using as the seed of a `/benefits` Southern Europe section.* The
   country list already offers the tab (`benefits.astro:424`, code `southern`) and there is
   no `#southern-benefits` div, so today it silently shows the generic template. This card is
   the only sentence anyone ever wrote for it.

3. **Benefits for Scandinavia** (`:228-230`):
   > "Leveraging technological advancements and environmental initiatives to drive
   > innovation and sustainability."

   *Verdict: worth re-using, same reason.* Note the picker does not even carry
   "Scandinavia"; it has `northern` / "Northern Europe" (`benefits.astro:425`).

4. **Benefits for Central Europe** (`:232-234`):
   > "Utilizing the region's skilled workforce to spearhead robotics and software
   > development, boosting economic growth."

   *Verdict: re-use with priority.* This is the region the frame document names as the
   project's own contribution ("what can Poland, and Central Europe, actually offer? The
   answer taken here is software, and a share in building robotics" —
   `.plan/vision/aging-society-frame.md:194-197`). Dropping it removes the one card that
   matched the author's stated thesis. Tab `central` exists (`benefits.astro:426`) with no
   content.

5. **Benefits for eCommerce** (`:244-246`):
   > "Enabling faster, more reliable logistics and payment systems, fostering a thriving
   > online marketplace."

   *Verdict: re-use on `/benefits` as a stakeholder group, or fold into the chapters it
   points at* (`src/content/docs/book/unified-payment-zone.mdx`,
   `near-zero-transaction-costs.md`). It is currently the only surface connecting those two
   chapters to a reader who cares about commerce.

6. **Benefits for IT Startups** (`:248-250`):
   > "Providing a supportive ecosystem for innovation, with access to a unified market and
   > collaborative development opportunities."

   *Verdict: re-use, reframed.* `index.astro:198-207` ("For engineers and business")
   addresses this audience, but pitches robotics, not the single market. The frame document
   names the European engineer as *the* intended reader
   (`.plan/vision/aging-society-frame.md:219-220`), so a startup-facing benefit belongs
   somewhere explicit.

7. **Benefits for European Security** (`:252-254`):
   > "Strengthening collective defense and cybersecurity measures, ensuring a safer
   > environment for all Europeans."

   *Verdict: re-use on `/benefits`.* Security is not a minor theme being trimmed: the
   robotics layer's funding argument depends on it (`index.astro:80` — military research
   converted to civilian use) and `/why` carries a whole card on it (`why.mdx:118-132`). It
   simply has no stakeholder home.

8. **Benefits for the Information Economy** (`:256-258`):
   > "Positioning Europe as a leader in data-driven industries, harnessing the power of big
   > data and AI for economic growth."

   *Verdict: dropped, superseded* by the layer-1 argument on `/` and `/vision` ("English is
   the bottleneck of the European information economy"), which makes the same claim with a
   mechanism attached. The old card is a slogan; do not restore it as written.

Also removed with this block, and worth recording as a fix: the Germany card linked to
`/benefits/germany`, which is not a route either (`src/pages/` has `benefits.astro` and no
`benefits/` directory). The rewrite deleted two dead links.

## Block 9 — "Equitable Integration Principles", four cards

`home-classic.astro:265-292`. **MOVED to `/principles`**, with the first three titles
surviving almost unchanged and the fourth renamed. But each card's body was rewritten
shorter, and three specific claims were lost in the process.

| Old card | `/principles` counterpart |
|---|---|
| Seeking Mutual Benefit | `principles.astro:23`, same title |
| Leveraging Economies of Scale | `principles.astro:36`, same title |
| Building a Common Culture | `principles.astro:49`, same title |
| Quality of Life Through Reform | `principles.astro:62` "Improving Quality of Life" |

### NOT CARRIED — three phrases inside those cards

9. From **Leveraging Economies of Scale** (`:277-279`):
   > "Prioritizing European-wide digital solutions that are more cost-effective when
   > developed collectively, **nurturing a new generation of technocrats coding for the
   > EU**."

   `/principles:38` keeps only the cost-effectiveness half. *Verdict: worth re-using* —
   "technocrats coding for the EU" is the one line on the old site that speaks directly to
   the reader the frame document is written for. It belongs on `/principles` or in the "For
   engineers" card on `/`.

10. From **Building a Common Culture** (`:281-283`):
    > "Using a shared language **and media landscape** to foster a truly European identity
    > alongside national cultures."

    `/principles:51` says "through shared systems, language, and infrastructure" — the media
    dimension is gone. *Verdict: worth re-using*, because
    `src/content/docs/book/media-cultural-integration.mdx` is a chapter that now has no
    inbound link from any top-level page.

11. From **Quality of Life Through Reform** (`:285-287`):
    > "Pursuing radical reforms and shifting competencies to the EU level to address
    > challenges too big for individual nations, focusing on improving life for all
    > Europeans **rather than austerity**."

    `/principles:64` drops "rather than austerity". *Verdict: worth re-using.* It is a
    positioning claim, not filler — it tells a sceptical reader what this proposal is not.
    The longer `/principles` prose block does argue it (`:214`), but the card no longer says
    it.

## Block 10 — FAQ

`home-classic.astro:294-337` (7 questions) → `index.astro:223-256` (6 questions).
Questions 1, 2, 3 and 5 are **KEPT verbatim** (Q2 gained spaced em dashes; Q5's answer lost
its closing clause "that generate resources for repayment", a clean trim).

### NOT CARRIED — one whole question and two answer bodies

12. **Q7 "What are the main challenges?" — dropped entirely.** Original answer:
    > "First, effectively communicating this vision to Europeans and building broad support.
    > Second, executing them successfully, being adaptive if needed, and hopefully
    > efficiently solving Europe's challenges within this framework. We must navigate
    > regulatory complexity, address resistance from status quo beneficiaries, and ensure
    > technological transformations remain inclusive."

    *Verdict: worth re-using, rewritten.* The subject matters — it is the only place the old
    site admitted a risk — but the text is weak (two of three sentences say "we must try
    hard"). The frame document has stronger material for the same slot: the author's own
    fears (`.plan/vision/aging-society-frame.md:199-209`) and the political-route answer
    (`:164-169`). Put a challenges question back on `/`, sourced from those.

13. **Q4 answer, the Intermarium 2.0 version** (`:317-318`). Original:
    > "The initiative could begin as an Intermarium 2.0 project among Central European,
    > Baltic, and Scandinavian nations. Given eastern security threats, regional integration
    > is necessary. Would skeptical nations risk being left behind? The voluntary model
    > allows countries to join when benefits become apparent, while creating economic
    > pressure on those who remain outside."

    Replaced by `index.astro:243`: "a project among a smaller group of willing member
    states…" — the named coalition, the security rationale and the rhetorical question are
    all gone. *Verdict: keep the softened homepage answer, but preserve the concrete version
    on `/why` or in the book.* Naming Intermarium is a substantive political claim that now
    appears nowhere on the site; losing it silently is the opposite of the decision the
    rewrite intended to make (the rewrite was about the frame, not about dropping a
    coalition strategy).

14. **Q6 answer, the urgency detail** (`:325-326`). Original:
    > "We must begin immediately given the Russian threat and changing geopolitical
    > landscape. English language adoption can start now with formal agreements and
    > implementation **within a year**. Robotization and AI projects should launch
    > immediately as they're critical for defense against Russian aggression while
    > simultaneously building civilian capabilities. **Digital administration systems will
    > enhance our collaborative defense efficiency during wartime.** Rather than waiting for
    > perfect conditions, we should adopt these innovations urgently as they directly
    > strengthen our security posture while forming the foundation for long-term
    > prosperity."

    `index.astro:251` keeps a third of this and re-anchors the urgency on the thirty-year
    window instead of on Russia. *Verdict: the re-anchoring is right* (it is the frame), but
    two facts fell out and should live somewhere: the concrete "within a year" timeline for
    language adoption, and the wartime-administration argument. Neither is anywhere else on
    the site.

## Blocks 11 and 12 — Author, Newsletter

`home-classic.astro:339-350` → `index.astro:258-262` (**KEPT**, same `Author` component,
`color="purple"`, heading demoted to `level={2}`), and `:352-355` → `:264-267`
(**KEPT**).

---

## New on the homepage, with no ancestor in the old one

Recorded so the diff reads both ways:

- `LayerStack` supporting points (`index.astro:51-55, 65-68, 78-81`).
- `CrossCuttingNote` — "Who captures the gains?", two paragraphs and four principles
  (`:88-98, 169-174`). This is the frame document's central question
  (`aging-society-frame.md:111-120`) reaching the homepage for the first time.
- "Who this is for", three audience cards (`:179-221`).
- `CallToAction` — "You are not the audience for this. You are the condition of it."
  (`:270-279`), from `aging-society-frame.md:228-245`.

## Cosmetic losses, deliberately not restored

The old page wrapped nearly every section in decorative gradient blurs
(`home-classic.astro:167, 174, 199, 270, 299, 345`) and section borders via inline
`style="background: var(--color-bg-primary); border-top: 1px solid var(--color-border);"`.
The new page drops all of it. Not content; no verdict needed. The recent token work
(commits `e4d6b14`, `8f3cc39`, `db35a57`) moved the site off exactly this kind of inline
hardcoding, so restoring them would be a regression.

## Dead code inside the preserved file

`home-classic.astro` imports and never renders `Testimonials` and `InteractiveSection`
(`:15`), and none of the seven SVG icon imports (`:48-54` — `LanguageIcon`, `DigitalIcon`,
`RobotIcon`, `ArrowRightIcon`, `GlobeIcon`, `QuestionIcon`, `BookIcon`) are used. Not a
content loss — noted so nobody treats those imports as evidence that a block was removed.

## GAPS — what this audit did not verify

- **Not rendered.** This is a source diff. I did not build the site or open either page in a
  browser, so I cannot confirm that `/benefits` behaves as its source implies (e.g. that
  selecting "Southern Europe" really shows the generic template), or that the preview-only
  gate on `home-classic` works.
- **`/benefits` country tabs are client-side.** The mapping of old cards to country tabs
  assumes `benefits.astro`'s script wires `data-country-code` to `#<code>-benefits`, which
  the source says (`:466-480`) but I did not exercise.
- **The book chapters were not read.** I checked filenames under `src/content/docs/book/`
  and the two index pages, not chapter bodies. A dropped card's claim may well be argued at
  length inside a chapter; where I say "nowhere else on the site", read it as "on no
  top-level page", with chapter texts unverified.
- **No git archaeology.** I did not check whether `/benefits/*` routes or a Scandinavia
  section existed earlier and were deleted before this rewrite, so some items marked "worth
  re-using" may have been dropped deliberately in an earlier pass.
- **`draft:` status unchecked.** Chapters I describe as published were not checked for a
  `draft: true` frontmatter flag, which would hide them in production
  (`src/pages/book/[...slug].astro:6` filters on it).

## Cut from /why during the objections rewrite (2026-09-25)

Quoted so they can be put back. Items 1, 2 and 5 are on no page today.

1. **The industrial-age administration paradox** — "Europe faces a paradox: we operate in an
   information-based economy, but our administrative structures are rooted in the industrial
   age" / "Digital reform must treat the state and economy as a software project: optimized,
   scalable and efficient". Natural home: the eGovernment chapter.
2. **Europe as one organism** — "The great challenges of our time, from technology to climate
   change, require continent-scale action" / "Removing communication and bureaucratic barriers
   will unleash Europe's immense creative and industrial potential". Natural home: /vision
   layer 1, or the European English chapter.
3. **Central Europe and entry procedures** — "Central Europe particularly understands security
   threats and the principle of respect — that's why it strongly opposes illegal migration. If
   someone doesn't respect our procedures at entry, they won't respect our principles later
   either." No counterpart in the frame document; Paweł's call whether it belongs anywhere.
4. **Addressing migration at its source** — "Europe must offer solutions to the countries
   people are migrating from: free online education… robotic solutions to help tackle resource
   crises". Natural home: the robotics chapter.
5. **The strongest rhetoric of the old page** — "Without robotization, Europe is doomed to
   starvation-level pensions that will force older people into economic euthanasia — many will
   choose it rather than be a burden" and "An avalanche of psychological problems is already
   excluding more and more people from the labour market". Cut rather than softened; the same
   register survives in src/content/docs/support/time-is-running-out.mdx. Paweł decides.

## WhyDigitalReform.astro — deleted by E006-T07, prose quoted verbatim (2026-09-25)

`DESIGN.md` Migration step 6 retires `WhyDigitalReform.astro` (its four timeline blocks
were hardcoded content that belongs in a chapter, not in a component). It was rendered on
`/why` (`why.mdx:197-199`, already noted in Block 7 above) and in `home-classic.astro` and
`ui/index.astro` as examples, both removed by this task. Nobody had moved its prose into a
chapter before the component's deletion, so it is quoted here in full — four numbered
blocks, each with an icon, a title, two paragraphs and a highlight line — so it can still be
placed once a home is chosen (most likely `european-egovernment` for 1–3, and
`robotic-reindustrialisation` or the defence/robotics chapter for block 4).

1. **Adapting to a New Economic Era** (icon `settings`):
   > "We already live in a digital and information-based economy, yet our administrative and
   > state structures still operate with industrial-era logic. This fundamental misalignment
   > hampers our potential."
   >
   > "Instead of merely translating outdated administrative processes into technological
   > solutions, we must redesign administrative processes from the ground up, optimizing for
   > technology."
   >
   > Highlight: "Digital reform is not just digitization - it's a profound shift in how we
   > think about the state and economy, treating them as a software project built from
   > scratch with efficiency and modernity in mind."

2. **Europe as a Unified Economic Organism** (icon `globe`):
   > "To meet the great engineering and industrial challenges of our time, Europe must
   > function as a unified economic organism. Only by working together at scale can we be
   > competitive in the global economy."
   >
   > "Linguistic and digital integration are the foundations that will enable functioning as
   > a single organism - allowing us to effectively communicate and collaborate across
   > borders."
   >
   > Highlight: "When we remove communication and bureaucratic barriers, we'll unleash
   > Europe's immense creative and industrial potential, enabling ambitious continent-scale
   > projects."

3. **The Economic Imperative** (icon `euro`):
   > "Optimizing administrative, tax, and legal processes through digitization will radically
   > transform the entire economy. Applying economies of scale and IT approaches to state
   > management will bring enormous savings."
   >
   > "Instead of 27 different administrative systems, we can build one shared system, pooling
   > development and maintenance costs. This means better systems at lower costs."
   >
   > Highlight: "Transitioning from paper-based to digital processes is not just about
   > convenience, but a fundamental shift in the efficiency of the entire economy."

4. **Defense and Security** (icon `shield`):
   > "Robotization is an essential element of modern defense. Eastern European and
   > Scandinavian countries, threatened by Russia, have a vital interest in deeply developing
   > robotics for defensive purposes."
   >
   > "Autonomous robotic systems can monitor borders, respond to threats, and provide
   > effective deterrence, increasing the security of the entire Union."
   >
   > Highlight: "The same technology can help southern countries manage migration flows,
   > offering humane and effective solutions for border patrol and monitoring."

**Verdict:** blocks 1–3 restate the eGovernment argument already made at more length in
`european-egovernment.mdx` (and that chapter carries invented figures flagged for rewrite in
`src/AGENTS.md` §8, Q9) — worth checking for duplication before reusing rather than pasting
in as-is. Block 4's defence framing does not exist anywhere else on the site today; it is
the closest thing to a citation for the "military robotics research … converted to civilian
use" line in `src/lib/vision-content.ts` and `/vision#robotics`, and is worth keeping.
