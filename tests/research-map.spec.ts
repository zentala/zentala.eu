import { test, expect } from '@playwright/test'

test.describe('/resources/research/map', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resources/research/map')
  })

  // ── Page structure ────────────────────────────────────────────────────────
  test('renders page title and description', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Research Map')
    await expect(page.locator('p.text-lg').filter({ hasText: '21 research topics' })).toBeVisible()
  })

  test('renders all 21 topic cards', async ({ page }) => {
    const cards = page.locator('.topic-card')
    await expect(cards).toHaveCount(21)
  })

  test('renders 4 tier sections', async ({ page }) => {
    const sections = page.locator('.tier-section')
    await expect(sections).toHaveCount(4)
  })

  test('shows topic IDs T1.1 through T4.5', async ({ page }) => {
    await expect(page.getByText('T1.1')).toBeVisible()
    await expect(page.getByText('T4.5')).toBeVisible()
  })

  // ── Progress tracker ──────────────────────────────────────────────────────
  test('progress tracker shows 0/21 initially', async ({ page }) => {
    const count = page.locator('#progress-count')
    await expect(count).toContainText('0/21')
  })

  test('progress bar starts at 0%', async ({ page }) => {
    const bar = page.locator('#progress-bar')
    await expect(bar).toHaveAttribute('style', /width: 0%/)
  })

  // ── Tier badges ───────────────────────────────────────────────────────────
  test('tier 1 shows Critical badge', async ({ page }) => {
    const badge = page.locator('.tier-section[data-tier="1"] .tier-badge').first()
    await expect(badge).toContainText('Critical')
  })

  test('tier 4 shows Medium-Low badge', async ({ page }) => {
    const badge = page.locator('.tier-section[data-tier="4"] .tier-badge').first()
    await expect(badge).toContainText('Medium-Low')
  })

  // ── Cards ─────────────────────────────────────────────────────────────────
  test('cards are collapsed by default (detail hidden)', async ({ page }) => {
    const firstCardContent = page.locator('.card-content').first()
    await expect(firstCardContent).toHaveClass(/hidden/)
  })

  test('clicking card header expands it', async ({ page }) => {
    const firstToggle = page.locator('.card-toggle').first()
    const firstContent = page.locator('.card-content').first()
    await firstToggle.click()
    await expect(firstContent).not.toHaveClass(/hidden/)
  })

  test('clicking expanded card header collapses it', async ({ page }) => {
    const firstToggle = page.locator('.card-toggle').first()
    const firstContent = page.locator('.card-content').first()
    await firstToggle.click()
    await firstToggle.click()
    await expect(firstContent).toHaveClass(/hidden/)
  })

  test('expanded card shows research approach', async ({ page }) => {
    await page.locator('.card-toggle').first().click()
    const firstCard = page.locator('.topic-card').first()
    await expect(firstCard.locator('.card-content')).not.toHaveClass(/hidden/)
    await expect(firstCard.locator('text=Research Approach')).toBeVisible()
  })

  // ── Stars ─────────────────────────────────────────────────────────────────
  test('tier 1 cards show 5 filled stars', async ({ page }) => {
    const firstT1Card = page.locator('.tier-section[data-tier="1"] .topic-card').first()
    const filledStars = firstT1Card.locator('.star-filled')
    await expect(filledStars).toHaveCount(5)
  })

  test('tier 4 cards show 2 filled stars', async ({ page }) => {
    const firstT4Card = page.locator('.tier-section[data-tier="4"] .topic-card').first()
    const filledStars = firstT4Card.locator('.star-filled')
    await expect(filledStars).toHaveCount(2)
  })

  // ── Effort badges ─────────────────────────────────────────────────────────
  test('effort badges are visible on each card', async ({ page }) => {
    const badges = page.locator('.effort-badge')
    await expect(badges).toHaveCount(21)
  })

  // ── Tier collapse/expand ──────────────────────────────────────────────────
  test('clicking tier header collapses tier content', async ({ page }) => {
    const toggle = page.locator('.tier-toggle[data-tier="1"]')
    const content = page.locator('.tier-content[data-tier="1"]')
    await toggle.click()
    await expect(content).toHaveClass(/collapsed/)
  })

  test('clicking collapsed tier header expands it again', async ({ page }) => {
    const toggle = page.locator('.tier-toggle[data-tier="1"]')
    const content = page.locator('.tier-content[data-tier="1"]')
    await toggle.click()
    await toggle.click()
    await expect(content).not.toHaveClass(/collapsed/)
  })

  // ── Search ────────────────────────────────────────────────────────────────
  test('search filters cards by title', async ({ page }) => {
    await page.fill('#search-input', 'Draghi Report')
    const visibleCards = page.locator('.topic-card:not(.hidden)')
    await expect(visibleCards).toHaveCount(1)
    await expect(visibleCards.first().locator('h3')).toContainText('Draghi')
  })

  test('search with no matches shows no-results message', async ({ page }) => {
    await page.fill('#search-input', 'xyznotexist999')
    await expect(page.locator('#no-results')).not.toHaveClass(/hidden/)
  })

  test('clearing search input restores all cards', async ({ page }) => {
    await page.fill('#search-input', 'Draghi Report')
    await page.fill('#search-input', '')
    const visibleCards = page.locator('.topic-card:not(.hidden)')
    await expect(visibleCards).toHaveCount(21)
  })

  // ── Effort filter ─────────────────────────────────────────────────────────
  test('effort filter "Low" shows only Low effort cards', async ({ page }) => {
    await page.click('.filter-btn[data-filter="effort"][data-value="Low"]')
    const visible = page.locator('.topic-card:not(.hidden)')
    const count = await visible.count()
    expect(count).toBeGreaterThan(0)
    expect(count).toBeLessThan(21)
    for (let i = 0; i < count; i++) {
      const badge = await visible.nth(i).locator('.effort-badge').textContent()
      expect(badge?.trim()).toBe('Low')
    }
  })

  test('effort filter button shows active state when clicked', async ({ page }) => {
    const btn = page.locator('.filter-btn[data-filter="effort"][data-value="Low"]')
    await btn.click()
    await expect(btn).toHaveClass(/active/)
  })

  // ── Tier filter ───────────────────────────────────────────────────────────
  test('tier filter T1 shows only Tier 1 cards', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    const visible = page.locator('.topic-card:not(.hidden)')
    await expect(visible).toHaveCount(5)
  })

  // ── Clear filters ─────────────────────────────────────────────────────────
  test('clear filters button is hidden by default', async ({ page }) => {
    await expect(page.locator('#clear-filters')).toHaveClass(/hidden/)
  })

  test('clear filters button appears when filter is active', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    await expect(page.locator('#clear-filters')).not.toHaveClass(/hidden/)
  })

  test('clear filters button restores all 21 cards', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    await page.click('#clear-filters')
    const visible = page.locator('.topic-card:not(.hidden)')
    await expect(visible).toHaveCount(21)
  })

  // ── Active filter chips ───────────────────────────────────────────────────
  test('active filter chip appears when filter is selected', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    const chips = page.locator('#active-filters > span')
    await expect(chips).toHaveCount(1)
  })

  test('clicking filter chip removes it and deactivates filter', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    await page.locator('#active-filters > span').first().click()
    const visible = page.locator('.topic-card:not(.hidden)')
    await expect(visible).toHaveCount(21)
  })

  // ── Results count ─────────────────────────────────────────────────────────
  test('results count shows "Showing all 21 topics" by default', async ({ page }) => {
    await expect(page.locator('#results-count')).toContainText('Showing all 21 topics')
  })

  test('results count updates after filtering', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    await expect(page.locator('#results-count')).toContainText('Showing 5 of 21 topics')
  })

  // ── Combined filters ──────────────────────────────────────────────────────
  test('combining tier + effort filter uses AND logic across types', async ({ page }) => {
    await page.click('.filter-btn[data-filter="tier"][data-value="1"]')
    await page.click('.filter-btn[data-filter="effort"][data-value="Medium"]')
    const visible = page.locator('.topic-card:not(.hidden)')
    const count = await visible.count()
    // T1 has 4 Medium-effort topics (T1.1, T1.2, T1.3, T1.4)
    expect(count).toBeGreaterThan(0)
    expect(count).toBeLessThan(5)
  })

  // ── Concept tags ──────────────────────────────────────────────────────────
  test('concept tags are visible on topic cards', async ({ page }) => {
    const tags = page.locator('.topic-card .concept-tag').first()
    await expect(tags).toBeVisible()
  })

  // ── Accessibility ─────────────────────────────────────────────────────────
  test('search input is labelled with placeholder', async ({ page }) => {
    const input = page.locator('#search-input')
    await expect(input).toHaveAttribute('placeholder', 'Search topics...')
  })

  test('tier badges have descriptive text', async ({ page }) => {
    await expect(page.getByText('Tier 1: Foundational')).toBeVisible()
  })
})
