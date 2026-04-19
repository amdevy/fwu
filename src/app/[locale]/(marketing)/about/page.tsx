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
      ? 'Національна платформа моди, креативних індустрій та сучасного мистецтва України.'
      : 'A national platform for fashion, creative industries and contemporary art of Ukraine.',
    alternates: altsFor(locale, '/about'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const intro = ua
    ? 'Fashion West Ukraine — національна платформа розвитку модної індустрії, креативних індустрій та сучасного мистецтва України. Ми обʼєднуємо дизайнерів, бренди, підприємців, креативні команди й медіа в одну екосистему — точку зустрічі моди, сенсів і спільноти.'
    : 'Fashion West Ukraine is a national platform for the development of the fashion industry, creative industries and contemporary art of Ukraine. We bring designers, brands, entrepreneurs, creative teams and media into a single ecosystem — a meeting point of fashion, meaning and community.'

  const pillars = ua
    ? [
        { kicker: 'I', title: 'Платформа презентації', body: 'Ми відкриваємо сцену для дизайнерів і брендів — від зрілих імен до тих, хто щойно починає.' },
        { kicker: 'II', title: 'Спільнота', body: 'Майданчик, де зустрічаються голоси fashion, бізнесу та культури — і де народжуються партнерства.' },
        { kicker: 'III', title: 'Медіа', body: 'Хроніка індустрії: інтервʼю, редакційні зйомки, репортажі з показів, голос платформи.' },
        { kicker: 'IV', title: 'Експо', body: 'Формат прямого контакту з аудиторією, пресою й партнерами — у залі, а не на екрані.' },
        { kicker: 'V', title: 'Освіта', body: 'Школи, лекції, воркшопи з beauty, стилю, бізнесу моди — для тих, хто будує наступну індустрію.' },
        { kicker: 'VI', title: 'Міжнародні звʼязки', body: 'Ми будуємо містки між українською сценою та світовими інституціями моди й мистецтва.' },
        { kicker: 'VII', title: 'Marketplace', body: 'Каталог-вітрина капсул і обмежених накладів — пряме вікно з майстерні до читача.' },
      ]
    : [
        { kicker: 'I', title: 'A presentation platform', body: 'We open a stage for designers and brands — from established names to those just starting out.' },
        { kicker: 'II', title: 'Community', body: 'A meeting point for the voices of fashion, business and culture — where partnerships are born.' },
        { kicker: 'III', title: 'Media', body: 'An industry chronicle: interviews, editorials, runway reports — the voice of the platform.' },
        { kicker: 'IV', title: 'Expo', body: 'A direct-contact format with audience, press and partners — in the room, not on a screen.' },
        { kicker: 'V', title: 'Education', body: 'Schools, lectures and workshops on beauty, styling and the business of fashion — for those building the next industry.' },
        { kicker: 'VI', title: 'International ties', body: 'We build bridges between the Ukrainian scene and international fashion and art institutions.' },
        { kicker: 'VII', title: 'Marketplace', body: 'A capsule and limited-edition catalogue — a direct window from the workshop to the reader.' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.about')}</h1>
        <div className="sh-sub">{ua ? 'Платформа · екосистема · спільнота · контекст' : 'Platform · ecosystem · community · context'}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 880, margin: '0 auto' }}>
        <p className="lede">{intro}</p>
      </div>

      <div style={{ padding: '0 var(--gutter) 96px' }}>
        <div className="kicker" style={{ marginBottom: 24 }}>{ua ? 'Сім напрямів' : 'Seven directions'}</div>
        {pillars.map((p) => (
          <div
            key={p.kicker}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: 32,
              alignItems: 'baseline',
              padding: '32px 0',
              borderTop: '1px solid var(--rule)',
            }}
          >
            <div className="display" style={{ fontSize: 28 }}>{p.kicker}</div>
            <div style={{ maxWidth: 720 }}>
              <h3 className="display" style={{ fontSize: 28, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pullquote">
        <blockquote>&ldquo;{ua
          ? 'FWU — це не просто подія. Це середовище, в якому народжуються нові імена, партнерства та вектори розвитку.'
          : 'FWU is not just an event. It is an environment where new names, partnerships and directions are born.'}&rdquo;</blockquote>
        <cite>— {t('brandFull')}</cite>
      </div>
    </section>
  )
}
