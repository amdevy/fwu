import type { MetadataRoute } from 'next'
import { events } from '@/lib/data'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fwu.ua'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/agency',
    '/events',
    '/models',
    '/education',
    '/culture',
    '/club',
    '/designers',
    '/about',
    '/contacts',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const eventPages = events.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...eventPages]
}
