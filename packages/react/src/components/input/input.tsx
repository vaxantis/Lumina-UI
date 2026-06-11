'use client'

import * as React from 'react'
import { cn } from '../../lib/cn'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize
  /** Marks the field as invalid and applies error styling */
  invalid?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', invalid = false, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'lumina-input',
          `lumina-input--${size}`,
          className,
        )}
        aria-invalid={invalid || undefined}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ invalid = false, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn('lumina-input', 'lumina-textarea', className)}
        aria-invalid={invalid || undefined}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
