import { expect, test } from '@playwright/test'

test.describe('/resources/project-analysis', () => {
  test('renders internal dashboard summary', async ({ page }) => {
    await page.goto('/resources/project-analysis')
    await expect(page.getByRole('heading', { name: 'Project Analysis' })).toBeVisible()
    await expect(page.getByText('Top Findings')).toBeVisible()
    await expect(page.getByText('Route Graph')).toBeVisible()
  })

  test('serves latest analysis API', async ({ request }) => {
    const response = await request.get('/api/project-analysis/latest.json')
    expect(response.ok()).toBe(true)
    const body = await response.json()
    expect(body.schemaVersion).toBe(1)
    expect(body.summary.fileCount).toBeGreaterThan(0)
  })
})
