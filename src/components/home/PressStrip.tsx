import { getTranslations } from 'next-intl/server'

const PRESS = ['Vogue Ukraine', 'FASHIONREALITY', 'L’Officiel', 'ELLE', 'Harper’s Bazaar']

export default async function PressStrip() {
  const t = await getTranslations()
  return (
    <section className="home-press">
      <div className="sec-head" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="sh-num">N°—</div>
        <h2 className="sh-title">{t('home.pressKicker')}</h2>
        <div className="sh-sub">{t('home.pressSub')}</div>
      </div>
      <div className="home-press-row">
        {PRESS.map((name) => (
          <div key={name} className="home-press-cell">{name}</div>
        ))}
      </div>
    </section>
  )
}
