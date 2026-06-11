'use client'

import * as React from 'react'
import { cn } from '../../lib/cn'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn('lumina-badge', `lumina-badge--${variant}`, className)}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'
