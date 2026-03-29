'use client'

import { useParams } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { getEventBySlug } from '@/lib/data'
import { formatDate, formatPrice } from '@/lib/utils'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = getEventBySlug(slug)

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-black">Подію не знайдено</h1>
          <Link href="/events" className="mt-4 inline-block text-wine hover:underline">
            Повернутися до подій
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero title={event.title} image={event.image} />

      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3">
              {event.isPast && <Badge>Завершено</Badge>}
              {event.isFeatured && <Badge variant="wine">Featured</Badge>}
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-sage">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(event.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-black/80">{event.description}</p>

            {/* Program */}
            {event.program && event.program.length > 0 && (
              <div className="mt-10">
                <h2 className="font-heading text-2xl text-black">Програма</h2>
                <ul className="mt-4 space-y-3">
                  {event.program.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black/70">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 bg-wine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-10">
                <h2 className="font-heading text-2xl text-black">Спікери</h2>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex items-center gap-4">
                      {speaker.image && (
                        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                          <Image src={speaker.image} alt={speaker.name} fill className="object-cover" sizes="56px" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-black">{speaker.name}</p>
                        <p className="text-sm text-sage">{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price & CTA */}
            {!event.isPast && (
              <div className="mt-10 flex items-center justify-between border-t border-light-gray pt-6">
                <div>
                  {event.price ? (
                    <p className="text-2xl font-medium text-black">{formatPrice(event.price)}</p>
                  ) : (
                    <p className="text-lg text-sage">Безкоштовно</p>
                  )}
                </div>
                <Button size="lg">Купити квиток</Button>
              </div>
            )}

            {/* Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="mt-10">
                <h2 className="font-heading text-2xl text-black">Галерея</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {event.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden">
                      <Image src={img} alt={`${event.title} фото ${i + 1}`} fill className="object-cover" sizes="33vw" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>

          <div className="mt-10">
            <Link href="/events" className="text-sm text-wine hover:underline">
              &larr; Всі події
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
