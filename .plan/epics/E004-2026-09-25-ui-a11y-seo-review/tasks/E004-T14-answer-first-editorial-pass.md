---
formatVersion: 1
type: improvement
id: E004-T14
title: Answer-first editorial pass on the book essays
epic: E004
status: proposed
priority: medium
importance: Medium
effort: large
points: 5
dependencies: [E004-T06]
tags: [content, geo, editorial]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T14: Answer-first editorial pass on the book essays

**Importance:** Medium · **Points:** 5

## Objective

Only 2/5 sampled essays state their thesis in the opening; no question-phrased headings; 125 straight vs 218 curly quotes. AI search cites self-contained passages near the top.

## Where

- `src/content/docs/book/*.md(x) (19)`
- `src/content/commentary/*.md`

## Acceptance criteria

- [ ] Each essay: 120–160-char answer-first description + a 40–60-word opening that states the thesis (Paweł approves wording)
- [ ] Where natural, 1–3 H2 headings phrased as the reader's question
- [ ] Typographic quotes normalised to curly (script, reviewed diff)
- [ ] Cross-links between essays use /book/* URLs

## Decision for Paweł

Paweł's voice: agent drafts, Paweł approves per essay.

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
