---
formatVersion: 1
type: improvement
id: E004-T06
title: Content schema: dates, author, description on every entry
epic: E004
status: completed
priority: medium
importance: Medium
effort: medium
points: 3
dependencies: []
tags: [content, seo]
created: 2026-09-25
completed_at: 2026-09-25
commits: [e9a5054]
verification_evidence: []
updated: 2026-09-25
---
# E004-T06: Content schema: dates, author, description on every entry

**Importance:** Medium · **Points:** 3

## Objective

The docs/book schema has no date fields; commentary has no description or author. That blocks Article JSON-LD and visible freshness, which AI search weighs.

## Where

- `src/content/config.ts:5-12,36-45`
- `src/content/docs/book/*.md(x) (19)`
- `src/content/commentary/*.md`

## Acceptance criteria

- [ ] Schema: `date` and optional `updated` (z.coerce.date), `author` default Paweł Żentała, `description` required and 70–160 chars
- [ ] All book + commentary entries pass the schema (build green)
- [ ] Article pages show published / updated date and author byline

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
