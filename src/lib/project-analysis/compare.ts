import type { AnalysisSnapshot, SnapshotComparison } from './types'

export function compareSnapshots(base: AnalysisSnapshot, target: AnalysisSnapshot): SnapshotComparison {
  const baseFindingIds = new Set(base.findings.map((finding) => finding.id))
  const targetFindingIds = new Set(target.findings.map((finding) => finding.id))
  return {
    baseCreatedAt: base.createdAt,
    targetCreatedAt: target.createdAt,
    deltas: {
      fileCount: target.summary.fileCount - base.summary.fileCount,
      routeCount: target.summary.routeCount - base.summary.routeCount,
      diagnosticCount: target.summary.diagnosticCount - base.summary.diagnosticCount,
      testCount: target.summary.testCount - base.summary.testCount,
      hotspotCount: target.summary.hotspotCount - base.summary.hotspotCount,
      orphanCandidateCount: target.summary.orphanCandidateCount - base.summary.orphanCandidateCount,
      dependencyCount: metric(target, 'dependencyCount') - metric(base, 'dependencyCount'),
    },
    addedFindings: target.findings.filter((finding) => !baseFindingIds.has(finding.id)),
    resolvedFindings: base.findings.filter((finding) => !targetFindingIds.has(finding.id)),
  }
}

function metric(snapshot: AnalysisSnapshot, key: string): number {
  return snapshot.metrics[key] ?? 0
}
