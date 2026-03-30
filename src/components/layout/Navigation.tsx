'use client'

import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Agency', href: '/agency' as const },
  { label: 'Models', href: '/models' as const },
  { label: 'Events', href: '/events' as const },
  { label: 'Education', href: '/education' as const },
  { label: 'Culture', href: '/culture' as const },
]

interface NavigationProps {
  isTransparent?: boolean
}

export function Navigation({ isTransparent }: NavigationProps) {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-xs font-medium tracking-[0.2em] uppercase transition-colors',
            isTransparent ? 'text-white/90 hover:text-white' : 'text-black/80 hover:text-black'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
