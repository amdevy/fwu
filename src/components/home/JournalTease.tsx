import { getLocale, getTranslations } from 'next-intl/server'

export default async function JournalTease() {
  const t = await getTranslations()
  const locale = await getLocale()
  const entries = locale === 'ua'
    ? [
        { kicker: 'Маніфест', title: 'FWU — це не один день, це процес', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80', date: '28.04.2026' },
        { kicker: 'Освіта', title: 'Програма спікерів: про що говоритимемо у Мукачеві', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80', date: '22.04.2026' },
        { kicker: 'Партнери', title: 'Sams Concept Store виходить на подіум FWU', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80', date: '18.04.2026' },
      ]
    : [
        { kicker: 'Manifesto', title: 'FWU is not one day — it is a process', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80', date: '28.04.2026' },
        { kicker: 'Education', title: 'Speaker program: what we will discuss in Mukachevo', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80', date: '22.04.2026' },
        { kicker: 'Partners', title: 'Sams Concept Store steps onto the FWU runway', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80', date: '18.04.2026' },
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
          <div key={i} className="card" style={{ cursor: 'default' }}>
            <div className="card-img-wrap"><img src={e.img} alt={e.title} loading="lazy" /></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 6 }}>
              {e.kicker} · {e.date}
            </div>
            <h3 className="card-title" style={{ fontSize: 24, textWrap: 'balance' }}>{e.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
