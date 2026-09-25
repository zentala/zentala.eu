---
formatVersion: 1
type: improvement
id: E004-T01
title: Fix light-theme contrast on article routes
epic: E004
status: completed
priority: high
importance: High
effort: small
points: 3
dependencies: []
tags: [a11y, theme, bug]
created: 2026-09-25
completed_at: 2026-09-25
commits: [ff667f7, 9459218, c26cda4]
verification_evidence: ["axe after-audit 48 runs: color-contrast 245->8, button-name 26->4, label 4->0; residue only /transcripts iframe + /docs redirect to prod", "just build 0 errors; merged to main c26cda4"]
---
# E004-T01: Fix light-theme contrast on article routes

**Importance:** High · **Points:** 3

## Objective

Article pages hard-code dark-theme utilities, so in light theme the h1 is white on #fafafa (contrast 1.0) and /book index body text is 2.4:1. /vision/digital-integration renders dark in both themes.

## Where

- `src/pages/book/[...slug].astro:17-25`
- `src/pages/book/index.astro`
- `src/pages/commentary/[...slug].astro:15-21 (prose-invert)`
- `src/pages/docs/[...slug].astro:59-73 (forced bg-gray-900)`
- `src/pages/transcripts/[...slug].astro`
- `src/pages/vision/*.astro (text-white/text-gray-* ×150)`

## Acceptance criteria

- [x] No `text-white`, `prose-invert` or literal `text-gray-*` on article routes; colours come from tokens / theme-* classes
- [x] axe color-contrast = 0 on /book/<slug>, /book, /commentary/<slug>, /vision/digital-integration in both themes
- [ ] Light-theme screenshots of those pages attached (before/after)

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
