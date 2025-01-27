'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110 focus:ring-primary/50 border border-white/10',
    secondary: 'bg-white/5 text-white hover:bg-white/10 focus:ring-white/50 border border-white/10',
    outline: 'border border-white/20 text-white hover:bg-white/5 focus:ring-white/50',
    ghost: 'hover:bg-white/5 text-white border-transparent focus:ring-white/50'
  }

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  }

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        'transform transition-all duration-300 hover:-translate-y-0.5',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button