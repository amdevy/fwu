'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

export function MobileMenu() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const switchLang = (next: 'ua' | 'en') => {
    if (next === locale) return
    router.replace(pathname, { locale: next })
  }

  const items: Array<[string, string]> = [
    ['/designers', t('nav.designers')],
    ['/pop-up', t('nav.popup')],
    ['/projects', t('nav.projects')],
    ['/about', t('nav.about')],
    ['/partners', t('nav.partners')],
    ['/collaboration', t('nav.collaboration')],
    ['/contacts', t('nav.contacts')],
  ]

  return (
    <>
      <button
        className="fw-burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`bar${open ? ' x1' : ''}`} />
        <span className={`bar${open ? ' x2' : ''}`} />
      </button>

      {mounted && createPortal(
        <div className={`fw-mobile-sheet${open ? ' open' : ''}`} role="dialog" aria-modal="true">
          <button
            className="fw-mobile-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span /><span />
          </button>
          <nav className="fw-mobile-nav">
            {items.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`fw-m-link${pathname === href || pathname.startsWith(href + '/') ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="fw-mobile-foot">
            <div className="lang-toggle">
              <button className={locale === 'ua' ? 'on' : ''} onClick={() => switchLang('ua')}>UA</button>
              <button className={locale === 'en' ? 'on' : ''} onClick={() => switchLang('en')}>EN</button>
            </div>
            <a href="mailto:contact@fashionwest.ua" className="fw-m-mail">contact@fashionwest.ua</a>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
