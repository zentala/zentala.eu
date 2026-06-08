import type { APIRoute } from 'astro'
import { loadAnalysisHistory } from '../../../lib/project-analysis'

export const GET: APIRoute = async () => {
  const history = await loadAnalysisHistory(process.cwd())
  const output = history.map((snapshot) => ({
    createdAt: snapshot.createdAt,
    branch: snapshot.project.branch,
    commit: snapshot.project.commit,
    summary: snapshot.summary,
    findingCount: snapshot.findings.length,
  }))
  return json(output)
}

function json(value: unknown): Response {
  return new Response(JSON.stringify(value, null, 2), {
    headers: { 'content-type': 'application/json' },
  })
}
