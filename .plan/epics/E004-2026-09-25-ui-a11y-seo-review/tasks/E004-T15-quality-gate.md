---
formatVersion: 1
type: improvement
id: E004-T15
title: Automated a11y/SEO gate: Playwright + axe + Lighthouse
epic: E004
status: proposed
priority: medium
importance: Medium
effort: medium
points: 3
dependencies: [E004-T01, E004-T03]
tags: [testing, a11y, seo]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T15: Automated a11y/SEO gate: Playwright + axe + Lighthouse

**Importance:** Medium · **Points:** 3

## Objective

Keep the fixes from regressing. The audit harness from this review (48 runs: 12 pages × 2 themes × 2 widths) can become a test.

## Where

- `tests/ (playwright.config.ts already in repo)`
- `justfile (new `a11y` target, part of `check`)`

## Acceptance criteria

- [ ] Playwright test serves dist/ and runs axe (WCAG 2.2 AA) on key pages in both themes; fails on serious/critical
- [ ] Asserts: unique meta description, canonical present, one h1, skip link, no horizontal overflow at 375px
- [ ] Optional Lighthouse CI budget (a11y ≥95, SEO ≥95) for / and one essay
- [ ] Runs in the deploy workflow before publish

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
