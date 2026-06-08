import type { AnalysisSnapshot } from './types'

export interface FileAnalysisOutput {
  path: string
  kind: string
  metrics: {
    fanOut: number
    diagnosticCount: number
    riskScore: number
  }
  dependsOn: string[]
  findings: string[]
  suggestedActions: string[]
}

export function analyzeFile(snapshot: AnalysisSnapshot, filePath: string): FileAnalysisOutput | null {
  const file = snapshot.files.find((item) => item.path === filePath)
  if (!file) return null
  const findings = snapshot.findings.filter((finding) => finding.paths.includes(filePath))
  return {
    path: file.path,
    kind: file.kind,
    metrics: {
      fanOut: file.metrics.fanOut,
      diagnosticCount: file.metrics.diagnosticCount,
      riskScore: file.metrics.riskScore,
    },
    dependsOn: file.imports,
    findings: findings.map((finding) => finding.title),
    suggestedActions: findings.map((finding) => finding.recommendation),
  }
}
