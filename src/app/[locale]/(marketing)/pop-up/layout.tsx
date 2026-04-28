import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.popup')} — ${t('brandFull')}`,
    description: t('popup.subtitle'),
    alternates: altsFor(locale, '/pop-up'),
  }
}

export default function PopupLayout({ children }: { children: React.ReactNode }) {
  return children
}
