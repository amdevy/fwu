import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.contacts')} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Звʼязок з редакцією, шоурумом і відділом партнерств.'
      : 'Editorial, showroom and partnerships contact.',
    alternates: altsFor(locale, '/contacts'),
  }
}

export default async function ContactsPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const blocks = ua
    ? [
        { kicker: 'Редакція', title: 'editorial@fashionwest.ua', sub: 'Інтервʼю, зйомки, журнал' },
        { kicker: 'Шоурум', title: 'showroom@fashionwest.ua', sub: 'Ужгород, вул. Корзо 12 · за записом' },
        { kicker: 'Партнерства', title: 'partners@fashionwest.ua', sub: 'Колаборації, виставки, інституції' },
        { kicker: 'Преса', title: 'press@fashionwest.ua', sub: 'Релізи, акредитація на покази' },
      ]
    : [
        { kicker: 'Editorial', title: 'editorial@fashionwest.ua', sub: 'Interviews, shoots, journal' },
        { kicker: 'Showroom', title: 'showroom@fashionwest.ua', sub: 'Uzhhorod, 12 Korzo St · by appointment' },
        { kicker: 'Partnerships', title: 'partners@fashionwest.ua', sub: 'Collaborations, exhibitions, institutions' },
        { kicker: 'Press', title: 'press@fashionwest.ua', sub: 'Releases, runway accreditation' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.contacts')}</h1>
        <div className="sh-sub">{ua ? 'Чотири адреси, одна редакція.' : 'Four addresses, one editorial.'}</div>
      </div>

      <div
        className="contacts-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          margin: '0 var(--gutter) 64px',
          borderTop: '1px solid var(--fg)',
        }}
      >
        {blocks.map((b, i) => (
          <a
            key={i}
            href={`mailto:${b.title}`}
            style={{
              padding: '48px 32px',
              borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
              borderBottom: '1px solid var(--rule)',
              display: 'block',
            }}
          >
            <div className="kicker" style={{ marginBottom: 16 }}>{b.kicker}</div>
            <div className="display" style={{ fontSize: 28, marginBottom: 8 }}>{b.title}</div>
            <div style={{ fontSize: 13, color: 'var(--fg-muted)' }}>{b.sub}</div>
          </a>
        ))}
      </div>

      <div style={{ padding: '0 var(--gutter) 120px', maxWidth: 720, margin: '0 auto' }}>
        <div className="kicker" style={{ marginBottom: 8 }}>{ua ? 'Шоурум' : 'Showroom'}</div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)' }}>
          {ua
            ? 'Ужгород, вул. Корзо 12. Прийом — за попереднім записом, вівторок–субота, 12:00–19:00.'
            : 'Uzhhorod, 12 Korzo Street. By appointment, Tuesday–Saturday, 12:00–19:00.'}
        </p>
      </div>
    </section>
  )
}
