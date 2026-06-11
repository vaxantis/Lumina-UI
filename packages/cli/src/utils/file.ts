import path from 'node:path'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import fse from 'fs-extra'

export function resolveProjectRoot(): string {
  return process.cwd()
}

export function resolveComponentsDir(root: string): string {
  const candidates = [
    path.join(root, 'src', 'components', 'ui'),
    path.join(root, 'components', 'ui'),
    path.join(root, 'src', 'components'),
    path.join(root, 'components'),
  ]

  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate
  }

  // Default to src/components/ui (will be created)
  return path.join(root, 'src', 'components', 'ui')
}

export function resolveStylesDir(root: string): string {
  const candidates = [
    path.join(root, 'src', 'styles'),
    path.join(root, 'styles'),
    path.join(root, 'src', 'app'),
    path.join(root, 'app'),
    path.join(root, 'src'),
  ]

  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate
  }

  return path.join(root, 'src', 'styles')
}

export async function writeFile(filePath: string, content: string): Promise<void> {
  await fse.ensureDir(path.dirname(filePath))
  await fse.writeFile(filePath, content, 'utf-8')
}

export async function copyTemplate(
  templatePath: string,
  destPath: string,
): Promise<void> {
  await fse.ensureDir(path.dirname(destPath))
  await fse.copy(templatePath, destPath, { overwrite: false })
}

export function getTemplatesDir(): string {
  // fileURLToPath handles Windows drive letters correctly (avoids leading slash from .pathname)
  const distDir = path.dirname(fileURLToPath(import.meta.url))
  return path.join(distDir, '..', 'templates')
}

export function detectPackageManager(root: string): 'pnpm' | 'yarn' | 'npm' {
  if (existsSync(path.join(root, 'pnpm-lock.yaml'))) return 'pnpm'
  if (existsSync(path.join(root, 'yarn.lock'))) return 'yarn'
  return 'npm'
}

export function installCommand(
  pm: 'pnpm' | 'yarn' | 'npm',
  deps: string[],
): string {
  const list = deps.join(' ')
  if (pm === 'pnpm') return `pnpm add ${list}`
  if (pm === 'yarn') return `yarn add ${list}`
  return `npm install ${list}`
}
