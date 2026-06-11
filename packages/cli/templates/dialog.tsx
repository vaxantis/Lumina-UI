'use client'

import * as React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'

const DialogContext = React.createContext<{ open: boolean }>({ open: false })

export interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  modal?: boolean
  children: React.ReactNode
}

export function Dialog({ open: openProp, onOpenChange, defaultOpen = false, modal = true, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const isControlled = openProp !== undefined
  const open = isControlled ? (openProp as boolean) : uncontrolledOpen
  const handleOpenChange = React.useCallback((value: boolean) => {
    if (!isControlled) setUncontrolledOpen(value)
    onOpenChange?.(value)
  }, [isControlled, onOpenChange])
  return (
    <DialogContext.Provider value={{ open }}>
      <RadixDialog.Root open={open} onOpenChange={handleOpenChange} modal={modal}>{children}</RadixDialog.Root>
    </DialogContext.Provider>
  )
}

export const DialogTrigger = RadixDialog.Trigger
export const DialogClose = RadixDialog.Close

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  overlayClassName?: string
}

export function DialogContent({ children, className, overlayClassName, ...props }: DialogContentProps) {
  const { open } = React.useContext(DialogContext)
  const shouldReduceMotion = useReducedMotion()
  const contentVars = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0, scale: 0.96, y: -4 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.96, y: -4 } }
  return (
    <RadixDialog.Portal forceMount>
      <AnimatePresence>
        {open && (
          <RadixDialog.Overlay asChild forceMount>
            <motion.div className={clsx('lumina-dialog-overlay', overlayClassName)}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }} />
          </RadixDialog.Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <RadixDialog.Content asChild forceMount>
            <motion.div className={clsx('lumina-dialog-content', className)}
              variants={contentVars} initial="initial" animate="animate" exit="exit"
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}>
              {children}
            </motion.div>
          </RadixDialog.Content>
        )}
      </AnimatePresence>
    </RadixDialog.Portal>
  )
}

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('lumina-dialog-header', className)} {...props} />
}
export function DialogTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixDialog.Title>) {
  return <RadixDialog.Title className={clsx('lumina-dialog-title', className)} {...props} />
}
export function DialogDescription({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixDialog.Description>) {
  return <RadixDialog.Description className={clsx('lumina-dialog-description', className)} {...props} />
}
export function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('lumina-dialog-footer', className)} {...props} />
}
