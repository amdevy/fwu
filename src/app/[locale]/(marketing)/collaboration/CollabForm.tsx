import { getLocale, getTranslations } from 'next-intl/server'

export default async function CollabForm() {
  const t = await getTranslations()
  const locale = await getLocale()
  const ua = locale === 'ua'

  return (
    <div id="collab-form" className="collab-form">
      <div className="collab-form-inner" style={{ textAlign: 'center' }}>
        <h2>{t('collab.formTitle')}</h2>
        <p style={{ color: 'var(--fg-muted)', fontSize: 17, lineHeight: 1.6, margin: '0 auto 32px', maxWidth: 520 }}>
          {ua
            ? 'Напишіть нам у Direct у Instagram — менеджер платформи відповість упродовж робочого дня.'
            : 'Send us a Direct message on Instagram — the platform manager will respond within the working day.'}
        </p>
        <a
          href="https://www.instagram.com/fw.cooperation"
          target="_blank"
          rel="noreferrer"
          className="hairline-btn solid"
          style={{ padding: '18px 32px' }}
        >
          Instagram · @fw.cooperation →
        </a>
      </div>
    </div>
  )
}
