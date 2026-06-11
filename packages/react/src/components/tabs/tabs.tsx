'use client'

import * as React from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root> {}

export const Tabs = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Root>,
  TabsProps
>(({ className, ...props }, ref) => (
  <RadixTabs.Root
    ref={ref}
    className={cn('lumina-tabs', className)}
    {...props}
  />
))
Tabs.displayName = 'Tabs'

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.List> {}

export const TabsList = React.forwardRef<
  React.ElementRef<typeof RadixTabs.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <RadixTabs.List
    ref={ref}
    className={cn('lumina-tabs__list', className)}
    {...props}
  />
))
TabsList.displayName = 'TabsList'

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {}

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TabsTriggerProps
>(({ className, children, ...props }, ref) => (
  <RadixTabs.Trigger
    ref={ref}
    className={cn('lumina-tabs__trigger', className)}
    {...props}
  >
    {children}
  </RadixTabs.Trigger>
))
TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Content> {}

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  TabsContentProps
>(({ className, children, ...props }, ref) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <RadixTabs.Content
      ref={ref}
      className={cn('lumina-tabs__content', className)}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={props.value}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </RadixTabs.Content>
  )
})
TabsContent.displayName = 'TabsContent'
