import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers, products } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'

const SECTION_KEYS = ['limited', 'runway', 'capsule', 'editorsChoice', 'exclusive'] as const

export default async function PopupPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale

  const buckets: Record<(typeof SECTION_KEYS)[number], typeof products> = {
    limited: products.slice(0, 3),
    runway: products.slice(3, 6),
    capsule: products.slice(6, 9),
    editorsChoice: products.slice(0, 4).reverse(),
    exclusive: products.slice(2, 5),
  }

  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('popup.title')}</h1>
        <div className="sh-sub">{t('popup.subtitle')}</div>
      </div>

      <div style={{ padding: '0 var(--gutter) 64px', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <p className="lede">{t('popup.inquireBody')}</p>
      </div>

      <div className="popup-featured">
        <div className="kicker" style={{ marginBottom: 24 }}>{t('popup.featuredBrands')}</div>
        <div className="popup-brand-row">
          {designers.slice(0, 6).map((d) => (
            <Link key={d.id} href={`/designers/${d.slug}`} className="popup-brand">
              <div className="popup-brand-name">{d.brand}</div>
              <div className="popup-brand-city">{d.city[locale]}</div>
            </Link>
          ))}
        </div>
      </div>

      {SECTION_KEYS.map((key, sectionIdx) => {
        const list = buckets[key]
        if (!list.length) return null
        return (
          <div key={key} className="popup-section">
            <div className="popup-sec-head">
              <span className="popup-sec-num">{String(sectionIdx + 1).padStart(2, '0')}</span>
              <h2 className="display popup-sec-title">{t(`popup.${key}`)}</h2>
              <span className="popup-sec-count">{list.length} {t('popup.items')}</span>
            </div>
            <div className="popup-grid">
              {list.map((p, i) => {
                const d = designers.find((x) => x.id === p.designerId)
                const isHero = i === 0
                return (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    className={`popup-card ${isHero ? 'hero' : ''}`}
                  >
                    <div className="popup-card-img">
                      <img src={p.images[0]} alt={p.title[locale]} loading="lazy" />
                      <span className="popup-card-num">{p.num}</span>
                    </div>
                    <div className="popup-card-meta">
                      <div className="kicker">{d?.brand}</div>
                      <div className="popup-card-title">{p.title[locale]}</div>
                      <div className="popup-card-sub">{p.category[locale]}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="popup-inquire">
        <div className="display popup-inquire-h">{t('popup.inquire')}</div>
        <p>{t('popup.inquireBody')}</p>
        <a href="https://www.instagram.com/fw.cooperation" target="_blank" rel="noreferrer" className="hairline-btn solid">
          Instagram · @fw.cooperation →
        </a>
      </div>
    </section>
  )
}
