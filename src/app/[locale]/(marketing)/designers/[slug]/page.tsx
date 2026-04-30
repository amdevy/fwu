import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers, getDesigner, getProductsByDesigner } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export function generateStaticParams() {
  return designers.flatMap((d) => [
    { locale: 'ua', slug: d.slug },
    { locale: 'en', slug: d.slug },
  ])
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const d = getDesigner(slug)
  if (!d) return {}
  const loc = locale as Locale
  return {
    title: `${d.name[loc]} — ${d.brand}`,
    description: d.lede[loc],
    openGraph: { title: `${d.name[loc]} — ${d.brand}`, description: d.lede[loc], images: [d.hero] },
    alternates: altsFor(locale, `/designers/${slug}`),
  }
}

export default async function DossierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const designer = getDesigner(slug)
  if (!designer) notFound()
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'
  const idx = designers.findIndex((d) => d.id === designer.id)
  const prev = designers[(idx - 1 + designers.length) % designers.length]
  const next = designers[(idx + 1) % designers.length]
  const designerProducts = getProductsByDesigner(designer.id)
  const disciplineLabel = designer.discipline[locale]?.trim()
  const hasDiscipline = !!disciplineLabel && disciplineLabel !== '—' && disciplineLabel !== '-'
  const showBrandInMeta = designer.brand && designer.brand !== designer.name[locale]

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: designer.name[locale],
    image: designer.portrait,
    jobTitle: designer.discipline[locale],
    address: { '@type': 'PostalAddress', addressLocality: designer.city[locale], addressCountry: 'UA' },
    brand: { '@type': 'Brand', name: designer.brand, foundingDate: String(designer.founded) },
  }

  const showsHistory = ua
    ? [
        { year: 'FWU 2026', note: 'Spring Showcase, Мукачево' },
        { year: 'FWU 2025', note: 'Capsule presentation, Закарпаття' },
      ]
    : [
        { year: 'FWU 2026', note: 'Spring Showcase, Mukachevo' },
        { year: 'FWU 2025', note: 'Capsule presentation, Transcarpathia' },
      ]

  return (
    <article className="fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <header className={`dossier-hero-v2 ${designer.hero ? '' : 'dossier-hero-v2-solo'}`}>
        <div className="dh2-text">
          <div className="dh2-meta">
            <span>№{String(idx + 1).padStart(2, '0')} / {String(designers.length).padStart(2, '0')}</span>
            <span>{t('common.since')} {designer.founded}</span>
            <span>{designer.city[locale]}</span>
          </div>
          <h1 className="dh2-title">{designer.name[locale]}</h1>
          {showBrandInMeta && <div className="dh2-brand">{designer.brand}</div>}
          {hasDiscipline && <div className="dh2-disc">{disciplineLabel}</div>}
        </div>
        {designer.hero && (
          <div className="dh2-frame">
            <img src={designer.hero} alt={designer.name[locale]} />
          </div>
        )}
      </header>

      <div className="dossier-body">
        <aside className="dx-sidebar">
          <div className="kicker" style={{ marginBottom: 16 }}>{ua ? 'Досьє' : 'Dossier'}</div>
          <dl>
            <dt>{ua ? 'Бренд' : 'Brand'}</dt><dd>{designer.brand}</dd>
            <dt>{ua ? 'Місто' : 'City'}</dt><dd>{designer.city[locale]}</dd>
            <dt>{ua ? 'Засновано' : 'Founded'}</dt><dd>{designer.founded}</dd>
            {hasDiscipline && (<><dt>{ua ? 'Напрям' : 'Discipline'}</dt><dd>{disciplineLabel}</dd></>)}
          </dl>
        </aside>
        <div>
          {designer.lede[locale]?.trim() &&
            designer.lede[locale] !== 'Опис буде додано.' &&
            designer.lede[locale] !== 'Description coming soon.' && (
              <p className="lede">{designer.lede[locale]}</p>
            )}

          {designer.quote[locale]?.trim() && (
            <>
              <div className="kicker" style={{ marginTop: 48, marginBottom: 12 }}>{t('designers.philosophy')}</div>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--fg-muted)' }}>
                &ldquo;{designer.quote[locale]}&rdquo;
              </p>
            </>
          )}
        </div>
      </div>

      {designer.timeline.length > 0 && (
        <div className="timeline">
          <div style={{ padding: '24px 0 8px' }}>
            <div className="kicker">{ua ? 'Хронологія бренду' : 'Brand timeline'}</div>
          </div>
          {designer.timeline.map((row, i) => (
            <div key={i} className="timeline-row">
              <div className="yr">{row.year}</div>
              <div style={{ fontSize: 17, maxWidth: 720 }}>{row[locale]}</div>
            </div>
          ))}
        </div>
      )}

      <div className="timeline">
        <div style={{ padding: '24px 0 8px' }}>
          <div className="kicker">{t('designers.shows')}</div>
        </div>
        {showsHistory.map((row, i) => (
          <div key={i} className="timeline-row">
            <div className="yr">{row.year}</div>
            <div style={{ fontSize: 17, maxWidth: 720 }}>{row.note}</div>
          </div>
        ))}
      </div>

      {designer.gallery.length > 0 && (
        <div className="gal-grid">
          {designer.gallery.map((src, i) => (
            <div key={i} className={`gal-item ${i === 0 ? 'tall' : ''}`}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {designerProducts.length > 0 && (
        <>
          <div className="sec-head">
            <div className="sh-num">{t('designers.collections')}</div>
            <h2 className="sh-title">{designer.brand}</h2>
            <div className="sh-sub">{designerProducts.length} {ua ? 'позицій' : 'pieces'}</div>
          </div>
          <div className="grid-4">
            {designerProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="card">
                <div className="card-img-wrap">
                  <span className="card-num">{p.num}</span>
                  <img src={p.images[0]} alt={p.title[locale]} loading="lazy" />
                </div>
                <div className="card-meta">
                  <h3 className="card-title" style={{ fontSize: 18 }}>{p.title[locale]}</h3>
                  <div className="card-sub">{p.category[locale]}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <div style={{ padding: '96px var(--gutter)', textAlign: 'center', borderTop: '1px solid var(--rule)' }}>
        <div className="kicker" style={{ marginBottom: 12 }}>{t('designers.collaborate')}</div>
        <p style={{ color: 'var(--fg-muted)', maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.6 }}>
          {ua
            ? 'Запит на співпрацю з брендом — через платформу FWU.'
            : 'Request a collaboration with the brand via the FWU platform.'}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.instagram.com/fw.cooperation" target="_blank" rel="noreferrer" className="hairline-btn solid">
            Instagram · @fw.cooperation →
          </a>
        </div>
      </div>

      <div className="dossier-nav">
        <Link href={`/designers/${prev.slug}`} className="dn-prev">
          <div className="kicker" style={{ marginBottom: 8 }}>← {t('common.prevDesigner')}</div>
          <div className="display dn-name">{prev.name[locale]}</div>
        </Link>
        <Link href={`/designers/${next.slug}`} className="dn-next">
          <div className="kicker" style={{ marginBottom: 8 }}>{t('common.nextDesigner')} →</div>
          <div className="display dn-name">{next.name[locale]}</div>
        </Link>
      </div>
    </article>
  )
}
