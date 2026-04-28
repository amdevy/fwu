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
      ? 'FASHION WEST UKRAINE — національна fashion-платформа нового покоління, що об’єднує моду, бізнес, мистецтво та стратегічні колаборації.'
      : 'FASHION WEST UKRAINE — a national next-generation fashion platform uniting fashion, business, art and strategic collaborations.',
    alternates: altsFor(locale, '/about'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const introParas = ua
    ? [
        'FASHION WEST UKRAINE — національна fashion-платформа нового покоління, що об’єднує моду, бізнес, мистецтво та стратегічні колаборації в єдину екосистему розвитку індустрії.',
        'Платформа була створена як простір для дизайнерів, брендів, підприємців, культурних діячів і партнерів, які формують нову естетику, нову культуру взаємодії та нову fashion-економіку України.',
        'FWU працює на перетині fashion presentation, business networking, brand visibility та міжнародного розвитку.',
        'Ми створюємо не лише події, а середовище, у якому народжуються партнерства, нові можливості, професійні зв’язки та масштабування брендів.',
      ]
    : [
        'FASHION WEST UKRAINE is a national next-generation fashion platform uniting fashion, business, art and strategic collaborations into a single ecosystem for the development of the industry.',
        'The platform was created as a space for designers, brands, entrepreneurs, cultural figures and partners who shape a new aesthetic, a new culture of interaction and a new fashion economy of Ukraine.',
        'FWU works at the intersection of fashion presentation, business networking, brand visibility and international development.',
        'We create not only events but an environment where partnerships, new opportunities, professional connections and brand scaling are born.',
      ]

  const triplet = ua
    ? ['Закарпаття — точка старту платформи.', 'Україна — її масштаб.', 'Європа — напрямок розвитку.']
    : ['Transcarpathia is the starting point of the platform.', 'Ukraine is its scale.', 'Europe is the direction of growth.']

  const pillars = ua
    ? [
        { kicker: 'I', title: 'Платформа презентації', body: 'Сцена для дизайнерів і брендів — від зрілих імен до тих, хто щойно починає.' },
        { kicker: 'II', title: 'Спільнота', body: 'Майданчик, де зустрічаються голоси fashion, бізнесу та культури — і де народжуються партнерства.' },
        { kicker: 'III', title: 'Медіа', body: 'Хроніка індустрії: інтервʼю, редакційні зйомки, репортажі з показів, голос платформи.' },
        { kicker: 'IV', title: 'Експо', body: 'Формат прямого контакту з аудиторією, пресою й партнерами — у залі, а не на екрані.' },
        { kicker: 'V', title: 'Освіта', body: 'Школи, лекції, воркшопи з beauty, стилю, бізнесу моди — для тих, хто будує наступну індустрію.' },
        { kicker: 'VI', title: 'Міжнародні звʼязки', body: 'Ми будуємо містки між українською сценою та світовими інституціями моди й мистецтва.' },
        { kicker: 'VII', title: 'Pop-Up Selection', body: 'Curated-простір відібраних речей: обмежені дропи, речі з показів, капсульні колекції та редакційна добірка.' },
      ]
    : [
        { kicker: 'I', title: 'A presentation platform', body: 'A stage for designers and brands — from established names to those just starting out.' },
        { kicker: 'II', title: 'Community', body: 'A meeting point for the voices of fashion, business and culture — where partnerships are born.' },
        { kicker: 'III', title: 'Media', body: 'An industry chronicle: interviews, editorials, runway reports — the voice of the platform.' },
        { kicker: 'IV', title: 'Expo', body: 'A direct-contact format with audience, press and partners — in the room, not on a screen.' },
        { kicker: 'V', title: 'Education', body: 'Schools, lectures and workshops on beauty, styling and the business of fashion.' },
        { kicker: 'VI', title: 'International ties', body: 'Bridges between the Ukrainian scene and international fashion and art institutions.' },
        { kicker: 'VII', title: 'Pop-Up Selection', body: 'A curated space of selected fashion pieces: limited drops, runway pieces, capsule collections, editor’s choice.' },
      ]

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.about')}</h1>
        <div className="sh-sub">{ua ? 'Платформа · екосистема · спільнота · контекст' : 'Platform · ecosystem · community · context'}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 880, margin: '0 auto' }}>
        {introParas.map((p, i) => (
          <p key={i} className={i === 0 ? 'lede' : undefined} style={i > 0 ? { color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 20 } : undefined}>
            {p}
          </p>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 48, borderTop: '1px solid var(--rule)', paddingTop: 32 }}>
          {triplet.map((line, i) => (
            <div key={i} className="display" style={{ fontSize: 22, letterSpacing: '-0.01em' }}>{line}</div>
          ))}
        </div>
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
