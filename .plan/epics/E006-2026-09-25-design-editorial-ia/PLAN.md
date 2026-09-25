---
formatVersion: 1
type: epic
status: in-progress
readiness: ready
points: 115
agent: mixed (research: sonnet · code: ts-dev · chapters, glossary, page copy: editor (fable))
wave: 3
depends-on: [E004]
parallel: []
---

# E006: Design system, editorial standard, information architecture

## TLDR

The content is now mostly there (20 chapters, manifesto, objections page). It reads like
transcribed dictation, repeats itself between `/`, `/vision`, `/why` and the manifesto, and
is delivered as walls of prose although the site has MDX components. Paweł, 2026-09-25:
"nie zrobiłeś dobrej pracy edytorskiej", "strona nie mówi", "nie ma spójnej struktury
wizualnej". This epic produces three durable standards — `DESIGN.md`, an editorial
`AGENTS.md` for the content tree, and an information-architecture document — and then
rewrites the site against them. Decision needed from Paweł after wave 2: approve the
design and the editorial standard before wave 3 touches pages.

**Direction line (PURPOSE):** the site exists to carry an idea to critical mass; a page that
does not speak visually and does not read as an editor's work carries nothing.

## Decisions and ADRs

- Builds on [E004](../E004-2026-09-25-ui-a11y-seo-review/PLAN.md) — its rendered audit,
  skills shortlist (`.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`) and
  findings (measure too long, three timelines, four card variants, three icon systems) are
  inputs here, not to be redone. E004 waves 2–4 stay E004's.
- Absorbs the unfinished [E001](../E001-2026-08-28-information-architecture/PLAN.md)
  intent (canonical `/book/*`, two-click rule); E001's open "what is this site's shape"
  question is answered by this epic's IA document.
- Theme tokens (`src/styles/_tokens.scss`, CLAUDE.md "Theme tokens") are the base;
  DESIGN.md builds on them, never replaces them.
- Model policy, Paweł's instruction: research on cheaper models; design, text and
  AI-facing instructions on the best model (Fable). Recorded in `decisions.jsonl`.
- Nomenclature ("book" does not fit) is decided inside the IA document, not separately.

## Scope

1. **Research (wave 1, sonnet/opus):** design & typography sources worth adopting; component
   and pattern inventory; duplication and concept inventory; per-chapter editorial audit.
2. **Standards (wave 2, Fable):** `DESIGN.md`; `src/content/AGENTS.md` (editorial standard:
   Paweł's voice, tone, how dictation becomes text, what the editor keeps/cuts/asks) with
   `src/content/CLAUDE.md` = `@AGENTS.md`; `INFORMATION-ARCHITECTURE.md` (structure,
   ontology, interlinking, term tooltips, sitemap page, nomenclature).
3. **Rewrite (wave 3, after Paweł's go):** reskin to DESIGN.md; extract repeated patterns
   into components; rewrite chapters to the editorial standard; term tooltips; infographic
   sitemap page.

## Out of scope

Public deployment; E004's a11y/SEO tasks; new content subjects.

## Acceptance criteria

- `DESIGN.md` exists, is specific enough that an agent can build a page from it without
  taste calls, and names every layout pattern with a component.
- `src/content/AGENTS.md` lets a fresh agent turn a dictation into a chapter that Paweł
  recognises as his and an editor recognises as edited.
- The IA document resolves nomenclature and gives one canonical place for every subject.
- No passage appears on more than one top-level page.
- Every chapter uses at least one non-prose component where the audit found a pattern.
- Term tooltips work on at least the political chapters; the sitemap page renders the
  link graph.

## Test strategy

- Wave 1 reports carry counts and `file:line`; an empty inventory fails.
- Wave 2 documents are reviewed by Paweł (PRES) — the gate.
- Wave 3: `just build`, content audit, crawl in both themes, before/after screenshots per
  rewritten page.

## Architecture impact

New standards documents; a term-tooltip component and a sitemap data build step in wave 3.
Update `.plan/ARCH.md` when wave 3 lands.

## The go, and the decisions taken with it (2026-09-25)

Paweł answered the PRES with `/implement w3 i w4`. That is the gate opening and a repeat of
the "swarm, I orchestrate" instruction: waves 3–5 run through `/implement` as direct
subagents (recorded in `epics/INDEX.md`). He did not answer the numbered questions, so the
defaults from the PRES apply and every editorial task file repeats them verbatim:

- D3 label **Chapters**, D4/D6 `layer`/`kind`/`concepts` + governed glossary, D11 static
  site-map list first with the graph as companion — as proposed.
- Q1 communism: his own framing from the surplus dump, once, in `who-it-earns-for`.
- Q3 thresholds: 2 % / 1 % as dictated, stated once in `direct-democracy`.
- Q4/Q6: the military argument for English — the position is his, the arguments are offered.
- Q5 register: image stays, vulgarity goes, strength of the verdict stays.
- Q9: eGov chapters merge into `european-egovernment`; `the-total-state` wins contradictions.
- Rights floor: non-derogable ECHR core only. "Economic euthanasia" and the personal
  emotional-isolation passage stay unpublished. School meals and services as dictated; a
  citizens' dividend is an offered option.

He asked for "w3 and w4"; the work is split into three waves because the chapter rewrites
need the components and the tooltips from the two waves before them. The editorial standard
lives at `src/AGENTS.md` (Astro 4 fails the build on any `.md` inside `src/content/`).

## Waves

| Wave | Tasks | Points | Agent |
|---|---|---:|---|
| 1 (done) | R1 design sources · R2 component/pattern inventory · R3 duplication + concepts + link graph · R4 editorial audit — `.plan/reports/2026-09-25-e006/` | 8 | sonnet ×3, opus ×1 |
| 2 (done, b13cbd0 c23da70 7a2b06b) | D1 `DESIGN.md` · D2 `src/AGENTS.md` + `src/CLAUDE.md` + repo rule · D3 `.plan/INFORMATION-ARCHITECTURE.md` + `PRES.md` | 13 | fable ×3 |
| 3 — infrastructure | [T05](tasks/E006-T05.md) schema + glossary + frontmatter sweep (8, editor) · [T06](tasks/E006-T06.md) tokens + ArticleGrid + typography (5) · [T07](tasks/E006-T07.md) component consolidation + /vision anchors (5) · [T08](tasks/E006-T08.md) route cleanup + redirect table (5) · [T09](tasks/E006-T09.md) new content components + gallery (8) · [T10](tasks/E006-T10.md) link-graph + design-lint scripts (3) | 34 | ts-dev ×5, editor ×1 |
| 4 — pages | [T11](tasks/E006-T11.md) index from `layer`, Chapters label, eyebrow, ChapterFooter (5) · [T12](tasks/E006-T12.md) term tooltips, /glossary, tags retirement (5) · [T13](tasks/E006-T13.md) long pages on ArticleLayout, chart figure, chrome cleanup (5) · [T14](tasks/E006-T14.md) /site-map + shape audit (8) | 23 | ts-dev ×4 |
| 5 — editorial | [T15](tasks/E006-T15.md) floor chapter (5) · [T16](tasks/E006-T16.md) chapters group 1 (8) · [T17](tasks/E006-T17.md) group 2 (8) · [T18](tasks/E006-T18.md) group 3 + eGov merge (8) · [T19](tasks/E006-T19.md) top-level one-home sweep (8) | 37 | editor ×5 (fable) |

Write sets inside a wave are disjoint by construction (each task file lists its files and
the files it must not touch). Epic total 115 points; the 13-point rule would route this to AO,
Paweł's repeated instruction routes it through `/implement` — recorded deviation.
