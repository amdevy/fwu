'use client'

import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { EventCard } from '@/components/cards/EventCard'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { PartnerForm } from '@/components/forms/PartnerForm'
import { getUpcomingEvents, getPastEvents } from '@/lib/data'
import Image from 'next/image'
import { useState } from 'react'

export default function EventsPage() {
  const [formOpen, setFormOpen] = useState(false)
  const upcoming = getUpcomingEvents()
  const past = getPastEvents()

  return (
    <>
      <Hero
        title="FWU Events"
        subtitle="Анонси подій, показів та маркетів"
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
      />

      {/* Upcoming */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-black uppercase md:text-4xl">
              Найближчі події
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          {upcoming.length === 0 && (
            <p className="mt-8 text-center text-sage">Наразі немає запланованих подій</p>
          )}
        </div>
      </section>

      {/* Past events */}
      {past.length > 0 && (
        <section className="bg-sand py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-black uppercase md:text-4xl">
                Минулі події
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <ScrollReveal key={event.id}>
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <h3 className="font-heading text-lg text-white">{event.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-forest py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-white uppercase md:text-4xl">
              Хочу організувати подію з FWU
            </h2>
            <p className="mt-4 text-white/70">
              Ми допоможемо з організацією, промоцією та логістикою вашої модної події
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" onClick={() => setFormOpen(true)}>
                Стати партнером
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal isOpen={formOpen} onClose={() => setFormOpen(false)} title="Організувати подію">
        <PartnerForm />
      </Modal>
    </>
  )
}
