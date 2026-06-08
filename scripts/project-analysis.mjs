import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import esbuild from 'esbuild'

const root = process.cwd()
const output = path.join(root, '.analysis', `runner-${process.pid}.mjs`)
await mkdir(path.dirname(output), { recursive: true })

await esbuild.build({
  entryPoints: [path.join(root, 'src/lib/project-analysis/cli-entry.ts')],
  outfile: output,
  bundle: true,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  logLevel: 'silent',
})

const { runCli } = await import(pathToFileURL(output).href)
await runCli(root, process.argv.slice(2))
