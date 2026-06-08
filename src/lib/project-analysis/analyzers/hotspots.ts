import type { AnalysisFinding, FileRecord } from '../types'
import { scoreFileRisk, severityFromPriority } from './scoring'

export function analyzeHotspots(files: FileRecord[]): AnalysisFinding[] {
  return files
    .map((file) => ({ file, priority: scoreFileRisk(file) }))
    .filter(({ file, priority }) => priority >= 55 && file.kind !== 'test')
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 8)
    .map(({ file, priority }) => ({
      id: `hotspot-${slug(file.path)}`,
      kind: 'refactor',
      severity: severityFromPriority(priority),
      title: `${file.path} has elevated maintenance pressure`,
      paths: [file.path],
      evidence: {
        fanIn: file.metrics.fanIn,
        fanOut: file.metrics.fanOut,
        gitChurn: file.metrics.gitChurn,
        publicSurface: file.tags.includes('public'),
      },
      recommendation: 'Review composition boundaries and add focused verification before larger edits.',
      priority,
    }))
}

function slug(path: string): string {
  return path.replaceAll('/', '-').replaceAll('.', '-').replaceAll('[', '').replaceAll(']', '')
}
