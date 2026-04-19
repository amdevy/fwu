'use client'

import { useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { designers, products } from '@/lib/data/seed'
import { fmtPrice } from '@/lib/format/currency'
import type { Locale } from '@/lib/types'

const selectStyle: React.CSSProperties = {
  padding: '8px 12px',
  border: '1px solid var(--rule-strong)',
  background: 'transparent',
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--fg)',
  borderRadius: 0,
}

export default function CatalogPage() {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const [cat, setCat] = useState<string>('all')
  const [designer, setDesigner] = useState<string>('all')
  const [sort, setSort] = useState<string>('newest')

  const categories = useMemo(() => {
    const s = new Set<string>()
    products.forEach((p) => s.add(p.category[locale]))
    return ['all', ...Array.from(s)]
  }, [locale])

  const filtered = useMemo(() => {
    let list = products.slice()
    if (cat !== 'all') list = list.filter((p) => p.category[locale] === cat)
    if (designer !== 'all') list = list.filter((p) => p.designerId === designer)
    if (sort === 'priceAsc') list.sort((a, b) => a.price - b.price)
    if (sort === 'priceDesc') list.sort((a, b) => b.price - a.price)
    if (sort === 'designer') {
      list.sort((a, b) => {
        const da = designers.find((d) => d.id === a.designerId)?.name[locale] || ''
        const db = designers.find((d) => d.id === b.designerId)?.name[locale] || ''
        return da.localeCompare(db, locale)
      })
    }
    return list
  }, [cat, designer, sort, locale])

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('catalog.title')}</h1>
        <div className="sh-sub">{t('catalog.subtitle')}</div>
      </div>

      <div className="cat-toolbar">
        <div className="chip-row">
          {categories.map((c) => (
            <button key={c} className={`chip ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>
              {c === 'all' ? t('common.all') : c}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <select value={designer} onChange={(e) => setDesigner(e.target.value)} style={selectStyle}>
            <option value="all">{t('catalog.filterDesigner')} · {t('common.all')}</option>
            {designers.map((d) => (
              <option key={d.id} value={d.id}>{d.name[locale]}</option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} style={selectStyle}>
            <option value="newest">{t('common.newest')}</option>
            <option value="priceAsc">{t('common.price')} ↑</option>
            <option value="priceDesc">{t('common.price')} ↓</option>
            <option value="designer">{t('common.designerAtoZ')}</option>
          </select>
          <span className="cat-count">{filtered.length} / {products.length} {t('catalog.items')}</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ padding: '120px var(--gutter)', textAlign: 'center' }}>
          <div className="display" style={{ fontSize: 48, marginBottom: 16 }}>{t('catalog.noResults')}</div>
          <button className="hairline-btn" onClick={() => { setCat('all'); setDesigner('all') }}>
            {t('catalog.clearFilters')}
          </button>
        </div>
      ) : (
        <div className="grid-4" style={{ paddingTop: 40 }}>
          {filtered.map((p) => {
            const d = designers.find((x) => x.id === p.designerId)
            return (
              <Link key={p.id} href={`/product/${p.id}`} className="card">
                <div className="card-img-wrap">
                  <span className="card-num">{p.num}</span>
                  <img src={p.images[0]} alt={p.title[locale]} loading="lazy" />
                </div>
                <div className="card-meta">
                  <div>
                    <div className="kicker" style={{ marginBottom: 4 }}>{d?.brand}</div>
                    <h3 className="card-title" style={{ fontSize: 20 }}>{p.title[locale]}</h3>
                    <div className="card-sub">{p.category[locale]}</div>
                  </div>
                  <div className="card-price">{fmtPrice(p.price)}</div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}
