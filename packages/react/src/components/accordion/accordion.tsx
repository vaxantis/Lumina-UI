'use client'

import * as React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { cn } from '../../lib/cn'

/* ── Root ────────────────────────────────────────── */

export type AccordionProps =
  | (React.ComponentPropsWithoutRef<typeof RadixAccordion.Root> & { type: 'single' })
  | (React.ComponentPropsWithoutRef<typeof RadixAccordion.Root> & { type: 'multiple' })

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Root
      ref={ref}
      className={cn('lumina-accordion', className)}
      {...props}
    />
  ),
)
Accordion.displayName = 'Accordion'

/* ── Item ────────────────────────────────────────── */

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Item> {}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Item
      ref={ref}
      className={cn('lumina-accordion__item', className)}
      {...props}
    />
  ),
)
AccordionItem.displayName = 'AccordionItem'

/* ── Trigger ─────────────────────────────────────── */

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> {
  iconClassName?: string
}

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, iconClassName, children, ...props }, ref) => (
  <RadixAccordion.Header className="lumina-accordion__header">
    <RadixAccordion.Trigger
      ref={ref}
      className={cn('lumina-accordion__trigger', className)}
      {...props}
    >
      {children}
      {/* Icon rotation is driven by CSS via [data-state="open"] */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('lumina-accordion__icon', iconClassName)}
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

/* ── Content ─────────────────────────────────────── */

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Content> {}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={cn('lumina-accordion__content-wrapper', className)}
    {...props}
  >
    <div className="lumina-accordion__content">{children}</div>
  </RadixAccordion.Content>
))
AccordionContent.displayName = 'AccordionContent'
