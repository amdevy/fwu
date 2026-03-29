'use client'

import { CaseCard } from '@/components/cards/CaseCard'
import { ScrollReveal } from './ScrollReveal'
import type { CaseStudy } from '@/types'

const cases: CaseStudy[] = [
  {
    name: 'Олена Ковач',
    role: 'Дизайнер, бренд OLENA K',
    quote: 'FWU допоміг мені вийти на B2B ринок та знайти перших оптових клієнтів за межами регіону.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Андрій Мельник',
    role: 'Власник бутіку',
    quote: 'Завдяки платформі я знайшов унікальних локальних дизайнерів, яких тепер представляю у своєму магазині.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Марія Федорчук',
    role: 'Модель',
    quote: 'Скаутинг через FWU відкрив для мене двері у професійний модельний бізнес. Перший контракт отримала за місяць.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
]

export function CasesCarousel() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
            Кейси та учасники
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
