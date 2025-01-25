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
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-2'
  
  const variants = {
    primary: 'bg-primary text-gray-900 hover:bg-primary/90 focus:ring-primary/50 border-gray-800/20',
    secondary: 'bg-secondary text-gray-900 hover:bg-secondary/90 focus:ring-secondary/50 border-gray-800/20',
    outline: 'border-2 border-gray-800 text-gray-900 hover:bg-primary hover:text-gray-900 focus:ring-primary/50',
    ghost: 'hover:bg-gray-100 text-gray-900 border-transparent focus:ring-gray-500/50'
  }

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg'
  }

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        'transform transition-transform duration-200',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <div className={cn(
        "flex items-center gap-2",
        "hover:scale-[1.02] active:scale-[0.98] transition-transform",
      )}>
        {isLoading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </div>
    </button>
  )
})

Button.displayName = 'Button'

export default Button