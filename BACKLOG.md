# BACKLOG

Ideas and improvements deferred for later. Not urgent, not in-progress.

---

## Content

- [ ] **`ideas/all/index.mdx` — expand catalog with real content pages**
  Many planned sections (Healthcare, Regional, Agriculture, Finance sub-pages) have no content yet.
  The catalog currently shows only a subset of the vision. Create MDX content files and re-add the
  links once the pages exist.

- [ ] **`ideas/all/index.mdx` — duplicate "Robotization" card**
  The original file had two "Robotization" cards both pointing to `autonomous-transportation`.
  One should point to the Robotic Reindustrialization pillar page once that content is written.

- [ ] **`learning-from-china.mdx` — finish the article (currently draft)**
  Article is based on a transcript + GPT draft. Needs editing pass and empty internal links filled:
  `[language integration]()` → `/docs/ideas/culture/language-integration`
  `[administrative integration]()` → `/docs/ideas/governance/european-egovernment`

- [ ] **Transcript stubs — write content or remove**
  Two transcripts are draft (only `# todo`):
  - `europe-should-take-over-ukrainian-sky.mdx`
  - `when-europe-falters-america-gains.mdx`

- [ ] **`docs/why/scale.mdx` — very thin content, expand or merge**

## Infrastructure

- [ ] **Fix Sharp native module for production builds**
  `npm install` fails building Sharp (native module). Use proper Node environment that can compile
  native modules, or switch to a non-native image processor for Astro.

## Navigation / UX

- [ ] **Reorganize content around 3 reform pillars** (from EU_WEBSITE_IMPROVEMENTS.md #3)
  All topics should map to: Language Integration, Digital Integration, Robotic Reindustrialization.

- [ ] **Mobile navigation improvements** (from EU_WEBSITE_IMPROVEMENTS.md #5)
  Expand mobile menu, add transition animations, better grouping.

- [ ] **Replace placeholder expert quotes with real ones** (from EU_WEBSITE_IMPROVEMENTS.md #7)
  "Expert Insights" section currently uses placeholder data.

- [ ] **Replace placeholder statistics with real Eurostat data** (from EU_WEBSITE_IMPROVEMENTS.md #6)
