'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { usePathname } from '@/i18n/navigation'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      <Header transparent={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
