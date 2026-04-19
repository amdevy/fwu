import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.offers')} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Закриті пропозиції, передзамовлення капсул і приватні перегляди.'
      : 'Closed offers, capsule pre-orders and private viewings.',
    alternates: altsFor(locale, '/offers'),
  }
}

export default async function OffersPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const offers = ua
    ? [
        { num: 'N°01', kicker: 'Передзамовлення', title: 'Капсула SS / WALNUT', body: 'KOVACH studio, 24 силуети, фарбовані корою горіха. Виробництво — травень 2026.', cta: 'Залишити запит' },
        { num: 'N°02', kicker: 'Приватний перегляд', title: 'Закритий шоурум, Ужгород', body: 'Один день, шість дизайнерів, без преси. Запис обовʼязковий.', cta: 'Записатися' },
        { num: 'N°03', kicker: 'Bespoke', title: 'Індивідуальне ательє HORA', body: 'Костюм або сукня на замовлення Олега Петренка. Терм — від 6 тижнів.', cta: 'Дізнатися більше' },
      ]
    : [
        { num: 'N°01', kicker: 'Pre-order', title: 'Capsule SS / WALNUT', body: 'KOVACH studio, 24 silhouettes, walnut-bark dyed. Production — May 2026.', cta: 'Request' },
        { num: 'N°02', kicker: 'Private viewing', title: 'Closed showroom, Uzhhorod', body: 'One day, six designers, no press. By appointment.', cta: 'Book' },
        { num: 'N°03', kicker: 'Bespoke', title: 'HORA private atelier', body: 'A made-to-measure suit or dress by Oleh Petrenko. Lead time from 6 weeks.', cta: 'Learn more' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.offers')}</h1>
        <div className="sh-sub">{ua ? 'Закриті пропозиції редакції' : 'Closed editorial offers'}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 96px' }}>
        {offers.map((o, i) => (
          <div
            key={i}
            className="offers-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr auto',
              gap: 32,
              alignItems: 'baseline',
              padding: '40px 0',
              borderTop: '1px solid var(--rule)',
            }}
          >
            <div>
              <div className="display" style={{ fontSize: 40 }}>{o.num}</div>
              <div className="kicker" style={{ marginTop: 8 }}>{o.kicker}</div>
            </div>
            <div style={{ maxWidth: 560 }}>
              <h3 className="display" style={{ fontSize: 32, marginBottom: 12 }}>{o.title}</h3>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6 }}>{o.body}</p>
            </div>
            <a href="mailto:offers@fashionwest.ua" className="hairline-btn">{o.cta} →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
