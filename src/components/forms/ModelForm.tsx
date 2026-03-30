'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from './FormSuccess'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { modelFormSchema, type ModelFormData } from '@/lib/validations'
import { useTranslations } from 'next-intl'

export function ModelForm() {
  const t = useTranslations('forms')
  const [errors, setErrors] = useState<Partial<Record<keyof ModelFormData, string>>>({})
  const { submit, loading, success } = useFormSubmit({ url: '/api/forms/model' })

  if (success) return <FormSuccess title={t('successModel')} />

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      age: formData.get('age') as string,
      height: formData.get('height') as string,
      city: formData.get('city') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      experience: (formData.get('experience') as string) || undefined,
      gdprConsent: formData.get('gdprConsent') === 'on',
    }

    const result = modelFormSchema.safeParse(data)
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
      <Input id="name" name="name" label={t('fullName')} placeholder={t('namePlaceholder')} error={errors.name} />
      <div className="grid gap-4 sm:grid-cols-3">
        <Input id="age" name="age" label={t('age')} placeholder="18" type="number" error={errors.age} />
        <Input id="height" name="height" label={t('height')} placeholder="175" type="number" error={errors.height} />
        <Input id="city" name="city" label={t('city')} placeholder={t('cityPlaceholder')} error={errors.city} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="phone" name="phone" label={t('phone')} placeholder={t('phonePlaceholder')} error={errors.phone} />
        <Input id="email" name="email" label={t('emailLabel')} placeholder={t('emailPlaceholder')} type="email" error={errors.email} />
      </div>
      <Textarea id="experience" name="experience" label={t('experience')} placeholder={t('experiencePlaceholder')} error={errors.experience} />
      <label className="flex items-start gap-2 text-xs text-sage">
        <input type="checkbox" name="gdprConsent" className="mt-0.5 accent-wine" />
        <span>{t('gdpr')}</span>
      </label>
      {errors.gdprConsent && <p className="text-xs text-wine">{errors.gdprConsent}</p>}
      <Button type="submit" loading={loading} className="w-full">
        {t('applyModel')}
      </Button>
    </form>
  )
}
