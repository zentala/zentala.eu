# E001 Orchestrator

**Epic:** Content Expansion — Research Batch 9 + Manifest Pages
**Branch:** `dev` → worktrees per task

---

## Wave Structure

```
Wave 1 (parallel, independent):    T01 T02 T03 T04 T05  ← new research
Wave 2a (parallel, start now):     T06 T07 T08 T09 T10 T11 T12  ← manifest from existing research
Wave 2b (after Wave 1 completes):  T13 T14 T15  ← manifest from Wave 1 research
```

Wave 2a and Wave 1 can run simultaneously — they don't share files.

---

## Task Status

### Wave 1 — Research Batch 9

- [x] **T01** — Swiss Direct Democracy & EU Referendum Models → `t5-1-direct-democracy-models.md` (5a6d8db)
- [x] **T02** — Liquid Democracy, Participatory Systems & Weighted Voting → `t5-2-liquid-democracy.md` (b211120)
- [x] **T03** — Robotic Agriculture, Polyculture & Food Sovereignty → `t5-3-robotic-agriculture.md` (abbb4d7)
- [x] **T04** — Defense Robotics & EU Strategic Autonomy → `t5-4-defense-robotics.md` (e049ecd)
- [x] **T05** — Smart Homes & Elderly Care Logistics → `t5-5-smart-homes-elderly.md` (2bd10c3)

### Wave 2a — Manifest Pages (existing research)

- [x] **T06** — Robotization manifest page (new) (0861707)
- [x] **T07** — Economic Growth Through Language Unity (5e6858c)
- [x] **T08** — Predictive Healthcare System (c9d1bbb)
- [x] **T09** — European Blockchain Archives (c1ca9ca)
- [x] **T10** — Unified Payment Zone + Near-Zero Transaction Costs (054e50a)
- [x] **T11** — Digital Receipts (03e55f3)
- [x] **T12** — Media & Cultural Integration (83029c7)

### Wave 2b — Manifest Pages (needs Wave 1)

- [x] **T13** — Digital Democracy manifest page (057733e)
- [x] **T14** — Robotic Agriculture manifest page (a4142b5 → fixed 13b39bf)
- [x] **T15** — Defense Robotics section (bbd496f → fixed 13b39bf)

### Post-Wave

- [ ] **T16** — Update research-map data (add T5.x topics to tier-4.ts or new tier-5.ts)
- [x] **T17** — npm run build — build passes (sharp SVG warning is pre-existing, unrelated)

---

## Worktree Convention

```bash
# Per task:
git branch feat/E001-T01-democracy-research dev
git worktree add .claude/worktrees/E001-T01 feat/E001-T01-democracy-research
```

Branch naming: `feat/E001-T<NN>-<short-slug>`

---

## Dispatch Instructions for Wave 1

Dispatch T01–T05 in ONE message (5 parallel Agent calls).
Each agent:
1. Reads its task file in `.plan/epics/E001-2026-04-27-content-expansion/tasks/`
2. Works in its own worktree
3. Creates one research file in `src/content/docs/research/`
4. Commits and confirms

After all 5 complete: orchestrator merges all 5 branches to dev.

## Dispatch Instructions for Wave 2a

Dispatch T06–T12 in ONE message (7 parallel Agent calls).
Each agent:
1. Reads WRITING.md + .arch/VISION.md FIRST (mandatory)
2. Reads the relevant research files from `src/content/docs/research/`
3. Rewrites the stub page (or creates new page) in `src/content/docs/book/`
4. Removes `draft: true` from frontmatter
5. Commits and confirms

---

## Merge Order (to minimize conflicts)

Wave 1: Any order (all write different files).
Wave 2a: Any order (all write different files in /book/).
Wave 2b: After Wave 1 fully merged.
T16 after Wave 2a merged (needs final file list).
T17 last (build check).

---

## Commit Format

```
research: add T5.x — <topic short name>
feat(manifest): expand <page-name> page
```
