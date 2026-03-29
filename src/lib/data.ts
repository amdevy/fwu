import type { Event } from '@/types'

export const events: Event[] = [
  {
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
    program: [
      'День 1: Покази нових колекцій',
      'День 2: Майстер-класи та панельні дискусії',
      'День 3: Фінальне шоу та нетворкінг-вечірка',
    ],
    speakers: [
      { name: 'Олена Ковач', role: 'Головний дизайнер', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
      { name: 'Максим Поляков', role: 'Fashion-критик', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    ],
  },
  {
    id: '2',
    slug: 'design-market-uzhhorod',
    title: 'Design Market Uzhhorod',
    description:
      'Маркет локальних дизайнерів в центрі Ужгорода. Одяг, аксесуари, декор та мистецтво від найкращих виробників регіону.',
    date: '2026-06-20',
    time: '10:00',
    location: 'Набережна Незалежності, Ужгород',
    price: 0,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
  },
  {
    id: '3',
    slug: 'mastermind-fashion-business',
    title: 'Майстермайнд: Fashion Business',
    description:
      'Закритий майстермайнд для підприємців у модній індустрії. Стратегії розвитку, масштабування та вихід на нові ринки.',
    date: '2026-04-10',
    time: '14:00',
    location: 'FWU Hub, Ужгород',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop',
  },
  {
    id: '4',
    slug: 'fashion-night-2025',
    title: 'Fashion Night 2025',
    description:
      'Вечірня подія з показами нових колекцій, живою музикою та нетворкінгом. Унікальна атмосфера модного Закарпаття.',
    date: '2025-11-15',
    time: '19:00',
    location: 'Ужгород, Замок Паланок',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=800&fit=crop',
    isPast: true,
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
    ],
  },
]

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug)
}

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => !e.isPast)
}

export function getPastEvents(): Event[] {
  return events.filter((e) => e.isPast)
}
