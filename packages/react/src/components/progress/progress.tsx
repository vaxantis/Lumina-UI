'use client'

import * as React from 'react'
import * as RadixProgress from '@radix-ui/react-progress'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

export type ProgressVariant = 'default' | 'success' | 'warning' | 'destructive'

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof RadixProgress.Root> {
  variant?: ProgressVariant
}

export const Progress = React.forwardRef<
  React.ElementRef<typeof RadixProgress.Root>,
  ProgressProps
>(({ value, max = 100, variant = 'default', className, ...props }, ref) => {
  const shouldReduceMotion = useReducedMotion()
  const pct = value != null ? Math.min(Math.max(value, 0), max) / max * 100 : 0

  return (
    <RadixProgress.Root
      ref={ref}
      value={value}
      max={max}
      className={cn('lumina-progress', `lumina-progress--${variant}`, className)}
      {...props}
    >
      <RadixProgress.Indicator asChild>
        <motion.div
          className="lumina-progress__indicator"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: pct / 100 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
          }
          style={{ transformOrigin: 'left' }}
        />
      </RadixProgress.Indicator>
    </RadixProgress.Root>
  )
})

Progress.displayName = 'Progress'
