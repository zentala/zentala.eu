#!/usr/bin/env bash
# Deploy the static build to server.lan, served at https://eu.internal.
#
# Usage: bash scripts/deploy-internal.sh   (or: just deploy-internal)
#
# The internal preview is built with COMMENTARY_PUBLIC=true on purpose: eu.internal
# is LAN-only, so unpublished sections are visible there and hidden on the public site.
set -euo pipefail
trap 'echo "DEPLOY_FAILED: line $LINENO" >&2; exit 1' ERR

HOST=server.lan
ROOT=/opt/zentala.eu
REL=$(date +%Y%m%d-%H%M%S)

echo "building (COMMENTARY_PUBLIC=true)..."
COMMENTARY_PUBLIC=true node node_modules/astro/astro.js build >/dev/null

PAGES=$(find dist -name '*.html' | wc -l)
[ "$PAGES" -gt 50 ] || { echo "DEPLOY_FAILED: only $PAGES pages built" >&2; exit 1; }
echo "built $PAGES pages -> release $REL"

ssh "$HOST" "mkdir -p $ROOT/releases/$REL"
tar -czf - -C dist . | ssh "$HOST" "tar -xzf - -C $ROOT/releases/$REL"

# The symlink must be RELATIVE: the container mounts $ROOT at /srv/site, so an
# absolute target would point outside it and every page would 404.
ssh "$HOST" "cd $ROOT && ln -sfn releases/$REL current"

# nginx resolves 'current' per request, so switching the link is the whole deploy.
for path in / /vision/ /book/ /commentary/; do
  code=$(curl -s -k -o /dev/null -w '%{http_code}' "https://eu.internal$path")
  [ "$code" = "200" ] || { echo "DEPLOY_FAILED: $path -> $code" >&2; exit 1; }
  echo "  $path $code"
done

echo "live: https://eu.internal  (release $REL)"
ssh "$HOST" "cd $ROOT/releases && ls -1t | tail -n +6 | xargs -r rm -rf"
