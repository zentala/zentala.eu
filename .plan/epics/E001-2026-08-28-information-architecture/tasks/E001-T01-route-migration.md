---
id: E001-T01
title: Migrate public book navigation to /book routes
status: pending
priority: high
effort: medium
type: improvement
dependencies: []
tags: [navigation, routes, content]
epic: E001
created: 2026-08-28
---
# E001-T01: Migrate public book navigation to `/book` routes

## Objective

Make `/book/...` the canonical public URL family and preserve old links during migration.

## Acceptance criteria

- [ ] New public article links use `/book/...`.
- [ ] Existing `/docs/...` links either resolve or redirect to canonical pages.
- [ ] No public navigation points to an unverified route.
- [ ] Link crawler covers canonical and compatibility paths.

## Notes

Do not remove legacy pages until the route inventory is complete.
