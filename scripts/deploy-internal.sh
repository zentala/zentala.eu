#!/usr/bin/env bash
# Deploy the static build to server.lan, served at https://eu.internal.
#
# Usage: bash scripts/deploy-internal.sh   (or: just deploy-internal)
#
# The internal preview is built with SITE_PREVIEW=true on purpose: eu.internal is
# LAN-only and counts as dev mode (src/lib/preview.ts) — drafts and hidden sections show.
set -euo pipefail
trap 'echo "DEPLOY_FAILED: line $LINENO" >&2; exit 1' ERR

HOST=server.lan
ROOT=/opt/zentala.eu
REL=$(date +%Y%m%d-%H%M%S)

echo "building preview (SITE_PREVIEW=true: drafts, commentary and dev-only links visible)..."
# One build path for every surface: link-graph -> astro check -> astro build -> sitemap rename.
SITE_PREVIEW=true corepack yarn build >/dev/null

PAGES=$(find dist -name '*.html' | wc -l)
[ "$PAGES" -gt 50 ] || { echo "DEPLOY_FAILED: only $PAGES pages built" >&2; exit 1; }
echo "built $PAGES pages -> release $REL"

# a11y/SEO gate (E004-T15): run against the dist/ just built, before publishing it.
echo "running a11y/SEO gate against dist/..."
npx playwright test --config=playwright.a11y.config.ts

ssh "$HOST" "mkdir -p $ROOT/releases/$REL"
tar -czf - -C dist . | ssh "$HOST" "tar -xzf - -C $ROOT/releases/$REL"

# The symlink must be RELATIVE: the container mounts $ROOT at /srv/site, so an
# absolute target would point outside it and every page would 404.
ssh "$HOST" "cd $ROOT && ln -sfn releases/$REL current"

# nginx resolves 'current' per request, so switching the link is the whole deploy.
# Check CONTENT, not just the status code: a redirect stub answers 200 too, which is
# exactly how a commentary page that silently fell back to the public build passed
# this gate on 2026-09-25. Each path must serve a real page and its own marker.
check() {
  path=$1; marker=$2
  body=$(curl -s -k "https://eu.internal$path")
  case "$body" in
    *"Redirecting to"*) echo "DEPLOY_FAILED: $path serves a redirect stub" >&2; exit 1 ;;
  esac
  case "$body" in
    *"$marker"*) echo "  $path ok" ;;
    *) echo "DEPLOY_FAILED: $path does not contain '$marker'" >&2; exit 1 ;;
  esac
}

check / "Design the Europe"
check /vision/ "Three layers"
check /book/ "designing-our-retirement"
check /commentary/ "Short, dated comments"
check /manifesto/ "Know what you want"
check /sitemap.xml "<urlset"

echo "live: https://eu.internal  (release $REL)"
ssh "$HOST" "cd $ROOT/releases && ls -1t | tail -n +6 | xargs -r rm -rf"
