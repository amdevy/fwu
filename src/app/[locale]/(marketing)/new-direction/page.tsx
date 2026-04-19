import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${locale === 'ua' ? 'Новий напрям' : 'New direction'} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Куди прямує платформа Fashion West Ukraine — нова редакційна лінія.'
      : 'Where the Fashion West Ukraine platform is heading — the new editorial line.',
    alternates: altsFor(locale, '/new-direction'),
  }
}

export default async function NewDirectionPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{ua ? 'Новий напрям' : 'New direction'}</h1>
        <div className="sh-sub">{ua ? 'Редакційна лінія 2026' : 'Editorial line 2026'}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 880, margin: '0 auto' }}>
        <p className="lede">
          {ua
            ? 'Ми переосмислюємо платформу. Менше — про показ, більше — про матеріал, місце й людину за річчю. Менше колекцій, більше досьє.'
            : 'We are rethinking the platform. Less about runway — more about material, place, and the person behind the piece. Fewer collections, more dossiers.'}
        </p>
      </div>

      <div className="timeline">
        {(ua
          ? [
              { year: 2026, body: 'Журнал з інтервʼю та архівом тканин — щоквартально.' },
              { year: 2026, body: 'Капсули спільно з музеями: тканина як документ.' },
              { year: 2027, body: 'Шоурум-резиденція в Ужгороді: дизайнер живе й шиє місяць.' },
            ]
          : [
              { year: 2026, body: 'A quarterly journal of interviews and a textile archive.' },
              { year: 2026, body: 'Capsules with museums: fabric as document.' },
              { year: 2027, body: 'Showroom residency in Uzhhorod: a designer lives and sews for a month.' },
            ]
        ).map((row, i) => (
          <div key={i} className="timeline-row">
            <div className="yr">{row.year}</div>
            <div style={{ fontSize: 17, maxWidth: 720 }}>{row.body}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '64px var(--gutter) 120px', textAlign: 'center' }}>
        <Link href="/about" className="hairline-btn">
          ← {ua ? 'Про платформу' : 'About the platform'}
        </Link>
      </div>
    </section>
  )
}
