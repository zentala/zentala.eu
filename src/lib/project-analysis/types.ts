export type AnalysisSeverity = 'low' | 'medium' | 'high'

export type AnalysisFindingKind =
  | 'refactor'
  | 'investigate'
  | 'test'
  | 'architecture'

export interface RepoAnalysisConfig {
  name: string
  framework: 'astro'
  entryGlobs: string[]
  componentGlobs: string[]
  contentGlobs: string[]
  dataGlobs: string[]
  ignoreGlobs: string[]
  publicSurface: string[]
  lowPriorityZones: string[]
  weights: AnalysisWeights
}

export interface AnalysisWeights {
  impact: number
  risk: number
  userSurface: number
  maintainabilityGain: number
  easeOfExecution: number
}

export interface ProjectInfo {
  name: string
  root: string
  branch: string
  commit: string
}

export interface AnalysisSummary {
  fileCount: number
  sourceFileCount: number
  routeCount: number
  componentCount: number
  contentDocCount: number
  diagnosticCount: number
  testCount: number
  hotspotCount: number
  orphanCandidateCount: number
}

export interface FileRecord {
  path: string
  kind: FileKind
  size: { lines: number; bytes: number }
  imports: string[]
  importedBy: string[]
  tags: string[]
  metrics: FileMetrics
}

export type FileKind = 'route' | 'component' | 'content' | 'data' | 'test' | 'config' | 'asset' | 'other'

export interface FileMetrics {
  fanIn: number
  fanOut: number
  lineCount: number
  importCount: number
  importedByCount: number
  diagnosticCount: number
  testCoverageHint: number
  gitChurn: number
  routeSurface: number
  orphanScore: number
  centralityScore: number
  riskScore: number
}

export interface RouteRecord {
  path: string
  url: string
  layout?: string
  components: string[]
  dataSources: string[]
  contentSources: string[]
}

export interface DependencyEdge {
  from: string
  to: string
  kind: 'import' | 'content' | 'unknown'
}

export interface DiagnosticRecord {
  source: string
  severity: AnalysisSeverity
  message: string
  path?: string
}

export interface TestRecord {
  path: string
  kind: 'unit' | 'integration' | 'e2e'
  targetHints: string[]
}

export interface AnalysisFinding {
  id: string
  kind: AnalysisFindingKind
  severity: AnalysisSeverity
  title: string
  paths: string[]
  evidence: Record<string, string | number | boolean | string[]>
  recommendation: string
  priority: number
}

export interface AnalysisSnapshot {
  schemaVersion: 1
  createdAt: string
  project: ProjectInfo
  summary: AnalysisSummary
  files: FileRecord[]
  routes: RouteRecord[]
  symbols: unknown[]
  dependencies: DependencyEdge[]
  diagnostics: DiagnosticRecord[]
  tests: TestRecord[]
  metrics: Record<string, number>
  findings: AnalysisFinding[]
  scores: Record<string, number>
}

export interface SnapshotComparison {
  baseCreatedAt: string
  targetCreatedAt: string
  deltas: Record<string, number>
  addedFindings: AnalysisFinding[]
  resolvedFindings: AnalysisFinding[]
}
