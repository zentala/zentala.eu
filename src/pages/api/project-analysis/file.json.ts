import type { APIRoute } from 'astro'
import { analyzeFile, generateAnalysisSnapshot, loadLatestAnalysis } from '../../../lib/project-analysis'

export const GET: APIRoute = async ({ request }) => {
  const snapshot = (await loadLatestAnalysis(process.cwd())) ?? (await generateAnalysisSnapshot(process.cwd()))
  const url = new URL(request.url)
  const filePath = url.searchParams.get('path') ?? snapshot.findings[0]?.paths[0] ?? 'src/pages/index.astro'
  return json(analyzeFile(snapshot, filePath))
}

function json(value: unknown): Response {
  return new Response(JSON.stringify(value, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}
