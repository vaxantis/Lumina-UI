import path from 'node:path'
import { existsSync } from 'node:fs'
import * as clack from '@clack/prompts'
import pc from 'picocolors'
import { writeFile, resolveProjectRoot, resolveStylesDir } from '../utils/file.js'

const TOKENS_CSS = `/* Lumina UI Design Tokens — edit freely */
:root {
  --lumina-color-background:           oklch(1 0 0);
  --lumina-color-foreground:           oklch(0.145 0 0);
  --lumina-color-primary:              oklch(0.205 0 0);
  --lumina-color-primary-foreground:   oklch(0.985 0 0);
  --lumina-color-secondary:            oklch(0.97 0 0);
  --lumina-color-secondary-foreground: oklch(0.205 0 0);
  --lumina-color-muted:                oklch(0.97 0 0);
  --lumina-color-muted-foreground:     oklch(0.556 0 0);
  --lumina-color-accent:               oklch(0.97 0 0);
  --lumina-color-accent-foreground:    oklch(0.205 0 0);
  --lumina-color-destructive:          oklch(0.577 0.245 27.325);
  --lumina-color-destructive-foreground: oklch(0.985 0 0);
  --lumina-color-border:               oklch(0.922 0 0);
  --lumina-color-input:                oklch(0.922 0 0);
  --lumina-color-ring:                 oklch(0.708 0 0);
  --lumina-color-overlay:              oklch(0 0 0 / 50%);
  --lumina-radius-sm:  0.25rem;
  --lumina-radius-md:  0.375rem;
  --lumina-radius-lg:  0.5rem;
  --lumina-radius-full: 9999px;
  --lumina-font-sans:  system-ui, -apple-system, sans-serif;
  --lumina-font-mono:  ui-monospace, monospace;
  --lumina-font-size-xs:   0.75rem;
  --lumina-font-size-sm:   0.875rem;
  --lumina-font-size-base: 1rem;
  --lumina-font-size-lg:   1.125rem;
  --lumina-font-weight-medium:   500;
  --lumina-font-weight-semibold: 600;
  --lumina-space-1: 0.25rem; --lumina-space-2: 0.5rem;
  --lumina-space-3: 0.75rem; --lumina-space-4: 1rem;
  --lumina-space-6: 1.5rem;  --lumina-space-8: 2rem;
  --lumina-shadow-sm: 0 1px 2px 0 oklch(0 0 0 / 5%);
  --lumina-shadow-md: 0 4px 6px -1px oklch(0 0 0 / 10%);
  --lumina-shadow-xl: 0 20px 25px -5px oklch(0 0 0 / 10%);
  --lumina-duration-fast:   100ms;
  --lumina-duration-normal: 200ms;
  --lumina-easing-default:  cubic-bezier(0.4, 0, 0.2, 1);
  --lumina-line-height-tight:  1.25;
  --lumina-line-height-normal: 1.5;
}

.lumina-dark {
  --lumina-color-background:           oklch(0.145 0 0);
  --lumina-color-foreground:           oklch(0.985 0 0);
  --lumina-color-primary:              oklch(0.985 0 0);
  --lumina-color-primary-foreground:   oklch(0.205 0 0);
  --lumina-color-secondary:            oklch(0.269 0 0);
  --lumina-color-secondary-foreground: oklch(0.985 0 0);
  --lumina-color-muted:                oklch(0.269 0 0);
  --lumina-color-muted-foreground:     oklch(0.708 0 0);
  --lumina-color-accent:               oklch(0.269 0 0);
  --lumina-color-accent-foreground:    oklch(0.985 0 0);
  --lumina-color-destructive:          oklch(0.704 0.191 22.216);
  --lumina-color-border:               oklch(1 0 0 / 10%);
  --lumina-color-input:                oklch(1 0 0 / 15%);
  --lumina-color-ring:                 oklch(0.556 0 0);
  --lumina-color-overlay:              oklch(0 0 0 / 70%);
}
`

export async function initCommand(): Promise<void> {
  clack.intro(pc.bold('Lumina UI init'))

  const root = resolveProjectRoot()
  const stylesDir = resolveStylesDir(root)
  const tokensPath = path.join(stylesDir, 'lumina-tokens.css')

  if (existsSync(tokensPath)) {
    clack.log.warn(`${pc.yellow('lumina-tokens.css already exists')} — skipping.`)
  } else {
    await writeFile(tokensPath, TOKENS_CSS)
    clack.log.success(`Created ${pc.green(path.relative(root, tokensPath))}`)
  }

  clack.note(
    [
      `Import the tokens once in your app's entry CSS:`,
      ``,
      `  @import "./${path.relative(stylesDir, tokensPath).replace(/\\/g, '/')}";`,
      ``,
      `Then override any token to theme Lumina UI.`,
    ].join('\n'),
    'Next steps',
  )

  clack.outro('Done! Run lumina-ui add <component> to add components.')
}
