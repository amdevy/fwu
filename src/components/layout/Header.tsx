'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  const link = (href: string, label: string, muted = false) => (
    <Link
      href={href}
      className={`fw-nav-link${muted ? ' muted' : ''}${isActive(href) ? ' active' : ''}`}
    >
      {label}
    </Link>
  )

  const switchLang = (next: 'ua' | 'en') => {
    if (next === locale) return
    router.replace(pathname, { locale: next })
  }

  return (
    <nav className="fw-nav">
      <div className="fw-nav-inner">
        <div className="fw-nav-left">
          {link('/designers', t('nav.designers'))}
          {link('/pop-up', t('nav.popup'))}
          {link('/projects', t('nav.projects'), true)}
          {link('/about', t('nav.about'), true)}
        </div>

        <Link href="/" className="fw-logo">
          <span>Fashion West Ukraine</span>
          <span className="ua">
            {locale === 'ua' ? 'Національна fashion-платформа нового покоління' : 'A national next-generation fashion platform'}
          </span>
        </Link>

        <div className="fw-nav-right">
          {link('/partners', t('nav.partners'), true)}
          {link('/collaboration', t('nav.collaboration'))}
          {link('/contacts', t('nav.contacts'), true)}
          <div className="lang-toggle">
            <button className={locale === 'ua' ? 'on' : ''} onClick={() => switchLang('ua')}>
              UA
            </button>
            <button className={locale === 'en' ? 'on' : ''} onClick={() => switchLang('en')}>
              EN
            </button>
          </div>
        </div>

        <MobileMenu />
      </div>
    </nav>
  )
}
