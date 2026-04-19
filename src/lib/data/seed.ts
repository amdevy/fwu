import type { Designer, Product } from '@/lib/types'

export const designers: Designer[] = [
  {
    id: 'oleh-petrenko',
    slug: 'oleh-petrenko',
    name: { ua: 'Олег Петренко', en: 'Oleh Petrenko' },
    brand: 'HORA',
    city: { ua: 'Київ', en: 'Kyiv' },
    founded: 2019,
    discipline: { ua: 'Вечірній одяг, костюм', en: 'Evening wear, tailoring' },
    portrait: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    ],
    lede: {
      ua: "Костюм як архітектура. Олег працює з важкою вовною і шовком, наче будує інтер'єр — точні лінії, тиха розкіш.",
      en: 'Tailoring as architecture. Oleh works with heavy wool and silk as if designing an interior — exact lines, quiet luxury.',
    },
    timeline: [
      { year: 2014, ua: 'Львівська академія мистецтв, факультет дизайну.', en: 'Lviv Academy of Arts, design faculty.' },
      { year: 2017, ua: 'Асистент у паризькому ательє Lemaire.', en: 'Assistant at Lemaire atelier, Paris.' },
      { year: 2019, ua: 'Засновує HORA в Ужгороді, перша капсула — 12 силуетів.', en: 'Founds HORA in Uzhhorod, debut capsule of 12 silhouettes.' },
      { year: 2024, ua: 'Перший показ на Kyiv Fashion Week.', en: 'Debut at Kyiv Fashion Week.' },
    ],
    quote: {
      ua: 'Костюм — це коли тиша вміє стояти.',
      en: 'Tailoring is silence that knows how to stand.',
    },
  },
  {
    id: 'iryna-kovach',
    slug: 'iryna-kovach',
    name: { ua: 'Ірина Ковач', en: 'Iryna Kovach' },
    brand: 'KOVACH studio',
    city: { ua: 'Мукачево', en: 'Mukachevo' },
    founded: 2021,
    discipline: { ua: 'Трикотаж, верхній одяг', en: 'Knitwear, outerwear' },
    portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1200&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80',
    ],
    lede: {
      ua: 'Ірина переосмислює український трикотаж. Овеча вовна, фарбована корою горіха — одяг, який пахне лісом.',
      en: 'Iryna reimagines Ukrainian knitwear. Raw wool, dyed with walnut bark — garments that smell of forest.',
    },
    timeline: [
      { year: 2016, ua: 'КНУТД, факультет моделювання.', en: 'KNUTD, fashion design faculty.' },
      { year: 2018, ua: 'Стажування у Maison Margiela.', en: 'Internship at Maison Margiela.' },
      { year: 2021, ua: 'Заснувала KOVACH studio, майстерня в селі Лалово.', en: 'Founded KOVACH studio, workshop in the village of Lalove.' },
      { year: 2025, ua: 'Колаборація з музеєм народної архітектури.', en: 'Collaboration with the Open-Air Museum of Folk Architecture.' },
    ],
    quote: {
      ua: 'Я не цитую народне — я його продовжую.',
      en: "I don't quote the folk — I continue it.",
    },
  },
  {
    id: 'anna-hutsul',
    slug: 'anna-hutsul',
    name: { ua: 'Анна Гуцул', en: 'Anna Hutsul' },
    brand: 'BILA',
    city: { ua: 'Одеса', en: 'Odesa' },
    founded: 2020,
    discipline: { ua: 'Льон, мінімалізм', en: 'Linen, minimalism' },
    portrait: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80',
      'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=1200&q=80',
    ],
    lede: {
      ua: 'Білий льон, вершкова віскоза, форми, що дихають. BILA — про те, як мало потрібно, щоб виглядати цілісно.',
      en: 'White linen, cream viscose, shapes that breathe. BILA is about how little it takes to look whole.',
    },
    timeline: [
      { year: 2015, ua: 'Архітектурний факультет, Харків.', en: 'Architecture faculty, Kharkiv.' },
      { year: 2019, ua: 'Переїзд до Одеси.', en: 'Relocation to Odesa.' },
      { year: 2020, ua: 'Перша колекція з 8 речей, всі білі.', en: 'First collection of 8 pieces, all white.' },
    ],
    quote: {
      ua: 'Я прибираю, поки не залишається лише силует.',
      en: 'I subtract until only the silhouette remains.',
    },
  },
  {
    id: 'marko-berehy',
    slug: 'marko-berehy',
    name: { ua: 'Марко Береги', en: 'Marko Berehy' },
    brand: 'BEREHY',
    city: { ua: 'Львів', en: 'Lviv' },
    founded: 2018,
    discipline: { ua: 'Шкіра, аксесуари', en: 'Leather, accessories' },
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1200&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80',
    ],
    lede: {
      ua: 'Ручна шкіра, латунні пряжки, форма, яка старіє красиво. Марко робить сумки, які переживуть свого власника.',
      en: 'Hand-cut leather, brass buckles, shapes that age well. Marko makes bags that will outlast their owner.',
    },
    timeline: [
      { year: 2012, ua: 'Навчання у майстра шкіри у Флоренції.', en: 'Apprenticeship with a leather master in Florence.' },
      { year: 2018, ua: 'Відкрив майстерню у Львові.', en: 'Opened a workshop in Lviv.' },
    ],
    quote: {
      ua: "Шкіра пам'ятає руку. Добре пошита річ — це автопортрет.",
      en: 'Leather remembers the hand. A well-made piece is a self-portrait.',
    },
  },
  {
    id: 'sofia-verhovyna',
    slug: 'sofia-verhovyna',
    name: { ua: 'Софія Верховина', en: 'Sofiia Verkhovyna' },
    brand: 'VRKH',
    city: { ua: 'Харків', en: 'Kharkiv' },
    founded: 2022,
    discipline: { ua: 'Концептуальний одяг', en: 'Conceptual clothing' },
    portrait: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1800&q=80',
    gallery: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80'],
    lede: {
      ua: 'VRKH — це одяг про висоту. Силуети Софії — як полонини: довгі, суворі, з різким вітром усередині.',
      en: "VRKH is clothing about altitude. Sofiia's silhouettes are like high pastures: long, severe, with sharp wind inside.",
    },
    timeline: [
      { year: 2022, ua: 'Дебют на Mercedes-Benz Fashion Days Tbilisi.', en: 'Debut at Mercedes-Benz Fashion Days Tbilisi.' },
    ],
    quote: { ua: 'Одяг — це висота, на якій ти стоїш.', en: 'Clothing is the altitude you stand at.' },
  },
  {
    id: 'yulia-dub',
    slug: 'yulia-dub',
    name: { ua: 'Юлія Дуб', en: 'Yuliia Dub' },
    brand: 'DUB atelier',
    city: { ua: 'Дніпро', en: 'Dnipro' },
    founded: 2017,
    discipline: { ua: 'Весільний та couture', en: 'Bridal and couture' },
    portrait: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1594938298603-c77f152b1b9f?w=1800&q=80',
    gallery: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80'],
    lede: {
      ua: "Couture-ательє з восьмирічною історією. Юлія шиє сукні, в яких жінки виходять заміж — і в яких потім їх пам'ятають.",
      en: 'A couture atelier with an eight-year history. Yuliia tailors dresses women are married in — and remembered in.',
    },
    timeline: [],
    quote: { ua: 'Сукня має тримати. І відпускати.', en: 'A dress should hold. And release.' },
  },
]

export const products: Product[] = [
  { id: 'p01', num: 'N°01', designerId: 'oleh-petrenko', title: { ua: 'Пальто WOOL/01', en: 'Coat WOOL/01' }, category: { ua: 'Верхній одяг', en: 'Outerwear' }, price: 38500, material: { ua: '100% вовна, Biella', en: '100% wool, Biella' }, images: ['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=1400&q=80', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80'], sizes: ['XS','S','M','L','XL'] },
  { id: 'p02', num: 'N°02', designerId: 'iryna-kovach', title: { ua: 'Светр RAKHIV', en: 'Sweater RAKHIV' }, category: { ua: 'Трикотаж', en: 'Knitwear' }, price: 14200, material: { ua: "Вовна, ручне в'язання", en: 'Wool, hand-knit' }, images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1400&q=80', 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1400&q=80'], sizes: ['S','M','L'] },
  { id: 'p03', num: 'N°03', designerId: 'anna-hutsul', title: { ua: 'Сукня LINEN 04', en: 'Dress LINEN 04' }, category: { ua: 'Сукні', en: 'Dresses' }, price: 11800, material: { ua: 'Льон, віскоза', en: 'Linen, viscose' }, images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80', 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80'], sizes: ['XS','S','M','L'] },
  { id: 'p04', num: 'N°04', designerId: 'marko-berehy', title: { ua: 'Сумка CARRY', en: 'Bag CARRY' }, category: { ua: 'Аксесуари', en: 'Accessories' }, price: 22400, material: { ua: 'Телятина, латунь', en: 'Calfskin, brass' }, images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&q=80', 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1400&q=80'] },
  { id: 'p05', num: 'N°05', designerId: 'oleh-petrenko', title: { ua: 'Костюм HORA/II', en: 'Suit HORA/II' }, category: { ua: 'Костюм', en: 'Tailoring' }, price: 46000, material: { ua: 'Вовна, шовкова підкладка', en: 'Wool, silk lining' }, images: ['https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=80', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80'], sizes: ['S','M','L','XL'] },
  { id: 'p06', num: 'N°06', designerId: 'sofia-verhovyna', title: { ua: 'Плаття VRKH 01', en: 'Gown VRKH 01' }, category: { ua: 'Вечірнє', en: 'Evening' }, price: 32000, material: { ua: 'Шовк, вовна', en: 'Silk, wool' }, images: ['https://images.unsplash.com/photo-1495385794356-15371f348c31?w=1400&q=80'], sizes: ['XS','S','M'] },
  { id: 'p07', num: 'N°07', designerId: 'iryna-kovach', title: { ua: 'Пальто WALNUT', en: 'Coat WALNUT' }, category: { ua: 'Верхній одяг', en: 'Outerwear' }, price: 29600, material: { ua: 'Вовна, фарбування корою', en: 'Wool, bark-dyed' }, images: ['https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400&q=80'], sizes: ['S','M','L'] },
  { id: 'p08', num: 'N°08', designerId: 'anna-hutsul', title: { ua: 'Блуза BILA/03', en: 'Blouse BILA/03' }, category: { ua: 'Сорочки', en: 'Shirts' }, price: 8400, material: { ua: 'Льон', en: 'Linen' }, images: ['https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=1400&q=80'], sizes: ['XS','S','M','L'] },
  { id: 'p09', num: 'N°09', designerId: 'yulia-dub', title: { ua: 'Сукня COUTURE I', en: 'Dress COUTURE I' }, category: { ua: 'Couture', en: 'Couture' }, price: 78000, material: { ua: 'Шовк, ручна вишивка', en: 'Silk, hand-embroidered' }, images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80'], sizes: ['XS','S','M'] },
  { id: 'p10', num: 'N°10', designerId: 'marko-berehy', title: { ua: 'Ремінь BRASS', en: 'Belt BRASS' }, category: { ua: 'Аксесуари', en: 'Accessories' }, price: 4800, material: { ua: 'Шкіра, латунь', en: 'Leather, brass' }, images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1400&q=80'] },
  { id: 'p11', num: 'N°11', designerId: 'oleh-petrenko', title: { ua: 'Сорочка SILK/I', en: 'Shirt SILK/I' }, category: { ua: 'Сорочки', en: 'Shirts' }, price: 9600, material: { ua: 'Шовк', en: 'Silk' }, images: ['https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1400&q=80'], sizes: ['S','M','L'] },
  { id: 'p12', num: 'N°12', designerId: 'iryna-kovach', title: { ua: 'Кардиган FOREST', en: 'Cardigan FOREST' }, category: { ua: 'Трикотаж', en: 'Knitwear' }, price: 16800, material: { ua: 'Мериносова вовна', en: 'Merino wool' }, images: ['https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1400&q=80'], sizes: ['S','M','L'] },
]

export const getDesigner = (slug: string) => designers.find((d) => d.slug === slug)
export const getProduct = (id: string) => products.find((p) => p.id === id)
export const getProductsByDesigner = (designerId: string) =>
  products.filter((p) => p.designerId === designerId)
