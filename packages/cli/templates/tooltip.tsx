'use client'

import * as React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'

export interface TooltipProviderProps extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Provider> {}
export function TooltipProvider({ delayDuration = 400, ...props }: TooltipProviderProps) {
  return <RadixTooltip.Provider delayDuration={delayDuration} {...props} />
}

const TooltipContext = React.createContext<{ open: boolean }>({ open: false })

export interface TooltipProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  delayDuration?: number
  children: React.ReactNode
}

export function Tooltip({ open: openProp, onOpenChange, defaultOpen = false, delayDuration, children }: TooltipProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const isControlled = openProp !== undefined
  const open = isControlled ? (openProp as boolean) : uncontrolledOpen
  const handleOpenChange = React.useCallback((value: boolean) => {
    if (!isControlled) setUncontrolledOpen(value)
    onOpenChange?.(value)
  }, [isControlled, onOpenChange])
  return (
    <TooltipContext.Provider value={{ open }}>
      <RadixTooltip.Root open={open} onOpenChange={handleOpenChange} delayDuration={delayDuration}>
        {children}
      </RadixTooltip.Root>
    </TooltipContext.Provider>
  )
}

export const TooltipTrigger = RadixTooltip.Trigger

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
}

export function TooltipContent({ children, className, side = 'top', sideOffset = 6, align = 'center', ...props }: TooltipContentProps) {
  const { open } = React.useContext(TooltipContext)
  const shouldReduceMotion = useReducedMotion()
  return (
    <AnimatePresence>
      {open && (
        <RadixTooltip.Portal forceMount>
          <RadixTooltip.Content asChild forceMount side={side} sideOffset={sideOffset} align={align}>
            <motion.div className={clsx('lumina-tooltip', className)}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
              transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
              {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}>
              {children}
              <RadixTooltip.Arrow className="lumina-tooltip__arrow" />
            </motion.div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      )}
    </AnimatePresence>
  )
}
