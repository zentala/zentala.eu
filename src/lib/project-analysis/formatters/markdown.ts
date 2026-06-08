import type { AnalysisSnapshot, SnapshotComparison } from '../types'

export function renderSnapshotMarkdown(snapshot: AnalysisSnapshot): string {
  const priorities = snapshot.findings.slice(0, 5).map((finding, index) => {
    return `${index + 1}. ${finding.title} (${finding.priority})`
  })
  return [
    '# Analysis Summary',
    '',
    `Created: ${snapshot.createdAt}`,
    `Project: ${snapshot.project.name} on ${snapshot.project.branch}`,
    '',
    '## Top Priorities',
    '',
    ...priorities,
    '',
    '## Metrics',
    '',
    `- files: ${snapshot.summary.fileCount}`,
    `- routes: ${snapshot.summary.routeCount}`,
    `- tests: ${snapshot.summary.testCount}`,
    `- findings: ${snapshot.findings.length}`,
  ].join('\n')
}

export function renderCompareMarkdown(comparison: SnapshotComparison): string {
  const deltas = Object.entries(comparison.deltas).map(([key, value]) => `- ${key}: ${formatDelta(value)}`)
  return [
    '# Analysis Compare',
    '',
    `Base: ${comparison.baseCreatedAt}`,
    `Target: ${comparison.targetCreatedAt}`,
    '',
    '## Deltas',
    '',
    ...deltas,
    '',
    `Added findings: ${comparison.addedFindings.length}`,
    `Resolved findings: ${comparison.resolvedFindings.length}`,
  ].join('\n')
}

function formatDelta(value: number): string {
  return value > 0 ? `+${value}` : String(value)
}
