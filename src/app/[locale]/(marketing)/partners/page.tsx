import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import type { Locale } from '@/lib/types'
import { altsFor, pageLd } from '@/lib/seo'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return {
    title: `${t('nav.partners')} — ${t('brandFull')}`,
    description: locale === 'ua'
      ? 'Партнери платформи FWU: бренди, медіа, освіта, локації, логістика — і Partner Privileges для аудиторії.'
      : 'FWU platform partners: brands, media, education, venues, logistics — plus Partner Privileges for the audience.',
    alternates: altsFor(locale, '/partners'),
  }
}

export default async function PartnersPage() {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const partners = ua
    ? [
        { kind: 'Бренд', name: 'LAUD', note: 'Індустрійний партнер платформи' },
        { kind: 'Освіта', name: 'Julia Rizak Makeup School', note: 'Beauty-партнер показів' },
        { kind: 'Медіа', name: 'FASHIONREALITY', note: 'Інформаційний партнер' },
        { kind: 'Видання', name: 'Vogue Ukraine', note: 'Медіа-партнер' },
        { kind: 'Локація', name: 'Darlin Restobar, Мукачево', note: 'Майданчик FWU 2026' },
        { kind: 'Логістика', name: 'Нова Пошта', note: 'Доставка по Україні' },
      ]
    : [
        { kind: 'Brand', name: 'LAUD', note: 'Industry partner of the platform' },
        { kind: 'Education', name: 'Julia Rizak Makeup School', note: 'Runway beauty partner' },
        { kind: 'Media', name: 'FASHIONREALITY', note: 'Information partner' },
        { kind: 'Publication', name: 'Vogue Ukraine', note: 'Media partner' },
        { kind: 'Venue', name: 'Darlin Restobar, Mukachevo', note: 'Host venue of FWU 2026' },
        { kind: 'Logistics', name: 'Nova Poshta', note: 'Ukraine delivery' },
      ]

  const privileges = [
    t('partners.privatePieces'),
    t('partners.invitations'),
    t('partners.specialServices'),
    t('partners.closedExperiences'),
  ]

  return (
    <section className="fade-in">
      <JsonLd data={pageLd({
        locale,
        route: '/partners',
        name: t('nav.partners'),
        description: ua
          ? 'Партнери платформи FWU: бренди, медіа, освіта, локації, логістика — і Partner Privileges для аудиторії.'
          : 'FWU platform partners: brands, media, education, venues, logistics — plus Partner Privileges for the audience.',
        brandName: t('brandFull'),
        pageType: 'CollectionPage',
      })} />
      <div className="sec-head">
        <div className="sh-num">N°—</div>
        <h1 className="sh-title">{t('nav.partners')}</h1>
        <div className="sh-sub">{ua ? 'Інституції, з якими ми працюємо.' : 'Institutions we work with.'}</div>
      </div>

      <h2 className="kicker" style={{ padding: '0 var(--gutter) 16px' }}>{t('partners.logosKicker')}</h2>
      <div className="partner-logos">
        {partners.map((p) => (
          <div key={p.name} className="partner-logo">{p.name}</div>
        ))}
      </div>

      <div className="dix">
        {partners.map((p, i) => (
          <div key={i} className="dix-row" style={{ cursor: 'default' }}>
            <span className="n">№{String(i + 1).padStart(2, '0')}</span>
            <span className="name">{p.name}</span>
            <span className="brand">{p.kind}</span>
            <span className="disc">{p.note}</span>
            <span className="city" />
            <span className="arrow" />
          </div>
        ))}
      </div>

      <div style={{ padding: '96px var(--gutter) 32px' }}>
        <div className="sec-head" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="sh-num">N°—</div>
          <h2 className="sh-title">{t('partners.privilegesKicker')}</h2>
          <div className="sh-sub">{t('partners.privilegesSub')}</div>
        </div>
      </div>

      <div className="privileges">
        {privileges.map((line, i) => (
          <div key={i} className="privilege-row">
            <div className="num">№{String(i + 1).padStart(2, '0')}</div>
            <p>{line}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '64px var(--gutter) 120px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div className="kicker" style={{ marginBottom: 12 }}>{t('common.becomePartner')}</div>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 24 }}>
          {ua
            ? 'Якщо ви — шоурум, видання, інституція чи виробничий партнер, напишіть нам. Ми відкриті до спільних проєктів.'
            : 'If you are a showroom, publication, institution or production partner, write to us. We are open to collaborations.'}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.instagram.com/fw.cooperation" target="_blank" rel="noreferrer" className="hairline-btn solid">Instagram · @fw.cooperation →</a>
          <Link href="/collaboration" className="hairline-btn">{t('common.collaborate')} →</Link>
        </div>
      </div>
    </section>
  )
}
