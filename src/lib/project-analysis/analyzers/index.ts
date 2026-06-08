import type { AnalysisSnapshot, FileRecord } from '../types'
import { analyzeHotspots } from './hotspots'
import { analyzeOrphans } from './orphans'
import { analyzeRouteGraph } from './route-graph'
import { scoreFileRisk } from './scoring'
import { analyzeTestGaps } from './test-gaps'

export function applyAnalyzers(snapshot: Omit<AnalysisSnapshot, 'findings' | 'scores'>): AnalysisSnapshot {
  const files = snapshot.files.map(applyRiskScore)
  const findings = [
    ...analyzeHotspots(files),
    ...analyzeOrphans(files),
    ...analyzeRouteGraph(snapshot.routes),
    ...analyzeTestGaps(files),
  ].sort((a, b) => b.priority - a.priority)
  return {
    ...snapshot,
    files,
    findings,
    summary: {
      ...snapshot.summary,
      hotspotCount: findings.filter((finding) => finding.id.startsWith('hotspot-')).length,
      orphanCandidateCount: findings.filter((finding) => finding.id.startsWith('orphan-')).length,
    },
    scores: {
      projectRisk: projectRisk(files),
      topFindingPriority: findings[0]?.priority ?? 0,
    },
  }
}

function applyRiskScore(file: FileRecord): FileRecord {
  return {
    ...file,
    metrics: {
      ...file.metrics,
      riskScore: scoreFileRisk(file),
      orphanScore: file.metrics.fanIn === 0 ? 70 : 0,
    },
  }
}

function projectRisk(files: FileRecord[]): number {
  if (files.length === 0) return 0
  const total = files.reduce((sum, file) => sum + file.metrics.riskScore, 0)
  return Math.round(total / files.length)
}
