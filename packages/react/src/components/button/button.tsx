'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Render as the child element (polymorphic via Radix Slot) */
  asChild?: boolean
  /** Shows a spinner and sets aria-busy */
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      asChild = false,
      loading = false,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion()

    const classes = cn(
      'lumina-button',
      `lumina-button--${variant}`,
      `lumina-button--${size}`,
      className,
    )

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      )
    }

    // Cast through unknown to bridge React's DOM event types and Framer Motion's.
    // ButtonProps (the public API) stays on standard ComponentPropsWithoutRef<'button'>.
    const motionProps = props as unknown as HTMLMotionProps<'button'>

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled ?? loading}
        data-loading={loading ? 'true' : undefined}
        aria-busy={loading || undefined}
        {...(shouldReduceMotion ? {} : { whileTap: { scale: 0.97 } })}
        transition={{ duration: 0.1 }}
        {...motionProps}
      >
        {loading && (
          <motion.span
            className="lumina-button__spinner"
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
        )}
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
