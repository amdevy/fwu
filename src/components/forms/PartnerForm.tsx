'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from './FormSuccess'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { partnerFormSchema, type PartnerFormData } from '@/lib/validations'
import { useTranslations } from 'next-intl'

export function PartnerForm() {
  const t = useTranslations('forms')
  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({})
  const { submit, loading, success } = useFormSubmit({ url: '/api/forms/partner' })

  const partnershipTypes = [
    { value: 'sponsor', label: t('partnerSponsor') },
    { value: 'media', label: t('partnerMedia') },
    { value: 'b2b', label: t('partnerB2B') },
    { value: 'other', label: t('partnerOther') },
  ]

  if (success) return <FormSuccess title={t('successPartner')} />

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      partnershipType: formData.get('partnershipType') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      gdprConsent: formData.get('gdprConsent') === 'on',
    }

    const result = partnerFormSchema.safeParse(data)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const key = String(issue.path[0])
        if (!fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    await submit(result.data)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="name" name="name" label={t('name')} placeholder={t('namePlaceholder')} error={errors.name} />
        <Input id="company" name="company" label={t('company')} placeholder={t('companyPlaceholder')} error={errors.company} />
      </div>
      <Select
        id="partnershipType"
        name="partnershipType"
        label={t('partnershipType')}
        placeholder={t('partnershipPlaceholder')}
        options={partnershipTypes}
        error={errors.partnershipType}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="phone" name="phone" label={t('phone')} placeholder={t('phonePlaceholder')} error={errors.phone} />
        <Input id="email" name="email" label={t('emailLabel')} placeholder={t('emailPlaceholder')} type="email" error={errors.email} />
      </div>
      <Textarea id="message" name="message" label={t('message')} placeholder={t('partnerDetailsPlaceholder')} error={errors.message} />
      <label className="flex items-start gap-2 text-xs text-sage">
        <input type="checkbox" name="gdprConsent" className="mt-0.5 accent-wine" />
        <span>{t('gdpr')}</span>
      </label>
      {errors.gdprConsent && <p className="text-xs text-wine">{errors.gdprConsent}</p>}
      <Button type="submit" loading={loading} className="w-full">
        {t('submitApplication')}
      </Button>
    </form>
  )
}
