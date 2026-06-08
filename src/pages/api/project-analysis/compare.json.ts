import type { APIRoute } from 'astro'
import { compareLatestAnalysis, renderAnalysisCompareMarkdown } from '../../../lib/project-analysis'

export const GET: APIRoute = async () => {
  const comparison = await compareLatestAnalysis(process.cwd())
  const output = comparison
    ? { comparison, markdown: renderAnalysisCompareMarkdown(comparison) }
    : { comparison: null, markdown: 'Need at least two snapshots to compare.' }
  return json(output)
}

function json(value: unknown): Response {
  return new Response(JSON.stringify(value, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}
