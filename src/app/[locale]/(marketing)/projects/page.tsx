import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('projects.title')} — ${t('brandFull')}`,
    description: t('projects.subtitle'),
    alternates: altsFor(locale, '/projects'),
  }
}

export default async function ProjectsPage() {
  const t = await getTranslations()
  const locale = await getLocale()
  const ua = locale === 'ua'

  const items = [
    { key: 'shows' as const },
    { key: 'models' as const },
    { key: 'hackathon' as const },
    { key: 'international' as const },
    { key: 'education' as const },
    { key: 'future' as const },
  ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('projects.title')}</h1>
        <div className="sh-sub">{t('projects.subtitle')}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <p className="lede">
          {ua
            ? 'FASHION WEST UKRAINE — це не одна подія, а екосистема ініціатив: показів, премій, освітніх програм та міжнародних колаборацій.'
            : 'FASHION WEST UKRAINE is not a single event but an ecosystem of initiatives: shows, awards, educational programmes and international collaborations.'}
        </p>
      </div>

      <div className="projects-list">
        {items.map((it, i) => (
          <div key={it.key} className="project-row">
            <div className="num">№{String(i + 1).padStart(2, '0')}</div>
            <h3>{t(`projects.${it.key}`)}</h3>
            <p>{t(`projects.${it.key}Body`)}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '64px var(--gutter) 120px', textAlign: 'center' }}>
        <div className="kicker" style={{ marginBottom: 12 }}>
          {ua ? 'Долучитися до екосистеми' : 'Join the ecosystem'}
        </div>
        <p style={{ color: 'var(--fg-muted)', maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.6 }}>
          {ua
            ? 'Ми відкриті до партнерств, інтеграцій та спільних проєктів. Залишайте запит — ми звʼяжемося.'
            : 'We are open to partnerships, integrations and joint projects. Send us a request — we will be in touch.'}
        </p>
        <Link href="/collaboration" className="hairline-btn solid">
          {t('common.collaborate')} →
        </Link>
      </div>
    </section>
  )
}
