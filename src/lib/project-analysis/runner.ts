import { applyAnalyzers } from './analyzers'
import { collectBaseSnapshot } from './collectors'
import { compareSnapshots } from './compare'
import { renderCompareMarkdown, renderSnapshotMarkdown } from './formatters/markdown'
import { listSnapshots, readLatestSnapshot, readSnapshot, writeSnapshot } from './storage'
import type { AnalysisSnapshot, SnapshotComparison } from './types'

export async function generateAnalysisSnapshot(root: string): Promise<AnalysisSnapshot> {
  const baseSnapshot = await collectBaseSnapshot(root)
  const snapshot = applyAnalyzers(baseSnapshot)
  await writeSnapshot(root, snapshot)
  return snapshot
}

export async function loadLatestAnalysis(root: string): Promise<AnalysisSnapshot | null> {
  return readLatestSnapshot(root)
}

export async function loadAnalysisHistory(root: string): Promise<AnalysisSnapshot[]> {
  const paths = await listSnapshots(root)
  return Promise.all(paths.map((snapshotPath) => readSnapshot(snapshotPath)))
}

export async function compareLatestAnalysis(root: string): Promise<SnapshotComparison | null> {
  const history = await loadAnalysisHistory(root)
  if (history.length < 2) return null
  return compareSnapshots(history[history.length - 2], history[history.length - 1])
}

export function renderAnalysisMarkdown(snapshot: AnalysisSnapshot): string {
  return renderSnapshotMarkdown(snapshot)
}

export function renderAnalysisCompareMarkdown(comparison: SnapshotComparison): string {
  return renderCompareMarkdown(comparison)
}
