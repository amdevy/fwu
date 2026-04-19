import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.partners')} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Партнерство з шоурумами, ательє, виданнями та інституціями.'
      : 'Partnerships with showrooms, ateliers, publications and institutions.',
    alternates: altsFor(locale, '/partners'),
  }
}

export default async function PartnersPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const partners = ua
    ? [
        { kind: 'Бренд', name: 'LAUD', note: 'Індустрійний партнер платформи' },
        { kind: 'Освіта', name: 'Julia Rizak Makeup School', note: 'Beauty-партнер показів' },
        { kind: 'Медіа', name: 'FASHIONREALITY', note: 'Інформаційний партнер' },
        { kind: 'Видання', name: 'Vogue Ukraine', note: 'Медіа-партнер' },
        { kind: 'Локація', name: "Darlin Restobar, Мукачево", note: 'Майданчик FWU 2026' },
        { kind: 'Логістика', name: 'Нова Пошта', note: 'Доставка по Україні' },
      ]
    : [
        { kind: 'Brand', name: 'LAUD', note: 'Industry partner of the platform' },
        { kind: 'Education', name: 'Julia Rizak Makeup School', note: 'Runway beauty partner' },
        { kind: 'Media', name: 'FASHIONREALITY', note: 'Information partner' },
        { kind: 'Publication', name: 'Vogue Ukraine', note: 'Media partner' },
        { kind: 'Venue', name: 'Darlin Restobar, Mukachevo', note: 'Host venue of FWU 2026' },
        { kind: 'Logistics', name: 'Nova Poshta', note: 'Ukraine delivery' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.partners')}</h1>
        <div className="sh-sub">{ua ? 'Інституції, з якими ми працюємо.' : 'Institutions we work with.'}</div>
      </div>

      <div className="dix">
        {partners.map((p, i) => (
          <div key={i} className="dix-row" style={{ cursor: 'default' }}>
            <span className="n">№{String(i + 1).padStart(2, '0')}</span>
            <span className="name">{p.name}</span>
            <span className="brand">{p.kind}</span>
            <span className="disc">{p.note}</span>
            <span className="city" />
            <span className="arrow" />
          </div>
        ))}
      </div>

      <div style={{ padding: '64px var(--gutter) 120px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div className="kicker" style={{ marginBottom: 12 }}>{ua ? 'Стати партнером' : 'Become a partner'}</div>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 24 }}>
          {ua
            ? 'Якщо ви — шоурум, видання, інституція чи виробничий партнер, напишіть нам. Ми відкриті до спільних проєктів.'
            : 'If you are a showroom, publication, institution or production partner, write to us. We are open to collaborations.'}
        </p>
        <a href="mailto:partners@fashionwest.ua" className="hairline-btn solid">partners@fashionwest.ua →</a>
      </div>
    </section>
  )
}
