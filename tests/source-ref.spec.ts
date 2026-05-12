import { test, expect, devices } from '@playwright/test';

/**
 * E002-T11 — SourceRef component tests.
 *
 * Strategy: render a temporary route /resources/preview/source-ref-test
 * that mounts the component with a known slug, then drive it via Playwright.
 *
 * Coverage map (DESIGN.md "Behavior" table):
 *   Desktop click open/close, Esc close, click-outside close, focus return,
 *   keyboard Tab + Space + Enter, mobile tap, mobile backdrop dismiss.
 */

const TEST_URL = '/resources/preview/source-ref-test';

test.describe('SourceRef — desktop (≥640px)', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('badge renders with source label and is keyboard reachable', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await expect(badge).toBeVisible();
    await badge.focus();
    await expect(badge).toBeFocused();
  });

  test('click opens popover with title, description, and link', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.click();
    const popover = page.locator('.source-ref-popover').first();
    await expect(popover).toBeVisible();
    await expect(popover.locator('.source-ref-title')).not.toBeEmpty();
    await expect(popover.locator('.source-ref-description')).not.toBeEmpty();
    await expect(popover.locator('.source-ref-link')).toHaveAttribute('href', /research\//);
  });

  test('Esc closes popover and returns focus to badge', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.click();
    await expect(page.locator('.source-ref-popover').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.source-ref-popover').first()).toBeHidden();
    // Native Popover API returns focus to the trigger after Esc dismiss.
    await expect(badge).toBeFocused();
  });

  test('click outside dismisses popover (light dismiss)', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.click();
    await expect(page.locator('.source-ref-popover').first()).toBeVisible();
    // Click a neutral area outside the popover — light-dismiss requires a click on
    // a real element. Click on the page heading (outside popover bounds).
    await page.locator('h1').first().click({ force: true });
    await expect(page.locator('.source-ref-popover').first()).toBeHidden();
  });

  test('Space and Enter open the popover from keyboard focus', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('.source-ref-popover').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.source-ref-popover').first()).toBeHidden();
    await badge.focus();
    await page.keyboard.press('Space');
    await expect(page.locator('.source-ref-popover').first()).toBeVisible();
  });
});

test.describe('SourceRef — mobile (<640px)', () => {
  test.use({ viewport: { width: 393, height: 851 }, hasTouch: true, isMobile: true });

  test('tap opens bottom sheet', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.tap();
    const popover = page.locator('.source-ref-popover').first();
    await expect(popover).toBeVisible();
    // On mobile the popover is pinned to the viewport bottom via CSS.
    const box = await popover.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      const viewport = page.viewportSize();
      // Popover bottom edge should sit at the viewport bottom (within 5px).
      expect(viewport!.height - (box.y + box.height)).toBeLessThanOrEqual(5);
    }
  });

  test('tap outside dismisses bottom sheet', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.tap();
    await expect(page.locator('.source-ref-popover').first()).toBeVisible();
    // Tap a known-safe area at the very top of the viewport.
    await page.mouse.click(10, 10);
    await expect(page.locator('.source-ref-popover').first()).toBeHidden();
  });

  test('Esc closes bottom sheet (hardware keyboard fallback)', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.tap();
    await expect(page.locator('.source-ref-popover').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.source-ref-popover').first()).toBeHidden();
  });

  test('badge meets 44x44 touch-target minimum', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    const box = await badge.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
});

test.describe('SourceRef — link navigates to research source', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('clicking the popover link opens the source page', async ({ page }) => {
    await page.goto(TEST_URL);
    const badge = page.getByRole('button', { name: /Source:/ }).first();
    await badge.click();
    const link = page.locator('.source-ref-link').first();
    await expect(link).toBeVisible();
    const href = await link.getAttribute('href');
    expect(href).toMatch(/^\/research\//);
    await page.goto(href!);
    await expect(page.locator('article h1').first()).toBeVisible();
  });
});
