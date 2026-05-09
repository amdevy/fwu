import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { photographers, getPhotographer } from '@/lib/data/photographers'
import { getDesigner } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export function generateStaticParams() {
  return photographers.flatMap((p) => [
    { locale: 'ua', slug: p.slug },
    { locale: 'en', slug: p.slug },
  ])
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const p = getPhotographer(slug)
  if (!p) return {}
  const loc = locale as Locale
  return {
    title: `${p.name[loc]} — ${loc === 'ua' ? 'Фотограф' : 'Photographer'} · FWU`,
    description: loc === 'ua'
      ? `Архів фото від ${p.name[loc]} з ${p.eventLabel[loc]}.`
      : `Photo archive by ${p.name[loc]} from ${p.eventLabel[loc]}.`,
    alternates: altsFor(locale, `/photographers/${slug}`),
  }
}

const isReady = (url: string) => !!url && !url.startsWith('TODO')

export default async function PhotographerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPhotographer(slug)
  if (!p) notFound()
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const designerEntries = Object.entries(p.designerFolders)
    .map(([designerSlug, url]) => {
      const d = getDesigner(designerSlug)
      return d ? { designer: d, url } : null
    })
    .filter((x): x is { designer: NonNullable<ReturnType<typeof getDesigner>>; url: string } => x !== null)

  return (
    <article className="fade-in">
      <header style={{ padding: '64px var(--gutter) 32px' }}>
        <div className="kicker">{p.eventLabel[locale]} · {p.eventDate}</div>
        <h1 className="display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginTop: 12 }}>
          {p.name[locale]}
        </h1>
        {p.bio?.[locale] && (
          <p className="lede" style={{ maxWidth: 720, marginTop: 16 }}>{p.bio[locale]}</p>
        )}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
          {isReady(p.driveMainUrl) ? (
            <a href={p.driveMainUrl} target="_blank" rel="noreferrer" className="hairline-btn solid">
              {ua ? 'Повний архів на Google Drive →' : 'Full archive on Google Drive →'}
            </a>
          ) : (
            <span className="hairline-btn" style={{ opacity: 0.5 }}>
              {ua ? 'Архів незабаром' : 'Archive coming soon'}
            </span>
          )}
          {p.instagram && (
            <a href={`https://instagram.com/${p.instagram}`} target="_blank" rel="noreferrer" className="hairline-btn">
              Instagram · @{p.instagram} →
            </a>
          )}
        </div>
      </header>

      {designerEntries.length > 0 && (
        <section style={{ padding: '0 var(--gutter) 64px' }}>
          <div className="sec-head">
            <div className="sh-num">01</div>
            <h2 className="sh-title">{ua ? 'Дизайнери' : 'Designers'}</h2>
            <div className="sh-sub">{designerEntries.length} {ua ? 'папок' : 'folders'}</div>
          </div>
          <div style={{ borderTop: '1px solid var(--fg)' }}>
            {designerEntries.map(({ designer, url }, i) => {
              const ready = isReady(url)
              return (
                <a
                  key={designer.slug}
                  href={ready ? url : undefined}
                  target={ready ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: 32,
                    alignItems: 'baseline',
                    padding: '28px 0',
                    borderBottom: '1px solid var(--rule)',
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: ready ? 1 : 0.4,
                    pointerEvents: ready ? 'auto' : 'none',
                    transition: 'background 200ms',
                  }}
                  className="photog-row"
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.06em', color: 'var(--fg-muted)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="display" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.1 }}>
                    {designer.name[locale]}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
                    {ready ? (ua ? 'Відкрити →' : 'Open →') : (ua ? 'Незабаром' : 'Soon')}
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      )}

      {p.generalFolders && p.generalFolders.length > 0 && (
        <section style={{ padding: '0 var(--gutter) 96px' }}>
          <div className="sec-head">
            <div className="sh-num">02</div>
            <h2 className="sh-title">{ua ? 'Загальні папки події' : 'General event folders'}</h2>
          </div>
          <div style={{ borderTop: '1px solid var(--fg)' }}>
            {p.generalFolders.map((f, i) => {
              const ready = isReady(f.url)
              return (
                <a
                  key={i}
                  href={ready ? f.url : undefined}
                  target={ready ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: 32,
                    alignItems: 'baseline',
                    padding: '28px 0',
                    borderBottom: '1px solid var(--rule)',
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: ready ? 1 : 0.4,
                    pointerEvents: ready ? 'auto' : 'none',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.06em', color: 'var(--fg-muted)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="display" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.1 }}>
                    {f.label[locale]}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
                    {ready ? (ua ? 'Відкрити →' : 'Open →') : (ua ? 'Незабаром' : 'Soon')}
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      )}

      <div style={{ padding: '48px var(--gutter)', borderTop: '1px solid var(--rule)' }}>
        <Link href="/photographers" className="kicker">← {ua ? 'Усі фотографи' : 'All photographers'}</Link>
      </div>
    </article>
  )
}
