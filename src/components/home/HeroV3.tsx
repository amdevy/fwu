import { getLocale, getTranslations } from 'next-intl/server'

export default async function HeroV3() {
  const t = await getTranslations()
  const locale = await getLocale()
  const date = locale === 'ua' ? '19 квітня 2026' : 'April 19, 2026'
  return (
    <section className="hero-v3">
      <div className="hero-v3-head">
        <div className="date">{date} · {locale === 'ua' ? 'Видання' : 'Edition'} I</div>
        <div className="masthead">Fashion <span style={{ fontStyle: 'italic' }}>West</span> Ukraine</div>
        <div className="edition">{locale === 'ua' ? 'Весна / Літо 2026' : 'Spring / Summer 2026'}</div>
      </div>
      <div className="hero-v3-grid">
        <div className="hv3-side">
          <div className="kicker" style={{ marginBottom: 12 }}>{t('home.manifestoKicker')}</div>
          {t('home.manifestoBody')}
        </div>
        <h1>
          {locale === 'ua'
            ? <>Захід,<br/><em>що вміє</em><br/>шити.</>
            : <>A west<br/><em>that knows</em><br/>how to tailor.</>}
        </h1>
        <div className="hv3-side" style={{ textAlign: 'right' }}>
          <div className="kicker" style={{ marginBottom: 12 }}>{locale === 'ua' ? 'У номері' : 'In this issue'}</div>
          {locale === 'ua'
            ? 'Шість дизайнерів. Два міста. Одна мова — вовна, льон, шкіра, тиша.'
            : 'Six designers. Two cities. One language — wool, linen, leather, silence.'}
        </div>
      </div>
      <div className="hv3-imgs">
        <div className="img-box wide"><img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=2000&q=80" alt="" /></div>
        <div className="img-box"><img src="https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1200&q=80" alt="" /></div>
        <div className="img-box"><img src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=1200&q=80" alt="" /></div>
      </div>
    </section>
  )
}
