---
id: E001-T06-to-T12
epic: E001
status: not-started
---

# E001-T06–T12: Manifest Pages (Wave 2a)

These 7 tasks write real manifest content for stub pages. All use EXISTING research.
Dispatch as 7 separate parallel agents. Each handles ONE page.

**MANDATORY before writing anything:**
1. Read `WRITING.md` (voice, tone, argument hierarchy)
2. Read `.arch/VISION.md` (central metaphor: Europe as legacy OS)
3. Read the specified research file(s) from `src/content/docs/research/`

**Manifest page rules:**
- 800–1500 words (not a research paper — a manifest argument)
- First person: "I believe", "I propose", "This is why I think"
- Engineer metaphors: "legacy system", "refactoring", "technical debt"
- Remove `draft: true` from frontmatter when done
- End with: what does this mean for ordinary people? (concrete, personal)

---

## T06 — Robotization (new page)

**Create:** `src/content/docs/book/robotization.mdx`
**Research to read:**
- `src/content/docs/research/t2-5-autonomous-vehicles.md`
- `src/content/docs/research/t2-6-manufacturing-robotics.md`
- `src/content/docs/research/t2-4a-care-robotics.md`
- `src/content/docs/research/t4-4a-job-displacement.md`

**Argument to make:**
Robotization is not job-killing — it's the only way Europe survives its demographic crisis. Three use cases: (1) replace the workers we'll lose to aging, (2) reindustrialize Europe at wage parity with Asia, (3) care for the elderly without needing 10M caregivers we don't have.

**Frontmatter:**
```yaml
title: "Robotization: Europe's Demographic Answer"
description: "Why robotizing Europe is not a threat to jobs but the only realistic path through the demographic crisis."
tags: ["robotization", "automation", "demographics", "europe"]
author: zentala
```

---

## T07 — Economic Growth Through Language Unity

**File:** `src/content/docs/book/economic-growth-language-unity.mdx`
**Research to read:** `src/content/docs/research/t2-1-language-gdp.md`

**Argument to make:**
Language fragmentation is a hidden tax on the European economy. Common language = bigger effective market = more trade, more labor mobility, more startup success. The EU has a single currency but no single language — this is why its digital economy lags behind the US and China.

---

## T08 — Predictive Healthcare System

**File:** `src/content/docs/book/predictive-healthcare-system.mdx`
**Research to read:** `src/content/docs/research/t2-4b-healthcare-ai.md`

**Argument to make:**
AI diagnostics trained on EU-wide health data will catch diseases earlier and cheaper than any current system. The bottleneck is not technology — it's data fragmentation and regulatory slowness. Estonia-sized dataset for AI → bad. EU-wide dataset → world-class diagnostic system.

---

## T09 — European Blockchain Archives

**File:** `src/content/docs/book/european-blockchain-archives.mdx`
**Research to read:** `src/content/docs/research/t2-23-web3-digital-finance.md`

**Argument to make:**
Government documents that cannot be altered, lost, or disputed. Blockchain for public records — not for cryptocurrency. Property titles, birth certificates, court decisions, public contracts: immutable, verifiable, free to access. Solve corruption through transparency by design.

---

## T10 — Unified Payment Zone + Near-Zero Transaction Costs

**Files:** `src/content/docs/book/unified-payment-zone.mdx` AND `src/content/docs/book/near-zero-transaction-costs.md`
(Write both as one connected argument, update both files)
**Research to read:** `src/content/docs/research/t2-23-web3-digital-finance.md`

**Argument to make:**
Cross-border payments in the EU still cost 1–3% and take 1–3 days. This is a hidden tax on the single market. Instant SEPA + digital euro + unified payment rails = near-zero cost, instant cross-border money movement. This is infrastructure, like roads — it should be public and free.

---

## T11 — Digital Receipts

**File:** `src/content/docs/book/digital-receipts.mdx`
**Research to read:** `src/content/docs/research/t2-23-web3-digital-finance.md`
**Note:** Germany mandated electronic receipts (Belegpflicht) in 2020 — use as precedent.

**Argument to make:**
Every card payment auto-generates a digital receipt, stored in a citizen's digital wallet. No more lost receipts for warranty claims. Tax authority gets automatic audit trail. Retailers eliminate paper cost. Small idea, massive practical impact — low-hanging fruit of EU digitalization.

---

## T12 — Media & Cultural Integration

**File:** `src/content/docs/book/media-cultural-integration.mdx`
**Research to read:**
- `src/content/docs/research/t1-4-english-language-adoption.md`
- `src/content/docs/research/t3-1-digital-integration-case-studies.md`

**Argument to make:**
Language integration happens through media before policy. Netflix dubbed in English → people hear English daily. European co-productions with pan-EU distribution. EU public media platform (like BBC but European). Culture integration is not imposition — it's shared infrastructure for shared stories.

---

## Commit per task

```
feat(manifest): expand <page-name> page with research-backed argument
```
