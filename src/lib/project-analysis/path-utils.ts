import path from 'node:path'

export const SOURCE_EXTENSIONS = new Set([
  '.astro',
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.md',
  '.mdx',
])

export function toRepoPath(root: string, filePath: string): string {
  return path.relative(root, filePath).replaceAll(path.sep, '/')
}

export function isSourcePath(filePath: string): boolean {
  return SOURCE_EXTENSIONS.has(path.extname(filePath))
}

export function matchesPrefixGlob(filePath: string, glob: string): boolean {
  return filePath.startsWith(glob.replace('/**', ''))
}

export function shouldIgnorePath(filePath: string, ignoreGlobs: string[]): boolean {
  return ignoreGlobs.some((glob) => matchesPrefixGlob(filePath, glob))
}

export function resolveImportPath(fromPath: string, specifier: string, knownPaths: Set<string>): string | null {
  if (!specifier.startsWith('.')) return null
  const base = path.posix.dirname(fromPath)
  const raw = path.posix.normalize(path.posix.join(base, specifier))
  const candidates = [
    raw,
    `${raw}.ts`,
    `${raw}.tsx`,
    `${raw}.js`,
    `${raw}.jsx`,
    `${raw}.astro`,
    `${raw}.md`,
    `${raw}.mdx`,
    `${raw}/index.ts`,
    `${raw}/index.astro`,
  ]
  return candidates.find((candidate) => knownPaths.has(candidate)) ?? null
}
