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

      <div className="grid-3" style={{ padding: '0 var(--gutter) 96px' }}>
        {photographers.map((p) => {
          const designerCount = Object.keys(p.designerFolders).length
          return (
            <Link key={p.id} href={`/photographers/${p.slug}`} className="card">
              <div className="card-img-wrap" style={{ background: 'var(--bg-soft)', aspectRatio: '4/5', display: 'grid', placeItems: 'center' }}>
                {p.avatar ? (
                  <img src={p.avatar} alt={p.name[locale]} loading="lazy" />
                ) : (
                  <span className="display" style={{ fontSize: 64, color: 'var(--fg-muted)' }}>
                    {p.name[locale].split(' ').map((w) => w[0]).join('').slice(0, 2)}
                  </span>
                )}
              </div>
              <div className="card-meta">
                <h3 className="card-title">{p.name[locale]}</h3>
                <div className="card-sub">
                  {p.eventLabel[locale]} · {designerCount} {ua ? 'дизайнерів' : 'designers'}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
