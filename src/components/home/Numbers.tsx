import { getLocale, getTranslations } from 'next-intl/server'

export default async function Numbers() {
  const t = await getTranslations()
  const locale = await getLocale()
  const items = [
    { n: '20', l: t('home.n1') },
    { n: '04', l: t('home.n2') },
    { n: '120+', l: t('home.n3') },
    { n: '2024', l: t('home.n4') },
  ]
  return (
    <section>
      <div className="sec-head">
        <div className="sh-num">N°04</div>
        <h2 className="sh-title">{t('home.numbersKicker')}</h2>
        <div className="sh-sub">
          {locale === 'ua' ? 'Платформа у цифрах, станом на квітень 2026' : 'Platform in numbers, as of April 2026'}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--fg)', margin: '0 var(--gutter) 96px' }}>
        {items.map((it, i) => (
          <div key={i} style={{ padding: '48px 24px', borderRight: i < 3 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)' }}>
            <div className="display" style={{ fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 1, marginBottom: 16 }}>{it.n}</div>
            <div className="kicker">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
