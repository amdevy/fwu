import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { altsFor, pageLd, SITE_URL, localeUrl } from '@/lib/seo'
import JsonLd from '@/components/seo/JsonLd'

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

  const ld = [
    ...pageLd({
      locale,
      route: '/projects',
      name: t('projects.title'),
      description: t('projects.subtitle'),
      brandName: t('brandFull'),
      pageType: 'CollectionPage',
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t(`projects.${it.key}`),
        description: t(`projects.${it.key}Body`),
        url: `${SITE_URL}${localeUrl(locale, '/projects')}#${it.key}`,
      })),
    },
  ]

  return (
    <section className="fade-in">
      <JsonLd data={ld} />
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
          <div key={it.key} id={it.key} className="project-row">
            <div className="num">№{String(i + 1).padStart(2, '0')}</div>
            <h2>{t(`projects.${it.key}`)}</h2>
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
