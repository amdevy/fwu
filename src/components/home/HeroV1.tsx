import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function HeroV1() {
  const t = await getTranslations()
  const locale = await getLocale()
  return (
    <section className="hero-v1">
      <img className="hero-v1-img" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2400&q=80" alt="runway" />
      <div className="hero-scrim" />
      <div className="hero-corners">
        <div className="hc-top">
          <div className="hero-meta">{locale === 'ua' ? 'Випуск I · Весна 2026' : 'Issue I · Spring 2026'}</div>
          <div className="hero-meta">{locale === 'ua' ? 'Ужгород 48°37′N' : 'Uzhhorod 48°37′N'}</div>
        </div>
        <div className="hc-bottom">
          <div>
            <h1>{t('home.quoteHero1')}<br/><em>{t('home.quoteHero2')}</em></h1>
            <div className="hero-body">{t('home.manifestoBody')}</div>
          </div>
          <Link href="/designers" className="hairline-btn" style={{ borderColor: '#f5f5f4', color: '#f5f5f4' }}>
            {t('home.enter')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
