'use client'

import * as React from 'react'
import * as RadixSeparator from '@radix-ui/react-separator'
import { cn } from '../../lib/cn'

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof RadixSeparator.Root> {}

export const Separator = React.forwardRef<
  React.ElementRef<typeof RadixSeparator.Root>,
  SeparatorProps
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <RadixSeparator.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'lumina-separator',
      orientation === 'horizontal' ? 'lumina-separator--horizontal' : 'lumina-separator--vertical',
      className,
    )}
    {...props}
  />
))
Separator.displayName = 'Separator'
