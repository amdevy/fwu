'use client'

import { Hero } from '@/components/sections/Hero'
import { DirectionsGrid } from '@/components/sections/DirectionsGrid'
import { FeaturedEvent } from '@/components/sections/FeaturedEvent'
import { AudienceSection } from '@/components/sections/AudienceSection'
import { CasesCarousel } from '@/components/sections/CasesCarousel'
import { CTABlock } from '@/components/sections/CTABlock'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* 1.1 Hero */}
      <Hero
        title="Fashion West"
        subtitle="Платформа моди, бізнесу та культури Закарпаття"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
        fullHeight
        showScrollIndicator
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#about">
            <Button variant="outline" size="lg">
              Дізнатися більше
            </Button>
          </Link>
          <Link href="/contacts">
            <Button variant="primary" size="lg">
              Приєднатися
            </Button>
          </Link>
        </div>
      </Hero>

      {/* 1.2 About */}
      <section id="about" className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <ScrollReveal className="lg:col-span-3">
              <p className="text-sm tracking-wider text-sage uppercase">Про платформу</p>
              <h2 className="mt-3 font-heading text-3xl text-black uppercase md:text-4xl">
                Що таке FWU
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black/70">
                FWU Platform — це екосистема, яка об&apos;єднує дизайнерів, моделей, підприємців та культурних діячів Закарпаття. Ми створюємо простір, де мода стає інструментом розвитку регіону, а кожен учасник отримує доступ до B2B-рішень, освітніх програм та подій міжнародного рівня.
              </p>
              <p className="mt-4 text-base leading-relaxed text-black/70">
                Наша місія — відчути та відобразити потенціал Закарпаття через моду, об&apos;єкти, людей і сенси. Платформа для тих, хто формує ідентичність регіону.
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop"
                  alt="FWU Platform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 1.3 Directions */}
      <DirectionsGrid />

      {/* 1.4 Featured Event */}
      <FeaturedEvent />

      {/* 1.5 Audience */}
      <AudienceSection />

      {/* 1.6 Cases */}
      <CasesCarousel />

      {/* 1.7 CTA */}
      <CTABlock />
    </>
  )
}
