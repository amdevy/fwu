'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { FormSuccess } from './FormSuccess'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import { generalFormSchema, type GeneralFormData } from '@/lib/validations'

export function GeneralForm() {
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
      <Input id="name" name="name" label="Ім'я" placeholder="Ваше ім'я" error={errors.name} />
      <Input
        id="contact"
        name="contact"
        label="Телефон або email"
        placeholder="+380... або email@..."
        error={errors.contact}
      />
      <Textarea
        id="message"
        name="message"
        label="Повідомлення"
        placeholder="Ваше повідомлення..."
        error={errors.message}
      />
      <label className="flex items-start gap-2 text-xs text-sage">
        <input type="checkbox" name="gdprConsent" className="mt-0.5 accent-wine" />
        <span>Я даю згоду на обробку персональних даних</span>
      </label>
      {errors.gdprConsent && <p className="text-xs text-wine">{errors.gdprConsent}</p>}
      <Button type="submit" loading={loading} className="w-full">
        Надіслати
      </Button>
    </form>
  )
}
