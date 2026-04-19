export interface Event {
  id: string
  slug: string
  title: string
  description: string
  date: string
  time: string
  location: string
  price?: number
  ticketUrl?: string
  image: string
  program?: string[]
  speakers?: Speaker[]
  gallery?: string[]
  isFeatured?: boolean
  isPast?: boolean
}

export interface Speaker {
  name: string
  role: string
  image?: string
}

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  duration: string
  price: number
  format: 'online' | 'offline' | 'hybrid'
  image: string
  modules?: CourseModule[]
  instructor?: TeamMember
}

export interface CourseModule {
  title: string
  description: string
}

export type DesignerCategory = 'clothing' | 'accessories' | 'footwear'

export interface Designer {
  id: string
  slug: string
  name: string
  brand: string
  city: string
  founded?: string
  category: DesignerCategory
  style?: string
  shortBio: string
  bio: string
  image: string
  cover?: string
  gallery?: string[]
  socials?: SocialLinks
  contactEmail?: string
}

export interface Product {
  id: string
  slug: string
  title: string
  designerSlug: string
  brand: string
  category: DesignerCategory
  price: number
  currency: 'UAH' | 'EUR' | 'USD'
  description: string
  image: string
  gallery?: string[]
  createdAt: string
}

export type PartnerCategory = 'media' | 'beauty' | 'education' | 'services' | 'location'

export interface Partner {
  id: string
  slug: string
  name: string
  category: PartnerCategory
  shortDescription: string
  description: string
  services?: string[]
  image: string
  website?: string
  socials?: SocialLinks
  contactEmail?: string
  contactPhone?: string
}

export interface Offer {
  id: string
  slug: string
  title: string
  partnerSlug: string
  description: string
  promoCode?: string
  validUntil?: string
  image: string
  ctaUrl?: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  tiktok?: string
  website?: string
}

export interface Direction {
  title: string
  subtitle: string
  href: string
  image: string
}

export interface CaseStudy {
  name: string
  quote: string
  image: string
  role?: string
}
