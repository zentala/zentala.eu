import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// E004-T15: automated a11y/SEO regression gate against the production build
// (dist/, served by playwright.a11y.config.ts's `astro preview` webServer).
// Locks in the fixes from the 2026-09-25 UI/a11y/SEO review (48-run manual
// audit: 12 pages x 2 themes x 2 widths) so they don't silently regress.

const KEY_PAGES = ['/', '/why', '/vision', '/manifesto', '/principles', '/book/political-path'];

async function setTheme(page: Page, theme: 'light' | 'dark') {
  // The inline theme script in src/layouts/Layout.astro reads localStorage
  // before paint, so seeding it via addInitScript reproduces both themes
  // without depending on the OS colour-scheme preference.
  await page.addInitScript((value) => {
    window.localStorage.setItem('theme', value);
  }, theme);
}

for (const theme of ['light', 'dark'] as const) {
  test.describe(`a11y + SEO gate (${theme} theme)`, () => {
    for (const path of KEY_PAGES) {
      test(`${path} has no serious/critical axe violations`, async ({ page }) => {
        await setTheme(page, theme);
        await page.goto(path);

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze();

        const seriousOrCritical = results.violations.filter(
          (v) => v.impact === 'serious' || v.impact === 'critical',
        );

        if (seriousOrCritical.length > 0) {
          const summary = seriousOrCritical
            .map((v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} node(s))`)
            .join('\n');
          expect(summary, `axe violations on ${path} (${theme})`).toBe('');
        }
      });
    }
  });
}

test.describe('SEO and structural checks', () => {
  for (const path of KEY_PAGES) {
    test(`${path} has unique description, canonical, single h1, skip link`, async ({ page }) => {
      await page.goto(path);

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveCount(1);
      const content = await description.getAttribute('content');
      expect(content && content.trim().length).toBeGreaterThan(0);

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      const href = await canonical.getAttribute('href');
      expect(href).toBeTruthy();

      await expect(page.locator('h1')).toHaveCount(1);

      const skipLink = page.locator('a.skip-link, a[href="#main"]');
      await expect(skipLink.first()).toHaveCount(1);
    });
  }

  test('descriptions are unique across key pages', async ({ page }) => {
    const descriptions = new Map<string, string>();
    for (const path of KEY_PAGES) {
      await page.goto(path);
      const content = await page.locator('meta[name="description"]').getAttribute('content');
      expect(content).toBeTruthy();
      const existing = descriptions.get(content!);
      expect(existing, `description on ${path} duplicates ${existing}`).toBeUndefined();
      descriptions.set(content!, path);
    }
  });

  for (const path of KEY_PAGES) {
    test(`${path} has no horizontal overflow at 375px`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 800 });
      await page.goto(path);

      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth - doc.clientWidth;
      });

      expect(overflow, `horizontal overflow on ${path} at 375px`).toBeLessThanOrEqual(1);
    });
  }
});
