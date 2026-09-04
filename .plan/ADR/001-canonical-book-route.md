# ADR 001: Use `/book` as the canonical public document route

- **Status**: accepted
- **Date**: 2026-08-28
- **Epic**: E001

## Context

The site currently exposes a mixture of `/book/...` and `/docs/book/...` paths. `docs` describes an implementation detail and makes the public information architecture look like a documentation system rather than a book and policy proposal.

## Decision

Use `/book/...` for public book documents. Retain `/docs/...` as a legacy compatibility path while links are migrated and old pages are consolidated.

## Alternatives

- Keep `/docs/book`: rejected because it leaks migration history into the public URL.
- Rename the section `/proposals`: deferred; `Book` already matches the site's existing conceptual model and can contain charters, research and implementation chapters.

## Consequences

New links and navigation use `/book/...`. A route-level compatibility strategy is required for existing `/docs/...` links. The route migration should be tested before removing legacy pages.
