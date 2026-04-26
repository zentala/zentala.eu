interface ActiveFilter {
  type: 'effort' | 'tier' | 'concept'
  value: string
  label: string
}

let searchQuery = ''
const activeFilters: ActiveFilter[] = []
const collapsedTiers = new Set<string>()
const expandedCards = new Set<string>()

const $ = <T extends Element>(sel: string, ctx: ParentNode = document) =>
  ctx.querySelector<T>(sel)

const $$ = <T extends Element>(sel: string, ctx: ParentNode = document) =>
  Array.from(ctx.querySelectorAll<T>(sel))

document.addEventListener('DOMContentLoaded', () => {
  bindSearch()
  bindFilterButtons()
  bindClearFilters()
  bindTierToggles()
  bindCardToggles()
})

function bindSearch() {
  const input = $<HTMLInputElement>('#search-input')
  if (!input) return
  input.addEventListener('input', () => {
    searchQuery = input.value.toLowerCase()
    applyFilters()
  })
}

function bindFilterButtons() {
  $$<HTMLButtonElement>('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.filter as ActiveFilter['type']
      const value = btn.dataset.value ?? ''
      const label = btn.textContent?.trim() ?? value

      const idx = activeFilters.findIndex((f) => f.type === type && f.value === value)
      if (idx >= 0) {
        activeFilters.splice(idx, 1)
        btn.classList.remove('active')
      } else {
        activeFilters.push({ type, value, label })
        btn.classList.add('active')
      }
      renderActiveFilters()
      applyFilters()
    })
  })
}

function bindClearFilters() {
  const btn = $<HTMLButtonElement>('#clear-filters')
  if (!btn) return
  btn.addEventListener('click', () => {
    activeFilters.length = 0
    searchQuery = ''
    const input = $<HTMLInputElement>('#search-input')
    if (input) input.value = ''
    $$<HTMLButtonElement>('.filter-btn').forEach((b) => b.classList.remove('active'))
    renderActiveFilters()
    applyFilters()
  })
}

function renderActiveFilters() {
  const container = $<HTMLDivElement>('#active-filters')
  const clearBtn = $<HTMLButtonElement>('#clear-filters')
  if (!container || !clearBtn) return

  while (container.firstChild) container.removeChild(container.firstChild)

  const hasFilters = activeFilters.length > 0 || searchQuery
  clearBtn.classList.toggle('hidden', !hasFilters)

  activeFilters.forEach((f) => {
    const chip = document.createElement('span')
    chip.className = 'inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full cursor-pointer'
    chip.style.cssText = 'background-color: var(--color-accent-primary); color: #fff;'

    const label = document.createTextNode(f.label + ' ')
    const x = document.createElement('span')
    x.textContent = '×'
    chip.appendChild(label)
    chip.appendChild(x)

    chip.addEventListener('click', () => {
      const i = activeFilters.findIndex((af) => af.type === f.type && af.value === f.value)
      if (i >= 0) activeFilters.splice(i, 1)
      $$<HTMLButtonElement>(`.filter-btn[data-filter="${f.type}"][data-value="${f.value}"]`)
        .forEach((b) => b.classList.remove('active'))
      renderActiveFilters()
      applyFilters()
    })
    container.appendChild(chip)
  })
}

function applyFilters() {
  const cards = $$<HTMLElement>('.topic-card')
  let visibleCount = 0

  cards.forEach((card) => {
    const matches = cardMatches(card)
    card.classList.toggle('hidden', !matches)
    if (matches) visibleCount++
  })

  $$<HTMLElement>('.tier-section').forEach((section) => {
    const visible = $$<HTMLElement>('.topic-card:not(.hidden)', section).length
    section.classList.toggle('hidden', visible === 0)
  })

  const noResults = $<HTMLElement>('#no-results')
  if (noResults) noResults.classList.toggle('hidden', visibleCount > 0)

  const resultsEl = $<HTMLElement>('#results-count')
  if (resultsEl) {
    resultsEl.textContent =
      visibleCount === cards.length
        ? `Showing all ${cards.length} topics`
        : `Showing ${visibleCount} of ${cards.length} topics`
  }
}

function cardMatches(card: HTMLElement): boolean {
  if (searchQuery) {
    const title = card.dataset.title ?? ''
    const desc = card.dataset.description ?? ''
    if (!title.includes(searchQuery) && !desc.includes(searchQuery)) return false
  }

  const byType = new Map<string, string[]>()
  activeFilters.forEach((f) => {
    if (!byType.has(f.type)) byType.set(f.type, [])
    byType.get(f.type)!.push(f.value)
  })

  for (const [type, values] of byType) {
    let passes = false
    for (const value of values) {
      if (type === 'effort' && card.dataset.effort === value) { passes = true; break }
      if (type === 'tier'   && card.dataset.tier   === value) { passes = true; break }
      if (type === 'concept') {
        const concepts = (card.dataset.concepts ?? '').split(',')
        if (concepts.includes(value)) { passes = true; break }
      }
    }
    if (!passes) return false
  }

  return true
}

function bindTierToggles() {
  $$<HTMLButtonElement>('.tier-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tier = btn.dataset.tier ?? ''
      const content = $<HTMLElement>(`.tier-content[data-tier="${tier}"]`)
      if (!content) return

      if (collapsedTiers.has(tier)) {
        collapsedTiers.delete(tier)
        content.classList.remove('collapsed')
        btn.classList.remove('collapsed')
      } else {
        collapsedTiers.add(tier)
        content.classList.add('collapsed')
        btn.classList.add('collapsed')
      }
    })
  })
}

function bindCardToggles() {
  $$<HTMLButtonElement>('.card-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.card ?? ''
      const body = $<HTMLElement>(`.card-content[data-card="${id}"]`)
      if (!body) return

      if (expandedCards.has(id)) {
        expandedCards.delete(id)
        body.classList.add('hidden')
        btn.classList.remove('open')
      } else {
        expandedCards.add(id)
        body.classList.remove('hidden')
        btn.classList.add('open')
      }
    })
  })
}
