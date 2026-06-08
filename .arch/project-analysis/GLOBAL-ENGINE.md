# Global Engine Spec

## Purpose

Define the reusable project analysis engine that can run across many repositories.

## Installation Model

The engine should be installed globally, outside individual repositories.

Suggested location:

```text
~/.agents/
  tools/
    repo-analysis/
  configs/
    repo-analysis/
      default.json
```

Each repository then provides a local config file, for example:

```text
<repo>/.repo-analysis.json
```

## Responsibilities

The global engine owns:

- tool execution
- snapshot generation
- shared schema validation
- baseline analyzers
- snapshot storage helpers
- compare logic
- CLI and agent-facing interfaces

It must not contain repository-specific heuristics.

## External Dependencies

The engine should reuse proven tools instead of rebuilding them:

- `lsp-mcp` or equivalent LSP bridge
- `typescript-language-server`
- `@astrojs/language-server`
- `dependency-cruiser`
- git CLI

## Core Modules

### Runner

Runs the analysis pipeline:

1. load repo config
2. run collectors
3. normalize results
4. write snapshot
5. run analyzers
6. produce findings and reports

### Collectors

Reusable collectors:

- LSP collector
- dependency graph collector
- filesystem collector
- tests collector
- git collector

### Snapshot Layer

Owns:

- schema versioning
- serialization
- storage layout
- loading previous snapshots

### Shared Analyzers

Reusable analyzers:

- hotspots
- orphan files
- dependency cycles
- test gaps
- snapshot diff

### Output Formatters

Reusable outputs:

- JSON
- Markdown
- Mermaid
- HTML summary

## Agent Interfaces

The engine should expose stable capabilities such as:

- `run_analysis`
- `get_latest_snapshot`
- `get_file_analysis`
- `get_hotspots`
- `compare_snapshots`

## Non-Goals

The global engine should not:

- embed Astro-specific scoring rules
- embed product-specific route importance
- assume one repository layout
- decide business priorities without repo context
