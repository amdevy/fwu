import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers, products } from '@/lib/data/seed'
import { fmtPrice } from '@/lib/format/currency'
import type { Locale } from '@/lib/types'

export default async function LatestEdition() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const list = products.slice(0, 4)
  return (
    <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="sec-head">
        <div className="sh-num">N°03</div>
        <h2 className="sh-title">{t('home.latestEdition')}</h2>
        <div className="sh-sub">{t('home.latestEditionSub')}</div>
      </div>
      <div className="grid-4">
        {list.map((p) => {
          const designer = designers.find((d) => d.id === p.designerId)
          return (
            <Link key={p.id} href={`/product/${p.id}`} className="card">
              <div className="card-img-wrap">
                <span className="card-num">{p.num}</span>
                <img src={p.images[0]} alt={p.title[locale]} loading="lazy" />
              </div>
              <div className="card-meta">
                <div>
                  <h3 className="card-title" style={{ fontSize: 18 }}>{p.title[locale]}</h3>
                  <div className="card-sub">{designer?.brand}</div>
                </div>
                <div className="card-price">{fmtPrice(p.price)}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <div style={{ padding: '0 var(--gutter) 96px', display: 'flex', justifyContent: 'center' }}>
        <Link href="/catalog" className="hairline-btn">{t('common.toCatalog')}</Link>
      </div>
    </section>
  )
}
