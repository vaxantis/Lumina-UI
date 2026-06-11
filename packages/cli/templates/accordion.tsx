'use client'

import * as React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { clsx } from 'clsx'

export type AccordionProps =
  | (React.ComponentPropsWithoutRef<typeof RadixAccordion.Root> & { type: 'single' })
  | (React.ComponentPropsWithoutRef<typeof RadixAccordion.Root> & { type: 'multiple' })

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Root ref={ref} className={clsx('lumina-accordion', className)} {...props} />
  ),
)
Accordion.displayName = 'Accordion'

export const AccordionItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Item ref={ref} className={clsx('lumina-accordion__item', className)} {...props} />
  ),
)
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>>(
  ({ className, children, ...props }, ref) => (
    <RadixAccordion.Header className="lumina-accordion__header">
      <RadixAccordion.Trigger ref={ref} className={clsx('lumina-accordion__trigger', className)} {...props}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lumina-accordion__icon" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  ),
)
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>>(
  ({ className, children, ...props }, ref) => (
    <RadixAccordion.Content ref={ref} className={clsx('lumina-accordion__content-wrapper', className)} {...props}>
      <div className="lumina-accordion__content">{children}</div>
    </RadixAccordion.Content>
  ),
)
AccordionContent.displayName = 'AccordionContent'
