'use client'

import * as React from 'react'
import * as RadixSwitch from '@radix-ui/react-switch'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {}

export const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  SwitchProps
>(({ className, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
  const shouldReduceMotion = useReducedMotion()

  const [isChecked, setIsChecked] = React.useState(
    checked !== undefined ? checked : (defaultChecked ?? false),
  )

  React.useEffect(() => {
    if (checked !== undefined) setIsChecked(checked)
  }, [checked])

  const handleCheckedChange = (value: boolean) => {
    if (checked === undefined) setIsChecked(value)
    onCheckedChange?.(value)
  }

  // Thumb travel: track(2.5rem) - thumb(1rem) - 2×inset(0.1875rem) = 1.125rem
  const thumbX = isChecked ? '1.125rem' : '0.1875rem'

  return (
    <RadixSwitch.Root
      ref={ref}
      className={cn('lumina-switch', className)}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <RadixSwitch.Thumb asChild>
        <motion.span
          className="lumina-switch__thumb"
          animate={{ x: thumbX }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 550, damping: 32, mass: 0.8 }
          }
        />
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  )
})

Switch.displayName = 'Switch'
