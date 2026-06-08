# Repository Config Spec

## Purpose

Define the local configuration layer that adapts the global engine to one repository.

For `zentala.eu`, this is where project-specific meaning lives.

## Suggested File

```text
.repo-analysis.json
```

## Responsibilities

The repo config defines:

- file groups
- public surface rules
- route importance
- content-specific heuristics
- ignored paths
- weights for prioritization
- optional custom analyzers

## Example Shape

```json
{
  "name": "zentala.eu",
  "framework": "astro",
  "entryGlobs": ["src/pages/**/*"],
  "componentGlobs": ["src/components/**/*"],
  "contentGlobs": ["src/content/**/*"],
  "dataGlobs": ["src/data/**/*"],
  "ignoreGlobs": ["dist/**", "node_modules/**", ".astro/**"],
  "publicSurface": ["src/pages/**", "src/layouts/**"],
  "lowPriorityZones": ["src/pages/resources/preview/**"],
  "weights": {
    "impact": 0.35,
    "risk": 0.25,
    "userSurface": 0.15,
    "maintainabilityGain": 0.15,
    "easeOfExecution": 0.10
  }
}
```

## `zentala.eu` Specific Rules

### High-Importance Areas

- `src/pages/**`
- `src/layouts/**`
- shared components used by public routes

### Content-Aware Areas

- `src/content/**`
- `src/data/**`

These should influence route depth, content reach, and coupling analysis.

### Lower-Priority Review Areas

- `src/pages/resources/preview/**`
- UI library or preview-only routes

These are still useful, but they should not outrank production surfaces by default.

## Repo-Specific Questions the Config Should Answer

- what counts as a public route?
- what counts as a central shared component?
- which directories are preview-only?
- which file groups should be compared together?
- what is a meaningful cleanup candidate here?

## Optional Extension Points

The repo may register local analyzers such as:

- homepage dependency pressure
- content duplication across manifesto pages
- route coverage vs content depth

## Output Impact

The local config changes prioritization, not raw facts.

Example:

- global engine detects high fan-out
- local config says the file is on a public route
- final priority increases because it affects real user-facing surfaces
