'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useCart } from '@/components/providers/CartProvider'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { cartCount } = useCart()

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
          {link('/catalog', t('nav.catalog'))}
          {link('/about', t('nav.about'), true)}
        </div>

        <Link href="/" className="fw-logo">
          <span>Fashion West Ukraine</span>
          <span className="ua">
            {locale === 'ua' ? 'Платформа моди Заходу' : 'Western fashion platform'}
          </span>
        </Link>

        <div className="fw-nav-right">
          {link('/partners', t('nav.partners'), true)}
          {link('/contacts', t('nav.contacts'), true)}
          <div className="lang-toggle">
            <button className={locale === 'ua' ? 'on' : ''} onClick={() => switchLang('ua')}>
              UA
            </button>
            <button className={locale === 'en' ? 'on' : ''} onClick={() => switchLang('en')}>
              EN
            </button>
          </div>
          <Link href="/cart" className="fw-nav-link fw-cart-badge">
            {t('nav.cart')}
            {cartCount > 0 && <span className="count">{cartCount}</span>}
          </Link>
        </div>

        <Link href="/cart" className="fw-nav-link fw-cart-badge fw-cart-mobile">
          {t('nav.cart')}
          {cartCount > 0 && <span className="count">{cartCount}</span>}
        </Link>
        <MobileMenu />
      </div>
    </nav>
  )
}
