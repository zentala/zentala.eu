---
id: E001-T10
epic: E001
status: pending
branch: feat/E001-T10-manifest-payment-zone
outputs:
  - src/content/docs/book/unified-payment-zone.mdx
  - src/content/docs/book/near-zero-transaction-costs.md
title: Manifest Pages — Unified Payment Zone + Near-Zero Transaction Costs
---

# E001-T10: Manifest Pages — Unified Payment Zone + Near-Zero Transaction Costs

## Mandatory setup
1. Read `WRITING.md` — voice, tone, argument hierarchy
2. Read `.arch/VISION.md` — central metaphor: Europe as legacy OS

## Research to read
- `src/content/docs/research/t2-23-web3-digital-finance.md`

## Task

Rewrite TWO stub pages (both currently ~38–41 words, draft=true):
1. `src/content/docs/book/unified-payment-zone.mdx`
2. `src/content/docs/book/near-zero-transaction-costs.md`

These are one connected argument — write them as complementary pieces, not redundant. Payment Zone = what the infrastructure is. Near-Zero Costs = what it achieves economically.

Remove `draft: true` from both when done.

## Argument to make

Cross-border payments in the EU still cost 1–3% and take 1–3 days. This is a hidden tax on the single market — a toll booth between member states. Instant SEPA + digital euro + unified payment rails = near-zero cost, real-time cross-border money movement. This is infrastructure, like roads or electricity grids — it should be public, universal, and free. Use SEPA adoption data, CBDC timeline, and cost comparison from the research.

End with: what does "sending money from Warsaw to Barcelona costs €0 and takes 0.3 seconds" mean for a Polish freelancer with EU clients?

## Format rules
- 800–1500 words per page
- First person
- Remove `draft: true` from both files

## Commit
```
feat(manifest): expand payment-zone and near-zero-costs pages
```
