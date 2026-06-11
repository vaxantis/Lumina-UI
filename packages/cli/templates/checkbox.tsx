'use client'

import * as React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {}

export const Checkbox = React.forwardRef<React.ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ className, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion()
    return (
      <RadixCheckbox.Root ref={ref} className={clsx('lumina-checkbox', className)} {...props}>
        <RadixCheckbox.Indicator className="lumina-checkbox__indicator" asChild>
          <AnimatePresence mode="wait">
            {props.checked === 'indeterminate' ? (
              <motion.svg key="indeterminate" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                aria-hidden="true"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.12 }}>
                <line x1="5" y1="12" x2="19" y2="12" />
              </motion.svg>
            ) : (
              <motion.svg key="check" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.12 }}>
                <polyline points="20 6 9 17 4 12" />
              </motion.svg>
            )}
          </AnimatePresence>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    )
  },
)
Checkbox.displayName = 'Checkbox'
