'use client'

import * as React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'
import {
  fadeVariants,
  dialogContentVariants,
  defaultTransition,
  fastTransition,
} from '../../animations/variants'

/* ── Context ─────────────────────────────────────── */

interface DialogCtx {
  open: boolean
}

const DialogContext = React.createContext<DialogCtx>({ open: false })

/* ── Root ────────────────────────────────────────── */

export interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  modal?: boolean
  children: React.ReactNode
}

function Dialog({
  open: openProp,
  onOpenChange,
  defaultOpen = false,
  modal = true,
  children,
}: DialogProps) {
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
    <DialogContext.Provider value={{ open }}>
      <RadixDialog.Root open={open} onOpenChange={handleOpenChange} modal={modal}>
        {children}
      </RadixDialog.Root>
    </DialogContext.Provider>
  )
}

/* ── Trigger / Close ─────────────────────────────── */

const DialogTrigger = RadixDialog.Trigger
DialogTrigger.displayName = 'DialogTrigger'

const DialogClose = RadixDialog.Close
DialogClose.displayName = 'DialogClose'

/* ── Content (animated) ──────────────────────────── */

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  overlayClassName?: string
}

function DialogContent({
  children,
  className,
  overlayClassName,
  ...props
}: DialogContentProps) {
  const { open } = React.useContext(DialogContext)
  const shouldReduceMotion = useReducedMotion()

  const contentVars = shouldReduceMotion ? fadeVariants : dialogContentVariants

  // Use forceMount on the Portal so AnimatePresence can animate the exit.
  // Do NOT use asChild here — AnimatePresence can't receive a forwarded ref.
  return (
    <RadixDialog.Portal forceMount>
      <AnimatePresence>
        {open && (
          <RadixDialog.Overlay forceMount className={cn('lumina-dialog-overlay', overlayClassName)} asChild>
            <motion.div
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={fastTransition}
            />
          </RadixDialog.Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <RadixDialog.Content
            forceMount
            className={cn('lumina-dialog-content', className)}
            asChild
          >
            <motion.div
              variants={contentVars}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={defaultTransition}
              {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
            >
              {children}
            </motion.div>
          </RadixDialog.Content>
        )}
      </AnimatePresence>
    </RadixDialog.Portal>
  )
}

/* ── Sub-components ──────────────────────────────── */

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div className={cn('lumina-dialog-header', className)} {...props} />
}

export interface DialogTitleProps
  extends React.ComponentPropsWithoutRef<typeof RadixDialog.Title> {}

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <RadixDialog.Title className={cn('lumina-dialog-title', className)} {...props} />
  )
}

export interface DialogDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof RadixDialog.Description> {}

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <RadixDialog.Description
      className={cn('lumina-dialog-description', className)}
      {...props}
    />
  )
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={cn('lumina-dialog-footer', className)} {...props} />
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
}
