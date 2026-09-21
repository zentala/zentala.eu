# CLAUDE.md - AI Assistant Guide

## Commands
Run everything through `just` (targets live in `justfile`); it knows this repo's
package manager so you never have to.
- **First command in a fresh checkout or worktree: `just setup`.** The repo ships with
  no `node_modules`, and bare `yarn` is NOT on PATH — it only works through `corepack`.
  Skipping this costs several failed builds before the cause becomes obvious.
- `just dev` · `just build` · `just audit` · `just check` (typecheck + audit)
- Build: `npm run build` (astro check && astro build)
- Development: `npm run dev` (astro dev)
- Preview: `npm run preview` (astro preview)
- Convert MDX files: `npm run convert-mdx`

## Testing Tools
- Quick Test (recommended): `npm test` (requires running server, checks all links)
- URL Checker: `npm run test:urls` (checks all predefined URLs)
- Site Crawler: `npm run test:crawl` (crawls site and finds broken links)
- Link Checker: `npm run test:links` (same as npm test)

## Project Structure
- `/src/content/docs/` - Main documentation content (MDX files)
- `/src/components/` - Astro components
- `/src/layouts/` - Page layouts
- `/src/pages/` - Route pages

## Tech Stack
- Astro with strict TypeScript
- TailwindCSS with DaisyUI for styling
- SCSS for custom styling

## Conventions
- Use TypeScript for type safety
- Follow Astro's component patterns
- Prefer functional components
- Use semantic HTML elements
- Keep components small and focused
- Organize imports with built-ins first, then external packages, then local imports
- Use descriptive naming for files and components
- All code comments must be in English, even if communication is in Polish

## Content Guidelines
- Store documentation in MDX format with required frontmatter: title, description, tags, author
- All content should be written in English
- Index.mdx files serve as table of contents for subdirectories
- Use Astro's content collections API for structured content
## Commentary (EU reform news + Paweł's comment)
Every news item Paweł comments on goes to `src/content/commentary/` — never to `docs/`.
- File: `YYYY-MM-DD-<slug>.md` (date = day of the comment).
- Frontmatter (schema in `src/content/config.ts`): `title`, `date`, `sourceUrl`,
  `sourceTitle` (the article's real headline — fetch it, never guess), `sourceOutlet`,
  `topic`, `tags`, optional `draft`.
- Body: one paragraph stating what the source reports (facts only), then
  `**My comment.**` with Paweł's view, written in English in his voice.
- The section `/commentary` is hidden in production until the build runs with
  `COMMENTARY_PUBLIC=true` (`src/lib/commentary.ts`); it is always visible in `npm run dev`.

## Content audit
`npm run audit` builds the site and runs `scripts/content-audit.mjs` against `dist/`.
It reports links to draft pages (they 404 in production), links to missing pages,
dead external links, orphan pages and all drafts. The report goes to
`.plan/reports/content-audit.md`. Run it after any content or navigation change.

## Theme tokens
Light/dark colour, typography, radius and shadow live in
`src/styles/_tokens.scss` (`:root` = light, `.dark` = dark) and the muted
palette override in `tailwind.config.js`. **No hard-coded colour or font size
in a component** — use a `var(--color-*)`/`var(--text-*)` token, the
`theme-*` utility classes in `global.scss`, or a Tailwind class (the palette
behind `bg-blue-900` etc. is already token-driven via `tailwind.config.js`).
Default theme follows `prefers-color-scheme` until the visitor picks one via
`ThemeToggle.astro`; the choice persists in `localStorage` (`src/layouts/Layout.astro`).

## Internal preview — https://eu.internal
`just deploy-internal` builds the site and publishes it on `server.lan`
(`/opt/zentala.eu/releases/<stamp>`, `current` symlink, nginx container `zentala-eu`,
route in `/opt/zntl-local-servers/config/external-domains.yml`). Two traps it encodes:
the `current` symlink must be RELATIVE (the container mounts the parent, so an absolute
target 404s every page), and the internal build sets `SITE_PREVIEW=true` (`src/lib/preview.ts`), so
eu.internal behaves like `just dev`: drafts, commentary and dev-only links are visible.
Gate dev-only things on `IS_PREVIEW`, never on `import.meta.env.DEV`.
