# E002: Homepage Redesign — research-backed manifest front page

**Created:** 2026-04-27
**Owner:** Paweł Żentała
**Status:** Awaiting variant selection (preview ready)

---

## What & Why

Homepage today is a mix of strong elements (hero with retirement argument, AI Review blurb) and generic/abstract elements (12 marketing-copy benefit cards, defensive FAQ, pillars without data, dubbed "Equitable Principles" section). Meanwhile 28 research files sit unused in `src/content/docs/research/` — the empirical backbone of the manifesto is not visible on the front page.

The goal of this epic: make the homepage do what the manifesto promises — speak as a Polish engineer with concrete numbers, not as a brochure. Every change is research-backed, every removal is justified by duplication or emptiness. Hero + AI Review + Author + Newsletter stay untouched (they already work).

The core insight from research review: there is enough material in `t1-1`, `t1-2`, `t1-3`, `t2-1`, `t2-4a`, `t2-4b` alone to ground every section of the homepage in data. The redesign is *additive* (adding diagnosis numbers, pillar addenda, CEE focus, "what I am not proposing") and *subtractive* (removing the duplicated principles section, replacing the marketing-copy benefits cards with one of three variants), not a rewrite.

## Scope

### Sections changed
- Pillars (3 cards) — keep copy, add SVG line icons + research-backed "the opportunity" sub-line
- Benefits cards — replace 12 generic cards with one of three variants (A: CEE focus / B: per persona / C: 12 with numbers)
- FAQ — full rewrite from defensive to offensive (A7 from 2026-04-26 plan)
- Equitable Principles — remove (duplicates `/principles`)

### Sections added
- Diagnosis in 4 numbers — new section under hero (research data: t1-1, t2-4a, t1-2, t1-3)
- CEE focus — new short section after Why Digital Reform (Poland, Baltics+Ukraine, Trójmorze, Scandinavia)
- "What I am not proposing" — new section before FAQ (4 explicit non-claims)

### Sections kept (no changes)
- Hero (retirement argument)
- AI Review blurb
- Quick links bar (Why · Benefits · Vision)
- Why Digital Reform
- Author + Newsletter

## Out of scope
- New SVG icons (existing `language.svg`, `digital.svg`, `robot.svg` are sufficient)
- PDF download in navbar (separate epic, see 2026-04-26 plan)
- YouTube channel integration (waiting for channel to exist)
- Trójmorze 2.0 dedicated page (later)

## Acceptance criteria

1. Preview page at `/resources/preview/homepage` shows OLD/NEW toggles for every changed section + A/B/C selector for Benefits, all functional in browser
2. Author selects one Benefits variant (A, B, or C) before main implementation begins
3. After variant is selected, `src/pages/index.astro` is rewritten to match the NEW state
4. All numbers shown have a source citation visible (research file path)
5. Tone test passes: "does this sound like a Polish engineer speaking directly?" — applied to every new copy block
6. No country is shamed — every comparison is framed as opportunity, not deficit
7. `npm run build` passes; manual smoke test of homepage in dev server
8. Old principles dup section removed; hero "Read the principles" button is the only entry point

## Dependencies / prior art
- WRITING.md — voice rules, central metaphor, target audience
- `.arch/VISION.md` — full vision
- `RESEARCH_INDEX.md` — 28 research files index
- `/resources/2026-04-25-22-13-strategia-manifestu` — strategy decision
- `/resources/2026-04-26-04-00-plan-dalszych-prac` — open backlog (this epic addresses items A7, "what I am not proposing", and Benefits redesign)
- `/resources/2026-04-27-12-00-homepage-redesign` — design doc with all proposed copy

## Risks
- Variant decision blocks main implementation. Mitigation: preview ships standalone, author decides async.
- Adding research citations on cards may visually clutter. Mitigation: small font, opacity 50, mono — visible but de-emphasized. Verify in preview.
- Hero already references "the principles" via button; removing the duplicated principles section near the bottom may feel sudden. Mitigation: confirm hero CTA is enough by reviewing during preview walkthrough.
