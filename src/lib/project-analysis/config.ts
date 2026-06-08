import type { RepoAnalysisConfig } from './types'

export const repoAnalysisConfig: RepoAnalysisConfig = {
  name: 'zentala.eu',
  framework: 'astro',
  entryGlobs: ['src/pages/**/*'],
  componentGlobs: ['src/components/**/*'],
  contentGlobs: ['src/content/**/*'],
  dataGlobs: ['src/data/**/*'],
  ignoreGlobs: [
    '.analysis/**',
    '.astro/**',
    '.claude/**',
    '.git/**',
    '.wrangler/**',
    'dist/**',
    'node_modules/**',
    'playwright-report/**',
    'test-results/**',
  ],
  publicSurface: ['src/pages/**', 'src/layouts/**'],
  lowPriorityZones: ['src/pages/resources/preview/**', 'src/pages/ui/**'],
  weights: {
    impact: 0.35,
    risk: 0.25,
    userSurface: 0.15,
    maintainabilityGain: 0.15,
    easeOfExecution: 0.1,
  },
}
