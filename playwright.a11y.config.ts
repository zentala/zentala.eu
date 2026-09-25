import { defineConfig, devices } from '@playwright/test';

// Separate config for the a11y/SEO regression gate (E004-T15): serves the
// production build (dist/) via `astro preview`, not the dev server, so the
// test reflects what actually ships. Run with:
//   corepack yarn test:a11y   (builds dist/ first, then runs this config)
export default defineConfig({
  testDir: './tests',
  testMatch: 'a11y.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4433',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // installed Chrome, not a bundled build (repo rule)
    },
  ],
  webServer: {
    command: 'npx astro preview --port 4433',
    url: 'http://localhost:4433',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
