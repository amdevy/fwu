'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark'
}

export function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: 'uk' | 'en') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale('uk')}
        className={cn(
          'px-1.5 py-0.5 transition-colors',
          locale === 'uk'
            ? variant === 'light' ? 'text-white' : 'text-black'
            : variant === 'light' ? 'text-white/40 hover:text-white/70' : 'text-sage hover:text-black'
        )}
      >
        UK
      </button>
      <span className={variant === 'light' ? 'text-white/30' : 'text-light-gray'}>/</span>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-1.5 py-0.5 transition-colors',
          locale === 'en'
            ? variant === 'light' ? 'text-white' : 'text-black'
            : variant === 'light' ? 'text-white/40 hover:text-white/70' : 'text-sage hover:text-black'
        )}
      >
        EN
      </button>
    </div>
  )
}
