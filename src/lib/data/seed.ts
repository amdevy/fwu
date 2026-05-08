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
  { id: 'natali-vlad', slug: 'natali-vlad', name: { ua: 'Natali & Vlad', en: 'Natali & Vlad' }, brand: 'Natali & Vlad x LACE', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Вечірні сукні', en: 'Eveningwear' }, lede: { ua: 'Вечірня колекція-сюрприз Наталії Копитчак і Владислава Шиш у партнерстві з магазином тканин LACE — сукні з ручною вишивкою.', en: 'A surprise eveningwear collection by Nataliia Kopytchak and Vladyslav Shysh in partnership with fabric house LACE — gowns with hand embroidery.' }, quote: { ua: '', en: '' } },
  { id: 'elsa-fairy', slug: 'elsa-fairy', name: { ua: 'Elsa Fairy', en: 'Elsa Fairy' }, brand: 'Elsa Fairy', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2017, discipline: { ua: 'Кутюр / дитячі та вечірні сукні', en: 'Couture / kidswear & eveningwear' }, lede: { ua: 'Кутюрний модний дім Ірини Микитюк: понад 1000 суконь для дітей та особливих подій на подіумах Парижа, Мілана й Нью-Йорка.', en: 'Iryna Mykytiuk\u2019s couture house — over 1000 dresses for children and special occasions, shown in Paris, Milan and New York.' }, quote: { ua: '', en: '' } },
  { id: 'dayinlinen', slug: 'dayinlinen', name: { ua: 'Dayinlinen', en: 'Dayinlinen' }, brand: 'Dayinlinen', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Льон', en: 'Linen' }, lede: { ua: 'Український бренд із вузькою спеціалізацією в льоні: бельгійська тканина, понад 30 відтінків та індивідуальна посадка кожного костюма.', en: 'A Ukrainian brand fully focused on linen — Belgian fabric, 30+ shades, individually fitted suits.' }, quote: { ua: '', en: '' } },
  { id: 'beart', slug: 'beart', name: { ua: 'BEART', en: 'BEART' }, brand: 'BEART', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Етно-одяг', en: 'Ethno-wear' }, lede: { ua: 'Етно-одяг у сучасному прочитанні — зручний і натуральний. «Бренд року» в етно-одязі за версією Fashion Industry AdWords 2024.', en: 'Ethno-wear with a modern voice — comfortable and natural. Brand of the Year in ethno fashion at Fashion Industry AdWords 2024.' }, quote: { ua: '', en: '' } },
  { id: 'garmatyuk-kids', slug: 'garmatyuk-kids', name: { ua: 'Garmatyuk Kids', en: 'Garmatyuk Kids' }, brand: 'Garmatyuk Kids', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Дитячий одяг', en: 'Kidswear' }, lede: { ua: 'Дитяча колекція, натхненна лялькою-мотанкою: вишивка, мереживо й ніжні тканини — для свята, сцени чи фотосесії.', en: 'A kidswear collection inspired by the motanka doll — embroidery, lace and soft fabrics for celebrations, stage and photoshoots.' }, quote: { ua: '', en: '' } },
  { id: 'kosinski', slug: 'kosinski', name: { ua: 'Kosinski', en: 'Kosinski' }, brand: 'Kosinski', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Дитячий одяг', en: 'Kidswear' }, lede: { ua: 'Дитяча колекція про весняну ніжність і свободу — легкі силуети, природні тканини й увага до деталей.', en: 'A children\u2019s collection about spring tenderness and freedom — light silhouettes, natural fabrics, careful detailing.' }, quote: { ua: '', en: '' } },
  { id: 'shevstudio', slug: 'shevstudio', name: { ua: 'Shev Studios', en: 'Shev Studios' }, brand: 'Shev Studios', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Апсайкл / casual', en: 'Upcycling / casual' }, lede: { ua: 'Апсайкл-бренд Барбари Шевчук у форматі Recoded Casual: знайомі силуети з extra-деталями та власним кодом для кожної речі.', en: 'Barbara Shevchuk\u2019s upcycling label in a Recoded Casual key — familiar silhouettes with extra detailing and a unique code on every piece.' }, quote: { ua: '', en: '' } },
  { id: 'lili-mager', slug: 'lili-mager', name: { ua: 'Lili Mager', en: 'Lili Mager' }, brand: 'Lili Mager', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2022, discipline: { ua: 'Вечірній одяг', en: 'Eveningwear' }, lede: { ua: 'Одяг для особливих моментів у стилі Minimal Glam — сукні, костюми й акцентні силуети з шовку, атласу та мережива.', en: 'Special-occasion clothing in a Minimal Glam key — dresses, suits and statement silhouettes in silk, satin and lace.' }, quote: { ua: '', en: '' } },
  { id: 'natalidorosh888', slug: 'natalidorosh888', name: { ua: 'Natalidorosh888', en: 'Natalidorosh888' }, brand: 'Natalidorosh888', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Дитячий і молодіжний одяг', en: 'Kids- and youthwear' }, lede: { ua: 'Бренд Наталі Дорош приносить креатив і свіжий погляд у дитячу та молодіжну моду, підкреслюючи характер кожної дитини.', en: 'Nataly Dorosh\u2019s brand brings fresh creativity to kids- and youthwear, celebrating each child\u2019s character.' }, quote: { ua: '', en: '' } },
  { id: 'oksana-sakal', slug: 'oksana-sakal', name: { ua: 'Oksana Sakal', en: 'Oksana Sakal' }, brand: 'Oksana Sakal', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Костюми для гімнастики', en: 'Performance & gymnastics wear' }, lede: { ua: 'Майже 20 років індивідуальних костюмів для художньої та повітряної гімнастики, pole dance і акробатики — як високої моди для сцени.', en: 'Nearly 20 years of custom costumes for rhythmic and aerial gymnastics, pole dance and acrobatics — performance wear treated as high fashion.' }, quote: { ua: '', en: '' } },
  { id: 'andreas-moskin', slug: 'andreas-moskin', name: { ua: 'Andreas Moskin', en: 'Andreas Moskin' }, brand: 'Andreas Moskin', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Авторський модний дім', en: 'Couture house' }, lede: { ua: 'Бренд Андрія Моськіна та Андреаса Білоуса — Forbes «30 до 30» і «Next 250»; одяг обирають від Президента України до голлівудських акторів.', en: 'The brand of Andrii Moskin and Andreas Bilous — Forbes \u201830 under 30\u2019 and \u2018Next 250\u2019 honourees, dressing names from the President of Ukraine to Hollywood actors.' }, quote: { ua: '', en: '' } },
  { id: 'parada', slug: 'parada', name: { ua: 'Parada', en: 'Parada' }, brand: 'Parada', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: '—', en: '—' }, lede: { ua: 'Опис буде додано.', en: 'Description coming soon.' }, quote: { ua: '', en: '' } },
  { id: 'zlatich', slug: 'zlatich', name: { ua: 'Svitlana Zlatich', en: 'Svitlana Zlatich' }, brand: 'Svitlana Zlatich', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Авторські колекції', en: 'Conceptual collections' }, lede: { ua: 'Світлана Златіч представляє колекцію KORYNNYA: вірш читає національна рекордсменка України Кіра Касинець, музичний супровід — піаністка-композиторка Богдана Богуславська.', en: 'Svitlana Zlatich presents the KORYNNYA collection — verse read by Ukrainian national record-holder Kira Kasynets, with music by pianist-composer Bohdana Bohuslavska.' }, quote: { ua: '', en: '' } },
  { id: 'loveli', slug: 'loveli', name: { ua: 'LOVELI', en: 'LOVELI' }, brand: 'LOVELI', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Жіночий одяг', en: 'Womenswear' }, lede: { ua: 'LOVELI — український бренд жіночого одягу про камерну розкіш, тілесну ніжність і тиху впевненість. Сукня тут — стан, у який жінка входить через тканину, силует і власний дозвіл бути собою.', en: 'LOVELI is a Ukrainian womenswear brand about intimate luxury, soft sensuality and quiet confidence — where a dress is less an outfit than a state a woman steps into, on her own terms.' }, quote: { ua: '', en: '' } },
  { id: 'horodetska', slug: 'horodetska', name: { ua: 'Horodetska boho', en: 'Horodetska boho' }, brand: 'Horodetska boho', city: { ua: 'Словенія / Україна', en: 'Slovenia / Ukraine' }, founded: 2016, discipline: { ua: 'Boho, авторські вироби', en: 'Boho, one-of-a-kind craft' }, lede: { ua: 'Horodetska boho — авторський бренд Світлани Городецької, кожен виріб якого створюється повністю вручну в єдиному екземплярі. Колекції показували у 20 країнах; у 2023 році бренд відзначений орденом «Королеви Анни», а сама дизайнерка увійшла до Топ-100 дизайнерів України.', en: 'Horodetska boho is the signature brand of Svitlana Horodetska, with every one-of-a-kind piece created entirely by hand. Her collections have shown in 20 countries; in 2023 the brand received the Order of Queen Anna, and she was named among Ukraine\u2019s Top-100 designers.' }, quote: { ua: '', en: '' } },
  { id: 'royal-brand', slug: 'royal-brand', name: { ua: 'VS Royal Brand', en: 'VS Royal Brand' }, brand: 'VS Royal Brand', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Жіночий одяг', en: 'Womenswear' }, lede: { ua: 'VS ROYAL BRAND, заснований Валерією Величко, удруге представляє колекцію на Fashion West Ukraine. Цьогорічна історія — Desert Dream: жіноча сила, витончена загадковість і магнетична жіночність.', en: 'VS ROYAL BRAND, founded by Valeriia Velychko, returns to Fashion West Ukraine for a second time with Desert Dream — a story of feminine power, refined mystery and magnetic charm.' }, quote: { ua: '', en: '' } },
  { id: 'tonicdevie', slug: 'tonicdevie', name: { ua: 'Tonic De Vie', en: 'Tonic De Vie' }, brand: 'Tonic De Vie', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Корсети', en: 'Corsetry' }, lede: { ua: 'Tonic De Vie — це більше, ніж мода: мистецтво, яке можна носити, і впевненість, яку можна відчути. Кожен корсет створюється індивідуально; бренд відкрито підтримує ЛГБТ-спільноту, фемінізм і бодіпозитив.', en: 'Tonic De Vie is more than fashion — art you can wear and confidence you can feel. Every corset is made-to-measure, and the brand stands openly with LGBTQ+, feminism and body-positive communities.' }, quote: { ua: '', en: '' } },
  { id: 'brenzovych', slug: 'brenzovych', name: { ua: 'Oksana Brenzovych', en: 'Oksana Brenzovych' }, brand: 'Oksana Brenzovych', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Концептуальний одяг', en: 'Conceptual wear' }, lede: { ua: 'Оксана Брензович представляє «Світ на зламі. 8 жіночих історій» — серію, де сорочка стає тілом, лінія — жестом, колір — станом. Це художнє висловлювання про насильство, свободу, право на тіло й невидиму жіночу присутність.', en: 'Oksana Brenzovych presents \u2018A World on the Edge. 8 Women\u2019s Stories\u2019 — a series where the shirt becomes a body, the line a gesture, colour a state of being. An artistic statement on violence, freedom and women\u2019s right to be seen.' }, quote: { ua: '', en: '' } },
  { id: 'cheypesh', slug: 'cheypesh', name: { ua: 'Tina Atelier', en: 'Tina Atelier' }, brand: 'Tina Atelier', city: { ua: 'Україна', en: 'Ukraine' }, founded: 2026, discipline: { ua: 'Вечірні та весільні сукні', en: 'Eveningwear & bridal' }, lede: { ua: 'Tina Atelier — український бренд вечірніх і весільних суконь дизайнерки Галини Чейпеш. Витончена естетика та бездоганний крій підкреслюють природну грацію й особливу проявленість кожної жінки.', en: 'Tina Atelier is a Ukrainian eveningwear and bridal house by designer Halyna Cheypesh — refined aesthetics and impeccable cut that bring out each woman\u2019s natural grace and presence.' }, quote: { ua: '', en: '' } },
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
