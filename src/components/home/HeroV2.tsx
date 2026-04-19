import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function HeroV2() {
  const t = await getTranslations()
  const locale = await getLocale()
  return (
    <section className="hero-v2">
      <div className="hv2-text">
        <div className="kicker hv2-rise" style={{ animationDelay: '60ms' }}>{t('home.manifestoKicker')}</div>
        <h1 className="hv2-h1">
          {locale === 'ua' ? (
            <>
              <span className="hv2-word" style={{ animationDelay: '160ms' }}>Тут</span>{' '}
              <span className="hv2-word hv2-em" style={{ animationDelay: '260ms' }}><em>формується</em></span>
              <br/>
              <span className="hv2-word" style={{ animationDelay: '380ms' }}>контекст.</span>
            </>
          ) : (
            <>
              <span className="hv2-word" style={{ animationDelay: '160ms' }}>Where</span>{' '}
              <span className="hv2-word" style={{ animationDelay: '240ms' }}>the</span>{' '}
              <span className="hv2-word hv2-em" style={{ animationDelay: '320ms' }}><em>context</em></span>
              <br/>
              <span className="hv2-word" style={{ animationDelay: '440ms' }}>is formed.</span>
            </>
          )}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 480 }}>
          <p className="hv2-rise" style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg-muted)', margin: 0, animationDelay: '560ms' }}>
            {t('home.manifestoBody')}
          </p>
          <div className="hv2-rise" style={{ display: 'flex', gap: 12, animationDelay: '680ms' }}>
            <Link href="/designers" className="hairline-btn solid">{t('home.enter')}</Link>
            <Link href="/catalog" className="hairline-btn">{t('common.toCatalog')}</Link>
          </div>
        </div>
      </div>
      <div className="hv2-photo">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80" alt="editorial" />
        <div className="hv2-veil" />
        <div className="hv2-caption">
          <span>{locale === 'ua' ? 'Капсула №01' : 'Capsule N°01'}</span>
          <span>{locale === 'ua' ? 'Фото — А. Романчук' : 'Photo — A. Romanchuk'}</span>
        </div>
      </div>
    </section>
  )
}
