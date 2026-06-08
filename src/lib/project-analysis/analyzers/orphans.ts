import { repoAnalysisConfig } from '../config'
import type { AnalysisFinding, FileRecord } from '../types'
import { matchesPrefixGlob } from '../path-utils'

export function analyzeOrphans(files: FileRecord[]): AnalysisFinding[] {
  return files
    .filter((file) => isCandidate(file))
    .slice(0, 10)
    .map((file) => ({
      id: `orphan-${slug(file.path)}`,
      kind: 'investigate',
      severity: file.tags.includes('preview') ? 'low' : 'medium',
      title: `${file.path} may be weakly connected`,
      paths: [file.path],
      evidence: {
        incomingLinks: file.metrics.fanIn,
        zone: zoneFor(file.path),
        fanOut: file.metrics.fanOut,
      },
      recommendation: 'Confirm whether this file is intentionally standalone or should be linked, tested, or removed.',
      priority: file.tags.includes('preview') ? 45 : 62,
    }))
}

function isCandidate(file: FileRecord): boolean {
  if (file.kind === 'route') return file.metrics.fanIn === 0 && file.tags.includes('preview')
  if (file.kind === 'component' || file.kind === 'data') return file.metrics.fanIn === 0
  return false
}

function zoneFor(path: string): string {
  const lowPriority = repoAnalysisConfig.lowPriorityZones.some((glob) => matchesPrefixGlob(path, glob))
  return lowPriority ? 'low-priority' : 'production'
}

function slug(path: string): string {
  return path.replaceAll('/', '-').replaceAll('.', '-')
}
