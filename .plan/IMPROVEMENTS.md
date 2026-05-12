# Global Improvements — cross-cutting open TODOs

### [ ] Fix Sharp image optimization at build time
- **Problem:** `npm run build` fails at post-content stage. `astro:assets` calls `loadSharp` which cannot find Sharp at runtime in `dist/chunks/`. Reproduces on clean `dev` branch — pre-existing, NOT caused by E002. Blocks production deploy of any change.
- **Proposed fix:** options — (a) reinstall Sharp with platform-specific binary (`pnpm rebuild sharp` or `npm rebuild sharp --os=win32 --cpu=x64`); (b) switch Astro to `image.service: passthroughImageService()` if optimization is not actually needed for this site; (c) audit `astro.config.mjs` for misconfiguration.
- **Triggered by:** E002 Wave 4 T12 prep (2026-05-12). Surfaced when attempting `npm run build` to verify SourceRef + research-route changes; the same failure reproduces on a clean checkout of `dev`.
- **Blocks:** E002-T12 (final build verification before epic close).
