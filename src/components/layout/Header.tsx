'use client'

import { Link } from '@/i18n/navigation'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Button } from '@/components/ui/Button'

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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
          <Link href="/" className="flex-shrink-0">
            <span
              className={cn(
                'font-heading text-lg tracking-[0.15em] uppercase transition-colors md:text-xl',
                isTransparent ? 'text-white' : 'text-black'
              )}
            >
              Fashion West
            </span>
          </Link>

          <Navigation isTransparent={isTransparent} />

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher variant={isTransparent ? 'light' : 'dark'} />
            </div>

            <Link href="/contacts" className="hidden lg:block">
              <Button variant={isTransparent ? 'outline' : 'primary'} size="sm">
                {t('apply')}
              </Button>
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
