---
id: E000-T01
epic: E000
status: todo
created: 2026-04-26
---
# E000-T01: Rename /private to /resources

## Goal
Rename the private section from `/private` to `/resources` — this section holds research
notes, AI-generated documents, and content strategy materials used as source material
for the site. The name "resources" better reflects its purpose.

## Scope

### Files to rename/move
- `src/pages/private/` → `src/pages/resources/` (entire directory with all .md files + index.astro)
- `src/layouts/PrivateLayout.astro` → `src/layouts/ResourcesLayout.astro`

### Files to update (references)
- `src/pages/resources/index.astro` — update href links `/private/...` → `/resources/...`, update layout import
- `src/layouts/ResourcesLayout.astro` — update back-link href `/private` → `/resources`, update title `[PRIVATE]` → `[RESOURCES]`, update CSS class `prose-private` → `prose-resources`
- Any individual page files in `src/pages/resources/` that import PrivateLayout

## Steps
1. Git mv `src/pages/private` → `src/pages/resources`
2. Git mv `src/layouts/PrivateLayout.astro` → `src/layouts/ResourcesLayout.astro`
3. Update all internal references (hrefs, imports, CSS classes)
4. Build to verify no broken imports
5. Commit

## Acceptance criteria
- `/resources` route works, `/private` is gone
- All subpages still render with correct layout
- `noindex, nofollow` still in place (not publicly indexed)
- Build passes without errors
