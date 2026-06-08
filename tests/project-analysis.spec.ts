import { readFileSync } from 'node:fs'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { expect, test } from '@playwright/test'
import { applyAnalyzers } from '../src/lib/project-analysis/analyzers'
import { compareSnapshots } from '../src/lib/project-analysis/compare'
import { renderCompareMarkdown } from '../src/lib/project-analysis/formatters/markdown'
import { readLatestSnapshot, writeSnapshot } from '../src/lib/project-analysis/storage'
import type { AnalysisSnapshot } from '../src/lib/project-analysis/types'

const baseFixture = loadFixture('base.json')
const targetFixture = loadFixture('target.json')

test.describe('project analysis engine', () => {
  test('writes and loads latest snapshots', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'analysis-'))
    try {
      await writeSnapshot(root, baseFixture as AnalysisSnapshot)
      const latest = await readLatestSnapshot(root)
      expect(latest?.schemaVersion).toBe(1)
      expect(latest?.project.name).toBe('zentala.eu')
    } finally {
      await rm(root, { recursive: true, force: true })
    }
  })

  test('compares snapshots and renders markdown deltas', () => {
    const comparison = compareSnapshots(baseFixture as AnalysisSnapshot, targetFixture as AnalysisSnapshot)
    expect(comparison.deltas.fileCount).toBe(1)
    expect(comparison.addedFindings).toHaveLength(1)
    expect(renderCompareMarkdown(comparison)).toContain('fileCount: +1')
  })

  test('applies analyzer findings with recommendations', () => {
    const analyzed = applyAnalyzers(buildAnalyzerInput())
    expect(analyzed.findings.length).toBeGreaterThanOrEqual(4)
    expect(analyzed.findings.every((finding) => finding.recommendation.length > 0)).toBe(true)
  })
})

function buildAnalyzerInput(): Omit<AnalysisSnapshot, 'findings' | 'scores'> {
  return {
    ...baseFixture,
    files: [
      file('src/pages/index.astro', 'route', 0, 8, ['public']),
      file('src/pages/resources/preview/homepage.astro', 'route', 0, 1, ['public', 'preview']),
      file('src/components/Hero.astro', 'component', 0, 2, []),
      file('src/data/homepage.ts', 'data', 0, 0, []),
    ],
    routes: [{ path: 'src/pages/index.astro', url: '/', components: Array(6).fill('x'), dataSources: [], contentSources: [] }],
    dependencies: [],
    diagnostics: [],
    tests: [],
  } as Omit<AnalysisSnapshot, 'findings' | 'scores'>
}

function loadFixture(fileName: string): AnalysisSnapshot {
  const fixturePath = path.join(process.cwd(), 'tests/fixtures/project-analysis', fileName)
  return JSON.parse(readFileSync(fixturePath, 'utf8')) as AnalysisSnapshot
}

function file(pathName: string, kind: any, fanIn: number, fanOut: number, tags: string[]) {
  return {
    path: pathName,
    kind,
    size: { lines: 100, bytes: 1000 },
    imports: [],
    importedBy: [],
    tags,
    metrics: {
      fanIn,
      fanOut,
      lineCount: 100,
      importCount: fanOut,
      importedByCount: fanIn,
      diagnosticCount: 0,
      testCoverageHint: 0,
      gitChurn: 3,
      routeSurface: kind === 'route' ? 1 : 0,
      orphanScore: 0,
      centralityScore: fanIn + fanOut,
      riskScore: 0,
    },
  }
}
