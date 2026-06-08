import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import type { FileRecord, ProjectInfo } from '../types'

const execFileAsync = promisify(execFile)

export async function collectProjectInfo(root: string, name: string): Promise<ProjectInfo> {
  const [branch, commit] = await Promise.all([
    git(root, ['branch', '--show-current']),
    git(root, ['rev-parse', '--short', 'HEAD']),
  ])
  return {
    name,
    root,
    branch: branch.trim() || 'unknown',
    commit: commit.trim() || 'unknown',
  }
}

export async function applyGitChurn(root: string, files: FileRecord[]): Promise<FileRecord[]> {
  const output = await git(root, ['log', '--name-only', '--pretty=format:'])
  const counts = new Map<string, number>()
  for (const line of output.split(/\r?\n/).filter(Boolean)) {
    counts.set(line, (counts.get(line) ?? 0) + 1)
  }
  return files.map((file) => ({
    ...file,
    metrics: { ...file.metrics, gitChurn: counts.get(file.path) ?? 0 },
  }))
}

async function git(root: string, args: string[]): Promise<string> {
  try {
    const { stdout } = await execFileAsync('git', args, { cwd: root })
    return stdout
  } catch {
    return ''
  }
}
