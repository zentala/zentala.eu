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

- [x] **Homepage leads with the pillars, not with the reason for them** — DONE 2026-09-21, commit d594a9a: frame section above the pillars on `src/pages/index.astro`. — a visitor meets three parallel boxes before any argument for why Europe must act at all. Put the demographic frame above them: aging society → the pension model breaks → we design the replacement now. Done for `/vision` (`src/components/vision/FrameIntro.astro`, commit a7145b7); still open for the homepage `src/pages/index.astro`. (High, 5)
- [x] **The three pillars are presented as peers; they are layers with an order** — done on `/vision` (`src/components/vision/LayerStack.astro`, commit a7145b7): numbered levels with a "makes possible" connector. Homepage `src/pages/index.astro` still shows three parallel cards — follow-up in the entry above. (High, 5)
- [ ] **"Who captures the gains" is not visible anywhere** — shown beside the stack on `/vision` (`src/components/vision/CrossCuttingNote.astro`, commit a7145b7). Still missing on the three detail pages `src/pages/vision/*-integration.astro`, `src/pages/vision/robotic-reindustrialization.astro`; the component is reusable, drop it in. (High, 2)
- [x] **Direct democracy, predictive healthcare and autonomous transport are listed as peers of the pillars** — regrouped under their layers on `/vision` (commit a7145b7). The old "Additional Focus Areas" (environment, local law, education, street naming) were dropped from the page; they have no page behind them, so nothing was lost. (Medium, 3)
- [x] **No chapter exists for the core of the vision: demography and pensions** — DONE: `src/content/docs/book/designing-our-retirement.md` (commit 5f2469b). — `book/principles.md` declares it as the heart of the argument and no file covers it. This is now the site's opening argument and has nothing behind it. (High, 5)
- [x] **No chapter on robotics/reindustrialisation** — DONE: `src/content/docs/book/robotic-reindustrialisation.md` (commit a849d11). — it is the ceiling of the stack and the sidecar names it as a pillar, yet `src/pages/vision/robotic-reindustrialization.astro` has no content file behind it. Include the military-R&D-to-civilian-conversion path. (High, 5)
- [ ] **Every page should leave the reader with something to carry** — analysis that informs and leaves the reader powerless fails the site's purpose. Each substantial piece ends with a named first step or an invitation. Needs an editorial checklist, not a one-off pass. (Medium, 3)

## Publishing the drafts (2026-09-20)

12 of 23 "drafts" are one-sentence stubs, not content — they are the holes behind
29 dead internal links. Verdicts from the editorial review:

- [x] **Publish today, minor fixes only (5)** — DONE 2026-09-20 (phase dates moved to 2027-2042). — `book/principles.md`, `book/european-egovernment.mdx`, `book/eGov-challenges.mdx` (add 2-3 examples), `ideas/governance/blockchain-state.mdx`, `ideas/transportation/autonomous-transportation.mdx` (phase dates 2025-2030 are stale). (High, 3)
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

- [ ] **husky pre-commit runs full `astro check` (~50 s) and `git stash` on every commit** — `lint-staged` backs up state via stash (`package.json` lint-staged config, `.husky/pre-commit`), which `~/.claude/rules/worktrees.md` forbids inside worktrees; found while committing in `.claude/worktrees/vision` 2026-09-20. Make the check incremental or disable the stash backup (`--no-stash`). (Low, 2)

- [ ] **A `.internal` domain answers `curl` through the proxy but the browser gets Caddy's "No route"** — `idomains ensure eu-preview.internal proxy 4333` reported `created`, `idomains list` shows the entry, `curl -x localhost:2080 http://eu-preview.internal/vision` returns 200, and real Chrome (automation profile) renders `No route for eu-preview.internal` from Caddy itself on two attempts. So the browser reaches Caddy by a path the proxy-curl does not use (likely the HTTPS listener, or a stale PAC in that profile). This is the "proxy-curl proves nothing about the browser" trap in reverse, and it blocks every visual verification of a locally previewed site. Belongs to `internal-domains`/Caddy config, not to this repo — filed here because this repo is where it bit. Blocked visual QA of the rebuilt `/vision` page on 2026-09-20. (High, 5)

- [ ] **Light theme is unreadable** — most sections hardcode dark backgrounds (`bg-gray-900`, inline `background:` in `src/pages/index.astro`) while text colour comes from `--color-text-primary`; light mode gives dark-on-dark. Worked around by defaulting to dark (`src/layouts/Layout.astro:35`, commit d594a9a). Real fix: replace hardcoded colours with theme variables, then restore the system-preference default. (Medium, 5)
- [x] **Homepage below the frame still predates it** — "Why Digital Reform", 8 Benefits cards (6 without links, `src/pages/index.astro` Benefits section) and FAQ do not follow from the aging-Europe argument. Rewrite or cut so every block serves the frame. (High, 5) — rebuilt in `.claude/worktrees/home-v2`, branch `feat/home-v2`: frame → three layers → audience-based benefits → FAQ → CTA (`src/pages/index.astro`); old page kept at `src/pages/home-classic.astro` (preview-only).
- [ ] **One console error on eu.internal home: `ERR_NAME_NOT_RESOLVED`** for an external resource — not identified (seen 2026-09-21 in headless Chrome). (Low, 1)
- [ ] **`TimelineBlock.astro` renders unreadable white-on-white text** — `text-gray-900 dark:text-white` on a `bg-white dark:bg-gray-800/50` card, but the site is permanently dark-themed (`src/layouts/Layout.astro:35`, see the light-theme entry above), so the `dark:` variants apply and title/paragraph text is near-white on a white card. Found 2026-09-21 rendering `/why` after wiring `WhyDigitalReform` (which uses `TimelineBlock`) into `src/content/docs/why.mdx` for the home-v2 rework — screenshot `.plan/reports/2026-09-22-home-v2/why-timeline-detail.png`. Same root cause as the light-theme entry; fix together. Out of scope for `home-v2` (component is shared, outside its file allowlist). (Medium, 2)

- [ ] **`precommit-typecheck.mjs` only checks staged files, so implicit-any debt hides until a file is next touched** — a one-line href edit in `src/pages/docs/articles.astro` (branch `feat/book-routes`) surfaced 4 pre-existing implicit-any errors unrelated to the routing change; same pattern hit `docs/ideas.astro`, `docs/articles/index.astro`, `docs/index.astro`. Fixed on the spot by annotating `getCollection('docs', ...)` callbacks with `CollectionEntry<'docs'>`, but the debt exists in every untouched `docs/*.astro` page that still uses an unannotated callback. Consider a periodic full-project `astro check` in CI, or a shared typed helper for the common `getCollection('docs', (entry) => ...)` pattern. (Low, 3)
- [ ] **`docs/all.astro:151-152` link to `/book/egov-vison` and `/book/egov-challenges` (lowercase) but the content files are `eGov-vison.mdx`/`eGov-challenges.mdx`** — Astro's default slug lowercases the id, so these may already resolve, but verify against `dist/book/` output; both chapters are drafts so they 404 in production regardless (content-audit "links to draft pages"). Found while repointing `/docs/book/*` links to `/book/*` in `feat/book-routes`, not fixed (outside that task's scope — draft-content policy, not a route-canonicalization bug). (Low, 1)
- [ ] **9 links to draft `/book/<slug>` chapters in `docs/all.astro` and (out of my scope) `vision/language-integration.astro`, `content/docs/index.mdx`** — these chapters (`language-integration-administrative-implementation`, `media-cultural-integration`, `economic-growth-language-unity`, `unified-payment-zone`, `near-zero-transaction-costs`, `digital-receipts`, `european-blockchain-archives`, `european-elearning-system`, `predictive-healthcare-system`, `language`, `eGov-vison`) are `draft: true` and 404 in production per site policy (`CLAUDE.md` → "Content audit"). Either publish them or stop linking to them from production-visible pages; `content-audit.md` tracks the exact list. Surfaced (not caused) by `feat/book-routes`, which correctly repointed the same links from `/docs/book/*` to `/book/*` — the draft-404 was previously masked because `/docs/book/*.astro` rendered the entry directly via `getEntry`, bypassing the draft gate entirely (itself a bug, now fixed by making `/book/[...slug].astro` and `/book/index.astro` agree on the `IS_PREVIEW` gate). (Medium, 3)
