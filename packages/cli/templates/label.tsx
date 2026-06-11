'use client'

import * as React from 'react'
import * as RadixLabel from '@radix-ui/react-label'
import { clsx } from 'clsx'

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof RadixLabel.Root> {}

export const Label = React.forwardRef<React.ElementRef<typeof RadixLabel.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <RadixLabel.Root ref={ref} className={clsx('lumina-label', className)} {...props} />
  ),
)
Label.displayName = 'Label'
