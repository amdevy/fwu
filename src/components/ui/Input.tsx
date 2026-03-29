'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-black">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full border bg-white px-4 py-3 text-sm text-black placeholder:text-sage transition-colors duration-200 focus:outline-none focus:border-wine',
            error ? 'border-wine' : 'border-light-gray',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-wine">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export { Input }
