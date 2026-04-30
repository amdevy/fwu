import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { designers } from '@/lib/data/seed'
import LogoGrid from '@/components/designers/LogoGrid'

export default async function FeaturedDesigners() {
  const t = await getTranslations()
  return (
    <section>
      <div className="sec-head">
        <div className="sh-num">N°02</div>
        <h2 className="sh-title">{t('home.featuredDesigners')}</h2>
        <div className="sh-sub">{t('home.featuredDesignersSub')}</div>
      </div>
      <LogoGrid designers={designers} />
      <div style={{ padding: '0 var(--gutter) 96px', display: 'flex', justifyContent: 'center' }}>
        <Link href="/designers" className="hairline-btn">{t('common.allDesigners')}</Link>
      </div>
    </section>
  )
}
