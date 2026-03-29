import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  color?: 'sand' | 'light-gray'
}

export function Divider({ className, color = 'light-gray' }: DividerProps) {
  return (
    <hr
      className={cn(
        'border-t',
        color === 'sand' ? 'border-sand' : 'border-light-gray',
        className
      )}
    />
  )
}
