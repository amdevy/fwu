import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export async function Footer() {
  const locale = await getLocale()
  const t = await getTranslations()
  const ua = locale === 'ua'

  return (
    <footer className="fw-footer">
      <div className="fw-footer-grid">
        <div>
          <h4>{ua ? 'Платформа' : 'Platform'}</h4>
          <p
            style={{
              maxWidth: 320,
              fontSize: 14,
              color: 'var(--fg-muted)',
              margin: '0 0 18px',
            }}
          >
            {t('home.footerLine')}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
            }}
          >
            contact@fashionwest.ua
          </p>
        </div>
        <div>
          <h4>{ua ? 'Розділи' : 'Sections'}</h4>
          <ul>
            <li><Link href="/about">{t('nav.about')}</Link></li>
            <li><Link href="/designers">{t('nav.designers')}</Link></li>
            <li><Link href="/pop-up">{t('nav.popup')}</Link></li>
            <li><Link href="/projects">{t('nav.projects')}</Link></li>
            <li><Link href="/partners">{t('nav.partners')}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{ua ? 'Співпраця' : 'Engage'}</h4>
          <ul>
            <li><Link href="/collaboration">{t('nav.collaboration')}</Link></li>
            <li><Link href="/contacts">{t('nav.contacts')}</Link></li>
            <li><a href="mailto:partners@fashionwest.ua">partners@fashionwest.ua</a></li>
            <li><a href="mailto:popup@fashionwest.ua">popup@fashionwest.ua</a></li>
          </ul>
        </div>
        <div>
          <h4>{ua ? 'Слідкувати' : 'Follow'}</h4>
          <ul>
            <li><a href="https://www.instagram.com/fw.ukraine" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://t.me/fashionwestukraine2025" target="_blank" rel="noreferrer">Telegram</a></li>
          </ul>
        </div>
      </div>
      <div className="huge">
        Fashion West Ukraine
      </div>
      <div className="fw-foot-bottom">
        <span>© {new Date().getFullYear()} Fashion West Ukraine</span>
        <span>{ua ? 'Закарпаття / Україна' : 'Transcarpathia / Ukraine'}</span>
      </div>
    </footer>
  )
}
