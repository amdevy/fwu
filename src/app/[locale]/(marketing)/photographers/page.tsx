import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { photographers } from '@/lib/data/photographers'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as Locale
  return {
    title: loc === 'ua' ? 'Фотографи · FWU' : 'Photographers · FWU',
    description: loc === 'ua'
      ? 'Фотографи Fashion West Ukraine — повні архіви фото з показів.'
      : 'Photographers of Fashion West Ukraine — full photo archives from the shows.',
    alternates: altsFor(locale, '/photographers'),
  }
}

export default async function PhotographersPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  return (
    <article className="fade-in">
      <header style={{ padding: '64px var(--gutter) 32px' }}>
        <div className="kicker">{t('photographers.kicker')}</div>
        <h1 className="display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginTop: 12 }}>
          {t('photographers.title')}
        </h1>
        <p className="lede" style={{ maxWidth: 720, marginTop: 16 }}>
          {t('photographers.subtitle')}
        </p>
      </header>

      <div style={{ padding: '0 var(--gutter) 96px', borderTop: '1px solid var(--fg)' }}>
        {photographers.map((p, i) => {
          const designerCount = Object.keys(p.designerFolders).length
          const generalCount = p.generalFolders?.length ?? 0
          return (
            <Link
              key={p.id}
              href={`/photographers/${p.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto auto',
                gap: 32,
                alignItems: 'baseline',
                padding: '40px 0',
                borderBottom: '1px solid var(--rule)',
                textDecoration: 'none',
                color: 'inherit',
              }}
              className="aa-row"
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--fg-muted)' }}>
                N°{String(i + 1).padStart(2, '0')}
              </div>
              <div className="display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05 }}>
                {p.name[locale]}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', color: 'var(--fg-muted)', textAlign: 'right' }}>
                {designerCount} {ua ? 'дизайнерів' : 'designers'}
                {generalCount > 0 && ` · ${generalCount} ${ua ? 'загальних' : 'general'}`}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
                {ua ? 'Відкрити →' : 'Open →'}
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
