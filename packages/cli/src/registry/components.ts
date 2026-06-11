export interface ComponentFile {
  /** Destination path relative to the resolved components dir */
  name: string
  template: string
}

export interface ComponentDef {
  name: string
  description: string
  /** npm packages the consumer must install */
  dependencies: string[]
  files: ComponentFile[]
}

export const registry: Record<string, ComponentDef> = {
  button: {
    name: 'button',
    description: 'Accessible button with press animation and loading state',
    dependencies: ['@radix-ui/react-slot', 'framer-motion', 'clsx'],
    files: [{ name: 'button.tsx', template: 'button.tsx' }],
  },
  input: {
    name: 'input',
    description: 'Input and Textarea with size + invalid variants',
    dependencies: ['clsx'],
    files: [{ name: 'input.tsx', template: 'input.tsx' }],
  },
  label: {
    name: 'label',
    description: 'Accessible label via Radix Label primitive',
    dependencies: ['@radix-ui/react-label', 'clsx'],
    files: [{ name: 'label.tsx', template: 'label.tsx' }],
  },
  checkbox: {
    name: 'checkbox',
    description: 'Animated checkbox with indeterminate state',
    dependencies: ['@radix-ui/react-checkbox', 'framer-motion', 'clsx'],
    files: [{ name: 'checkbox.tsx', template: 'checkbox.tsx' }],
  },
  switch: {
    name: 'switch',
    description: 'Animated toggle switch',
    dependencies: ['@radix-ui/react-switch', 'framer-motion', 'clsx'],
    files: [{ name: 'switch.tsx', template: 'switch.tsx' }],
  },
  dialog: {
    name: 'dialog',
    description: 'Modal dialog with overlay and enter/exit animations',
    dependencies: ['@radix-ui/react-dialog', 'framer-motion', 'clsx'],
    files: [{ name: 'dialog.tsx', template: 'dialog.tsx' }],
  },
  tooltip: {
    name: 'tooltip',
    description: 'Floating tooltip with scale animation',
    dependencies: ['@radix-ui/react-tooltip', 'framer-motion', 'clsx'],
    files: [{ name: 'tooltip.tsx', template: 'tooltip.tsx' }],
  },
  accordion: {
    name: 'accordion',
    description: 'Animated accordion with CSS height transitions',
    dependencies: ['@radix-ui/react-accordion', 'clsx'],
    files: [{ name: 'accordion.tsx', template: 'accordion.tsx' }],
  },
}

export const allComponents = Object.keys(registry)
