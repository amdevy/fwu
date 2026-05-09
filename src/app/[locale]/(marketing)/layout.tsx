import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { MarqueeStrip } from '@/components/layout/MarqueeStrip'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <AnnouncementBar />
        <Header />
        <MarqueeStrip />
        <main className="fade-in">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
