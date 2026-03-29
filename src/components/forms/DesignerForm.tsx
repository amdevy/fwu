'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from './FormSuccess'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { designerFormSchema, type DesignerFormData } from '@/lib/validations'

export function DesignerForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof DesignerFormData, string>>>({})
  const { submit, loading, success } = useFormSubmit({ url: '/api/forms/designer' })

  if (success) return <FormSuccess title="Заявку дизайнера відправлено!" />

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      website: (formData.get('website') as string) || undefined,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      gdprConsent: formData.get('gdprConsent') === 'on',
    }

    const result = designerFormSchema.safeParse(data)
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
        <Input id="name" name="name" label="Ім'я та прізвище" placeholder="Ваше ім'я" error={errors.name} />
        <Input id="brand" name="brand" label="Назва бренду" placeholder="Назва бренду" error={errors.brand} />
      </div>
      <Input id="website" name="website" label="Сайт / Instagram" placeholder="https://... або @..." error={errors.website} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="phone" name="phone" label="Телефон" placeholder="+380..." error={errors.phone} />
        <Input id="email" name="email" label="Email" placeholder="email@..." type="email" error={errors.email} />
      </div>
      <Textarea id="message" name="message" label="Повідомлення" placeholder="Що хочете від співпраці?" error={errors.message} />
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
