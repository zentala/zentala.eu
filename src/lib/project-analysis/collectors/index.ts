import { repoAnalysisConfig } from '../config'
import type { AnalysisSnapshot } from '../types'
import { collectDependencies, applyDependencyMetrics } from './dependencies'
import { collectFiles } from './filesystem'
import { applyGitChurn, collectProjectInfo } from './git'
import { collectRoutes } from './routes'
import { applyTestHints, collectTests } from './tests'

export async function collectBaseSnapshot(root: string): Promise<Omit<AnalysisSnapshot, 'findings' | 'scores'>> {
  const project = await collectProjectInfo(root, repoAnalysisConfig.name)
  const collectedFiles = await collectFiles(root, repoAnalysisConfig)
  const dependencies = collectDependencies(collectedFiles)
  const dependencyFiles = applyDependencyMetrics(collectedFiles, dependencies)
  const churnFiles = await applyGitChurn(root, dependencyFiles)
  const tests = collectTests(churnFiles)
  const files = applyTestHints(churnFiles, tests)
  const routes = collectRoutes(files)
  return {
    schemaVersion: 1,
    createdAt: new Date().toISOString(),
    project,
    summary: {
      fileCount: files.length,
      sourceFileCount: files.filter((file) => file.kind !== 'asset').length,
      routeCount: routes.length,
      componentCount: files.filter((file) => file.kind === 'component').length,
      contentDocCount: files.filter((file) => file.kind === 'content').length,
      diagnosticCount: 0,
      testCount: tests.length,
      hotspotCount: 0,
      orphanCandidateCount: 0,
    },
    files,
    routes,
    symbols: [],
    dependencies,
    diagnostics: [],
    tests,
    metrics: {
      dependencyCount: dependencies.length,
      averageFanOut: average(files.map((file) => file.metrics.fanOut)),
    },
  }
}

function average(values: number[]): number {
  if (values.length === 0) return 0
  return Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2))
}
