# Only the right-hand side is project-specific. Target names are the convention.
set windows-shell := ["pwsh", "-NoProfile", "-Command"]

# list targets
default:
    @just --list

# install dependencies (this repo uses yarn via corepack — plain `yarn` is not on PATH)
setup:
    corepack yarn install --frozen-lockfile

dev:
    corepack yarn dev

build:
    corepack yarn build

# audit the built site: links to drafts, missing pages, dead external links, orphans
# NOTE: `yarn run audit`, not `yarn audit` — the latter is yarn's own package-security audit.
audit:
    corepack yarn run audit

typecheck:
    corepack yarn typecheck

# design-lint counts DESIGN.md rule violations; non-zero counts do not fail
# (mid-migration) — pass --strict to fail on any violation.
lint-design:
    corepack yarn lint:design

test:
    corepack yarn test

# a11y/SEO regression gate: builds dist/, serves it, runs axe (WCAG 2.2 AA)
# plus SEO/structural checks on key pages in both themes (E004-T15).
a11y:
    corepack yarn test:a11y

# gate before commit
check: typecheck audit a11y

clean:
    rm -rf dist

# deploy the static build to server.lan, live at https://eu.internal
deploy-internal:
    bash scripts/deploy-internal.sh
