import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { designers, getProduct, products } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'
import ProductView from './ProductView'

export function generateStaticParams() {
  return products.flatMap((p) => [
    { locale: 'ua', id: p.id },
    { locale: 'en', id: p.id },
  ])
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params
  const p = getProduct(id)
  if (!p) return {}
  const loc = locale as Locale
  const d = designers.find((x) => x.id === p.designerId)
  const title = `${p.title[loc]} — ${d?.brand ?? ''}`
  const description = `${p.category[loc]} · ${p.material[loc]}`
  return {
    title,
    description,
    openGraph: { title, description, images: [p.images[0]] },
    alternates: altsFor(locale, `/product/${id}`),
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const product = getProduct(id)
  if (!product) notFound()
  const designer = designers.find((d) => d.id === product.designerId)
  if (!designer) notFound()
  const loc = locale as Locale

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title[loc],
    image: product.images,
    description: `${product.category[loc]} · ${product.material[loc]}`,
    brand: { '@type': 'Brand', name: designer.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'UAH',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ProductView product={product} designer={designer} locale={loc} />
    </>
  )
}
