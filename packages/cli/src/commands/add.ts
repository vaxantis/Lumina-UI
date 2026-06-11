import path from 'node:path'
import { existsSync } from 'node:fs'
import * as clack from '@clack/prompts'
import pc from 'picocolors'
import { registry, allComponents } from '../registry/components.js'
import {
  resolveProjectRoot,
  resolveComponentsDir,
  getTemplatesDir,
  copyTemplate,
  detectPackageManager,
  installCommand,
} from '../utils/file.js'

export async function addCommand(names: string[]): Promise<void> {
  clack.intro(pc.bold(`Lumina UI — add ${names.join(', ')}`))

  const root = resolveProjectRoot()
  const componentsDir = resolveComponentsDir(root)
  const templatesDir = getTemplatesDir()
  const pm = detectPackageManager(root)

  const unknown = names.filter(n => !registry[n])
  if (unknown.length > 0) {
    clack.log.error(
      `Unknown component(s): ${pc.red(unknown.join(', '))}.\n` +
        `Available: ${allComponents.join(', ')}`,
    )
    process.exit(1)
  }

  const allDeps = new Set<string>()

  for (const name of names) {
    const def = registry[name]!
    const spin = clack.spinner()
    spin.start(`Adding ${pc.cyan(name)}`)

    for (const file of def.files) {
      const src = path.join(templatesDir, file.template)
      const dest = path.join(componentsDir, file.name)

      if (!existsSync(src)) {
        spin.stop(pc.yellow(`Template ${file.template} not found — skipping`))
        continue
      }

      if (existsSync(dest)) {
        spin.stop(pc.yellow(`${path.relative(root, dest)} already exists — skipping`))
      } else {
        await copyTemplate(src, dest)
        spin.stop(`${pc.green('✓')} ${path.relative(root, dest)}`)
      }
    }

    def.dependencies.forEach(d => allDeps.add(d))
  }

  if (allDeps.size > 0) {
    clack.note(
      `Install required dependencies:\n\n  ${pc.cyan(installCommand(pm, [...allDeps]))}`,
      'Dependencies',
    )
  }

  clack.outro('Done!')
}

export async function listCommand(): Promise<void> {
  console.log('')
  console.log(pc.bold('Available Lumina UI components:\n'))
  for (const [name, def] of Object.entries(registry)) {
    console.log(`  ${pc.cyan(name.padEnd(14))} ${def.description}`)
  }
  console.log('')
}
