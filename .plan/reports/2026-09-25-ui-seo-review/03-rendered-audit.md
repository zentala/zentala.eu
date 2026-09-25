# Rendered audit — axe-core + computed styles (2026-09-25)

Origin: local static server of `dist/` (built 2026-09-25 06:56) on mATX, headless Chromium via Playwright.
Matrix: 12 pages × light/dark × 375/1280 px = 48 runs. Screenshots (selection): `shots/<slug>_<theme>_<width>.png`.
Lighthouse: FAILED — one attempt on `/` ended with CHROME_INTERSTITIAL_ERROR (page never loaded in headless Chrome on Windows); not retried, no scores.

## axe-core (WCAG 2.0/2.1/2.2 A+AA)

| Rule | Impact | Nodes | Where | Example |
|---|---|---|---|---|
| color-contrast | serious | 245 | 15 of 24 page×theme combos, mostly light theme | `.step-index.uppercase.tracking-widest` on home |
| button-name | critical | 26 | every page, both themes | `#mobile-menu-button` (no accessible name) |
| link-in-text-block | serious | 24 | every page, dark theme | footer link `a.hover:underline[href$="zentala"]` (colour-only link) |
| label | critical | 4 | /support | form input without label |
| aria-allowed-attr / aria-prohibited-attr | critical/serious | 8 | /transcripts entry | inside YouTube iframe (third-party; use facade) |

## Computed typography and contrast (article paragraph + h1)

| Page | Theme | p size / line-height | chars per line @1280 | h1 contrast |
|---|---|---|---|---|
| /book/political-path | light | 22px / 35.75px | 120 | **1.0 (white on #fafafa)** |
| /book/european-english | light | 22px / 35.75px | 118 | **1.0** + horizontal overflow at 375px (both themes) |
| /commentary entry | light | 22px / 35.75px | 114 | **1.0** |
| /book (index) | light | 22px / 28px | 116 | **1.1**, body 2.4 |
| /vision/digital-integration | light = dark | 19px / 28px | 130 | page is hard-coded dark in both themes |
| /support | both | 19px / 28px | 128 | ok |
| /transcripts entry | both | 22px / 35.75px | 86 | ok |
| /why, /docs/why | both | 19px / 33.25px | 87 | ok (only page with a measure cap) |
| /, /vision, /benefits | both | 17px / 25.5px | n/a | ok |

Target per skills: 60–75 characters per line; body 18–20px with line-height ≈1.5–1.65.
Current articles: 114–130 characters per line and 22px body.

## Keyboard
- No skip link on any page.
- Most links and buttons show only the browser's default `auto` outline. A designed focus ring exists only on ThemeToggle and the primary button.
- The mobile menu button has no name and no `aria-expanded`.

## Motion
- A `prefers-reduced-motion` rule exists in some loaded CSS, but `scroll-behavior: smooth` is applied unconditionally (Layout.astro:67).
