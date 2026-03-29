'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from './ScrollReveal'
import { MapPin, Calendar } from 'lucide-react'
import type { Event } from '@/types'

const featuredEvent: Event = {
  id: '1',
  slug: 'fashion-week-zakarpattia-2026',
  title: 'Fashion Week Zakarpattia 2026',
  description:
    'Головна модна подія регіону. Три дні показів, майстер-класів, нетворкінгу та натхнення. Понад 20 дизайнерів представлять нові колекції на подіумі.',
  date: '2026-05-15',
  time: '18:00',
  location: 'Ужгород, Галерея "Ілько"',
  price: 1500,
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop',
  isFeatured: true,
}

export function FeaturedEvent() {
  return (
    <section className="bg-forest py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-sm tracking-wider text-white/40 uppercase">Актуальна подія</p>
              <h2 className="mt-3 font-heading text-3xl text-white md:text-4xl">
                {featuredEvent.title}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featuredEvent.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {featuredEvent.location}
                </span>
              </div>

              <p className="mt-4 text-white/70 leading-relaxed">{featuredEvent.description}</p>

              <div className="mt-8">
                <Link href={`/events/${featuredEvent.slug}`}>
                  <Button variant="outline" size="lg">
                    Детальніше
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
