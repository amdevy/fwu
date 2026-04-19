import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.catalog')} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Капсули, силуети та аксесуари дизайнерів Заходу України.'
      : 'Capsules, silhouettes and accessories from Western Ukraine designers.',
    alternates: altsFor(locale, '/catalog'),
  }
}

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children
}
