import type { FileRecord, RouteRecord } from '../types'

export function collectRoutes(files: FileRecord[]): RouteRecord[] {
  return files
    .filter((file) => file.kind === 'route')
    .map((file) => ({
      path: file.path,
      url: routePathToUrl(file.path),
      layout: file.imports.find((item) => item.startsWith('src/layouts/')),
      components: file.imports.filter((item) => item.startsWith('src/components/')),
      dataSources: file.imports.filter((item) => item.startsWith('src/data/')),
      contentSources: file.imports.filter((item) => item.startsWith('src/content/')),
    }))
    .sort((a, b) => a.url.localeCompare(b.url))
}

export function routePathToUrl(filePath: string): string {
  const route = filePath
    .replace(/^src\/pages/, '')
    .replace(/\.(astro|md|mdx|ts)$/, '')
    .replace(/\/index$/, '/')
  return route === '/' ? '/' : route.replace(/\[\.{3}slug\]/, ':slug')
}
