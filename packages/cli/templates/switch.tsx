'use client'

import * as React from 'react'
import * as RadixSwitch from '@radix-ui/react-switch'
import { motion, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {}

export const Switch = React.forwardRef<React.ElementRef<typeof RadixSwitch.Root>, SwitchProps>(
  ({ className, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion()
    const [isChecked, setIsChecked] = React.useState(
      checked !== undefined ? checked : (defaultChecked ?? false),
    )
    React.useEffect(() => { if (checked !== undefined) setIsChecked(checked) }, [checked])
    const handleCheckedChange = (value: boolean) => {
      if (checked === undefined) setIsChecked(value)
      onCheckedChange?.(value)
    }
    return (
      <RadixSwitch.Root ref={ref} className={clsx('lumina-switch', className)}
        checked={checked} defaultChecked={defaultChecked} onCheckedChange={handleCheckedChange} {...props}>
        <RadixSwitch.Thumb asChild>
          <motion.span className="lumina-switch__thumb"
            animate={{ x: isChecked ? '1rem' : '0rem' }}
            transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 30 }} />
        </RadixSwitch.Thumb>
      </RadixSwitch.Root>
    )
  },
)
Switch.displayName = 'Switch'
