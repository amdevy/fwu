export type Locale = 'ua' | 'en'
export type L10nString = { ua: string; en: string }

export interface TimelineEntry {
  year: number
  ua: string
  en: string
}

export interface Designer {
  id: string
  slug: string
  name: L10nString
  brand: string
  city: L10nString
  founded: number
  discipline: L10nString
  portrait: string
  hero: string
  heroVideo?: string
  logo?: string
  gallery: string[]
  lede: L10nString
  timeline: TimelineEntry[]
  quote: L10nString
}

export interface Product {
  id: string
  num: string
  designerId: string
  title: L10nString
  category: L10nString
  price: number
  material: L10nString
  images: string[]
  sizes?: string[]
  inStock?: boolean
}

export const pickL = (s: L10nString, locale: Locale): string => s[locale]
