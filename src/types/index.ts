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

export interface Designer {
  id: string
  slug: string
  name: string
  bio: string
  image: string
  category?: string
  style?: string
  gallery?: string[]
  socials?: SocialLinks
  contactEmail?: string
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
