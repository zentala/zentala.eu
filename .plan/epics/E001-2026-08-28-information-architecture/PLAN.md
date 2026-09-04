# E001: Information architecture and European integration content system

## Objective

Create a coherent public and internal structure for EU Reform Vision so that readers can navigate the vision quickly and contributors can expand each pillar without losing context.

## Scope

- public `/book/...` routes and legacy compatibility;
- `ue_internal` and `plan_ue_internal` internal surfaces;
- goals, purpose, plan and sidecar conventions;
- repeatable content architecture for language, digital and robotics pillars;
- first implementation tracks for European software and dual-use robotics.

## Out of scope

- adopting English as EU law;
- designing a complete EU defence doctrine;
- selecting a production technology stack for European public software;
- publishing the internal plan or research sidecars as public policy.

## Acceptance criteria

- Public book content has one canonical URL family.
- The homepage-to-European-English path is no more than two clicks.
- Internal planning has a durable purpose, goals and current plan.
- Each pillar has a documented charter/research/implementation/follow-up pattern.
- Digital integration is framed around reusable European software and voluntary adoption.
- Robotics work distinguishes agricultural automation, defence applications and dual-use hypotheses.

## Dependencies and risks

- Existing hand-written `/docs/book` pages and draft filtering may require a staged migration.
- `ue_internal` may refer to a hostname rather than a route; deployment configuration must confirm this before exposing it.
- Defence-related material needs a high-level policy and industrial framing, not operational instructions.
