import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function Manifesto() {
  const t = await getTranslations()
  return (
    <section style={{ padding: '120px var(--gutter)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start', maxWidth: 1400, margin: '0 auto' }}>
        <div className="kicker">{t('home.manifestoKicker')}</div>
        <div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', margin: '0 0 32px', lineHeight: 1.05 }}>
            {t('home.manifesto')}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg-muted)', maxWidth: 720, margin: '0 0 32px' }}>
            {t('home.manifestoBody')}
          </p>
          <Link href="/about" className="hairline-btn">{t('common.readMore')}</Link>
        </div>
      </div>
    </section>
  )
}
