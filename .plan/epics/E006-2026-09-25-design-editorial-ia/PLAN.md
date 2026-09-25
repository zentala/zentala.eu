---
formatVersion: 1
type: epic
status: in-progress
readiness: blocked
points: 34
agent: mixed (research: sonnet · design, editorial standard, AI instructions: fable)
wave: 1
depends-on: [E004]
parallel: []
blocked-by: "Paweł approves PRES.md: DESIGN.md, src/AGENTS.md, INFORMATION-ARCHITECTURE.md; answers Q1/Q3/Q4/Q5/Q9"
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

## Waves

| Wave | Tasks | Points | Agent |
|---|---|---:|---|
| 1 | R1 design sources · R2 component/pattern inventory · R3 duplication + concepts + link graph · R4 editorial audit | 8 | sonnet ×3, opus ×1 |
| 2 | D1 DESIGN.md · D2 editorial AGENTS.md + CLAUDE.md pointer + repo rule · D3 IA document | 13 | fable ×3 |
| 3 | after go: reskin, components, chapter rewrites, tooltips, sitemap page | 13+ | fable (text), ts-dev (code) |
