import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import type { FileKind, FileRecord, RepoAnalysisConfig } from '../types'
import { isSourcePath, shouldIgnorePath, toRepoPath } from '../path-utils'

const IMPORT_PATTERN = /(?:import\s+(?:[^'"]+from\s+)?|import\()\s*['"]([^'"]+)['"]/g

export async function collectFiles(root: string, config: RepoAnalysisConfig): Promise<FileRecord[]> {
  const paths = await walkRepo(root, root, config)
  const knownPaths = new Set(paths)
  const files = []
  for (const filePath of paths) {
    files.push(await buildFileRecord(root, filePath, knownPaths))
  }
  return files.sort((a, b) => a.path.localeCompare(b.path))
}

async function walkRepo(root: string, dir: string, config: RepoAnalysisConfig): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => collectEntry(root, dir, entry, config)))
  return nested.flat()
}

async function collectEntry(
  root: string,
  dir: string,
  entry: { name: string; isDirectory: () => boolean; isFile: () => boolean },
  config: RepoAnalysisConfig,
): Promise<string[]> {
  const absolutePath = path.join(dir, entry.name)
  const repoPath = toRepoPath(root, absolutePath)
  if (shouldIgnorePath(repoPath, config.ignoreGlobs)) return []
  if (entry.isDirectory()) return walkRepo(root, absolutePath, config)
  if (!entry.isFile() || !isSourcePath(repoPath)) return []
  return [repoPath]
}

async function buildFileRecord(root: string, repoPath: string, knownPaths: Set<string>): Promise<FileRecord> {
  const absolutePath = path.join(root, repoPath)
  const [stats, content] = await Promise.all([stat(absolutePath), readFile(absolutePath, 'utf8')])
  const imports = extractImports(repoPath, content, knownPaths)
  return {
    path: repoPath,
    kind: inferFileKind(repoPath),
    size: { lines: countLines(content), bytes: stats.size },
    imports,
    importedBy: [],
    tags: inferTags(repoPath),
    metrics: {
      fanIn: 0,
      fanOut: imports.length,
      lineCount: countLines(content),
      importCount: imports.length,
      importedByCount: 0,
      diagnosticCount: 0,
      testCoverageHint: repoPath.includes('__tests__') || repoPath.includes('.spec.') ? 1 : 0,
      gitChurn: 0,
      routeSurface: repoPath.startsWith('src/pages/') ? 1 : 0,
      orphanScore: 0,
      centralityScore: 0,
      riskScore: 0,
    },
  }
}

function extractImports(repoPath: string, content: string, knownPaths: Set<string>): string[] {
  const imports = new Set<string>()
  for (const match of content.matchAll(IMPORT_PATTERN)) {
    const resolved = resolveLocalImport(repoPath, match[1], knownPaths)
    if (resolved) imports.add(resolved)
  }
  return [...imports].sort()
}

function resolveLocalImport(fromPath: string, specifier: string, knownPaths: Set<string>): string | null {
  if (!specifier.startsWith('.')) return null
  const base = path.posix.dirname(fromPath)
  const raw = path.posix.normalize(path.posix.join(base, specifier))
  const candidates = ['', '.ts', '.tsx', '.js', '.jsx', '.astro', '.md', '.mdx'].map((ext) => `${raw}${ext}`)
  candidates.push(`${raw}/index.ts`, `${raw}/index.astro`)
  return candidates.find((candidate) => knownPaths.has(candidate)) ?? null
}

function inferFileKind(repoPath: string): FileKind {
  if (repoPath.includes('.spec.') || repoPath.includes('__tests__')) return 'test'
  if (repoPath.startsWith('src/pages/')) return 'route'
  if (repoPath.startsWith('src/components/')) return 'component'
  if (repoPath.startsWith('src/content/')) return 'content'
  if (repoPath.startsWith('src/data/')) return 'data'
  if (repoPath.endsWith('.config.js') || repoPath.endsWith('.config.ts')) return 'config'
  return 'other'
}

function inferTags(repoPath: string): string[] {
  const tags = []
  if (repoPath.startsWith('src/pages/')) tags.push('public')
  if (repoPath.includes('/resources/')) tags.push('internal')
  if (repoPath.includes('/preview/')) tags.push('preview')
  return tags
}

function countLines(content: string): number {
  if (content.length === 0) return 0
  return content.split(/\r?\n/).length
}
