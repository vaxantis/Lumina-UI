'use client'

import * as React from 'react'
import { cn } from '../../lib/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn('lumina-card', className)} {...props} />
}
Card.displayName = 'Card'

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn('lumina-card__header', className)} {...props} />
}
CardHeader.displayName = 'CardHeader'

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={cn('lumina-card__title', className)} {...props} />
}
CardTitle.displayName = 'CardTitle'

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn('lumina-card__description', className)} {...props} />
}
CardDescription.displayName = 'CardDescription'

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('lumina-card__content', className)} {...props} />
}
CardContent.displayName = 'CardContent'

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cn('lumina-card__footer', className)} {...props} />
}
CardFooter.displayName = 'CardFooter'
