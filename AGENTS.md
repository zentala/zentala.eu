# AGENTS.md

## Content architecture

- The public homepage is the root of the information architecture.
- Every public content item should be reachable from the homepage in no more than two clicks:
  homepage → pillar or collection → document.
- Use canonical public book URLs under `/book/...`. Treat `/docs/...` links as legacy compatibility paths.
- New content belongs in `src/content/docs/`; do not place new work in `content-old/`.
- Keep public pages concise. Put research notes, hypotheses, raw tables, unresolved questions and future material in a sidecar next to the public document.

## Sidecar pattern

- A sidecar uses the public document's basename plus `.sidecar` before the extension, for example:
  `european-english.mdx` → `european-english.sidecar.mdx`.
- Sidecars are content, not reports. They belong beside the document they support.
- Sidecars must use `draft: true` until their material is deliberately promoted into the public document.
- Do not link sidecars from production navigation.

## Content workflow

1. Keep a readable public proposal with a clear TL;DR and next decision.
2. Preserve deeper context in the matching sidecar.
3. Promote only validated, stable material from the sidecar into the public page.
4. Verify the two-click path and canonical URLs whenever a document is added.

## Repository commands

Run everything through `just` (targets live in `justfile`); it knows this
repository's package manager.

- First command in a fresh checkout or worktree: `just setup`.
- `just dev`, `just build`, `just audit`, `just check`.
- Build: `npm run build` (`astro check && astro build`).
- Development: `npm run dev`.
- Preview: `npm run preview`.
- Convert MDX files: `npm run convert-mdx`.

## Testing tools

- Quick test: `npm test` (requires a running server and checks all links).
- URL checker: `npm run test:urls`.
- Site crawler: `npm run test:crawl`.
- Link checker: `npm run test:links`.

## Project structure and stack

- `src/content/docs/` — main documentation content.
- `src/components/` — Astro components.
- `src/layouts/` — page layouts.
- `src/pages/` — route pages.
- Astro with strict TypeScript, Tailwind CSS with DaisyUI, and SCSS.

## Engineering conventions

- Use TypeScript and follow Astro component patterns.
- Prefer functional, small, focused components and semantic HTML.
- Organize imports with built-ins first, then external packages, then local imports.
- Use descriptive names. All code comments are in English.

## Content guidelines

- The editorial standard lives in `src/AGENTS.md` (voice, provenance, the
  dictation-to-chapter procedure, one-argument-one-home, the checklist). Read it before
  touching anything under `src/content/`; `src/CLAUDE.md` only imports it. It cannot sit
  inside `src/content/`: Astro 4 fails the build on any `.md` there outside a collection.
- A chapter is not finished until it uses the visual grammar in `DESIGN.md` — tables,
  timelines, evidence boxes, objection blocks — not prose alone.
- The audit against the dictation dump (`src/AGENTS.md` §4 step 10) is mandatory
  before a chapter leaves `draft: true`. First person only for what he dictated.
- Frontmatter: `title`, `description` (70–160 characters, enforced by
  `src/content/config.ts`), `tags`, `author`. Public content is in English; `index.mdx`
  files are tables of contents; content goes through Astro content collections.

## Commentary (EU reform news and Paweł's comment)

Every news item Paweł comments on goes to `src/content/commentary/`, never to
`docs/`.

- File: `YYYY-MM-DD-<slug>.md` (date is the day of the comment).
- Frontmatter (schema in `src/content/config.ts`): `title`, `date`, `sourceUrl`,
  `sourceTitle`, `sourceOutlet`, `topic`, `tags`, and optional `draft`.
- Fetch the article's real headline for `sourceTitle`; never guess it.
- The body starts with one factual paragraph stating what the source reports,
  followed by `**My comment.**` and Paweł's view in English in his voice.
- `/commentary` is hidden in production unless `COMMENTARY_PUBLIC=true`; it is
  always visible under `npm run dev`.

## Content audit

`npm run audit` builds the site and runs `scripts/content-audit.mjs` against
`dist/`. It reports links to drafts, missing pages, dead external links,
orphans, and drafts to `.plan/reports/content-audit.md`. Run it after content or
navigation changes.

## Theme tokens

Light/dark color, typography, radius, and shadow tokens live in
`src/styles/_tokens.scss`; the muted palette override is in
`tailwind.config.js`. Do not hard-code colors or font sizes in components. Use
the theme variables, theme utilities in `global.scss`, or token-backed Tailwind
classes. The default theme follows `prefers-color-scheme` until the visitor
chooses one through `ThemeToggle.astro`; the choice persists in `localStorage`.

## Internal preview

`just deploy-internal` builds and publishes the internal preview at
`https://eu.internal`. It deploys to `server.lan` under
`/opt/zentala.eu/releases/<stamp>` and uses a relative `current` symlink. The
internal build sets `SITE_PREVIEW=true`, so drafts, commentary, and dev-only
links are visible. Gate dev-only features on `IS_PREVIEW`, never directly on
`import.meta.env.DEV`.

## Mentor role (Paweł's standing request, 2026-09-25)

This repository is Paweł's political writing, not only a website.

- Correct imprecise terms in chat with one concise definition and distinction.
- Offer useful prior art, thinkers, real-world attempts, and standard objections
  when they improve the argument.
- Mentor the work toward direct democracy in the EU, European integration, and
  the vision in `.plan/vision/`.
- Never launder Paweł's positions into safer ones. Correct a term, not a belief.

## Instruction-file convention

- `AGENTS.md` is the canonical repository instruction source.
- Inspect any existing `CLAUDE.md` for legacy instructions at the start of work.
- Write new or changed instructions only to `AGENTS.md`.
- Keep `CLAUDE.md` as a compatibility file containing only `@AGENTS.md`.
- Do not replace this convention with a filesystem symlink.
