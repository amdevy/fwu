import { getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { photographers } from '@/lib/data/photographers'
import type { Locale } from '@/lib/types'

export default async function ArchivesAnnounce() {
  const locale = (await getLocale()) as Locale
  const ua = locale === 'ua'

  const totalDesigners = new Set(
    photographers.flatMap((p) => Object.keys(p.designerFolders))
  ).size

  return (
    <section className="archives-announce">
      <div className="aa-meta">
        <span>N°2026</span>
        <span className="aa-dot">·</span>
        <span>{ua ? 'Реліз' : 'Release'}</span>
        <span className="aa-dot">·</span>
        <span>{ua ? 'Архіви події' : 'Event archives'}</span>
      </div>

      <h2 className="aa-title display">
        {ua ? 'Архіви' : 'Archives'}
        <br />
        FWU 2026
      </h2>

      <p className="aa-lede">
        {ua
          ? 'Повні фото з показу 2 травня — на Google Drive у фотографів події. Без стиснення, без обмежень: усі кадри з runway, експо, gala та бекстейджу.'
          : 'Full show photography from 2 May — on Google Drive by the event photographers. Uncompressed, unlimited: every frame from the runway, expo, gala and backstage.'}
      </p>

      <div className="aa-list">
        {photographers.map((p, i) => {
          const designerCount = Object.keys(p.designerFolders).length
          const generalCount = p.generalFolders?.length ?? 0
          return (
            <Link key={p.id} href={`/photographers/${p.slug}`} className="aa-row">
              <div className="aa-row-num">N°{String(i + 1).padStart(2, '0')}</div>
              <div className="aa-row-name display">{p.name[locale]}</div>
              <div className="aa-row-meta">
                {designerCount} {ua ? 'дизайнерів' : 'designers'}
                {generalCount > 0 && ` · ${generalCount} ${ua ? 'загальних' : 'general'}`}
              </div>
              <div className="aa-row-cta">{ua ? 'Відкрити архів' : 'Open archive'} →</div>
            </Link>
          )
        })}
      </div>

      <div className="aa-stats">
        <div className="aa-stat">
          <div className="aa-stat-num">{photographers.length}</div>
          <div className="aa-stat-lbl">{ua ? 'Фотографи' : 'Photographers'}</div>
        </div>
        <div className="aa-stat">
          <div className="aa-stat-num">{totalDesigners}</div>
          <div className="aa-stat-lbl">{ua ? 'Дизайнерів у архіві' : 'Designers in archive'}</div>
        </div>
        <div className="aa-stat">
          <div className="aa-stat-num">02.05.26</div>
          <div className="aa-stat-lbl">{ua ? 'Дата події' : 'Event date'}</div>
        </div>
      </div>

      <div className="aa-cta">
        <Link href="/event/2026" className="hairline-btn solid">
          {ua ? 'Перейти до події' : 'Go to event'} →
        </Link>
        <Link href="/photographers" className="hairline-btn">
          {ua ? 'Усі фотографи' : 'All photographers'} →
        </Link>
      </div>
    </section>
  )
}
