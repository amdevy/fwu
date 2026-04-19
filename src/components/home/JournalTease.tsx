import { getLocale, getTranslations } from 'next-intl/server'

export default async function JournalTease() {
  const t = await getTranslations()
  const locale = await getLocale()
  const entries = locale === 'ua'
    ? [
        { kicker: 'Інтерв\'ю', title: 'Ірина Ковач: вовна пам\'ятає все', img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1200&q=80', date: '14.04.2026' },
        { kicker: 'Показ', title: 'Закриті перегляди у Мукачеві', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80', date: '02.04.2026' },
        { kicker: 'Нотатки редакції', title: 'Чому Захід — це не фольклор', img: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1200&q=80', date: '21.03.2026' },
      ]
    : [
        { kicker: 'Interview', title: 'Iryna Kovach: wool remembers everything', img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1200&q=80', date: '14.04.2026' },
        { kicker: 'Runway', title: 'Closed viewings in Mukachevo', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80', date: '02.04.2026' },
        { kicker: 'Editor\'s note', title: 'Why the West is not folklore', img: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1200&q=80', date: '21.03.2026' },
      ]
  return (
    <section>
      <div className="sec-head">
        <div className="sh-num">N°05</div>
        <h2 className="sh-title">{t('home.journal')}</h2>
        <div className="sh-sub">{t('home.journalSub')}</div>
      </div>
      <div className="grid-3">
        {entries.map((e, i) => (
          <a key={i} className="card">
            <div className="card-img-wrap"><img src={e.img} alt={e.title} loading="lazy" /></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 6 }}>
              {e.kicker} · {e.date}
            </div>
            <h3 className="card-title" style={{ fontSize: 24, textWrap: 'balance' }}>{e.title}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}
