'use client'

import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { CTABlock } from '@/components/sections/CTABlock'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { PartnerForm } from '@/components/forms/PartnerForm'
import { Briefcase, ShoppingBag, Palette, Handshake } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    icon: ShoppingBag,
    title: 'Продаж дизайнерів',
    description: 'Представляємо та просуваємо локальних дизайнерів на B2B ринку, допомагаємо з виходом на нових клієнтів.',
  },
  {
    icon: Handshake,
    title: 'B2B рішення',
    description: 'Комплексні рішення для бутіків, рітейлерів та байєрів: від підбору колекцій до логістики.',
  },
  {
    icon: Palette,
    title: 'Капсульні колекції',
    description: 'Розробка ексклюзивних капсульних колекцій разом із дизайнерами платформи під замовлення бренду.',
  },
  {
    icon: Briefcase,
    title: 'Стилістичний консалтинг',
    description: 'Професійний консалтинг з питань стилю, формування асортименту та візуальної стратегії бренду.',
  },
]

const audiences = [
  { label: 'Бренди', description: 'Модні бренди, що шукають нових дизайнерів та колаборації' },
  { label: 'Рітейлери', description: 'Мультибрендові магазини та бутіки' },
  { label: 'Байєри', description: 'Професійні закупівельники для B2B-контрактів' },
]

export default function AgencyPage() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <Hero
        title="FWU Agency"
        subtitle="Продаж дизайнерів, B2B-рішення, комерційні пропозиції"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
      />

      {/* Services */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
              Що ми пропонуємо
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <div className="bg-white p-6">
                    <Icon className="h-8 w-8 text-wine" />
                    <h3 className="mt-4 font-heading text-lg text-black">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sage">{service.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
              Для кого
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="bg-white p-8 text-center">
                  <h3 className="font-heading text-xl text-black">{item.label}</h3>
                  <p className="mt-2 text-sm text-sage">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
              Кейси та портфоліо
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Колаборація з OLENA K', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },
              { title: 'B2B контракт із мережею бутіків', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop' },
              { title: 'Капсульна колекція ZAKARPATTIA', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-3 font-heading text-lg text-black">{item.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-white uppercase md:text-4xl">
              Отримати комерційну пропозицію
            </h2>
            <p className="mt-4 text-white/70">
              Залиште заявку і наша команда підготує індивідуальну пропозицію для вашого бізнесу
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" onClick={() => setFormOpen(true)}>
                Стати партнером
              </Button>
              <Link href="/designers">
                <Button variant="ghost" size="lg" className="text-white hover:text-white/80">
                  Каталог дизайнерів
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal isOpen={formOpen} onClose={() => setFormOpen(false)} title="Стати партнером">
        <PartnerForm />
      </Modal>
    </>
  )
}
