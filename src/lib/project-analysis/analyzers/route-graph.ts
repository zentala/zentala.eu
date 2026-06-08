import type { AnalysisFinding, RouteRecord } from '../types'

export function analyzeRouteGraph(routes: RouteRecord[]): AnalysisFinding[] {
  const heavyRoutes = routes.filter((route) => route.components.length + route.dataSources.length >= 6)
  return heavyRoutes.slice(0, 6).map((route) => {
    const priority = route.url === '/' ? 84 : 68
    return {
      id: `route-graph-${slug(route.path)}`,
      kind: 'architecture',
      severity: priority >= 80 ? 'high' : 'medium',
      title: `${route.url} coordinates many dependencies`,
      paths: [route.path],
      evidence: {
        componentCount: route.components.length,
        dataSourceCount: route.dataSources.length,
        url: route.url,
      },
      recommendation: 'Track route dependency growth and keep section/data contracts explicit.',
      priority,
    }
  })
}

function slug(path: string): string {
  return path.replaceAll('/', '-').replaceAll('.', '-')
}
