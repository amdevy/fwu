'use client'

import { ScrollReveal } from './ScrollReveal'
import { Briefcase, Megaphone, Palette, Users, Building2 } from 'lucide-react'

const audiences = [
  { icon: Briefcase, label: 'Підприємці' },
  { icon: Megaphone, label: 'Медійники' },
  { icon: Palette, label: 'Дизайнери' },
  { icon: Users, label: 'Мешканці' },
  { icon: Building2, label: 'Представники влади' },
]

export function AudienceSection() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl text-black uppercase md:text-4xl">
            Для кого платформа
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {audiences.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal
                key={item.label}
                delay={i * 0.1}
                className="flex min-w-[140px] flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center bg-white/80">
                  <Icon className="h-7 w-7 text-wine" />
                </div>
                <p className="mt-3 text-sm font-medium text-black">{item.label}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
