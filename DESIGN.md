# DESIGN.md

Current-state audit of design tokens and components, plus specs for the two
new primitives introduced in epic E002 (`<SourceRef />` and the Roman-numeral
backdrop pattern). This file is descriptive of what exists today — not a
prescriptive design system. For voice and copy rules see `WRITING.md`.

## Theming model

- Light theme is the default (declared on `:root`).
- Dark theme is opt-in via `.dark` class on `<html>`. Toggle lives in `Layout.astro`
  with `localStorage` persistence and `prefers-color-scheme` initial detection.
- All color usage MUST go through CSS variables. Never hard-code hex values
  in components — themes break when you do.

## Color tokens

Defined in `src/styles/global.scss:6-36`. All values switch on `.dark`.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--color-bg-primary` | `#ffffff` | `#111827` | Page background |
| `--color-bg-secondary` | `#f3f4f6` | `#1f2937` | Card / panel surfaces, AI Review blurb background |
| `--color-bg-gradient-from` | `#e0e7ff` | `#172554` | Fixed background gradient top |
| `--color-bg-gradient-to` | `#f3f4f6` | `#111827` | Fixed background gradient bottom |
| `--color-text-primary` | `#1f2937` | `#f3f4f6` | Body text, headings |
| `--color-text-secondary` | `#4b5563` | `#d1d5db` | Captions, supporting copy |
| `--color-text-muted` | *(MISSING — added in E002-T00)* | *(MISSING)* | Source citations, badges, low-emphasis labels |
| `--color-accent-primary` | `#3b82f6` | `#3b82f6` | Links, accent borders, CTAs |
| `--color-accent-secondary` | `#60a5fa` | `#60a5fa` | Hover states, secondary accent |
| `--color-border` | `#e5e7eb` | `#374151` | Dividers, card borders |
| `--color-scrollbar-track` | `#f1f5f9` | `#1a202c` | Custom scrollbar |
| `--color-scrollbar-thumb` | `#cbd5e1` | `#2d3748` | Custom scrollbar |
| `--color-scrollbar-thumb-hover` | `#94a3b8` | `#4a5568` | Custom scrollbar |

### New token added in this epic

```scss
/* in :root */
--color-text-muted: #6b7280; /* gray-500, WCAG AA on white (4.83:1) */

/* in .dark */
--color-text-muted: #9ca3af; /* gray-400, WCAG AA on bg-primary (4.61:1) */
```

Rationale: `<SourceRef />` badges and inline source citations need a token
weaker than `text-secondary` but still passing WCAG AA contrast. Using
`opacity: 0.5` on `text-secondary` would break contrast and is forbidden.

## Typography

Defined in `Layout.astro:63-83`.

| Role | Family | Source |
|---|---|---|
| Body | `'Inter', sans-serif` | Google Fonts (preloaded) |
| Headings (h1–h6) | `'Playfair Display', serif` | Google Fonts (preloaded) |
| Code | Menlo / Monaco / monospace stack | System |

Base body size is `20px` (`src/styles/global.scss:42`). This is intentionally
larger than typical — the site is long-form manifesto reading, not a SaaS app.
Do not shrink it.

### Size scale

Defined in `src/styles/global.scss:52-70` (overrides Tailwind defaults).

| Class | Size |
|---|---|
| `text-lg` | 1.25rem (25px) |
| `text-xl` | 1.5rem (30px) |
| `text-2xl` | 1.75rem (35px) |
| `text-3xl` | 2.25rem (45px) |
| `text-4xl` | 2.75rem (55px) |

Anything bigger (Roman numeral backdrop, hero numbers) is set inline per use site.

## Spacing

No custom spacing tokens. Tailwind default scale via `@astrojs/tailwind` is the
authority. Use Tailwind utilities (`p-4`, `gap-6`, etc.) — do not introduce
parallel scales.

## Container

`.container` class in `global.scss:47-49` = `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
Use this for any homepage section that needs the standard inner width.

## Component vocabulary (current)

Located in `src/components/`. Grouped by purpose.

### Layout primitives
- `Layout.astro` (`src/layouts/`) — root page shell with theme switch, gradient bg, header/footer slots
- `ResourcesLayout.astro` — private-section variant with `noindex`
- `Header.astro` / `Footer.astro` — site chrome
- `GradientSection.astro` — gradient-bg wrapper for callout strips
- `ContentBox.astro` — bordered content surface

### Content presenters
- `Hero.astro` — title + body + image + actions (used on home + many sub-pages)
- `Card.astro` + `CardGrid.astro` — grid of feature cards (legacy benefit cards used this)
- `DisplayTitle.astro` — large standalone heading
- `FAQ.astro` — `<details>/<summary>` accordion; reused by E002-T10
- `Author.astro` — author bio block
- `Newsletter.astro` — Appwrite-backed signup
- `WhyDigitalReform.astro` — homepage-specific narrative block
- `Testimonials.astro` (currently unused on home — only in `/ui` library)
- `ReasonBlock.astro`, `StakeholderBenefits.astro` — supporting copy blocks

### Interaction primitives
- `Button.astro` — primary/secondary CTAs
- `IconLink.astro` — labeled icon link (used in Quick links bar)
- `ThemeToggle.astro` — light/dark switch
- `SearchBar.astro`, `AlgoliaSearch.astro` — search (Algolia integration scoped out per backlog)

### Data viz / interactive
- `EUStatisticsChart.astro`, `EuropeMap.astro`, `InteractiveSection.astro`
  (currently NOT used on home; only in dev `/ui` library)
- `Timeline.astro`, `TimelineBlock.astro`, `TimelineContainer.astro`
- `ResearchTopicCard.astro` — used in `/resources` research map

### Convention notes
- Component files are PascalCase, sit flat in `src/components/`. No nested folders today.
- E002 introduces `src/components/home/` as the first nested folder — establishes
  the per-page-section pattern that future pages should follow when they grow.

## NEW primitive: `<SourceRef />`

Source citation widget. Inline badge with on-demand popover (desktop) or bottom
sheet (mobile). Sources are existing research files in the `docs` collection.

### Props

```ts
interface Props {
  /** Slug under src/content/docs/, e.g. "research/t1-1-demographic-crisis" */
  slug: string;
  /** Optional override for badge label. Defaults to source's frontmatter title. */
  cite?: string;
}
```

### Behavior

| Context | Trigger | Outcome |
|---|---|---|
| Desktop (≥640px) | Click on badge | Native HTML Popover opens anchored to badge |
| Desktop | Esc, click outside, click badge again | Popover closes, focus returns to badge |
| Mobile (<640px) | Tap on badge | Native `<dialog>` opens as bottom sheet |
| Mobile | Backdrop tap, Esc, swipe down | Sheet closes, focus returns to badge |
| Both | Tab keyboard | Badge is reachable, visible focus ring |
| Both | Space / Enter | Opens popover/sheet |

### Build-time resolution

```astro
---
import { getEntry } from 'astro:content';
const entry = await getEntry('docs', slug);
if (!entry) {
  throw new Error(`SourceRef: source slug "${slug}" not found in docs collection`);
}
const label = cite ?? entry.data.title;
const href = `/${slug}`; // routes to /research/<slug> for research files
---
```

Bad slugs fail `npm run build` immediately. No runtime fallbacks.

### Tokens

- Badge text color: `--color-text-muted`
- Badge hover/focus border: `--color-accent-primary`
- Popover/sheet bg: `--color-bg-secondary`
- Popover/sheet border: `--color-border`
- Popover/sheet text: `--color-text-primary`
- "Read source" link: `--color-accent-primary`

### Accessibility

- Native HTML Popover API (`popover` attribute + `popovertarget`) supplies
  `aria-expanded`, focus management, light dismiss, and Esc handling.
- Native `<dialog>` element supplies focus trap, backdrop, and Esc handling.
- We do NOT write custom focus-trap JavaScript.
- Badge is a `<button>` element, not an `<a>` — it toggles a popover, not navigates.
- The "Read source" link inside the popover IS an `<a>` and navigates to the source page.

### Astro pattern

Single Astro component with inline `<script>` to switch the rendering mode based
on `matchMedia('(min-width: 640px)')` at hydration time. No client island, no
framework dependency. Component is server-rendered; the script only attaches a
small handler for the media-query switch.

### File

`src/components/SourceRef.astro` (added in E002-T11).

### Tests

`tests/source-ref.spec.ts` (Playwright). Covers all rows in the Behavior table
at desktop (1280px) and mobile (375px) viewports.

## NEW primitive: Roman-numeral backdrop pattern

Visual treatment for the 3 pillars on the homepage. Each pillar card carries
an oversized Roman numeral (I, II, III) behind its content as a typographic
anchor — establishes the "chapters of a book" feel and removes the AI-slop
3-column-with-circled-icons aesthetic.

### Markup shape

```astro
<article class="pillar">
  <span class="pillar-numeral" aria-hidden="true">I</span>
  <div class="pillar-body">
    <h3>I. Language Integration</h3>
    <p>...</p>
  </div>
</article>
```

### Tokens / sizing

- Font family: `'Playfair Display', serif` (matches headings)
- Font size: clamp(8rem, 18vw, 14rem) — responsive, never crowds the body text
- Color: `--color-text-primary`
- Opacity: 0.05 in light mode, 0.08 in dark mode (decorative, must stay subtle)
- Position: `absolute`, top-right of the card, partially clipped
- `aria-hidden="true"` because the readable heading already says "I. Language Integration"
- `z-index: 0` (behind `.pillar-body`)

### Accessibility note

The numeral is purely decorative. The actual ordinal information is in the
heading text. Screen readers must NOT read the standalone "I" twice — that's
why `aria-hidden`.

### File

Pattern lives in `src/components/home/Pillars.astro` (added in E002-T04).
If the pattern is reused beyond Pillars, extract into its own component then.
Until then, inline.

## What this file is NOT

- Not a full design system. Not aspirational. No "we might want to add a date
  picker" content.
- Not a Figma source of truth. The repo is the source of truth.
- Not a brand guideline. See `WRITING.md` for voice.
- Not a maintained changelog. Update this file only when tokens or component
  vocabulary actually change.
