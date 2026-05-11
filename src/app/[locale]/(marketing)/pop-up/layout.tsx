import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.popup')} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Curated-добірка моди Fashion West Ukraine — обмежені дропи, речі з показів, капсульні колекції та редакційна добірка. Не магазин і не маркетплейс, а простір відібраних речей.'
      : 'Fashion West Ukraine curated selection — limited drops, runway pieces, capsule collections and editor’s choice. Not a shop or marketplace, but a space of selected fashion.',
    alternates: altsFor(locale, '/pop-up'),
  }
}

export default function PopupLayout({ children }: { children: React.ReactNode }) {
  return children
}
