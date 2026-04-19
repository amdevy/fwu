import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const loc = locale as Locale
  return {
    title: `${t('nav.about')} — ${t('brandFull')}`,
    description: loc === 'ua'
      ? 'Платформа дизайнерів Заходу України: маніфест, редакція, місія.'
      : 'A platform for designers of Western Ukraine: manifesto, editors, mission.',
    alternates: altsFor(locale, '/about'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const intro = ua
    ? 'Fashion West Ukraine — це редакція й шоурум. Ми працюємо з дизайнерами Закарпаття, Львівщини й Прикарпаття, відкриваючи їхні майстерні для зовнішнього світу.'
    : 'Fashion West Ukraine is an editorial and a showroom. We work with designers from Transcarpathia, Lviv region, and Prykarpattia — opening their workshops to the wider world.'

  const principles = ua
    ? [
        { kicker: 'I', title: 'Матеріал перший', body: 'Вовна з Рахова, льон з Поділля, шкіра з Берегового. Походження — це не маркетинг, а структура колекції.' },
        { kicker: 'II', title: 'Тиша як форма', body: 'Ми обираємо стриманість. Орнамент — лише там, де він несе сенс. Силует — завжди.' },
        { kicker: 'III', title: 'Малий наклад', body: 'Кожна капсула — обмежена. Номер на бирці — це не жанр, а зобовʼязання.' },
      ]
    : [
        { kicker: 'I', title: 'Material first', body: 'Wool from Rakhiv, linen from Podillia, leather from Berehove. Origin is not marketing — it is the spine of the collection.' },
        { kicker: 'II', title: 'Silence as form', body: 'We choose restraint. Ornament only where it carries meaning. Silhouette — always.' },
        { kicker: 'III', title: 'Small editions', body: 'Every capsule is limited. The number on the tag is not a genre — it is a commitment.' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.about')}</h1>
        <div className="sh-sub">{ua ? 'Редакція. Манера. Місія.' : 'Editorial. Manner. Mission.'}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 880, margin: '0 auto' }}>
        <p className="lede">{intro}</p>
      </div>

      <div className="grid-3" style={{ paddingBottom: 96 }}>
        {principles.map((p) => (
          <div key={p.kicker} style={{ borderTop: '1px solid var(--fg)', paddingTop: 24 }}>
            <div className="kicker" style={{ marginBottom: 12 }}>{p.kicker}</div>
            <h3 className="display" style={{ fontSize: 32, marginBottom: 12 }}>{p.title}</h3>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.55 }}>{p.body}</p>
          </div>
        ))}
      </div>

      <div className="pullquote">
        <blockquote>&ldquo;{t('home.quoteHero1')} {t('home.quoteHero2')}&rdquo;</blockquote>
        <cite>— {t('brandFull')}</cite>
      </div>
    </section>
  )
}
