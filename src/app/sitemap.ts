import type { MetadataRoute } from 'next'
import { designers, products } from '@/lib/data/seed'
import { locales } from '@/i18n/config'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fashionwestukraine.com'

const STATIC_ROUTES = [
  '',
  '/about',
  '/designers',
  '/catalog',
  '/partners',
  '/offers',
  '/new-direction',
  '/contacts',
] as const

const localizedUrl = (locale: string, route: string) => {
  if (locale === 'ua') return `${BASE_URL}${route || '/'}`
  return `${BASE_URL}/${locale}${route}`
}

const alternates = (route: string) => ({
  languages: Object.fromEntries(
    locales.map((l) => [l === 'ua' ? 'uk-UA' : 'en-US', localizedUrl(l, route)]),
  ),
})

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = STATIC_ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, route),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: alternates(route),
    })),
  )

  const designerEntries = designers.flatMap((d) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, `/designers/${d.slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: alternates(`/designers/${d.slug}`),
    })),
  )

  const productEntries = products.flatMap((p) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, `/product/${p.id}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: alternates(`/product/${p.id}`),
    })),
  )

  return [...staticEntries, ...designerEntries, ...productEntries]
}
