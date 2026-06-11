import type { Variants, Transition } from 'framer-motion'

export const defaultTransition: Transition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
}

export const fastTransition: Transition = {
  duration: 0.12,
  ease: [0.4, 0, 0.2, 1],
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
}

export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit:    { opacity: 0, scale: 0.95 },
}

export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: 8 },
}

export const dialogContentVariants: Variants = {
  initial: { opacity: 0, scale: 0.96, y: -4 },
  animate: { opacity: 1, scale: 1,    y:  0 },
  exit:    { opacity: 0, scale: 0.96, y: -4 },
}

export const tooltipVariants: Variants = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit:    { opacity: 0, scale: 0.92 },
}
