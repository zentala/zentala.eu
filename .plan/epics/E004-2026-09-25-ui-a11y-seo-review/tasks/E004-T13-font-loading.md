---
formatVersion: 1
type: improvement
id: E004-T13
title: Self-host fonts with Polish glyphs and fewer weights
epic: E004
status: proposed
priority: medium
importance: Medium
effort: small
points: 2
dependencies: []
tags: [typography, performance]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T13: Self-host fonts with Polish glyphs and fewer weights

**Importance:** Medium · **Points:** 2

## Objective

Fonts come from Google Fonts (third-party request, privacy) in 5+ weights; the render-blocking FA kit adds to it. Polish diacritics need latin-ext.

## Where

- `src/layouts/Layout.astro:20-22`
- `package.json (+@fontsource-variable/inter, @fontsource/playfair-display)`

## Acceptance criteria

- [ ] Fonts self-hosted, variable where available, latin + latin-ext subsets
- [ ] Preload of the body font; font-display: swap
- [ ] Unused weights dropped (Inter 300 etc.)
- [ ] No request to fonts.googleapis.com in the built pages

## Decision for Paweł

Keep Inter body + Playfair headings, or move essay body to a text serif (e.g. Source Serif 4) for a more bookish read.

## Decision taken (2026-09-25)

Keep Inter (body) + Playfair Display (headings), self-hosted — adopted as the safe default when Paweł ordered waves 2–4; a text-serif body remains an open option.

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
