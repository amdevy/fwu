'use client'

import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'

const STORAGE_KEY = 'fwu-announce-archives-2026'

export function AnnouncementBar() {
  const locale = useLocale()
  const ua = locale === 'ua'
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(STORAGE_KEY) !== 'dismissed') {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'dismissed')
    setVisible(false)
  }

  return (
    <div className="announce-bar">
      <div className="announce-inner">
        <span className="announce-tag">NEW</span>
        <Link href="/event/2026" className="announce-text">
          <span className="announce-text-full">
            {ua
              ? 'Архіви FWU 2026 від фотографів події вже доступні'
              : 'FWU 2026 archives from event photographers are now live'}
          </span>
          <span className="announce-text-short">
            {ua ? 'Архіви FWU 2026' : 'FWU 2026 archives'}
          </span>
          <span className="announce-arrow"> →</span>
        </Link>
        <button className="announce-close" onClick={dismiss} aria-label="Dismiss">
          ✕
        </button>
      </div>
    </div>
  )
}
