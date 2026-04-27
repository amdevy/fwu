'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const DIRECTIONS = ['designers', 'brands', 'media', 'sponsors', 'international'] as const

export default function CollabForm() {
  const t = useTranslations()
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState<typeof DIRECTIONS[number]>('designers')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`FWU Collaboration · ${t(`collab.${direction}`)} · ${data.get('name') ?? ''}`)
    const body = encodeURIComponent(
      `${t('collab.formName')}: ${data.get('name') ?? ''}\n` +
        `${t('collab.formCompany')}: ${data.get('company') ?? ''}\n` +
        `${t('collab.formEmail')}: ${data.get('email') ?? ''}\n` +
        `${t('collab.formDirection')}: ${t(`collab.${direction}`)}\n\n` +
        `${data.get('message') ?? ''}`,
    )
    window.location.href = `mailto:partners@fashionwest.ua?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div id="collab-form" className="collab-form">
      <div className="collab-form-inner">
        <h2>{t('collab.formTitle')}</h2>

        {submitted ? (
          <p style={{ color: 'var(--fg-muted)', fontSize: 17 }}>{t('collab.formSent')}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="collab-form-row">
              <label htmlFor="cf-name">{t('collab.formName')}</label>
              <input id="cf-name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="collab-form-row">
              <label htmlFor="cf-company">{t('collab.formCompany')}</label>
              <input id="cf-company" name="company" type="text" autoComplete="organization" />
            </div>
            <div className="collab-form-row">
              <label htmlFor="cf-email">{t('collab.formEmail')}</label>
              <input id="cf-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="collab-form-row">
              <label htmlFor="cf-direction">{t('collab.formDirection')}</label>
              <select
                id="cf-direction"
                name="direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value as typeof DIRECTIONS[number])}
              >
                {DIRECTIONS.map((d) => (
                  <option key={d} value={d}>
                    {t(`collab.${d}`)}
                  </option>
                ))}
              </select>
            </div>
            <div className="collab-form-row">
              <label htmlFor="cf-message">{t('collab.formMessage')}</label>
              <textarea id="cf-message" name="message" required />
            </div>
            <button type="submit" className="hairline-btn solid" style={{ width: '100%', justifyContent: 'center', padding: '18px 24px' }}>
              {t('collab.formSubmit')} →
            </button>
            <p className="collab-form-note">{t('collab.formNote')}</p>
          </form>
        )}
      </div>
    </div>
  )
}
