'use client'

import { DirectionCard } from '@/components/cards/DirectionCard'
import { ScrollReveal } from './ScrollReveal'

const directions = [
  {
    title: 'FWU Agency',
    subtitle: 'Продаж дизайнерів та B2B рішення',
    href: '/agency',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1000&fit=crop',
  },
  {
    title: 'FWU Models',
    subtitle: 'Скаутинг та контракти',
    href: '/models',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop',
  },
  {
    title: 'FWU Events',
    subtitle: 'Події та квитки',
    href: '/events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&fit=crop',
  },
  {
    title: 'FWU Education',
    subtitle: 'Курси та майстермайнди',
    href: '/education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1000&fit=crop',
  },
  {
    title: 'FWU Culture',
    subtitle: 'Мода + мистецтво',
    href: '/culture',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop',
  },
]

export function DirectionsGrid() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl lg:text-5xl">
            Напрямки платформи
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {directions.slice(0, 3).map((dir, i) => (
            <DirectionCard key={dir.href} {...dir} index={i} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {directions.slice(3).map((dir, i) => (
            <DirectionCard key={dir.href} {...dir} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
