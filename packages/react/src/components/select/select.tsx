'use client'

import * as React from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

/* ── Root / Value / Group / Label ─────────────────── */
export const Select = RadixSelect.Root
export const SelectGroup = RadixSelect.Group
export const SelectValue = RadixSelect.Value

/* ── Trigger ─────────────────────────────────────── */
export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger> {}

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={cn('lumina-select__trigger', className)}
    {...props}
  >
    {children}
    <RadixSelect.Icon asChild>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lumina-select__icon"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
))
SelectTrigger.displayName = 'SelectTrigger'

/* ── Content (animated) ──────────────────────────── */

interface SelectContentInnerProps
  extends React.ComponentPropsWithoutRef<typeof RadixSelect.Content> {
  shouldReduceMotion: boolean
}

const SelectContentInner = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  SelectContentInnerProps
>(({ className, children, position = 'popper', shouldReduceMotion, ...props }, ref) => (
  <RadixSelect.Content
    ref={ref}
    position={position}
    className={cn('lumina-select__content', className)}
    {...props}
  >
    <RadixSelect.Viewport className="lumina-select__viewport">
      {children}
    </RadixSelect.Viewport>
  </RadixSelect.Content>
))
SelectContentInner.displayName = 'SelectContentInner'

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixSelect.Content> {}

export function SelectContent({ className, children, ...props }: SelectContentProps) {
  const shouldReduceMotion = useReducedMotion() ?? false
  const [open, setOpen] = React.useState(false)

  return (
    <RadixSelect.Portal>
      <SelectContentInner
        className={className}
        shouldReduceMotion={shouldReduceMotion}
        onAnimationStart={() => setOpen(true)}
        {...props}
      >
        {children}
      </SelectContentInner>
    </RadixSelect.Portal>
  )
}
SelectContent.displayName = 'SelectContent'

/* ── Label ───────────────────────────────────────── */
export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof RadixSelect.Label> {}

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <RadixSelect.Label
    ref={ref}
    className={cn('lumina-select__label', className)}
    {...props}
  />
))
SelectLabel.displayName = 'SelectLabel'

/* ── Item ────────────────────────────────────────── */
export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof RadixSelect.Item> {}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={cn('lumina-select__item', className)}
    {...props}
  >
    <span className="lumina-select__item-indicator">
      <RadixSelect.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </RadixSelect.ItemIndicator>
    </span>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
))
SelectItem.displayName = 'SelectItem'

/* ── Separator ───────────────────────────────────── */
export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof RadixSelect.Separator> {}

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <RadixSelect.Separator
    ref={ref}
    className={cn('lumina-select__separator', className)}
    {...props}
  />
))
SelectSeparator.displayName = 'SelectSeparator'
