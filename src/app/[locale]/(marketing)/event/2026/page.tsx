import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `FWU 2026 — ${t('brandFull')}`,
    description: locale === 'ua'
      ? '2 травня 2026, Мукачево, Darlin Hall. Покази, нетворкінг, сцена культури.'
      : '2 May 2026, Mukachevo, Darlin Hall. Runways, networking, cultural stage.',
    alternates: altsFor(locale, '/event/2026'),
  }
}

export default async function Event2026() {
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const program = ua
    ? [
        { time: '13:00', title: 'Відкриття. Welcome-зона', sub: 'Реєстрація гостей, преси, партнерів' },
        { time: '14:00', title: 'Панель: голоси індустрії', sub: 'Дизайнери, бренди, медіа — про вектори розвитку' },
        { time: '16:00', title: 'Покази капсул', sub: 'Вісім дизайнерських висловлювань поспіль' },
        { time: '18:30', title: 'Експо-зона', sub: 'Бренди, шоуруми, преса — у форматі прямого контакту' },
        { time: '20:00', title: 'Сцена культури', sub: 'Музика, перформанс, розмова' },
        { time: '23:00', title: 'Afterparty', sub: 'Закрита частина для учасників і партнерів' },
      ]
    : [
        { time: '13:00', title: 'Opening. Welcome zone', sub: 'Guest, press and partner registration' },
        { time: '14:00', title: 'Panel: voices of the industry', sub: 'Designers, brands, media — on directions of growth' },
        { time: '16:00', title: 'Capsule runways', sub: 'Eight designer statements in a row' },
        { time: '18:30', title: 'Expo zone', sub: 'Brands, showrooms, press — in direct contact format' },
        { time: '20:00', title: 'Cultural stage', sub: 'Music, performance, conversation' },
        { time: '23:00', title: 'Afterparty', sub: 'Closed segment for participants and partners' },
      ]

  const hosts = ua
    ? [
        { name: 'Богдан Штефанюк', sub: 'Ведучий, голос платформи', tag: '@bogdanshtefanyuk' },
        { name: 'Володимир Гончарук', sub: 'Ведучий, продюсер', tag: '@v_honcharuk' },
      ]
    : [
        { name: 'Bogdan Shtefaniuk', sub: 'Host, voice of the platform', tag: '@bogdanshtefanyuk' },
        { name: 'Volodymyr Honcharuk', sub: 'Host, producer', tag: '@v_honcharuk' },
      ]

  const partners = ['LAUD', 'Julia Rizak Makeup School', 'FASHIONREALITY', 'Vogue Ukraine', 'Darlin Restobar']

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°2026</div>
        <h1 className="sh-title">{ua ? 'FWU 2026' : 'FWU 2026'}</h1>
        <div className="sh-sub">{ua ? 'Не просто подія — середовище.' : 'Not just an event — an environment.'}</div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          margin: '0 var(--gutter) 64px',
          borderTop: '1px solid var(--fg)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        {[
          { k: ua ? 'Дата' : 'Date', v: ua ? '2 травня 2026' : '2 May 2026' },
          { k: ua ? 'Місце' : 'Venue', v: ua ? 'Darlin Hall, Мукачево' : 'Darlin Hall, Mukachevo' },
          { k: ua ? 'Формат' : 'Format', v: ua ? 'Покази · Експо · Сцена' : 'Runways · Expo · Stage' },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              padding: '40px 32px',
              borderRight: i < 2 ? '1px solid var(--rule)' : 'none',
            }}
          >
            <div className="kicker" style={{ marginBottom: 12 }}>{b.k}</div>
            <div className="display" style={{ fontSize: 28 }}>{b.v}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 var(--gutter) 96px' }}>
        <div className="kicker" style={{ marginBottom: 24 }}>{ua ? 'Програма' : 'Programme'}</div>
        {program.map((p, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 32,
              alignItems: 'baseline',
              padding: '28px 0',
              borderTop: '1px solid var(--rule)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.06em' }}>{p.time}</div>
            <div>
              <div className="display" style={{ fontSize: 24, marginBottom: 6 }}>{p.title}</div>
              <div style={{ color: 'var(--fg-muted)', fontSize: 14 }}>{p.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 var(--gutter) 96px' }}>
        <div className="kicker" style={{ marginBottom: 24 }}>{ua ? 'Ведучі' : 'Hosts'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {hosts.map((h, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--fg)', paddingTop: 24 }}>
              <h3 className="display" style={{ fontSize: 28, marginBottom: 6 }}>{h.name}</h3>
              <div style={{ color: 'var(--fg-muted)', fontSize: 14, marginBottom: 8 }}>{h.sub}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--fg-muted)' }}>{h.tag}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 var(--gutter) 120px' }}>
        <div className="kicker" style={{ marginBottom: 24 }}>{ua ? 'Партнери' : 'Partners'}</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            borderTop: '1px solid var(--fg)',
          }}
        >
          {partners.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '32px 24px',
                borderRight: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              {p}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, display: 'flex', gap: 12 }}>
          <a href="mailto:partners@fashionwest.ua" className="hairline-btn solid">
            {ua ? 'Стати партнером' : 'Become a partner'}
          </a>
          <a href="mailto:press@fashionwest.ua" className="hairline-btn">
            {ua ? 'Акредитація преси' : 'Press accreditation'}
          </a>
        </div>
      </div>
    </section>
  )
}
