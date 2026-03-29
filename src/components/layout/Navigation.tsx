'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const directions = [
  { label: 'Agency', href: '/agency' },
  { label: 'Models', href: '/models' },
  { label: 'Events', href: '/events' },
  { label: 'Education', href: '/education' },
  { label: 'Culture', href: '/culture' },
  { label: 'Club', href: '/club' },
]

interface NavigationProps {
  isTransparent?: boolean
}

export function Navigation({ isTransparent }: NavigationProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button
          className={cn(
            'flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors',
            isTransparent ? 'text-white hover:text-sand' : 'text-black hover:text-wine'
          )}
        >
          Напрямки
          <ChevronDown className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')} />
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 top-full pt-2">
            <div className="min-w-[200px] bg-white py-2 shadow-lg">
              {directions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-black transition-colors hover:bg-sand/30 hover:text-wine"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link
        href="/designers"
        className={cn(
          'text-sm font-medium tracking-wide uppercase transition-colors',
          isTransparent ? 'text-white hover:text-sand' : 'text-black hover:text-wine'
        )}
      >
        Дизайнери
      </Link>

      <Link
        href="/about"
        className={cn(
          'text-sm font-medium tracking-wide uppercase transition-colors',
          isTransparent ? 'text-white hover:text-sand' : 'text-black hover:text-wine'
        )}
      >
        Про нас
      </Link>

      <Link
        href="/contacts"
        className={cn(
          'text-sm font-medium tracking-wide uppercase transition-colors',
          isTransparent ? 'text-white hover:text-sand' : 'text-black hover:text-wine'
        )}
      >
        Контакти
      </Link>
    </nav>
  )
}
