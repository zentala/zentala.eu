import { compareLatestAnalysis, generateAnalysisSnapshot, loadLatestAnalysis } from './runner'
import { analyzeFile } from './file-analysis'
import { renderCompareMarkdown, renderSnapshotMarkdown } from './formatters/markdown'

export async function runCli(root: string, args: string[]): Promise<void> {
  const command = args[0] ?? 'snapshot'
  if (command === 'snapshot') {
    const snapshot = await generateAnalysisSnapshot(root)
    console.log(renderSnapshotMarkdown(snapshot))
    return
  }
  if (command === 'compare') {
    const comparison = await compareLatestAnalysis(root)
    console.log(comparison ? renderCompareMarkdown(comparison) : 'Need at least two snapshots to compare.')
    return
  }
  if (command === 'file') {
    const snapshot = await loadLatestAnalysis(root)
    const output = snapshot && args[1] ? analyzeFile(snapshot, args[1]) : null
    console.log(JSON.stringify(output, null, 2))
    return
  }
  console.log('Usage: npm run analysis -- [snapshot|compare|file <path>]')
}
