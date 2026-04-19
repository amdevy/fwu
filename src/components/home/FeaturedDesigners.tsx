import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'

export default async function FeaturedDesigners() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const list = designers.slice(0, 6)
  return (
    <section>
      <div className="sec-head">
        <div className="sh-num">N°02</div>
        <h2 className="sh-title">{t('home.featuredDesigners')}</h2>
        <div className="sh-sub">{t('home.featuredDesignersSub')}</div>
      </div>
      <div className="grid-3">
        {list.map((d, i) => (
          <Link key={d.id} href={`/designers/${d.slug}`} className="card">
            <div className="card-img-wrap">
              <span className="card-num">N°{String(i + 1).padStart(2, '0')}</span>
              <img src={d.portrait} alt={d.name[locale]} loading="lazy" />
            </div>
            <div className="card-meta">
              <div>
                <h3 className="card-title">{d.name[locale]}</h3>
                <div className="card-sub">{d.brand} · {d.city[locale]}</div>
              </div>
              <div className="card-sub" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.14em' }}>→</div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ padding: '0 var(--gutter) 64px', display: 'flex', justifyContent: 'center' }}>
        <Link href="/designers" className="hairline-btn">{t('common.allDesigners')}</Link>
      </div>
    </section>
  )
}
