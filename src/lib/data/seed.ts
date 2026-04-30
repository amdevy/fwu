import fs from 'node:fs'
import path from 'node:path'
import type { Designer, Product } from '@/lib/types'

const heroExists = (slug: string) => {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', 'content', 'designers', slug, 'hero.jpg'))
  } catch {
    return false
  }
}

// FWU 2026 lineup — 2 травня, Мукачево, Darlin' Hall.
// Кожен дизайнер має папку у /public/content/designers/{slug}/ під фото.
// Поля description, logo, video, banner заповнюємо в міру отримання матеріалів.

const placeholder = (slug: string, kind: 'portrait' | 'hero' | 'piece' = 'hero') =>
  `/content/designers/${slug}/${kind}.jpg`

type DesignerSeed = Pick<Designer, 'id' | 'slug' | 'name' | 'brand' | 'city' | 'founded' | 'discipline' | 'lede' | 'quote'>

const seeds: DesignerSeed[] = [
  { id: 'natali-vlad', slug: 'natali-vlad', name: { ua: 'Natali & Vlad', en: 'Natali & Vlad' }, brand: 'Natali & Vlad', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Дизайнерський дует', en: 'Design duo' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'elsa-fairy', slug: 'elsa-fairy', name: { ua: 'Elsa Fairy', en: 'Elsa Fairy' }, brand: 'Elsa Fairy', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'dayinlinen', slug: 'dayinlinen', name: { ua: 'Dayinlinen', en: 'Dayinlinen' }, brand: 'Dayinlinen', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Льон', en: 'Linen' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'beart', slug: 'beart', name: { ua: 'BEART', en: 'BEART' }, brand: 'BEART', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'garmatyuk-kids', slug: 'garmatyuk-kids', name: { ua: 'Garmatyuk Kids', en: 'Garmatyuk Kids' }, brand: 'Garmatyuk Kids', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Дитячий одяг', en: 'Kidswear' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'kosinski', slug: 'kosinski', name: { ua: 'Kosinski', en: 'Kosinski' }, brand: 'Kosinski', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'shevstudio', slug: 'shevstudio', name: { ua: 'Shev Studios', en: 'Shev Studios' }, brand: 'Shev Studios', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'lili-mager', slug: 'lili-mager', name: { ua: 'Lili Mager', en: 'Lili Mager' }, brand: 'Lili Mager', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'natalidorosh888', slug: 'natalidorosh888', name: { ua: 'Natalidorosh888', en: 'Natalidorosh888' }, brand: 'Natalidorosh888', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'oksana-sakal', slug: 'oksana-sakal', name: { ua: 'Oksana Sakal', en: 'Oksana Sakal' }, brand: 'Oksana Sakal', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'andreas-moskin', slug: 'andreas-moskin', name: { ua: 'Andreas Moskin', en: 'Andreas Moskin' }, brand: 'Andreas Moskin', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'parada', slug: 'parada', name: { ua: 'Parada', en: 'Parada' }, brand: 'Parada', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'zlatich', slug: 'zlatich', name: { ua: 'Svitlana Zlatich', en: 'Svitlana Zlatich' }, brand: 'Svitlana Zlatich', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'loveli', slug: 'loveli', name: { ua: 'LOVELI', en: 'LOVELI' }, brand: 'LOVELI', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'horodetska', slug: 'horodetska', name: { ua: 'Horodetska', en: 'Horodetska' }, brand: 'Horodetska', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'royal-brand', slug: 'royal-brand', name: { ua: 'Royal Brand', en: 'Royal Brand' }, brand: 'Royal Brand', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'tonicdevie', slug: 'tonicdevie', name: { ua: 'Tonic De Vie', en: 'Tonic De Vie' }, brand: 'Tonic De Vie', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'brenzovych', slug: 'brenzovych', name: { ua: 'Oksana Brenzovych', en: 'Oksana Brenzovych' }, brand: 'Oksana Brenzovych', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'cheypesh', slug: 'cheypesh', name: { ua: 'Tina', en: 'Tina' }, brand: 'Tina', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'sams', slug: 'sams', name: { ua: 'SAMS', en: 'SAMS' }, brand: 'SAMS', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
]

// Лого присутнє лише в тих дизайнерів, у кого файл реально лежить у /public.
const LOGOS: Record<string, string> = {
  'andreas-moskin': '/content/designers/andreas-moskin/logo.svg',
  'lili-mager': '/content/designers/lili-mager/logo.png',
  'tonicdevie': '/content/designers/tonicdevie/logo.svg',
  'zlatich': '/content/designers/zlatich/logo.png',
  'shevstudio': '/content/designers/shevstudio/logo.png',
  'brenzovych': '/content/designers/brenzovych/logo.png',
}

export const designers: Designer[] = seeds.map((s) => ({
  ...s,
  portrait: placeholder(s.slug, 'portrait'),
  hero: heroExists(s.slug) ? placeholder(s.slug, 'hero') : '',
  logo: LOGOS[s.slug],
  gallery: [],
  timeline: [
    { year: 2026, ua: 'Участь у Fashion West Ukraine 2026 (Мукачево, Darlin\u2019 Hall).', en: 'Featured at Fashion West Ukraine 2026 (Mukachevo, Darlin\u2019 Hall).' },
  ],
}))

export const products: Product[] = []

export const getDesigner = (slug: string) => designers.find((d) => d.slug === slug)
export const getProduct = (id: string) => products.find((p) => p.id === id)
export const getProductsByDesigner = (designerId: string) =>
  products.filter((p) => p.designerId === designerId)
