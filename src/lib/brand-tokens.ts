/**
 * Brand tokens for zentala.eu — VENDORED MIRROR.
 *
 * Source of truth lives in the `hub` repository at:
 *   C:/code/cloudflare/hub/packages/shared-brand/index.ts
 *
 * Why vendored: zentala.eu and hub are separate git repositories, so we
 * cannot import across the filesystem. Until the shared package is
 * published privately to npm (planned improvement — see hub README), keep
 * the colors below in sync MANUALLY whenever the upstream changes.
 *
 * What lives here: only the subset of tokens actually used by
 * `src/components/Newsletter.astro`. Helpers (e.g. brandCtaButtonStyle for
 * emails) are NOT mirrored — they're hub-only because hub renders the
 * emails. zentala.eu only consumes the Astro-component colors.
 *
 * When updating: open BOTH this file and the hub source side-by-side and
 * change them together. The brand contract is asserted by hub's
 * branded-page.consistency.test.ts and shared-brand/index.test.ts.
 */

export const BRAND_TOKENS = {
  colors: {
    /** Brand navy — primary CTA, focus ring base. Mirrors hub `colors.primary`. */
    primary: '#1e3a5f',
    /** Hover variant used by the Astro Newsletter form (slightly lighter than
     *  hub's `primaryHover` because zentala.eu hover happens on a light card
     *  background, not on the navy itself). */
    primaryHoverAlt: '#284e80',
    /** Card border with 25% alpha-blended navy — newsletter card outline. */
    cardBorderTinted: 'rgba(30, 58, 95, 0.25)',
    /** Focus-ring box-shadow color (15-18% alpha). */
    focusRingTint: 'rgba(30, 58, 95, 0.18)',

    /** White on primary button label. */
    linkOnDark: '#ffffff',

    /** Success / error semantic colors. Mirror hub `colors.success` / `danger`. */
    success: '#15803d',
    danger: '#b91c1c',
  },
} as const;

export type BrandTokens = typeof BRAND_TOKENS;
