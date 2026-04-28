import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import HeroV2 from '@/components/home/HeroV2'
import FeaturedDesigners from '@/components/home/FeaturedDesigners'
import LatestEdition from '@/components/home/LatestEdition'
import EventsTeaser from '@/components/home/EventsTeaser'
import PressStrip from '@/components/home/PressStrip'
import CtaTriple from '@/components/home/CtaTriple'
import Numbers from '@/components/home/Numbers'
import JournalTease from '@/components/home/JournalTease'
import { SITE_URL, altsFor } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('brandFull')} — ${t('home.manifesto')}`,
    description: t('home.manifestoBody'),
    alternates: altsFor(locale, ''),
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: t('brandFull'),
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: ['https://instagram.com/fashionwestukraine'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: t('brandFull'),
      url: SITE_URL,
      inLanguage: locale === 'ua' ? 'uk-UA' : 'en-US',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <HeroV2 />
      <EventsTeaser />
      <FeaturedDesigners />
      <LatestEdition />
      <PressStrip />
      <Numbers />
      <CtaTriple />
      <JournalTease />
    </>
  )
}
