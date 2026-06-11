'use client'

import * as React from 'react'
import * as RadixLabel from '@radix-ui/react-label'
import { cn } from '../../lib/cn'

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof RadixLabel.Root> {}

export const Label = React.forwardRef<
  React.ElementRef<typeof RadixLabel.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <RadixLabel.Root
    ref={ref}
    className={cn('lumina-label', className)}
    {...props}
  />
))

Label.displayName = 'Label'
