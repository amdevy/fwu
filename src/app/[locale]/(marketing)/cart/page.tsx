'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useCart } from '@/components/providers/CartProvider'
import { designers, getProduct } from '@/lib/data/seed'
import { fmtPrice } from '@/lib/format/currency'
import type { Locale } from '@/lib/types'

export default function CartPage() {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const { cart, remove, setQty } = useCart()

  const rows = cart
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((x): x is typeof x & { product: NonNullable<typeof x.product> } => Boolean(x.product))

  const subtotal = rows.reduce((a, r) => a + r.product.price * r.qty, 0)

  if (rows.length === 0) {
    return (
      <div className="cart-wrap fade-in">
        <h1>{t('cart.title')}</h1>
        <div className="empty-cart">
          <div className="display">{t('common.emptyCart')}</div>
          <Link href="/catalog" className="hairline-btn">{t('common.continue')} →</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-wrap fade-in">
      <h1>{t('cart.title')}</h1>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--fg-muted)',
          marginBottom: 24,
        }}
      >
        {rows.length} {t('cart.items')}
      </div>
      <div className="cart-grid">
        <div>
          {rows.map((r) => {
            const d = designers.find((x) => x.id === r.product.designerId)
            return (
              <div key={r.key} className="cart-row">
                <Link href={`/product/${r.product.id}`}>
                  <img src={r.product.images[0]} alt={r.product.title[locale]} style={{ cursor: 'pointer' }} />
                </Link>
                <div className="info-col">
                  <div className="kicker" style={{ marginBottom: 4 }}>{d?.brand}</div>
                  <div className="ct">{r.product.title[locale]}</div>
                  <div className="cs">
                    {t('common.size')}: {r.size} · {r.product.material[locale]}
                  </div>
                </div>
                <div className="qty qty-col">
                  <button onClick={() => setQty(r.key, r.qty - 1)}>−</button>
                  <span className="v">{r.qty}</span>
                  <button onClick={() => setQty(r.key, r.qty + 1)}>+</button>
                </div>
                <div className="price-col" style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>
                  {fmtPrice(r.product.price * r.qty)}
                </div>
                <button
                  className="remove-col"
                  onClick={() => remove(r.key)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-muted)',
                  }}
                >
                  ×
                </button>
              </div>
            )
          })}
        </div>
        <div className="cart-summary">
          <div className="kicker">{locale === 'ua' ? 'Підсумок' : 'Summary'}</div>
          <div className="srow">
            <span>{t('common.subtotal')}</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{fmtPrice(subtotal)}</span>
          </div>
          <div className="srow">
            <span>{locale === 'ua' ? 'Доставка' : 'Shipping'}</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)' }}>
              {locale === 'ua' ? 'Прораховується' : 'Calculated'}
            </span>
          </div>
          <div className="tr">
            <span>{t('cart.total')}</span>
            <span>{fmtPrice(subtotal)}</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--fg-muted)', margin: '8px 0 0', lineHeight: 1.5 }}>
            {t('cart.note')}
          </p>
          <button className="hairline-btn solid" style={{ padding: '18px 24px', justifyContent: 'center' }}>
            {t('common.checkout')}
          </button>
          <Link href="/catalog" className="hairline-btn" style={{ justifyContent: 'center' }}>
            {t('common.continue')}
          </Link>
        </div>
      </div>
    </div>
  )
}
