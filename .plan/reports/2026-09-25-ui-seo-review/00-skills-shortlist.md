# Agent skills shortlist — typography, UI, a11y, SEO, GEO (2026-09-25)

Selected skills used as review checklists. Nothing installed; rules condensed from the sources.

| # | Skill | Source | Category |
|---|---|---|---|
| 1 | Anthropic `frontend-design` | https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md | Typography, editorial UI, anti-"AI slop" |
| 2 | Vercel `web-design-guidelines` (web-interface-guidelines) | https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md | UI polish, typography details, a11y basics |
| 3 | rampstackco `accessibility-audit` | https://github.com/rampstackco/claude-skills/blob/main/skills/accessibility-audit/SKILL.md | WCAG baseline (POUR) |
| 3b | mrKanoh `claude-wcag-accessibility-skill` | https://github.com/mrKanoh/claude-wcag-accessibility-skill/blob/main/SKILL.md | WCAG 2.2 deep pass |
| 4 | robbyrob42 `geo-optimizer-skill` (MIT) | https://github.com/robbyrob42/geo-optimizer-skill | GEO/AEO scoring (robots AI bots, llms.txt, schema) |
| 4b | AgriciDaniel `claude-seo` / `seo-geo` | https://github.com/AgriciDaniel/claude-seo/blob/main/skills/seo-geo/SKILL.md | Technical SEO + GEO |
| 5 | edenspiekermann `audit-design-system` | https://github.com/edenspiekermann/Skills/blob/main/skills/audit-design-system/SKILL.md | Design-system / token consistency |
| 5b | Ashutos1997 `claude-design-auditor-skill` | https://github.com/Ashutos1997/claude-design-auditor-skill | Iconography, radius scale, states |

Rejected: `vercel-labs/web-interface-guidelines` raw repo (duplicate of #2), `899ms/geo-optimizer-skill` (fork),
`hamen/material-3-skill` (Material-specific), `aeo-box` / `marketingskills` (lower adoption, not opened).

## 1. Typography / editorial UI (frontend-design + web-interface-guidelines)
- Max 1–2 typeface families; if two, clearly distinct.
- Body measure under ~80ch (target 60–75ch); serif body gets more line-height.
- No colour-only emphasis; no ALL CAPS labels without letter-spacing rationale.
- Core palette 4–6 named, subject-specific values.
- Motion only for one orchestrated moment or user-triggered; respect `prefers-reduced-motion`.
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.
- Typographic characters: `…`, curly quotes, non-breaking spaces before units/short words.
- `font-variant-numeric: tabular-nums` for numeric tables/stats.
- Visible `:focus-visible` everywhere; never `outline: none` without replacement.
- Overflow handling (`break-words`, `min-w-0` on flex children).
- Dark mode: `color-scheme` on `<html>` and matching `<meta name="theme-color">`.

## 2. Accessibility (rampstackco + mrKanoh WCAG 2.2)
- Contrast ≥4.5:1 text, ≥3:1 large text and UI components, both themes.
- Keyboard operable, no traps, logical focus order, visible focus.
- Skip link, descriptive `<title>`, logical heading hierarchy, `<html lang>`.
- Consistent navigation; status messages announced (4.1.3); form errors identified (3.3.x).
- WCAG 2.2: targets ≥24×24 px (aim 44×44), focus not obscured by sticky header, accessible authentication.
- Reflow at 320px / 400% zoom; line-height ≥1.5.

## 3. Technical SEO (claude-seo + geo-optimizer)
- Canonical on every page; no accidental `noindex`.
- JSON-LD: `Article` (datePublished, dateModified, author) on essays/commentary; `Person` for author; `Organization`/`WebSite` site-wide; `BreadcrumbList`.
- Complete title/description/OG/Twitter per page.
- Sitemap current; robots.txt links it.
- Content server-rendered (Astro static).
- Image `alt`, explicit width/height (CLS).

## 4. GEO / AEO — visibility for AI agents (geo-optimizer + seo-geo)
- robots.txt explicitly allows search/citation bots (`OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, `Googlebot`); training bots (`GPTBot`, `ClaudeBot`, `Google-Extended`) are a separate, explicit decision.
- `llms.txt` at root (H1, blockquote summary, sectioned links); optional `llms-full.txt`.
- Markdown twin of each article for agents (e.g. `/book/x.md`).
- Definition/answer block in the first ~60 words of each essay.
- Self-contained passages ~130–170 words; question-phrased H2/H3 where natural; tables/lists for comparisons.
- Visible published / last-updated dates.

## 5. Components, design system, icons (edenspiekermann + design-auditor)
- No hard-coded hex/radius/spacing where tokens exist.
- Repeated ad-hoc markup collapses into one reusable component; variants documented.
- Radius scale fixed (e.g. 4/8/12/16/24/full); nested radius = inner + padding.
- One icon family and style; consistent stroke; sizes 16/20/24/32; same icon = same meaning; interactive icons ≥44×44 hit area; label or `aria-label`.
- Hover/active/focus/disabled states distinct and consistent across instances.
