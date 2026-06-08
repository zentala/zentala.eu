import type { AnalysisFinding, FileRecord } from '../types'

export function analyzeTestGaps(files: FileRecord[]): AnalysisFinding[] {
  return files
    .filter((file) => file.kind === 'route' && file.metrics.testCoverageHint === 0)
    .filter((file) => !file.path.includes('/resources/preview/'))
    .slice(0, 8)
    .map((file) => {
      const priority = file.path === 'src/pages/index.astro' ? 82 : 64
      return {
        id: `test-gap-${slug(file.path)}`,
        kind: 'test',
        severity: priority >= 80 ? 'high' : 'medium',
        title: `${file.path} has limited test confidence`,
        paths: [file.path],
        evidence: {
          publicSurface: file.tags.includes('public'),
          fanOut: file.metrics.fanOut,
          testCoverageHint: file.metrics.testCoverageHint,
        },
        recommendation: 'Add smoke or behavior coverage before expanding this route.',
        priority,
      }
    })
}

function slug(path: string): string {
  return path.replaceAll('/', '-').replaceAll('.', '-')
}
