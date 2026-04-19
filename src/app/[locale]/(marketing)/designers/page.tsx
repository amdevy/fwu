import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('designers.title')} — ${t('brandFull')}`,
    description: t('designers.subtitle'),
    alternates: altsFor(locale, '/designers'),
  }
}

export default async function DesignersPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">{t('designers.index')}</div>
        <h1 className="sh-title">{t('designers.title')}</h1>
        <div className="sh-sub">{t('designers.subtitle')}</div>
      </div>
      <div className="dix">
        {designers.map((d, i) => (
          <Link key={d.id} href={`/designers/${d.slug}`} className="dix-row">
            <span className="n">№{String(i + 1).padStart(2, '0')}</span>
            <span className="name">{d.name[locale]}</span>
            <span className="brand">{d.brand}</span>
            <span className="disc">{d.discipline[locale]}</span>
            <span className="city">{d.city[locale]} · {d.founded}</span>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
      <div style={{ padding: '40px var(--gutter) 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {designers.slice(0, 3).map((d) => (
            <Link key={d.id} href={`/designers/${d.slug}`} className="card">
              <div className="card-img-wrap" style={{ aspectRatio: '4/5' }}>
                <img src={d.hero} alt={d.name[locale]} loading="lazy" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div className="kicker" style={{ marginBottom: 4 }}>{d.brand}</div>
                  <h3 className="card-title">{d.name[locale]}</h3>
                </div>
                <div className="card-sub" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.14em' }}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
