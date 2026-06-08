import { repoAnalysisConfig } from '../config'
import type { AnalysisSeverity, FileRecord } from '../types'

export function scoreFileRisk(file: FileRecord): number {
  const weights = repoAnalysisConfig.weights
  const impact = clamp(file.metrics.fanIn * 8 + file.metrics.routeSurface * 25)
  const risk = clamp(file.metrics.fanOut * 5 + file.metrics.gitChurn * 2)
  const surface = file.tags.includes('public') ? 90 : 35
  const maintainability = clamp(file.metrics.lineCount / 3 + file.metrics.fanOut * 4)
  const ease = file.metrics.lineCount < 120 ? 80 : 45
  return Math.round(
    impact * weights.impact +
      risk * weights.risk +
      surface * weights.userSurface +
      maintainability * weights.maintainabilityGain +
      ease * weights.easeOfExecution,
  )
}

export function severityFromPriority(priority: number): AnalysisSeverity {
  if (priority >= 80) return 'high'
  if (priority >= 55) return 'medium'
  return 'low'
}

export function clamp(value: number): number {
  return Math.max(0, Math.min(100, value))
}
