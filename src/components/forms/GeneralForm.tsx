'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from './FormSuccess'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { generalFormSchema, type GeneralFormData } from '@/lib/validations'
import { useTranslations } from 'next-intl'

export function GeneralForm() {
  const t = useTranslations('forms')
  const [errors, setErrors] = useState<Partial<Record<keyof GeneralFormData, string>>>({})
  const { submit, loading, success } = useFormSubmit({ url: '/api/forms/general' })

  if (success) return <FormSuccess />

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      contact: formData.get('contact') as string,
      message: formData.get('message') as string,
      gdprConsent: formData.get('gdprConsent') === 'on',
    }

    const result = generalFormSchema.safeParse(data)
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
      <Input id="name" name="name" label={t('name')} placeholder={t('namePlaceholder')} error={errors.name} />
      <Input
        id="contact"
        name="contact"
        label={t('contact')}
        placeholder={t('contactPlaceholder')}
        error={errors.contact}
      />
      <Textarea
        id="message"
        name="message"
        label={t('message')}
        placeholder={t('messagePlaceholder')}
        error={errors.message}
      />
      <label className="flex items-start gap-2 text-xs text-sage">
        <input type="checkbox" name="gdprConsent" className="mt-0.5 accent-wine" />
        <span>{t('gdpr')}</span>
      </label>
      {errors.gdprConsent && <p className="text-xs text-wine">{errors.gdprConsent}</p>}
      <Button type="submit" loading={loading} className="w-full">
        {t('submit')}
      </Button>
    </form>
  )
}
