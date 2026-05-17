import { test, expect } from '@playwright/test';

/**
 * E006-T04 — Newsletter integration tests.
 *
 * The component POSTs to hub.zentala.io. Tests intercept the network call
 * with `page.route()` so they run hermetically without depending on a live
 * hub deployment. The home page renders <Newsletter /> below the FAQ.
 */

const HUB_SUBSCRIBE = 'https://hub.zentala.io/api/public/newsletter/subscribe';
const HUB_CONFIRM = 'https://hub.zentala.io/api/public/newsletter/confirm**';

test.describe('Newsletter — signup form', () => {
  test('valid email + submit → success message visible', async ({ page }) => {
    await page.route(HUB_SUBSCRIBE, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Check your inbox to confirm.' }),
      });
    });

    await page.goto('/');
    const form = page.locator('#newsletter-form');
    await form.scrollIntoViewIfNeeded();
    await form.locator('input[name="email"]').fill('reader@example.com');
    await form.locator('button[type="submit"]').click();

    const status = page.locator('#newsletter-status');
    await expect(status).toHaveAttribute('data-state', 'success');
    await expect(status).toContainText(/inbox/i);
  });

  test('honeypot filled → no network call to hub', async ({ page }) => {
    let hits = 0;
    await page.route(HUB_SUBSCRIBE, async (route) => {
      hits += 1;
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Check your inbox to confirm.' }),
      });
    });

    await page.goto('/');
    const form = page.locator('#newsletter-form');
    await form.scrollIntoViewIfNeeded();
    await form.locator('input[name="email"]').fill('bot@example.com');
    // Honeypot is offscreen + aria-hidden; bypass actionability checks.
    await form.locator('input[name="hp_url"]').fill('http://spam.example', { force: true });
    await form.locator('button[type="submit"]').click();

    // UI shows fake success but the network never fires.
    const status = page.locator('#newsletter-status');
    await expect(status).toHaveAttribute('data-state', 'success');
    // Give any in-flight request time to land before asserting zero hits.
    await page.waitForTimeout(300);
    expect(hits).toBe(0);
  });

  test('invalid email → browser-native validation blocks submit', async ({ page }) => {
    let hits = 0;
    await page.route(HUB_SUBSCRIBE, async (route) => {
      hits += 1;
      await route.fulfill({ status: 200, body: '{}' });
    });

    await page.goto('/');
    const form = page.locator('#newsletter-form');
    await form.scrollIntoViewIfNeeded();
    const email = form.locator('input[name="email"]');
    await email.fill('not-an-email');
    await form.locator('button[type="submit"]').click();

    // Native validation: input is :invalid and no request was made.
    const isInvalid = await email.evaluate((el: HTMLInputElement) => !el.checkValidity());
    expect(isInvalid).toBe(true);
    await page.waitForTimeout(200);
    expect(hits).toBe(0);
  });
});

test.describe('Newsletter — confirm page', () => {
  test('?token=test redirects browser to hub confirm endpoint', async ({ page }) => {
    // Stub the hub HTML response so the redirect resolves without hitting the network.
    await page.route(HUB_CONFIRM, async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'text/html',
        body: '<!doctype html><html><head><title>Hub Confirm</title></head><body><h1>Invalid or expired token</h1></body></html>',
      });
    });

    await page.goto('/confirm?token=test');
    await page.waitForURL(/hub\.zentala\.io\/api\/public\/newsletter\/confirm\?token=test/);
    await expect(page).toHaveURL(/token=test/);
  });
});
