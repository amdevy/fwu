import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function EventsTeaser() {
  const t = await getTranslations()
  const locale = await getLocale()
  const ua = locale === 'ua'

  const events = ua
    ? [
        { date: '15.05.2026', title: 'FWU Spring Showcase', loc: 'Мукачево · Darlin Restobar', href: '/event/2026' },
        { date: '04.07.2026', title: 'Pop-Up Drop №02', loc: 'Київ · closed-door', href: '/pop-up' },
        { date: '12.09.2026', title: 'FWU Models Awards', loc: 'Закарпаття', href: '/projects' },
      ]
    : [
        { date: '15.05.2026', title: 'FWU Spring Showcase', loc: 'Mukachevo · Darlin Restobar', href: '/event/2026' },
        { date: '04.07.2026', title: 'Pop-Up Drop N°02', loc: 'Kyiv · closed-door', href: '/pop-up' },
        { date: '12.09.2026', title: 'FWU Models Awards', loc: 'Transcarpathia', href: '/projects' },
      ]

  return (
    <section className="home-events">
      <div className="sec-head" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="sh-num">N°—</div>
        <h2 className="sh-title">{t('home.eventsKicker')}</h2>
        <div className="sh-sub">{t('home.eventsSub')}</div>
      </div>
      <div className="home-events-grid">
        {events.map((e, i) => (
          <Link key={i} href={e.href} className="home-event-card">
            <div className="home-event-date">{e.date}</div>
            <div className="home-event-title">{e.title}</div>
            <div className="home-event-loc">{e.loc}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
