'use client'

import * as React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { tooltipVariants, fastTransition } from '../../animations/variants'

/* ── Provider ────────────────────────────────────── */

export interface TooltipProviderProps
  extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Provider> {}

function TooltipProvider({ delayDuration = 400, ...props }: TooltipProviderProps) {
  return <RadixTooltip.Provider delayDuration={delayDuration} {...props} />
}

/* ── Root (tracks open state for AnimatePresence) ── */

interface TooltipCtx {
  open: boolean
}

const TooltipContext = React.createContext<TooltipCtx>({ open: false })

export interface TooltipProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  delayDuration?: number
  disableHoverableContent?: boolean
  children: React.ReactNode
}

function Tooltip({
  open: openProp,
  onOpenChange,
  defaultOpen = false,
  delayDuration,
  disableHoverableContent,
  children,
}: TooltipProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const isControlled = openProp !== undefined
  const open = isControlled ? (openProp as boolean) : uncontrolledOpen

  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      if (!isControlled) setUncontrolledOpen(value)
      onOpenChange?.(value)
    },
    [isControlled, onOpenChange],
  )

  return (
    <TooltipContext.Provider value={{ open }}>
      <RadixTooltip.Root
        open={open}
        onOpenChange={handleOpenChange}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        {children}
      </RadixTooltip.Root>
    </TooltipContext.Provider>
  )
}

/* ── Trigger ─────────────────────────────────────── */

const TooltipTrigger = RadixTooltip.Trigger
TooltipTrigger.displayName = 'TooltipTrigger'

/* ── Content (animated) ──────────────────────────── */

export interface TooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
}

function TooltipContent({
  children,
  className,
  side = 'top',
  sideOffset = 6,
  align = 'center',
  ...props
}: TooltipContentProps) {
  const { open } = React.useContext(TooltipContext)
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {open && (
        <RadixTooltip.Portal forceMount>
          <RadixTooltip.Content
            asChild
            forceMount
            side={side}
            sideOffset={sideOffset}
            align={align}
          >
            <motion.div
              className={cn('lumina-tooltip', className)}
              variants={tooltipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={
                shouldReduceMotion ? { duration: 0.08 } : { ...fastTransition }
              }
              {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
            >
              {children}
              <RadixTooltip.Arrow className="lumina-tooltip__arrow" />
            </motion.div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      )}
    </AnimatePresence>
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
