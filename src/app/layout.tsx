import type { Metadata } from 'next'
import { Bodoni_Moda, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getLocale } from 'next-intl/server'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fashionwestukraine.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fashion West Ukraine — елітна fashion-платформа Закарпаття',
    template: '%s',
  },
  description:
    'Fashion West Ukraine — елітний шоурум і fashion-платформа Закарпаття: українські дизайнери, закриті колекції, події, партнери. Ужгород, Львів, Україна.',
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: 'Fashion West Ukraine',
    title: 'Fashion West Ukraine — елітна fashion-платформа Закарпаття',
    description:
      'Українські дизайнери, закриті колекції з показів, події та партнери. Елітний шоурум і платформа Закарпаття.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion West Ukraine',
    description:
      'Елітна fashion-платформа Закарпаття: дизайнери, колекції, події.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/',
      'en-US': '/en',
      'x-default': '/',
    },
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const lang = locale === 'ua' ? 'uk' : locale
  return (
    <html lang={lang} className={`${bodoni.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
