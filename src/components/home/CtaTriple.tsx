import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function CtaTriple() {
  const t = await getTranslations()
  const locale = await getLocale()
  const ua = locale === 'ua'

  return (
    <section className="home-cta">
      <div className="kicker" style={{ marginBottom: 12 }}>
        {ua ? 'Долучитися до платформи' : 'Join the platform'}
      </div>
      <h2 className="display" style={{ fontSize: 44, letterSpacing: '-0.02em', maxWidth: 720, margin: '0 auto' }}>
        {ua
          ? 'Відкриті до партнерств, інтеграцій та спільних проєктів.'
          : 'Open to partnerships, integrations and joint projects.'}
      </h2>
      <div className="home-cta-row">
        <Link href="/partners" className="hairline-btn solid">{t('common.becomePartner')} →</Link>
        <Link href="/collaboration" className="hairline-btn">{t('common.joinFwu')} →</Link>
        <Link href="/collaboration" className="hairline-btn">{t('common.collaborate')} →</Link>
      </div>
    </section>
  )
}
