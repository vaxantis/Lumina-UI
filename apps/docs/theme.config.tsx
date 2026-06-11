import type { DocsThemeConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      ✦ Lumina UI
    </span>
  ),
  project: {
    link: 'https://github.com/lumina-ui/lumina-ui',
  },
  docsRepositoryBase: 'https://github.com/lumina-ui/lumina-ui/tree/main/apps/docs',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ·{' '}
        <a href="https://github.com/lumina-ui/lumina-ui" target="_blank" rel="noreferrer">
          Lumina UI
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Lumina UI',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Headless, accessible React components with Framer Motion animations" />
    </>
  ),
  primaryHue: 220,
}

export default config
