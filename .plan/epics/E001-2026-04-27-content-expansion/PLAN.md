# E001: Content Expansion — Research Batch 9 + Manifest Pages

**Created:** 2026-04-27
**Owner:** Paweł Żentała
**Status:** Planning

---

## What & Why

The research phase (Batches 1–8, 23 topics) is complete. Now we do two things in parallel:

1. **Research Batch 9** — five new topics the author articulated in session 2026-04-27 that are currently missing or underresearched: democracy models, agriculture, defense robotics, smart elderly logistics.

2. **Manifest Pages** — eight stub pages in `/docs/book/` are 30–50 words each (draft=true). We have the research to fill them now. Convert stubs into real manifest content.

The site vision: "Europe as a legacy OS needing refactorization." Author = Polish software architect. Voice = first-person engineer, no institutional jargon. Research = factual backbone. Manifest pages = opinionated argument built on that backbone.

---

## Scope

### Stream A: Research Batch 9 (5 topics, new research needed)

| ID | Topic | File |
|----|-------|------|
| T01 | Swiss Direct Democracy & EU Referendum Models | `t5-1-direct-democracy-models.md` |
| T02 | Liquid Democracy, Participatory Systems & Weighted Voting | `t5-2-liquid-democracy.md` |
| T03 | Robotic Agriculture, Polyculture & Food Sovereignty | `t5-3-robotic-agriculture.md` |
| T04 | Defense Robotics & EU Strategic Autonomy | `t5-4-defense-robotics.md` |
| T05 | Smart Homes & Elderly Care Logistics | `t5-5-smart-homes-elderly.md` |

All output to: `src/content/docs/research/`

### Stream B: Manifest Pages (8 stubs → real content)

| ID | Page | URL | Research available |
|----|------|-----|--------------------|
| T06 | Robotization | *(new page)* | T2.5, T2.6, T2.4a, T4.4a |
| T07 | Economic Growth Through Language Unity | `/docs/book/economic-growth-language-unity` | T2.1 |
| T08 | Predictive Healthcare System | `/docs/book/predictive-healthcare-system` | T2.4b |
| T09 | European Blockchain Archives | `/docs/book/european-blockchain-archives` | T2.23 |
| T10 | Unified Payment Zone + Near-Zero Transaction Costs | `/docs/book/unified-payment-zone` + `/docs/book/near-zero-transaction-costs` | T2.23 |
| T11 | Digital Receipts | `/docs/book/digital-receipts` | T2.23 + general |
| T12 | Media & Cultural Integration | `/docs/book/media-cultural-integration` | T1.4, T3.1 |
| T13 | Digital Democracy manifest | `/docs/book/egov-vison` (expand) or new | T01+T02 research |
| T14 | Robotic Agriculture & Food Sovereignty | *(new page)* | T03 research |
| T15 | Defense Robotics & EU Strategic Autonomy | *(new section)* | T04 research |

---

## Constraints

- All research files in ENGLISH, frontmatter: title, description, tags, author: zentala
- Research: 2000–3500 words, every claim sourced, unknown → "Unknown. No public data as of 2026."
- Manifest pages: 800–1500 words, first-person voice (see WRITING.md), not academic
- Max file 250 lines
- Read WRITING.md before writing ANY manifest page
- Read `.arch/VISION.md` for central argument hierarchy

---

## Acceptance Criteria

- [ ] All 5 research files in `src/content/docs/research/`, merged to `dev`
- [ ] All 8+ stub pages replaced with real content (draft removed or set false)
- [ ] New topics (T13, T14, T15) have dedicated manifest pages
- [ ] research-map data updated for new T5.x topics
- [ ] Build passes (`npm run build`)

---

## Key Files to Read Before Any Task

1. `WRITING.md` — voice, tone, argument hierarchy (mandatory for manifest tasks)
2. `.arch/VISION.md` — what zentala.eu is, central metaphor, target audience
3. `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md` — question format reference
4. `src/content/docs/research/` — all existing research (23 files available)
