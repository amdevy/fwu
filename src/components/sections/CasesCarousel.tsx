'use client'

import { CaseCard } from '@/components/cards/CaseCard'
import { ScrollReveal } from './ScrollReveal'
import { useTranslations } from 'next-intl'
import type { CaseStudy } from '@/types'

export function CasesCarousel() {
  const t = useTranslations('home')

  const cases: CaseStudy[] = [
    {
      name: 'Олена Ковач',
      role: t('case1Role'),
      quote: t('case1Quote'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'Андрій Мельник',
      role: t('case2Role'),
      quote: t('case2Quote'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'Марія Федорчук',
      role: t('case3Role'),
      quote: t('case3Quote'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    },
  ]

  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
            {t('casesTitle')}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {cases.map((item, i) => (
            <CaseCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
