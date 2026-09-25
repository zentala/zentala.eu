---
formatVersion: 1
type: improvement
id: E004-T05
title: Sitemap, robots.txt and production domain cleanup
epic: E004
status: proposed
priority: high
importance: High
effort: small
points: 2
dependencies: []
tags: [seo, geo]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T05: Sitemap, robots.txt and production domain cleanup

**Importance:** High · **Points:** 2

## Objective

public/sitemap.xml is hand-written: 21 URLs on the wrong domain eu.zentala.io, while the build has 167 pages; production CNAME is zentala.eu. No robots.txt.

## Where

- `public/sitemap.xml (delete)`
- `public/CNAME`
- `astro.config.mjs:30 (commented eu.zentala.io)`
- `package.json (+@astrojs/sitemap)`

## Acceptance criteria

- [ ] @astrojs/sitemap generates the sitemap for https://zentala.eu; excludes /ui, /home-classic, /docs/book/*, /docs/why, drafts
- [ ] robots.txt with Sitemap line; explicitly allows search/citation bots (Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot)
- [ ] Training bots (GPTBot, ClaudeBot, Google-Extended, CCBot) handled per Paweł's decision
- [ ] No `eu.zentala.io` left in the repo

## Decision for Paweł

Confirm zentala.eu as the canonical domain, and decide whether to allow AI training bots (recommended: allow — the site's goal is to spread the idea).

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).

## Decisions (Paweł, 2026-09-25)

- Canonical domain: **zentala.eu**. `eu.zentala.io` is dead — remove it from the repo, no redirect needed.
- robots.txt: **allow all AI bots**, including training bots (GPTBot, ClaudeBot, Google-Extended, CCBot), plus search/citation bots.
