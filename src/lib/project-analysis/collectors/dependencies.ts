import type { DependencyEdge, FileRecord } from '../types'

export function collectDependencies(files: FileRecord[]): DependencyEdge[] {
  const edges = files.flatMap((file) =>
    file.imports.map((target) => ({
      from: file.path,
      to: target,
      kind: 'import' as const,
    })),
  )
  return edges.sort((a, b) => `${a.from}:${a.to}`.localeCompare(`${b.from}:${b.to}`))
}

export function applyDependencyMetrics(files: FileRecord[], edges: DependencyEdge[]): FileRecord[] {
  const incoming = new Map<string, string[]>()
  for (const edge of edges) {
    incoming.set(edge.to, [...(incoming.get(edge.to) ?? []), edge.from])
  }
  return files.map((file) => {
    const importedBy = (incoming.get(file.path) ?? []).sort()
    const centralityScore = importedBy.length + file.imports.length
    return {
      ...file,
      importedBy,
      metrics: {
        ...file.metrics,
        fanIn: importedBy.length,
        importedByCount: importedBy.length,
        centralityScore,
      },
    }
  })
}
