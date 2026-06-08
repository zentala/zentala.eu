import type { FileRecord, TestRecord } from '../types'

export function collectTests(files: FileRecord[]): TestRecord[] {
  return files
    .filter((file) => file.kind === 'test')
    .map((file) => ({
      path: file.path,
      kind: inferTestKind(file.path),
      targetHints: inferTargetHints(file.path),
    }))
}

export function applyTestHints(files: FileRecord[], tests: TestRecord[]): FileRecord[] {
  return files.map((file) => ({
    ...file,
    metrics: {
      ...file.metrics,
      testCoverageHint: hasCoverageHint(file, tests) ? 1 : file.metrics.testCoverageHint,
    },
  }))
}

function inferTestKind(path: string): TestRecord['kind'] {
  if (path.startsWith('tests/')) return 'e2e'
  if (path.includes('integration')) return 'integration'
  return 'unit'
}

function inferTargetHints(path: string): string[] {
  return path
    .replace(/^tests\//, 'src/pages/')
    .replace(/^src\/components\/__tests__\//, 'src/components/')
    .replace(/\.spec\.ts$/, '')
    .split('/')
}

function hasCoverageHint(file: FileRecord, tests: TestRecord[]): boolean {
  const key = file.path.split('/').pop()?.replace(/\.(astro|ts|tsx|js|jsx|mdx?)$/, '')
  if (!key) return false
  return tests.some((test) => test.path.toLowerCase().includes(key.toLowerCase()))
}
