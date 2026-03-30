'use client'

import { Link } from '@/i18n/navigation'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = transparent && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-off-white/90 backdrop-blur-md shadow-sm'
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className={cn(
              'font-heading text-base uppercase tracking-[0.2em] transition-colors',
              isTransparent ? 'text-off-white' : 'text-wine'
            )}>
              Fashion West
            </span>
          </Link>

          {/* Center nav */}
          <Navigation isTransparent={isTransparent} />

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher variant={isTransparent ? 'light' : 'dark'} />
            </div>

            <Link href="/contacts" className="hidden lg:block">
              <span
                className={cn(
                  'inline-block px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-colors',
                  isTransparent
                    ? 'bg-wine text-white hover:bg-wine-dark'
                    : 'bg-wine text-white hover:bg-wine-dark'
                )}
              >
                {t('joinPlatform')}
              </span>
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'p-2 lg:hidden',
                isTransparent ? 'text-white' : 'text-black'
              )}
              aria-label={t('openMenu')}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
