<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6&height=200&section=header&text=Lumina%20UI&fontSize=72&fontColor=ffffff&fontAlignY=38&desc=Beautiful%20%E2%80%A2%20Accessible%20%E2%80%A2%20Animated&descAlignY=58&descSize=20" width="100%" />

<br/>

<p>
  <a href="https://github.com/vaxantis/Lumina-UI/blob/main/packages/react/package.json">
    <img src="https://img.shields.io/badge/version-0.1.0-6366f1?style=for-the-badge&labelColor=0f0f1a" alt="Version" />
  </a>
  <a href="https://github.com/vaxantis/Lumina-UI/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-8b5cf6?style=for-the-badge&labelColor=0f0f1a" alt="MIT License" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/TypeScript-5.6-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f0f1a" alt="TypeScript" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white&labelColor=0f0f1a" alt="React 18" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Framer_Motion-11-ff4d9e?style=for-the-badge&logo=framer&logoColor=white&labelColor=0f0f1a" alt="Framer Motion" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Radix_UI-primitives-white?style=for-the-badge&labelColor=0f0f1a" alt="Radix UI" />
  </a>
</p>

<p>
  <a href="https://github.com/vaxantis/Lumina-UI">
    <img src="https://img.shields.io/github/stars/vaxantis/Lumina-UI?style=for-the-badge&logo=github&labelColor=0f0f1a&color=6366f1" alt="Stars" />
  </a>
  <a href="https://github.com/vaxantis/Lumina-UI/issues">
    <img src="https://img.shields.io/github/issues/vaxantis/Lumina-UI?style=for-the-badge&labelColor=0f0f1a&color=8b5cf6" alt="Issues" />
  </a>
  <a href="https://github.com/vaxantis/Lumina-UI/pulls">
    <img src="https://img.shields.io/github/issues-pr/vaxantis/Lumina-UI?style=for-the-badge&labelColor=0f0f1a&color=6366f1" alt="Pull Requests" />
  </a>
</p>

<br/>

> **Lumina UI** is a headless, fully accessible React component library with fluid Framer Motion animations,  
> a dark-mode-first oklch design system, and a CLI to drop components directly into your project.

<br/>

<!--
  Replace the placeholder below with a real screenshot of your demo page.
  Run: pnpm dev → navigate to localhost:3000/demo → take a screenshot → save as .github/demo.png
-->
<img src="https://placehold.co/900x500/0d0d1a/6366f1?text=Demo+Screenshot+(replace+with+real+one)&font=inter" alt="Lumina UI Demo" width="900" style="border-radius:12px; border: 1px solid rgba(99,102,241,0.3);" />

<br/><br/>

**[Live Demo](https://github.com/vaxantis/Lumina-UI) · [Documentation](#documentation) · [Report a Bug](https://github.com/vaxantis/Lumina-UI/issues) · [Request a Feature](https://github.com/vaxantis/Lumina-UI/issues)**

</div>

---

## Table of Contents

- [Why Lumina UI?](#why-lumina-ui)
- [Components](#components)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [CLI](#cli)
- [Theming](#theming)
- [Contributing](#contributing)
- [License](#license)

---

## Why Lumina UI?

Most UI libraries give you components that look the same as every other app. Lumina UI is different — every component is crafted to feel alive:

| | Lumina UI | Others |
|---|---|---|
| **Animations** | Fluid spring physics via Framer Motion | CSS only or none |
| **Accessibility** | WAI-ARIA compliant via Radix UI primitives | Varies |
| **Design tokens** | oklch() color space — perceptually uniform across themes | sRGB hex values |
| **Dark mode** | First-class, zero-flash | Optional add-on |
| **Headless** | Full CSS token control — no specificity battles | Opinionated styles baked in |
| **CLI** | `lumina-ui add button` drops the source into your project | Copy-paste or full install |
| **Bundle** | ESM + CJS + `.d.ts` — tree-shakeable | Often CJS-only |

---

## Components

15 production-ready components across 3 categories:

### Form & Input
| Component | Description |
|---|---|
| `Button` | 5 variants (default, secondary, outline, ghost, destructive), 3 sizes, spring tap animation |
| `Input` | Text input with focus glow ring, error state |
| `Textarea` | Resizable multiline input |
| `Label` | Accessible form label, pairs with any input |
| `Checkbox` | Animated checkmark via Framer Motion |
| `Switch` | Spring-physics toggle, smooth thumb travel |
| `Select` | Full dropdown with groups, labels, animated open/close |

### Layout & Display
| Component | Description |
|---|---|
| `Card` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| `Badge` | 6 variants: default, secondary, destructive, outline, success, warning |
| `Avatar` | Image + fallback, 5 sizes (xs → xl) |
| `Separator` | Horizontal or vertical rule |
| `Progress` | Animated fill bar, 4 variants |

### Overlay & Navigation
| Component | Description |
|---|---|
| `Dialog` | Accessible modal with backdrop blur, spring scale-in animation |
| `Tooltip` | Hover/focus tooltip, configurable delay |
| `Accordion` | Animated expand/collapse, single or multiple |
| `Tabs` | Segmented control, animated content transitions |

---

## Installation

### Prerequisites

- Node ≥ 18
- pnpm ≥ 9 (or npm/yarn)

### Package install

```bash
# pnpm
pnpm add @lumina-ui/react framer-motion

# npm
npm install @lumina-ui/react framer-motion

# yarn
yarn add @lumina-ui/react framer-motion
```

> `framer-motion` is a peer dependency — you need it installed alongside the package.

---

## Quick Start

### 1. Import the styles

Add this once in your app entry point (e.g. `_app.tsx`, `layout.tsx`, or `main.tsx`):

```ts
import '@lumina-ui/react/styles'
```

### 2. Wrap with theme class

Lumina UI uses the `.lumina-dark` class for dark mode. Add it to your root element:

```tsx
// app/layout.tsx (Next.js)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lumina-dark">{children}</body>
    </html>
  )
}
```

> Omit `.lumina-dark` for light mode. The library also respects `@media (prefers-color-scheme: dark)` automatically.

### 3. Use a component

```tsx
import { Button } from '@lumina-ui/react'

export default function Page() {
  return (
    <Button onClick={() => alert('Hello Lumina!')}>
      Click me
    </Button>
  )
}
```

### More examples

<details>
<summary><strong>Dialog</strong></summary>

```tsx
import {
  Button, Dialog, DialogTrigger, DialogContent,
  DialogTitle, DialogDescription, DialogClose
} from '@lumina-ui/react'

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. Your account will be permanently deleted.
        </DialogDescription>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button variant="destructive">Yes, delete</Button>
      </DialogContent>
    </Dialog>
  )
}
```

</details>

<details>
<summary><strong>Tabs</strong></summary>

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@lumina-ui/react'

export function SettingsTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings…</TabsContent>
      <TabsContent value="security">Security settings…</TabsContent>
      <TabsContent value="billing">Billing settings…</TabsContent>
    </Tabs>
  )
}
```

</details>

<details>
<summary><strong>Select</strong></summary>

```tsx
import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectGroup, SelectLabel,
  SelectItem, SelectSeparator
} from '@lumina-ui/react'

export function FrameworkPicker() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Choose a framework…" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>React</SelectLabel>
          <SelectItem value="nextjs">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Other</SelectLabel>
          <SelectItem value="svelte">SvelteKit</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
```

</details>

<details>
<summary><strong>Form with Label + Checkbox + Switch</strong></summary>

```tsx
import { Label, Checkbox, Switch } from '@lumina-ui/react'

export function NotificationForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms of service</Label>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Label htmlFor="emails">Marketing emails</Label>
        <Switch id="emails" defaultChecked />
      </div>
    </form>
  )
}
```

</details>

---

## CLI

The `lumina-ui` CLI lets you copy individual component source files directly into your project — no black box, full ownership.

### Initialize

```bash
npx lumina-ui init
```

This creates a `components/ui/` directory and adds the base stylesheet import to your project.

### Add a component

```bash
npx lumina-ui add button
npx lumina-ui add dialog
npx lumina-ui add accordion
```

List all available components:

```bash
npx lumina-ui add
```

Available: `accordion`, `button`, `checkbox`, `dialog`, `input`, `label`, `switch`, `tooltip`

---

## Theming

Lumina UI uses CSS custom properties for every visual decision. Override any token in your own CSS:

```css
:root {
  /* Colors (oklch — perceptually uniform) */
  --lumina-color-primary:            oklch(0.52 0.24 265);   /* indigo */
  --lumina-color-background:         oklch(0.99 0.005 265);
  --lumina-color-surface:            oklch(0.96 0.01 265);
  --lumina-color-border:             oklch(0.88 0.015 265);
  --lumina-color-foreground:         oklch(0.14 0.02 265);

  /* Typography */
  --lumina-font-sans:                'Inter', ui-sans-serif, system-ui, sans-serif;
  --lumina-font-size-sm:             0.875rem;
  --lumina-font-size-base:           1rem;

  /* Spacing */
  --lumina-space-1:                  0.25rem;
  --lumina-space-2:                  0.5rem;
  --lumina-space-3:                  0.75rem;
  --lumina-space-4:                  1rem;

  /* Radius */
  --lumina-radius-sm:                0.25rem;
  --lumina-radius-md:                0.5rem;
  --lumina-radius-lg:                0.75rem;

  /* Animation */
  --lumina-duration-fast:            120ms;
  --lumina-duration-normal:          200ms;
  --lumina-easing-spring:            cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Dark mode

```css
/* Method 1: class-based (recommended for SSR) */
.lumina-dark {
  --lumina-color-primary: oklch(0.63 0.22 265);
  --lumina-color-background: oklch(0.076 0.02 265);
  /* ... */
}

/* Method 2: auto from OS preference */
@media (prefers-color-scheme: dark) {
  :root { /* same overrides */ }
}
```

---

## Project Structure

```
Lumina-UI/
├── apps/
│   └── docs/              # Nextra documentation site + /demo page
│       └── pages/
│           ├── demo.tsx   # Interactive component showcase
│           └── docs/      # MDX documentation pages
├── packages/
│   ├── react/             # @lumina-ui/react — the component library
│   │   ├── src/
│   │   │   ├── components/   # One folder per component
│   │   │   ├── styles/       # Per-component CSS + design tokens
│   │   │   └── index.ts      # Public API surface
│   │   └── tsup.config.ts    # Bundles ESM + CJS + styles.css + .d.ts
│   └── cli/               # lumina-ui CLI (npx lumina-ui add)
│       ├── src/
│       └── templates/        # Component source templates
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Documentation

Full docs are included in `apps/docs`. To run locally:

```bash
git clone https://github.com/vaxantis/Lumina-UI.git
cd Lumina-UI
pnpm install
pnpm dev
```

Then open:
- `http://localhost:3000` — documentation
- `http://localhost:3000/demo` — interactive component showcase

---

## Contributing

Contributions are welcome! Here's how to get started:

### 1. Fork & clone

```bash
git clone https://github.com/your-username/Lumina-UI.git
cd Lumina-UI
pnpm install
```

### 2. Run the dev environment

```bash
pnpm dev          # starts docs + watches package builds in parallel
pnpm test         # runs all 45 tests across all packages
pnpm build        # full monorepo build via Turborepo
```

### 3. Add a component

Each component lives in `packages/react/src/components/<name>/` and follows this structure:

```
components/
└── button/
    ├── button.tsx       # Component implementation
    ├── button.test.tsx  # Vitest + @testing-library tests
    └── index.ts         # Re-exports
```

And a matching CSS file in `packages/react/src/styles/<name>.css`.

### 4. Submit a PR

- One component or fix per PR
- All tests must pass (`pnpm test`)
- TypeScript must be clean (`pnpm lint`)
- Follow the existing CSS token convention

### Reporting bugs

Please open an issue with:
- A minimal reproduction
- Expected vs actual behavior
- Browser + OS + React version

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Radix UI](https://www.radix-ui.com/) | WAI-ARIA accessible primitives |
| [Framer Motion](https://www.framer.com/motion/) | Spring physics animations |
| [tsup](https://tsup.egoist.dev/) | ESM + CJS + CSS bundler |
| [Turborepo](https://turbo.build/) | Monorepo build orchestration |
| [pnpm](https://pnpm.io/) | Fast, efficient package manager |
| [Vitest](https://vitest.dev/) | Unit + component tests |
| [Nextra](https://nextra.site/) | Documentation site |
| [TypeScript](https://www.typescriptlang.org/) | Type safety, strict mode |

---

## License

MIT © [vaxantis](https://github.com/vaxantis)

See [LICENSE](LICENSE) for the full text.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6&height=100&section=footer" width="100%" />

<p>
  <sub>Built with care · Powered by Radix UI + Framer Motion</sub>
</p>

<p>
  <a href="https://github.com/vaxantis/Lumina-UI">
    <img src="https://img.shields.io/github/stars/vaxantis/Lumina-UI?style=social" alt="GitHub stars" />
  </a>
</p>

</div>
