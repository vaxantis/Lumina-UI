'use client'

import * as React from 'react'
import { clsx } from 'clsx'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize
  invalid?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', invalid = false, className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx('lumina-input', `lumina-input--${size}`, className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ invalid = false, className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx('lumina-input', 'lumina-textarea', className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
