'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import type { Designer, Locale, Product } from '@/lib/types'

type Props = { product: Product; designer: Designer; locale: Locale }
type AccKey = 'details' | 'material' | 'shipping'

export default function ProductView({ product, designer, locale }: Props) {
  const t = useTranslations()
  const [openAcc, setOpenAcc] = useState<AccKey | null>('details')

  const accLabel: Record<AccKey, string> = {
    details: t('product.details'),
    material: t('common.material'),
    shipping: t('product.shipping'),
  }
  const accBody: Record<AccKey, string> = {
    details: t('product.detailsBody'),
    material: product.material[locale],
    shipping: t('product.shippingBody'),
  }

  const subject = encodeURIComponent(`FWU Pop-Up · ${product.num} · ${product.title[locale]} · ${designer.brand}`)
  const mailto = `mailto:popup@fashionwest.ua?subject=${subject}`

  return (
    <article className="fade-in">
      <div
        style={{
          padding: '16px var(--gutter)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fg-muted)',
        }}
      >
        <Link href="/pop-up">{t('nav.popup')}</Link>
        <span> / </span>
        <Link href={`/designers/${designer.slug}`}>{designer.brand}</Link>
        <span> / {product.title[locale]}</span>
      </div>

      <div className="prod-layout">
        <div className="prod-gallery">
          {product.images.map((src, i) => (
            <img key={i} src={src} alt={product.title[locale]} loading="lazy" />
          ))}
          {product.images.length < 2 && (
            <img src={designer.gallery[0] || product.images[0]} alt="" loading="lazy" />
          )}
        </div>

        <div className="prod-info">
          <div>
            <div className="kicker" style={{ marginBottom: 8 }}>
              {product.num} · {designer.brand}
            </div>
            <h1>{product.title[locale]}</h1>
          </div>

          <div className="kicker" style={{ color: 'var(--accent)' }}>
            {t('popup.editorsChoice')} · {product.category[locale]}
          </div>

          <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0 }}>
            {t('popup.inquireBody')}
          </p>

          <a
            href={mailto}
            className="hairline-btn solid"
            style={{ padding: '18px 24px', justifyContent: 'center' }}
          >
            {t('common.requestPiece')} →
          </a>

          {(['details', 'material', 'shipping'] as AccKey[]).map((k) => {
            const open = openAcc === k
            return (
              <div key={k} className={`acc ${open ? 'open' : ''}`} onClick={() => setOpenAcc(open ? null : k)}>
                <div className="acc-head">
                  <span className="label">{accLabel[k]}</span>
                  <span className="pm">{open ? '−' : '+'}</span>
                </div>
                <div className="acc-body">{accBody[k]}</div>
              </div>
            )
          })}

          <div className="acc open" style={{ cursor: 'default' }}>
            <div className="acc-head">
              <span className="label">{t('product.about')}</span>
            </div>
            <div className="acc-body" style={{ display: 'flex', gap: 16, alignItems: 'center', paddingTop: 16 }}>
              <img
                src={designer.portrait}
                alt={designer.name[locale]}
                style={{ width: 72, height: 72, objectFit: 'cover', background: 'var(--beige)' }}
              />
              <div>
                <div className="display" style={{ fontSize: 22 }}>{designer.name[locale]}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-muted)' }}>
                  {designer.city[locale]} · {t('common.since')} {designer.founded}
                </div>
                <Link
                  href={`/designers/${designer.slug}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginTop: 6,
                    display: 'inline-block',
                  }}
                >
                  {t('common.readMore')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
