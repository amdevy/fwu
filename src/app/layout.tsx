import type { Metadata } from 'next'
import { Bodoni_Moda, DM_Sans } from 'next/font/google'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FWU Platform — Fashion West Ukraine',
    template: '%s | FWU Platform',
  },
  description:
    'Платформа моди, бізнесу та культури Закарпаття. Agency, Models, Events, Education, Culture.',
  keywords: [
    'FWU',
    'Fashion West Ukraine',
    'мода',
    'Закарпаття',
    'Ужгород',
    'дизайнери',
    'модельний бізнес',
    'fashion platform',
  ],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'FWU Platform',
    title: 'FWU Platform — Fashion West Ukraine',
    description:
      'Платформа моди, бізнесу та культури Закарпаття.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FWU Platform — Fashion West Ukraine',
    description:
      'Платформа моди, бізнесу та культури Закарпаття.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={`${bodoni.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-off-white font-body text-black antialiased">
        {children}
      </body>
    </html>
  )
}
