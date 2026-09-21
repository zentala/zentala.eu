/**
 * Preview mode: `astro dev`, or a build made with SITE_PREVIEW=true (the LAN
 * preview at eu.internal). In preview, drafts and dev-only links are visible.
 * The public build never sets it, so none of this leaks to production.
 */
export const IS_PREVIEW: boolean =
  import.meta.env.DEV || process.env.SITE_PREVIEW === 'true';
