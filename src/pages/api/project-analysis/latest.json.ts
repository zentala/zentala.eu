import type { APIRoute } from 'astro'
import { generateAnalysisSnapshot, loadLatestAnalysis } from '../../../lib/project-analysis'

export const GET: APIRoute = async () => {
  const snapshot = (await loadLatestAnalysis(process.cwd())) ?? (await generateAnalysisSnapshot(process.cwd()))
  return json(snapshot)
}

function json(value: unknown): Response {
  return new Response(JSON.stringify(value, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}
