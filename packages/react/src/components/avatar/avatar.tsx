'use client'

import * as React from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { cn } from '../../lib/cn'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
  size?: AvatarSize
}

export const Avatar = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  AvatarProps
>(({ size = 'md', className, ...props }, ref) => (
  <RadixAvatar.Root
    ref={ref}
    className={cn('lumina-avatar', `lumina-avatar--${size}`, className)}
    {...props}
  />
))
Avatar.displayName = 'Avatar'

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Image> {}

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <RadixAvatar.Image
    ref={ref}
    className={cn('lumina-avatar__image', className)}
    {...props}
  />
))
AvatarImage.displayName = 'AvatarImage'

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Fallback> {}

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <RadixAvatar.Fallback
    ref={ref}
    className={cn('lumina-avatar__fallback', className)}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarFallback'
