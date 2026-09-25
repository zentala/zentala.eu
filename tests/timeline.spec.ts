import { test, expect } from '@playwright/test';

test.describe('Timeline Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('compact Timeline surface renders with correct styles', async ({ page }) => {
    const container = page.locator('#timeline .timeline-compact');
    await expect(container).toHaveClass(/max-w-6xl/);
    await expect(container).toHaveClass(/rounded-xl/);
    await expect(container).toHaveClass(/shadow-lg/);
  });

  test('compact Timeline items render with correct content', async ({ page }) => {
    const items = page.locator('#timeline .timeline-chip');
    await expect(items).toHaveCount(3); // We have 3 compact items in the demo

    const firstItem = items.first();
    await expect(firstItem.locator('.font-bold')).toContainText('2025-2030');
    await expect(firstItem.locator('.text-lg')).toContainText('Infrastructure');
  });

  test('compact Timeline items have correct styles', async ({ page }) => {
    const item = page.locator('#timeline .timeline-chip').first();
    await expect(item).toHaveClass(/rounded-xl/);
    await expect(item).toHaveClass(/shadow-md/);
    await expect(item).toHaveClass(/border-2/);
  });

  test('compact Timeline has correct title', async ({ page }) => {
    const title = page.locator('#timeline .timeline-compact h2.text-3xl.text-center');
    await expect(title).toContainText('Vision Timeline');
    await expect(title).toHaveClass(/font-bold/);
  });

  test('compact Timeline connector line is present', async ({ page }) => {
    const line = page.locator('#timeline .timeline-line');
    await expect(line).toBeVisible();
  });

  test('numbered Timeline variant renders blocks with icon and highlight', async ({ page }) => {
    const blocks = page.locator('#timeline .timeline-block');
    await expect(blocks).toHaveCount(2);
    await expect(blocks.first().locator('.number-badge')).toContainText('1');
    await expect(blocks.first().locator('.highlight-box')).toBeVisible();
  });
});
