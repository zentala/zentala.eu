# E004: UI, typography, accessibility, SEO and AI-agent visibility review

**Status:** done 2026-09-25 — 14 tasks completed, T12 and T14 superseded by E006 (tokens, chapter rewrites).
**Total:** 16 tasks, 54 points → route: Agent Orchestrator (> 13 points), or approve a subset as waves.

## Objective

Make zentala.eu read like a well-set book, be accessible like any public site (WCAG 2.2 AA),
be findable by search engines and citable by AI agents, and run on a small, consistent,
documented component and icon set.

## How the review was done

1. Selected agent skills as checklists: Anthropic `frontend-design`, Vercel `web-design-guidelines`,
   rampstackco `accessibility-audit` + WCAG 2.2 skill, `geo-optimizer-skill` + `claude-seo`,
   edenspiekermann `audit-design-system` + `design-auditor` (sources: `.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`).
2. Static inventory of source and `dist/` (`01-inventory.md`).
3. Content, SEO and GEO review of frontmatter and 5 essays (`02-content-seo-geo.md`).
4. Rendered audit: 12 pages × light/dark × 375/1280 px on a local static server of `dist/` on mATX,
   axe-core WCAG 2.2 AA plus computed typography (`03-rendered-audit.md`). Lighthouse: failed (CHROME_INTERSTITIAL_ERROR), no scores.

## Headline findings

- **Light theme is broken on essays:** h1 contrast 1.0 (white on #fafafa) on /book/<slug> and /commentary/<slug>; /book index body 2.4:1.
- **Measure too long:** 114–130 characters per line at 22px on essays (target 62–72ch at 18–19px).
- **axe on every page:** mobile menu button without a name; colour-only inline links in dark theme; 245 contrast nodes overall.
- **No skip link, no designed focus ring, no `<main>` in Layout.**
- **SEO head:** one identical description on all 167 pages; no canonical, OG, JSON-LD; sitemap hand-written for the wrong domain (eu.zentala.io vs CNAME zentala.eu); no robots.txt.
- **AI agents:** no llms.txt, no Markdown copies, no dates in the book schema, duplicate h1 in every essay.
- **Components:** 4 unused components, 3 timelines, 4+ card variants, three icon systems plus Starlight icon names rendered as text; hex colours in 7 components.

## Tasks

| Task | Title | Importance | Points | Depends on | Decision needed |
|---|---|---|---|---|---|
| [E004-T01](tasks/E004-T01-light-theme-contrast.md) | Fix light-theme contrast on article routes | High | 3 | — | — |
| [E004-T02](tasks/E004-T02-reading-measure-article-layout.md) | One ArticleLayout with an editorial reading measure | High | 5 | — | — |
| [E004-T03](tasks/E004-T03-a11y-baseline.md) | Accessibility baseline in Layout and Header | High | 3 | — | — |
| [E004-T04](tasks/E004-T04-seo-head.md) | Per-page SEO head: description, canonical, Open Graph | High | 3 | — | — |
| [E004-T05](tasks/E004-T05-sitemap-robots-domain.md) | Sitemap, robots.txt and production domain cleanup | High | 2 | — | yes |
| [E004-T06](tasks/E004-T06-content-schema-dates.md) | Content schema: dates, author, description on every entry | Medium | 3 | — | — |
| [E004-T07](tasks/E004-T07-json-ld.md) | Structured data (JSON-LD) | Medium | 3 | E004-T04, E004-T06 | — |
| [E004-T08](tasks/E004-T08-ai-agent-layer.md) | Visibility for AI agents: llms.txt and Markdown twins | Medium | 3 | E004-T05 | — |
| [E004-T09](tasks/E004-T09-canonical-duplicates.md) | Canonicals and redirects for duplicate route families | Medium | 3 | E001-T01 | — |
| [E004-T10](tasks/E004-T10-icon-system.md) | One icon system with an Icon component | Medium | 5 | — | yes |
| [E004-T11](tasks/E004-T11-component-consolidation.md) | Consolidate components into a small, documented set | Medium | 5 | — | — |
| [E004-T12](tasks/E004-T12-token-hygiene.md) | Token hygiene and an automated guard | Medium | 5 | E004-T01 | — |
| [E004-T13](tasks/E004-T13-font-loading.md) | Self-host fonts with Polish glyphs and fewer weights | Medium | 2 | — | yes |
| [E004-T14](tasks/E004-T14-answer-first-editorial-pass.md) | Answer-first editorial pass on the book essays | Medium | 5 | E004-T06 | yes |
| [E004-T15](tasks/E004-T15-quality-gate.md) | Automated a11y/SEO gate: Playwright + axe + Lighthouse | Medium | 3 | E004-T01, E004-T03 | — |
| [E004-T16](tasks/E004-T16-vendor-agent-skills.md) | Vendor the chosen agent skills into the repo | Low | 1 | — | yes |

## Suggested waves (if approved)

1. **Wave 1 — broken things (11 pts):** T01, T03, T04, T05.
2. **Wave 2 — reading quality + AI layer (14 pts):** T02, T06, T07, T08.
3. **Wave 3 — system (18 pts):** T09 (with E001-T01), T10, T11, T12.
4. **Wave 4 — polish and guard (11 pts):** T13, T14, T15, T16.

## Decisions for Paweł

1. Canonical domain: zentala.eu (CNAME) — confirm, and drop eu.zentala.io everywhere (T05).
2. AI training bots in robots.txt: allow (recommended) or block (T05).
3. Icon family: Lucide (recommended), Tabler or Phosphor (T10).
4. Essay body font: keep Inter, or a text serif for a bookish read (T13).
5. Editorial pass: agent drafts answer-first openings, Paweł approves per essay (T14).
6. Skills: vendor into the repo vs global install (T16).
