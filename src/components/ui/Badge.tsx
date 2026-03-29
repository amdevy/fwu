import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'wine' | 'forest'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider',
        {
          'bg-sand text-black': variant === 'default',
          'bg-wine text-white': variant === 'wine',
          'bg-forest text-white': variant === 'forest',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
