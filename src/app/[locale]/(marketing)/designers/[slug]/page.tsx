import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers, getDesigner, getProductsByDesigner } from '@/lib/data/seed'
import { fmtPrice } from '@/lib/format/currency'
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
  const idx = designers.findIndex((d) => d.id === designer.id)
  const prev = designers[(idx - 1 + designers.length) % designers.length]
  const next = designers[(idx + 1) % designers.length]
  const designerProducts = getProductsByDesigner(designer.id)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: designer.name[locale],
    image: designer.portrait,
    jobTitle: designer.discipline[locale],
    address: { '@type': 'PostalAddress', addressLocality: designer.city[locale], addressCountry: 'UA' },
    brand: { '@type': 'Brand', name: designer.brand, foundingDate: String(designer.founded) },
  }

  return (
    <article className="fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="dossier-hero">
        <img src={designer.hero} alt={designer.name[locale]} />
        <div className="dh-content">
          <div className="dh-meta" style={{ marginBottom: 16 }}>
            <span>№{String(idx + 1).padStart(2, '0')} / {String(designers.length).padStart(2, '0')}</span>
            <span>{designer.brand}</span>
            <span>{designer.city[locale]} · {t('common.since')} {designer.founded}</span>
          </div>
          <h1>{designer.name[locale]}</h1>
          <div className="dh-meta">{designer.discipline[locale]}</div>
        </div>
      </div>

      <div className="dossier-body">
        <aside className="dx-sidebar">
          <div className="kicker" style={{ marginBottom: 16 }}>{locale === 'ua' ? 'Досьє' : 'Dossier'}</div>
          <dl>
            <dt>{locale === 'ua' ? 'Бренд' : 'Brand'}</dt><dd>{designer.brand}</dd>
            <dt>{locale === 'ua' ? 'Місто' : 'City'}</dt><dd>{designer.city[locale]}</dd>
            <dt>{locale === 'ua' ? 'Засновано' : 'Founded'}</dt><dd>{designer.founded}</dd>
            <dt>{locale === 'ua' ? 'Напрям' : 'Discipline'}</dt><dd>{designer.discipline[locale]}</dd>
          </dl>
        </aside>
        <div>
          <p className="lede">{designer.lede[locale]}</p>
        </div>
      </div>

      {designer.timeline.length > 0 && (
        <div className="timeline">
          <div style={{ padding: '24px 0 8px' }}>
            <div className="kicker">{locale === 'ua' ? 'Хронологія' : 'Timeline'}</div>
          </div>
          {designer.timeline.map((row, i) => (
            <div key={i} className="timeline-row">
              <div className="yr">{row.year}</div>
              <div style={{ fontSize: 17, maxWidth: 720 }}>{row[locale]}</div>
            </div>
          ))}
        </div>
      )}

      <div className="pullquote">
        <blockquote>&ldquo;{designer.quote[locale]}&rdquo;</blockquote>
        <cite>— {designer.name[locale]}, {designer.brand}</cite>
      </div>

      <div className="gal-grid">
        {designer.gallery.map((src, i) => (
          <div key={i} className={`gal-item ${i === 0 ? 'tall' : ''}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {designerProducts.length > 0 && (
        <>
          <div className="sec-head">
            <div className="sh-num">{locale === 'ua' ? 'У каталозі' : 'In catalog'}</div>
            <h2 className="sh-title">{designer.brand}</h2>
            <div className="sh-sub">{designerProducts.length} {locale === 'ua' ? 'речей' : 'pieces'}</div>
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
                  <div className="card-price">{fmtPrice(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--fg)', margin: '0 var(--gutter) 96px' }}>
        <Link href={`/designers/${prev.slug}`} style={{ padding: '32px 0', borderRight: '1px solid var(--rule)', paddingRight: 32 }}>
          <div className="kicker" style={{ marginBottom: 8 }}>← {t('common.prevDesigner')}</div>
          <div className="display" style={{ fontSize: 32 }}>{prev.name[locale]}</div>
        </Link>
        <Link href={`/designers/${next.slug}`} style={{ padding: '32px 0 32px 32px', textAlign: 'right' }}>
          <div className="kicker" style={{ marginBottom: 8 }}>{t('common.nextDesigner')} →</div>
          <div className="display" style={{ fontSize: 32 }}>{next.name[locale]}</div>
        </Link>
      </div>
    </article>
  )
}
