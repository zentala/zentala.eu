---
id: E001-T13-to-T15
epic: E001
status: not-started
depends-on: T01, T02, T03, T04
---

# E001-T13–T15: Manifest Pages (Wave 2b)

These 3 tasks write manifest pages that depend on Wave 1 research completing first.
Start ONLY after T01–T04 are merged to dev.

**MANDATORY before writing anything:**
1. Read `WRITING.md`
2. Read `.arch/VISION.md`
3. Read the Wave 1 research files + existing idea files

---

## T13 — Digital Democracy Manifest Page

**Create:** `src/content/docs/book/digital-democracy.mdx`
**Research to read:**
- `src/content/docs/research/t5-1-direct-democracy-models.md` (T01 output)
- `src/content/docs/research/t5-2-liquid-democracy.md` (T02 output)
- `src/content/docs/ideas/governance/digital-democracy.mdx` (existing vision)
- `src/content/docs/ideas/governance/blockchain-state.mdx` (existing vision)

**Author's vision (from session 2026-04-27, dictated):**
- Monthly digital votes on everything: EU directives, national law, municipal decisions, school principals, hospital directors, police chiefs
- Citizens can propose referenda on-demand (like Swiss model but digital, EU-wide)
- Weighted votes: all stakeholders vote, different weights
- Liquid democracy for ministers: citizens elect and can recall ministers, not just governments
- Internal democracy within institutions: doctors vote on hospital matters, teachers + students on school rules, residents on neighborhood rules
- "Organized anarchy" — local communities can pass their own rules within constitutional limits
- Cooperatives and neighborhood associations can have their own governance
- The goal: maximum direct democracy using digital tools; fight corruption by distributing power

**Argument to make:**
Today a hospital director is appointed by a ministry official who is appointed by a party official. The chain from citizen to decision is 5+ steps long. Digital democracy shortens that chain. Not "everyone votes on everything" — weighted, tiered, delegated. But citizens have real power over the institutions they interact with daily.

**Target length:** 1200–1500 words (longer than other stubs — this is a central pillar)

---

## T14 — Robotic Agriculture & Food Sovereignty Manifest Page

**Create:** `src/content/docs/book/robotic-agriculture.mdx`
**Research to read:**
- `src/content/docs/research/t5-3-robotic-agriculture.md` (T03 output)
- `src/content/docs/ideas/environment/environment.mdx` (existing vision)

**Author's vision:**
- EU/CEE produces healthy food using robots that enable polyculture
- Intercropped fields: different plants, animals between them, robots managing the whole system
- Less pesticides, less monoculture, better soil health
- Demographic necessity: when workers are gone, robots must farm
- Geopolitical: food sovereignty is security; EU cannot depend on imports for staples

**Argument to make:**
Current industrial agriculture is software that runs on a single dependency — human labor + pesticides. It's fragile, unhealthy, and unsustainable. Robotic polyculture is the refactoring: resilient, distributed, nutrient-dense output. CEE has the land; Europe has the tech ambition. This is where they connect.

---

## T15 — Defense Robotics & EU Security Section

**Create:** `src/content/docs/book/eu-defense-robotics.mdx`
**Research to read:**
- `src/content/docs/research/t5-4-defense-robotics.md` (T04 output)
- `src/content/docs/research/t1-5b-baltics-ukraine.md` (existing)
- `src/content/docs/research/t3-3-geopolitical-competitors.md` (existing)

**Author's vision:**
- Long-term competition with Russia is the geopolitical reality
- US withdrawal from European security = EU must build own capability
- Ukraine war proves: cheap drones beat expensive tanks (asymmetric economics)
- Robotization is simultaneously for demographics AND defense
- ReArm Europe (€800B) should include autonomous systems not just conventional weapons

**Argument to make:**
The same industrial capacity to build care robots can build defense drones. This is not a coincidence — it's the argument for EU robotics strategy as unified policy, not siloed by ministry. Build autonomous logistics for the economy. It doubles as autonomous supply in war. Invest once, benefit everywhere.

---

## Commit per task

```
feat(manifest): add <page-name> manifest page
```
