# Content Review — zentala.eu Public Pages

Generated: 2026-04-25

Review covers all publicly accessible pages and content (non-draft, no production redirect guards).
Issues are grouped by severity.

---

## CRITICAL — Broken Links in Production

### `src/content/docs/ideas/all/index.mdx` — 12+ broken links

This "complete vision catalog" page links to many pages that either don't exist in the content
collection or are marked `draft: true` (which means `/docs/[...slug].astro` skips them in prod).
All of these would return 404 in production:

**Links to draft content (excluded from routing in prod):**
- `/docs/ideas/governance/blockchain-state` — draft: true
- `/docs/ideas/transportation/autonomous-transportation` — draft: true
- `/docs/ideas/finance/european-cryptocurrency` — draft: true

**Links to pages/content that don't exist at all:**
- `/docs/ideas/governance/customized-local-law`
- `/docs/ideas/governance/european-vehicles-database`
- `/docs/ideas/agriculture/autonomous-farming`
- `/docs/ideas/environment/clean-energy-development`
- `/docs/ideas/transportation/high-speed-rail`
- `/docs/ideas/finance/digital-receipts` (the MDX is draft, slug doesn't exist in public routing)
- `/docs/ideas/finance/near-zero-transaction-costs` (same)
- `/docs/ideas/healthcare/predictive-healthcare`
- `/docs/ideas/healthcare/medical-database`
- `/docs/ideas/regional/northern-africa`
- `/docs/ideas/regional/post-russian-eastern-europe`

**Fix options:**
1. Mark this whole page `draft: true` until the catalog is complete, OR
2. Remove links to non-existent pages and replace with "coming soon" text, OR
3. Create stub content for the missing pages (at minimum 1 paragraph each)

### `src/content/docs/articles/learning-from-china.mdx` — Empty internal links

Line 39 contains two links with empty hrefs:
```markdown
[language integration]() or [administrative integration]()
```
These render as clickable but go nowhere.

**Fix:** Point to actual pages — `/docs/ideas/culture/language-integration` and
`/docs/ideas/governance/european-egovernment` respectively.

---

## CRITICAL — Published Draft Notes / Internal Metadata

### `src/content/docs/articles/learning-from-china.mdx` — Visible internal note

Line 7 (immediately after frontmatter, rendered as text on the page):
```
warn: this still requires work, transcript + chatpgpt
```
This is a private editorial note that renders as body text on the public page.

**Fix:** Remove this line entirely or convert to a proper MDX comment (`{/* ... */}`).

---

## HIGH — Stub Content Publicly Accessible

### `src/content/transcripts/europe-should-take-over-ukrainian-sky.mdx`

Entire body of the file (after frontmatter) is:
```
# todo
```
The page is publicly listed in the transcripts index.

**Fix:** Mark as `draft: true` in frontmatter until actual transcript content is written.

### `src/content/transcripts/when-europe-falters-america-gains.mdx`

Same problem — body is only `# todo`.

**Fix:** Mark as `draft: true` in frontmatter.

### `src/content/docs/reference/example.md`

This is a boilerplate Starlight template file, not actual project content:
> "Reference pages are ideal for outlining how things work in terse and orderly way."

Publicly accessible via `/docs/reference/example`. Not linked from navigation but discoverable
via tags and search indexing.

**Fix:** Delete the file or mark `draft: true`. Replace with real reference content if needed.

---

## HIGH — Typos and Grammar

### `src/content/docs/articles/learning-from-china.mdx`

Line 15 — three typos in one bullet point:
- `"reducing consts of operating businesses"` → **costs**
- `"simplidifed digitalized burocracy"` → **simplified digitalized bureaucracy**

### `src/content/docs/ideas/all/index.mdx`

Line 41-44 — Duplicate "Robotization" card: two cards have the same title ("Robotization") but
one incorrectly links to `/docs/ideas/transportation/autonomous-transportation` instead of the
robotic-reindustrialization page. The correct page is dev-only, but the duplicate card is still
wrong and confusing.

**Fix:** Remove the duplicate card or update it to link to the correct (future) page.

---

## HIGH — Polish Language in English-Only Site

### `src/content/docs/index.mdx` — Lines 246–247

Card content in Polish, never translated:
```
<Card title="European Digital-first eGovement" icon="add-document">
    Zbudowanie systemu cyftowego aby
</Card>
```
Problems:
1. Title has a typo: "eGovement" → **eGovernment**
2. Description is incomplete Polish: `Zbudowanie systemu cyftowego aby` = "Building a digital system to..." (sentence unfinished)
3. Wrong word: `cyftowego` → should be `cyfrowego` (even if Polish is kept temporarily)

**Fix:** Either complete the description in English or remove the card until the content is ready.

---

## MEDIUM — Structural Issues

### `src/pages/vision/index.astro` — Empty `<h2>` tag

Line 20:
```html
<h2 class="text-3xl font-bold mt-16 mb-8" style="color: var(--color-text-primary);"></h2>
```
Renders as blank vertical space on the page.

**Fix:** Add a section title or remove the tag.

---

## MEDIUM — Content Thinness (Below Publication Threshold)

These files are publicly accessible but contain very little substantive content:

| File | Issue |
|------|-------|
| `docs/reference/example.md` | Boilerplate template, 12 lines |
| `docs/why/scale.mdx` | Referenced in docs/why.mdx but very thin |
| `transcripts/europe-should-take-over-ukrainian-sky.mdx` | Just "# todo" |
| `transcripts/when-europe-falters-america-gains.mdx` | Just "# todo" |

---

## LOW — Minor Issues

### `src/content/transcripts/europe-make-or-break.mdx` — Date format inconsistency

Line 12: `publishDate: "2025-03-7"` — missing leading zero.

**Fix:** `"2025-03-07"` (ISO 8601 standard).

### `src/content/docs/articles/blockchain-state.mdx` — Title references devOnly content

This article discusses blockchain as a form of state governance — consistent with devOnly
`blockchain-state.mdx` idea page. The article is public but its companion idea page is hidden.
Consider adding a note that the detailed proposal is in development.

---

## ORPHANED — Accessible but Not Linked from Navigation

These pages are publicly accessible (no redirect guard, no draft flag) but not linked from
anywhere in the main navigation or footer:

| URL | File | Issue |
|-----|------|-------|
| `/docs/reference/example` | `docs/reference/example.md` | Template placeholder |
| `/docs/articles/blockchain-state` | `docs/articles/blockchain-state.mdx` | Exists but not in main nav |
| `/docs/articles/learning-from-china` | `docs/articles/learning-from-china.mdx` | Has visible "warn:" note |

---

## PRODUCTION VISIBILITY — Current Status

### Hidden in production (working correctly)
- `/book` → redirects to `/`
- `/vision/language-integration` → redirects to `/vision`
- `/vision/digital-integration` → redirects to `/vision`
- `/vision/robotic-reindustrialization` → redirects to `/vision`
- Footer links: `/book`, `/ui`, 3 vision pillars, blockchain-state, autonomous-transportation, european-cryptocurrency, predictive-healthcare-system
- Content draft exclusion: 17 files with `draft: true` excluded from Algolia and dynamic routes

### Needs attention
- `ideas/all/index.mdx` is public but links to 12+ hidden/non-existent pages
- 2 transcript stubs are publicly listed (`europe-should-take-over-ukrainian-sky`, `when-europe-falters-america-gains`)
- `reference/example.md` is publicly indexed

---

## RECOMMENDED PRIORITY FIX ORDER

1. **Mark 2 stub transcripts as `draft: true`** — 2 file edits, 5 minutes
2. **Remove visible "warn:" line from learning-from-china.mdx** — 1 line delete, 2 minutes
3. **Fix 3 typos in learning-from-china.mdx** — 1 line edit, 2 minutes
4. **Fix empty links in learning-from-china.mdx** — 1 line edit, 2 minutes
5. **Mark reference/example.md as `draft: true`** — 1 file edit, 1 minute
6. **Fix Polish / incomplete card in docs/index.mdx** — 1 block edit, 5 minutes
7. **Fix or hide ideas/all/index.mdx** — major rework or mark draft, 15–30 minutes
8. **Remove empty `<h2>` from vision/index.astro** — 1 line delete, 1 minute
9. **Fix date format in europe-make-or-break.mdx** — 1 line edit, 1 minute
10. **Fix duplicate Robotization card in ideas/all/index.mdx** — 1 block edit, 2 minutes
