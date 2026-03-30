'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  const platformLinks = [
    { label: 'Agency', href: '/agency' as const },
    { label: 'Models', href: '/models' as const },
    { label: 'Events', href: '/events' as const },
    { label: 'Education', href: '/education' as const },
  ]

  const companyLinks = [
    { label: t('aboutUs'), href: '/about' as const },
    { label: t('culture'), href: '/culture' as const },
    { label: t('press'), href: '/about' as const },
    { label: t('careers'), href: '/contacts' as const },
  ]

  const connectLinks = [
    { label: t('contacts'), href: '/contacts' as const },
    { label: 'Instagram', href: 'https://instagram.com', external: true },
    { label: 'Facebook', href: 'https://facebook.com', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  ]

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-20">
          {/* Brand */}
          <div className="max-w-sm">
            <span className="font-heading text-base uppercase tracking-[0.2em] text-off-white">Fashion West</span>
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              {t('description')}
            </p>
            <p className="mt-6 font-heading text-2xl text-white/20 uppercase md:text-3xl" style={{ lineHeight: '1.1' }}>
              {t('tagline')}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[10px] font-medium tracking-[0.25em] text-white/30 uppercase">
              {t('platformTitle')}
            </h3>
            <ul className="mt-5 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-medium tracking-[0.25em] text-white/30 uppercase">
              {t('companyTitle')}
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[10px] font-medium tracking-[0.25em] text-white/30 uppercase">
              {t('connectTitle')}
            </h3>
            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href as '/contacts'}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-xs text-white/30 transition-colors hover:text-white/60">
              {t('privacy')}
            </Link>
            <Link href="/about" className="text-xs text-white/30 transition-colors hover:text-white/60">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
