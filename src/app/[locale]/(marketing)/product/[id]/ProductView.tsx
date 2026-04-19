'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useCart } from '@/components/providers/CartProvider'
import { fmtPrice } from '@/lib/format/currency'
import type { Designer, Locale, Product } from '@/lib/types'

type Props = { product: Product; designer: Designer; locale: Locale }
type AccKey = 'details' | 'material' | 'sizeGuide' | 'shipping'

const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const

export default function ProductView({ product, designer, locale }: Props) {
  const t = useTranslations()
  const { add, cart, showToast } = useCart()
  const [size, setSize] = useState<string>('M')
  const [openAcc, setOpenAcc] = useState<AccKey | null>('details')
  const inCart = cart.some((x) => x.productId === product.id && x.size === size)

  const handleAdd = () => {
    add(product.id, size)
    showToast(`${t('product.added')} · ${product.title[locale]} · ${size}`)
  }

  const accLabel: Record<AccKey, string> = {
    details: t('product.details'),
    material: t('common.material'),
    sizeGuide: t('product.sizeGuide'),
    shipping: t('product.shipping'),
  }
  const accBody: Record<AccKey, string> = {
    details: t('product.detailsBody'),
    material: product.material[locale],
    sizeGuide: 'XS 32–34 · S 34–36 · M 36–38 · L 40–42',
    shipping: t('product.shippingBody'),
  }

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
        <Link href="/catalog">{t('nav.catalog')}</Link>
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

          <div className="price">{fmtPrice(product.price)}</div>

          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>{t('common.size')}</div>
            <div className="size-row">
              {SIZES.map((s, i) => {
                const off = i === 4
                return (
                  <button
                    key={s}
                    className={`size ${size === s ? 'on' : ''} ${off ? 'off' : ''}`}
                    onClick={() => !off && setSize(s)}
                    disabled={off}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            className="hairline-btn solid"
            style={{ padding: '18px 24px', justifyContent: 'center' }}
            onClick={handleAdd}
          >
            {inCart ? `${t('common.inCart')} →` : t('common.addToCart')}
          </button>

          {(['details', 'material', 'sizeGuide', 'shipping'] as AccKey[]).map((k) => {
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
