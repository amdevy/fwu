import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function HeroV2() {
  const t = await getTranslations()
  const locale = await getLocale()
  return (
    <section className="hero-v2">
      <div className="hv2-text">
        <div className="kicker">{t('home.manifestoKicker')}</div>
        <h1>
          {locale === 'ua' ? (
            <>Захід, <em>що вміє</em><br/>шити.</>
          ) : (
            <>A west <em>that knows</em><br/>how to tailor.</>
          )}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 480 }}>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg-muted)', margin: 0 }}>
            {t('home.manifestoBody')}
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/designers" className="hairline-btn solid">{t('home.enter')}</Link>
            <Link href="/catalog" className="hairline-btn">{t('common.toCatalog')}</Link>
          </div>
        </div>
      </div>
      <div className="hv2-photo">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80" alt="editorial" />
        <div className="hv2-caption">
          <span>{locale === 'ua' ? 'Капсула №01' : 'Capsule N°01'}</span>
          <span>{locale === 'ua' ? 'Фото — А. Романчук' : 'Photo — A. Romanchuk'}</span>
        </div>
      </div>
    </section>
  )
}
