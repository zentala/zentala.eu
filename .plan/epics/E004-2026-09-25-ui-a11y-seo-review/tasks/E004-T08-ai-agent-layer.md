---
formatVersion: 1
type: improvement
id: E004-T08
title: Visibility for AI agents: llms.txt and Markdown twins
epic: E004
status: completed
priority: medium
importance: Medium
effort: medium
points: 3
dependencies: [E004-T05]
tags: [geo, agents]
created: 2026-09-25
completed_at: 2026-09-25
commits: [e3767dc]
verification_evidence: []
updated: 2026-09-25
---
# E004-T08: Visibility for AI agents: llms.txt and Markdown twins

**Importance:** Medium · **Points:** 3

## Objective

Make the site cheap for agents to read and cite: a generated index and a Markdown copy of every essay.

## Where

- `src/pages/llms.txt.ts, src/pages/llms-full.txt.ts (new endpoints)`
- `src/pages/book/[...slug].md.ts, src/pages/commentary/[...slug].md.ts (new)`
- `Layout head: <link rel="alternate" type="text/markdown">`

## Acceptance criteria

- [ ] /llms.txt generated from collections: H1 "EU Reform Vision", blockquote thesis, sections Start here / The book / Commentary, absolute URLs
- [ ] /llms-full.txt concatenates all published book chapters
- [ ] Each essay reachable as /book/<slug>.md (text/markdown, frontmatter title/description/date/url on top)
- [ ] Drafts excluded; commentary respects COMMENTARY_PUBLIC

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
