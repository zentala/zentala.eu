---
formatVersion: 1
type: improvement
id: E004-T02
title: One ArticleLayout with an editorial reading measure
epic: E004
status: completed
priority: high
importance: High
effort: medium
points: 5
dependencies: []
tags: [typography, components]
created: 2026-09-25
completed_at: 2026-09-25
commits: [58613c4]
verification_evidence: []
updated: 2026-09-25
---
# E004-T02: One ArticleLayout with an editorial reading measure

**Importance:** High · **Points:** 5

## Objective

Essays run 114–130 characters per line at 22px because routes use max-w-6xl + prose max-w-none and global.scss forces prose p/li to text-xl. Only /why caps the measure (70ch). Give all long-form routes one shared layout.

## Where

- `src/styles/global.scss:58-130 (.prose overrides, p/li text-xl)`
- `src/styles/_tokens.scss (add --leading-*, --measure tokens)`
- `src/pages/book|docs|commentary|transcripts/[...slug].astro`
- `src/components/why/WhySection.astro:62 (reference: 70ch)`

## Acceptance criteria

- [ ] New `ArticleLayout.astro` (or `Prose.astro`) used by book, docs, commentary, transcripts routes
- [ ] Body text 18–19px, line-height ≈1.6, measure 62–72ch at 1280px (measured in rendered page)
- [ ] Headings `text-wrap: balance`, paragraphs `text-wrap: pretty`; `tabular-nums` in tables
- [ ] Duplicate h1 removed: either the route h1 or the markdown `# Title`, not both (all 19 book files)
- [ ] No horizontal overflow at 320/375px on /book/european-english

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
