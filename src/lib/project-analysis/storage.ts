import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import type { AnalysisSnapshot } from './types'

const ANALYSIS_DIR = '.analysis'
const SNAPSHOTS_DIR = 'snapshots'

export function getAnalysisPaths(root: string) {
  const baseDir = path.join(root, ANALYSIS_DIR)
  return {
    baseDir,
    latestPath: path.join(baseDir, 'latest.json'),
    snapshotsDir: path.join(baseDir, SNAPSHOTS_DIR),
  }
}

export function snapshotFileName(createdAt: string): string {
  return `${createdAt.replaceAll(':', '-').replaceAll('.', '-')}.json`
}

export async function writeSnapshot(root: string, snapshot: AnalysisSnapshot): Promise<void> {
  const paths = getAnalysisPaths(root)
  await mkdir(paths.snapshotsDir, { recursive: true })
  const body = `${JSON.stringify(snapshot, null, 2)}\n`
  await writeFile(path.join(paths.snapshotsDir, snapshotFileName(snapshot.createdAt)), body)
  await writeFile(paths.latestPath, body)
}

export async function readLatestSnapshot(root: string): Promise<AnalysisSnapshot | null> {
  try {
    return JSON.parse(await readFile(getAnalysisPaths(root).latestPath, 'utf8')) as AnalysisSnapshot
  } catch {
    return null
  }
}

export async function listSnapshots(root: string): Promise<string[]> {
  try {
    const paths = getAnalysisPaths(root)
    return (await readdir(paths.snapshotsDir))
      .filter((fileName) => fileName.endsWith('.json'))
      .sort()
      .map((fileName) => path.join(paths.snapshotsDir, fileName))
  } catch {
    return []
  }
}

export async function readSnapshot(snapshotPath: string): Promise<AnalysisSnapshot> {
  return JSON.parse(await readFile(snapshotPath, 'utf8')) as AnalysisSnapshot
}
