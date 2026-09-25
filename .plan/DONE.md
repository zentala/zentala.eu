# Done — completed epics and tasks (links)

## E004 — UI, typography, accessibility, SEO and AI-agent visibility review

Closed 2026-09-25. `.plan/epics/E004-2026-09-25-ui-a11y-seo-review/PLAN.md` ·
`.plan/epics/E004-2026-09-25-ui-a11y-seo-review/JOURNAL.md`

- [E004-T01](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T01-light-theme-contrast.md) — Fix light-theme contrast on article routes
- [E004-T02](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T02-reading-measure-article-layout.md) — One ArticleLayout with an editorial reading measure
- [E004-T03](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T03-a11y-baseline.md) — Accessibility baseline in Layout and Header
- [E004-T04](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T04-seo-head.md) — Per-page SEO head: description, canonical, Open Graph
- [E004-T05](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T05-sitemap-robots-domain.md) — Sitemap, robots.txt and production domain cleanup
- [E004-T06](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T06-content-schema-dates.md) — Content schema: dates, author, description on every entry
- [E004-T07](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T07-json-ld.md) — Structured data (JSON-LD) (status: `done`)
- [E004-T08](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T08-ai-agent-layer.md) — Visibility for AI agents: llms.txt and Markdown twins
- [E004-T09](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T09-canonical-duplicates.md) — Canonicals and redirects for duplicate route families
- [E004-T10](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T10-icon-system.md) — One icon system with an Icon component
- [E004-T11](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T11-component-consolidation.md) — Consolidate components into a small, documented set
- [E004-T13](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T13-font-loading.md) — Self-hosted Inter + Playfair Display fonts (commit `c74c8f6`)
- [E004-T15](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T15-quality-gate.md) — Automated Playwright + axe a11y/SEO regression gate (commit `9816cda`)
- [E004-T16](epics/E004-2026-09-25-ui-a11y-seo-review/tasks/E004-T16-vendor-agent-skills.md) — Vendor the chosen agent skills into the repo (commit `637500d`)

Not part of this closure's "done" list:

- E004-T12 (token hygiene) and E004-T14 (answer-first editorial pass) —
  **superseded**, folded into E006.

Updated 2026-09-25: T13 and T15 landed after the note above was written
(see JOURNAL.md session "epic close pass, `done` protocol"). All 16 tasks
are now accounted for, but epic-level verification is **PARTIAL** — the
full `yarn test` regression suite and a fresh `/review` pass are still
outstanding; see `.plan/BACKLOG.md` → "E004 not fully verified at close".

## E006 — Design system, editorial standard, information architecture (epic still `in progress`)

Updated 2026-09-25 (epic interrupt pass): all 15 tasks (T05–T19) are now
individually `status: completed` and merged to `main`. The epic itself is
still **not** closed — epic-level verification is **PARTIAL** (the
`Footer.astro:106` `/tags` link keeps `content-audit.mjs`'s redirect-table
count off zero; wave 5's changes have not been pushed to `origin`/redeployed
to `eu.internal`) and `review-log status` is **NOT CLEARED** for every review
kind but `review`. See `.plan/BACKLOG.md` → "E006 not closed after wave 5"
and `.plan/epics/E006-2026-09-25-design-editorial-ia/JOURNAL.md` (session
"epic interrupt, `done` protocol"). Listing only the tasks whose own status
is `completed`; do not read this section as the epic being done.
`.plan/epics/E006-2026-09-25-design-editorial-ia/PLAN.md` ·
`.plan/epics/E006-2026-09-25-design-editorial-ia/JOURNAL.md`

- [E006-T05](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T05.md) — Content schema: `tags` → `concepts` frontmatter sweep, re-scoped (`93873a7`, `2662801`)
- [E006-T06](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T06.md) — Design tokens, ArticleGrid, article typography (`7f7fc79`)
- [E006-T07](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T07.md) — Component consolidation, /vision anchors
- [E006-T08](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T08.md) — Route cleanup and the redirect table (`ea95981`)
- [E006-T09](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T09.md) — DESIGN.md content components + /ui/content gallery
- [E006-T10](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T10.md) — Link-graph and design-lint scripts (`61d55f5`)
- [E006-T11](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T11.md) — Chapters index from `layer`/`order`, `ChapterFooter` (merged with T19's `40e5618`-family commits)
- [E006-T12](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T12.md) — Term tooltips, /glossary, tags retirement
- [E006-T13](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T13.md) — Long pages onto ArticleLayout, chart tokens, chrome cleanup (`ce6bd88`)
- [E006-T14](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T14.md) — /site-map page and IA shape audits
- [E006-T15](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T15.md) — `one-working-language` chapter; retire `language.md` with redirect (`915a975`)
- [E006-T16](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T16.md) — Five chapters to editorial standard: choosing-people, the-total-state, new-cities, cheap-is-wealth, the-shorter-week (`55be61f`)
- [E006-T17](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T17.md) — Five chapters to editorial standard: direct-democracy, safeguards, political-path, designing-our-retirement, robotic-reindustrialisation (`d1d431b`)
- [E006-T18](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T18.md) — Seven chapters to editorial standard; eGov drafts merged into european-egovernment (`43eab99`)
- [E006-T19](epics/E006-2026-09-25-design-editorial-ia/tasks/E006-T19.md) — Top-level "one argument, one home": /why, /manifesto, /principles (`40e5618`, plan `3691a33`)
