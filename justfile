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

test:
    corepack yarn test

# gate before commit
check: typecheck audit

clean:
    rm -rf dist

# deploy the static build to server.lan, live at https://eu.internal
deploy-internal:
    bash scripts/deploy-internal.sh
