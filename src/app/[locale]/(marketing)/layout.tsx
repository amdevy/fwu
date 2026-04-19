import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { CartProvider } from '@/components/providers/CartProvider'
import { Header } from '@/components/layout/Header'
import { MarqueeStrip } from '@/components/layout/MarqueeStrip'
import { Footer } from '@/components/layout/Footer'
import { Toast } from '@/components/ui/Toast'

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <CartProvider>
          <Header />
          <MarqueeStrip />
          <main className="fade-in">{children}</main>
          <Footer />
          <Toast />
        </CartProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
