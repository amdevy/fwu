import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { altsFor } from '@/lib/seo'
import CollabForm from './CollabForm'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('collab.title')} — ${t('brandFull')}`,
    description: t('collab.subtitle'),
    alternates: altsFor(locale, '/collaboration'),
  }
}

export default async function CollaborationPage() {
  const t = await getTranslations()
  const locale = await getLocale()
  const ua = locale === 'ua'

  const directions = ['designers', 'brands', 'media', 'sponsors', 'international'] as const

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('collab.title')}</h1>
        <div className="sh-sub">{t('collab.subtitle')}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <p className="lede">
          {ua
            ? 'Платформа FWU відкрита для дизайнерів, брендів, медіа, спонсорів та міжнародних партнерів. Оберіть напрямок — і залишіть запит нижче.'
            : 'The FWU platform is open to designers, brands, media, sponsors and international partners. Choose a direction and send a request below.'}
        </p>
      </div>

      <div className="collab-grid">
        {directions.map((d, i) => (
          <div key={d} className="collab-cell">
            <div className="kicker">№{String(i + 1).padStart(2, '0')}</div>
            <h3>{t(`collab.${d}`)}</h3>
            <p>{t(`collab.${d}Body`)}</p>
          </div>
        ))}
        <div className="collab-cell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a href="#collab-form" className="hairline-btn solid">
            {t('collab.formTitle')} ↓
          </a>
        </div>
      </div>

      <CollabForm />
    </section>
  )
}
