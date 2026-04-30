import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers } from '@/lib/data/seed'
import type { Locale } from '@/lib/types'
import { altsFor } from '@/lib/seo'
import LogoGrid from '@/components/designers/LogoGrid'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('designers.title')} — ${t('brandFull')}`,
    description: t('designers.subtitle'),
    alternates: altsFor(locale, '/designers'),
  }
}

export default async function DesignersPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  return (
    <section className="fade-in">
      <div className="sec-head">
        <div className="sh-num">{t('designers.index')}</div>
        <h1 className="sh-title">{t('designers.title')}</h1>
        <div className="sh-sub">{t('designers.subtitle')}</div>
      </div>

      <LogoGrid designers={designers} />

      <div className="dix">
        {designers.map((d, i) => (
          <Link key={d.id} href={`/designers/${d.slug}`} className="dix-row">
            <span className="n">№{String(i + 1).padStart(2, '0')}</span>
            <span className="name">{d.name[locale]}</span>
            <span className="brand">{d.brand}</span>
            <span className="disc">{d.discipline[locale]}</span>
            <span className="city">{d.city[locale]} · {d.founded}</span>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
