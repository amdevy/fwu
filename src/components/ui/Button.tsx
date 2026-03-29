'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wine/50 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-wine text-white hover:bg-wine-dark': variant === 'primary',
            'border border-white text-white hover:bg-white/10': variant === 'outline',
            'text-wine hover:text-wine-dark hover:bg-wine/5': variant === 'ghost',
            'bg-forest text-white hover:bg-forest-light': variant === 'dark',
          },
          {
            'px-4 py-2 text-xs': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Завантаження...</span>
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
