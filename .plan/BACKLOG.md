# BACKLOG — zentala.eu

Open ideas and future improvements not yet assigned to an epic.

---

## Content / Copy

- [ ] Add real expert quotes to `Testimonials` component (currently component exists but is unused on homepage — only in `/ui` dev library). Find actual EU reform advocates, analysts, thinkers.
- [ ] Home page: shorten benefits section
- [ ] Home page: split benefits into "for citizens", "for businesses", "for regions", "for European integration"
- [ ] Home page: add "Problems we address / EU Challenges" section (security, political unity, R&D, migration, energy, healthcare, retirement, education, economic power)
- [ ] `/why` page: connect transcripts, summarize as infographic with links to videos
- [ ] `/why` content in Polish → move to zentala.pl as intro
- [ ] Leave feedback / comments / likes / share mechanics — some dynamic element

## Structure / Navigation

- [ ] Reorganize all content around 3 pillars: Language Integration, Digital Integration, Robotic Reindustrialization
- [ ] Mobile navigation: expand menu, add transitions, better topic grouping
- [ ] Breadcrumbs navigation
- [ ] Fix all broken links (see `missing_links.md`)
- [ ] Sidebar navigation for content browsing

## Infrastructure / Integrations

- [ ] Configure Appwrite email templates for newsletter confirmation to look like a proper subscription confirmation (not default Appwrite emails)
  - URL: https://cloud.appwrite.io/console/project-eu/auth/templates

## Data & Integrations

- [ ] Replace hardcoded sample stats in `InteractiveSection.astro` with real Eurostat API data
  - Currently: hardcoded language %, DESI scores, fictional GDP gains
  - File: `src/components/InteractiveSection.astro` lines 27-53
  - Note at bottom: "Data is for illustrative purposes"
- [ ] Algolia: fix oversized records before full integration (3 transcripts exceed 10KB limit)
  - Files listed in `todo_algolia.md`
  - Run `npm run index-algolia` after fixing
  - `algoliaClient.ts` currently uses mock client — needs real init after env vars confirmed

## Visual / UX

- [ ] Improve card visuals: better icons and illustrations
- [ ] Improve readability of long lists (split into digestible sections)
- [ ] Subtle animations and transitions (smooth scroll, card entrances)
- [ ] Interactive timeline for reform implementation
- [ ] "Continue reading" / "related topics" at end of each page
- [ ] Table of contents for long articles

## Technical Debt (from TODO_CLEANUP.md)

- [ ] Fix TypeScript warnings in `EUStatisticsChart.astro` (Chart ID handling)
- [ ] Remove unused imports in `src/pages/index.astro` (ArrowRightIcon, RobotIcon, DigitalIcon, LanguageIcon, InteractiveSection, Testimonials)
- [ ] Remove unused var `isDevelopment` in `src/components/Footer.astro`
- [ ] Remove unused vars `borderColorClass`, `bgColorClass` in `WhyDigitalReform.astro`
- [ ] Remove unused var `benefitsContainer` in `src/pages/benefits.astro`
- [ ] Remove unused var `statusMessage` in `src/pages/confirm.astro`
- [ ] Remove unused var `isProduction` in `src/pages/ui/index.astro`
- [ ] Remove unused imports `Card`, `CardGrid` in vision components
- [ ] Fix deprecated `frameborder` → `border-0` class in all iframes
- [ ] Fix CardGrid usage in `content/docs/all.mdx`

## Performance

- [ ] Lazy loading for images and heavy elements
- [ ] Image and asset optimization
- [ ] Code splitting for faster initial load
- [ ] Optimize Algolia indexing: searchable attributes, facets, filters

## SEO & Metadata

- [ ] Optimize all page metadata
- [ ] Add structured data (JSON-LD)
- [ ] Create XML sitemap
- [ ] Enhance meta descriptions and titles

## Accessibility

- [ ] WCAG compliance audit
- [ ] Keyboard navigation improvements
- [ ] Cross-browser and device testing

- [ ] **No check for links pointing to draft pages** — 24 files have `draft: true` (`src/content/config.ts:10`), and drafts are dropped from the prod build (`src/pages/docs/[...slug].astro:10`), so a link to one works in dev and 404s in prod. `check-links.js:8`, `site-crawler.js:7`, `url-checker.js:7` crawl only a running dev server, where drafts are visible, and skip external links (`site-crawler.js:13`). Fix: one static audit script over `src/content` (links → draft/missing targets, external links via HEAD, pages with no incoming link) plus `just check`. (High, 5)

- [ ] **The repo has no installed dependencies, and nothing says so** — neither `zentala.eu/node_modules` nor a fresh worktree has them, and `yarn` is not on PATH (use `corepack yarn install`). Cost on 2026-09-19: four wasted build attempts, one killed by the OS (exit 137) before the content audit could run. Fix: say it in `CLAUDE.md` under Commands, and give the repo a `justfile` with `just setup` (`rules/just.md`). (Medium, 2)

## Top-level frame (2026-09-20)

Source: [`vision/aging-society-frame.md`](vision/aging-society-frame.md). Editorial
assessment of every draft: [`reports/2026-09-19-content-audit.md`](reports/2026-09-19-content-audit.md)
plus the draft review recorded in this session.

- [ ] **Homepage leads with the pillars, not with the reason for them** — a visitor meets three parallel boxes before any argument for why Europe must act at all. Put the demographic frame above them: aging society → the pension model breaks → we design the replacement now. Done for `/vision` (`src/components/vision/FrameIntro.astro`, commit a7145b7); still open for the homepage `src/pages/index.astro`. (High, 5)
- [x] **The three pillars are presented as peers; they are layers with an order** — done on `/vision` (`src/components/vision/LayerStack.astro`, commit a7145b7): numbered levels with a "makes possible" connector. Homepage `src/pages/index.astro` still shows three parallel cards — follow-up in the entry above. (High, 5)
- [ ] **"Who captures the gains" is not visible anywhere** — shown beside the stack on `/vision` (`src/components/vision/CrossCuttingNote.astro`, commit a7145b7). Still missing on the three detail pages `src/pages/vision/*-integration.astro`, `src/pages/vision/robotic-reindustrialization.astro`; the component is reusable, drop it in. (High, 2)
- [x] **Direct democracy, predictive healthcare and autonomous transport are listed as peers of the pillars** — regrouped under their layers on `/vision` (commit a7145b7). The old "Additional Focus Areas" (environment, local law, education, street naming) were dropped from the page; they have no page behind them, so nothing was lost. (Medium, 3)
- [ ] **No chapter exists for the core of the vision: demography and pensions** — `book/principles.md` declares it as the heart of the argument and no file covers it. This is now the site's opening argument and has nothing behind it. (High, 5)
- [ ] **No chapter on robotics/reindustrialisation** — it is the ceiling of the stack and the sidecar names it as a pillar, yet `src/pages/vision/robotic-reindustrialization.astro` has no content file behind it. Include the military-R&D-to-civilian-conversion path. (High, 5)
- [ ] **Every page should leave the reader with something to carry** — analysis that informs and leaves the reader powerless fails the site's purpose. Each substantial piece ends with a named first step or an invitation. Needs an editorial checklist, not a one-off pass. (Medium, 3)

## Publishing the drafts (2026-09-20)

12 of 23 "drafts" are one-sentence stubs, not content — they are the holes behind
29 dead internal links. Verdicts from the editorial review:

- [ ] **Publish today, minor fixes only (5)** — `book/principles.md`, `book/european-egovernment.mdx`, `book/eGov-challenges.mdx` (add 2-3 examples), `ideas/governance/blockchain-state.mdx`, `ideas/transportation/autonomous-transportation.mdx` (phase dates 2025-2030 are stale). (High, 3)
- [ ] **Merge the eGovernment cluster** — `book/eGov-vison.mdx` duplicates `book/european-egovernment.mdx` by ~70% (and its filename is misspelled); fold in `eGov-challenges` as a section and `blockchain-state` as a component. One chapter: vision → components → challenges. (Medium, 5)
- [ ] **Merge the language cluster — five files, one reform** — `book/language.md` (a social post, not a chapter), `book/language-integration-administrative-implementation.mdx` (bare `<Card>`s, Polish comments), `book/economic-growth-language-unity.mdx` (one sentence), into the published `book/european-english.mdx` and `ideas/culture/language-integration.mdx`. (Medium, 5)
- [ ] **Merge the payments cluster into one hub** — `unified-payment-zone` + `near-zero-transaction-costs` + `digital-receipts` are three stubs of one topic; `ideas/finance/european-cryptocurrency.mdx` must address the digital euro (its Libra references are obsolete). (Medium, 5)
- [ ] **Delete the Starlight placeholder** — `docs/reference/example.md` plus the link to it in `reference/index.mdx:13`. (Low, 1)
- [ ] **Two empty transcripts** — `transcripts/when-europe-falters-america-gains.mdx` (body is `# todo`, but its keyPoints are good) and `transcripts/europe-should-take-over-ukrainian-sky.mdx`. Both cover US withdrawal and European responsibility: one commentary piece instead of two empty transcripts. (Medium, 3)
- [ ] **`book/summary.mdx` holds Polish working notes richer than the English articles** — especially on transport. Translate and absorb, then retire the file. (Medium, 3)

### Argument gaps found while reviewing

- [ ] **Nothing says how any of this is done politically** — no treaty change, unanimity, or procedure anywhere; every draft ends with "phased approach" and no mechanism. (High, 5)
- [ ] **Nothing says who pays** — no budget, financing model, MFF or eurobonds. `european-egovernment.mdx` claims 65-75% savings with no method. (High, 3)
- [ ] **No serious counter-argument anywhere** — sovereignty, the translation industry, states disadvantaged by English, French opposition. The sidecars notice this; the public pages do not. A manifesto that never states the strongest objection reads as propaganda. (High, 3)
- [ ] **Claims carry no evidence outside `european-english.mdx`** — the single biggest editorial weakness of the whole site. (High, 8)
- [ ] **Energy is absent entirely; defence lives only in two empty transcripts** despite `principles.md` naming security as a pillar; education is one sentence. (Medium, 5)
