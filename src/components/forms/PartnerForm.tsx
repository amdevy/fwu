'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from './FormSuccess'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { partnerFormSchema, type PartnerFormData } from '@/lib/validations'

const partnershipTypes = [
  { value: 'sponsor', label: 'Спонсор' },
  { value: 'media', label: 'Медіа' },
  { value: 'b2b', label: 'B2B' },
  { value: 'other', label: 'Інше' },
]

export function PartnerForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({})
  const { submit, loading, success } = useFormSubmit({ url: '/api/forms/partner' })

  if (success) return <FormSuccess title="Заявку партнера відправлено!" />

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
        <Input id="name" name="name" label="Ім'я" placeholder="Ваше ім'я" error={errors.name} />
        <Input id="company" name="company" label="Компанія" placeholder="Назва компанії" error={errors.company} />
      </div>
      <Select
        id="partnershipType"
        name="partnershipType"
        label="Тип партнерства"
        placeholder="Оберіть тип"
        options={partnershipTypes}
        error={errors.partnershipType}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="phone" name="phone" label="Телефон" placeholder="+380..." error={errors.phone} />
        <Input id="email" name="email" label="Email" placeholder="email@..." type="email" error={errors.email} />
      </div>
      <Textarea id="message" name="message" label="Повідомлення" placeholder="Деталі партнерства..." error={errors.message} />
      <label className="flex items-start gap-2 text-xs text-sage">
        <input type="checkbox" name="gdprConsent" className="mt-0.5 accent-wine" />
        <span>Я даю згоду на обробку персональних даних</span>
      </label>
      {errors.gdprConsent && <p className="text-xs text-wine">{errors.gdprConsent}</p>}
      <Button type="submit" loading={loading} className="w-full">
        Надіслати заявку
      </Button>
    </form>
  )
}
