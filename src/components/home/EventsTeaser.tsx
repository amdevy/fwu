import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function EventsTeaser() {
  const t = await getTranslations()
  const locale = await getLocale()
  const ua = locale === 'ua'

  const main = ua
    ? {
        date: '02.05.2026',
        title: 'Fashion West Ukraine 2026',
        loc: 'Мукачево · Darlin’ Hall',
        cta: 'Дивитись подію',
      }
    : {
        date: '02.05.2026',
        title: 'Fashion West Ukraine 2026',
        loc: 'Mukachevo · Darlin’ Hall',
        cta: 'View the event',
      }

  return (
    <section className="home-events">
      <div className="sec-head" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="sh-num">N°—</div>
        <h2 className="sh-title">{ua ? 'Минула подія' : 'Recent event'}</h2>
        <div className="sh-sub">{ua ? 'Recap, програма, фотографи' : 'Recap, programme, photographers'}</div>
      </div>

      <Link href="/event/2026" className="home-event-main">
        <div className="home-event-date">{main.date}</div>
        <div className="home-event-main-title">{main.title}</div>
        <div className="home-event-loc">{main.loc}</div>
        <span className="home-event-cta">{main.cta} →</span>
      </Link>

      <div style={{ padding: '32px 0 0', display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
        <Link href="/photographers" className="hairline-btn">
          {ua ? 'Фотографи події' : 'Event photographers'} →
        </Link>
        <Link href="/projects" className="hairline-btn">
          {ua ? 'Усі проєкти платформи' : 'All platform projects'} →
        </Link>
      </div>
    </section>
  )
}
