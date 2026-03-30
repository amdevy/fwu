'use client'

import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { PartnerForm } from '@/components/forms/PartnerForm'
import { Briefcase, ShoppingBag, Palette, Handshake } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function AgencyPage() {
  const t = useTranslations('agency')
  const tf = useTranslations('forms')
  const [formOpen, setFormOpen] = useState(false)

  const services = [
    { icon: ShoppingBag, title: t('service1Title'), description: t('service1Desc') },
    { icon: Handshake, title: t('service2Title'), description: t('service2Desc') },
    { icon: Palette, title: t('service3Title'), description: t('service3Desc') },
    { icon: Briefcase, title: t('service4Title'), description: t('service4Desc') },
  ]

  const audiences = [
    { label: t('audience1'), description: t('audience1Desc') },
    { label: t('audience2'), description: t('audience2Desc') },
    { label: t('audience3'), description: t('audience3Desc') },
  ]

  return (
    <>
      <Hero
        title="FWU Agency"
        subtitle={t('subtitle')}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
      />

      {/* Services */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
              {t('servicesTitle')}
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
              {t('forWhom')}
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
              {t('portfolioTitle')}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: t('case1'), image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },
              { title: t('case2'), image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop' },
              { title: t('case3'), image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop' },
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
              {t('ctaTitle')}
            </h2>
            <p className="mt-4 text-white/70">
              {t('ctaSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" onClick={() => setFormOpen(true)}>
                {t('becomePartner')}
              </Button>
              <Link href="/designers">
                <Button variant="ghost" size="lg" className="text-white hover:text-white/80">
                  {t('designerCatalog')}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal isOpen={formOpen} onClose={() => setFormOpen(false)} title={t('becomePartner')}>
        <PartnerForm />
      </Modal>
    </>
  )
}
