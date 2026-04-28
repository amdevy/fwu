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
      ? 'Звʼязок з платформою FWU через Instagram.'
      : 'Reach the FWU platform via Instagram.',
    alternates: altsFor(locale, '/contacts'),
  }
}

export default async function ContactsPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const blocks = ua
    ? [
        { kicker: 'Платформа', title: '@fw.ukraine', sub: 'Маніфест, події, новини', href: 'https://www.instagram.com/fw.ukraine' },
        { kicker: 'Співпраця', title: '@fw.cooperation', sub: 'Партнерства, бренди, медіа, інтеграції', href: 'https://www.instagram.com/fw.cooperation' },
        { kicker: 'Threads', title: '@fw.ukraine', sub: 'Текстова стрічка платформи', href: 'https://www.threads.com/@fw.ukraine' },
        { kicker: 'Квитки', title: 'FWU 2026', sub: '2 травня · Мукачево · Darlin\u2019 Hall', href: 'https://mukachevo.karabas.com/fashion-west-ukraine-2026/order' },
      ]
    : [
        { kicker: 'Platform', title: '@fw.ukraine', sub: 'Manifesto, events, news', href: 'https://www.instagram.com/fw.ukraine' },
        { kicker: 'Cooperation', title: '@fw.cooperation', sub: 'Partnerships, brands, media, integrations', href: 'https://www.instagram.com/fw.cooperation' },
        { kicker: 'Threads', title: '@fw.ukraine', sub: 'Platform text feed', href: 'https://www.threads.com/@fw.ukraine' },
        { kicker: 'Tickets', title: 'FWU 2026', sub: '2 May · Mukachevo · Darlin\u2019 Hall', href: 'https://mukachevo.karabas.com/fashion-west-ukraine-2026/order' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.contacts')}</h1>
        <div className="sh-sub">{ua ? 'Усі робочі запити — у Direct.' : 'All working requests — via Direct.'}</div>
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
            href={b.href}
            target="_blank"
            rel="noreferrer"
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

      <div style={{ padding: '0 var(--gutter) 120px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div className="kicker" style={{ marginBottom: 8 }}>{ua ? 'Майданчик' : 'Venue'}</div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)' }}>
          {ua
            ? 'Fashion West Ukraine 2026 — 2 травня, Мукачево, Darlin\u2019 Hall. Закарпаття.'
            : 'Fashion West Ukraine 2026 — 2 May, Mukachevo, Darlin\u2019 Hall. Transcarpathia.'}
        </p>
      </div>
    </section>
  )
}
