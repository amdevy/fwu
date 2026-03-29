import { z } from 'zod/v4'

export const designerFormSchema = z.object({
  name: z.string().min(2, 'Мінімум 2 символи'),
  brand: z.string().min(2, 'Вкажіть назву бренду'),
  website: z.string().url('Невірний формат URL').or(z.literal('')).optional(),
  phone: z.string().min(10, 'Невірний номер телефону'),
  email: z.email('Невірний формат email'),
  message: z.string().min(10, 'Мінімум 10 символів'),
  gdprConsent: z.literal(true, { error: 'Необхідна згода на обробку даних' }),
})

export const modelFormSchema = z.object({
  name: z.string().min(2, 'Мінімум 2 символи'),
  age: z.coerce.number().min(14, 'Мінімум 14 років').max(65, 'Максимум 65 років'),
  height: z.coerce.number().min(150, 'Мінімум 150 см').max(210, 'Максимум 210 см'),
  city: z.string().min(2, 'Вкажіть місто'),
  phone: z.string().min(10, 'Невірний номер телефону'),
  email: z.email('Невірний формат email'),
  experience: z.string().optional(),
  gdprConsent: z.literal(true, { error: 'Необхідна згода на обробку даних' }),
})

export const partnerFormSchema = z.object({
  name: z.string().min(2, 'Мінімум 2 символи'),
  company: z.string().min(2, 'Вкажіть назву компанії'),
  partnershipType: z.enum(['sponsor', 'media', 'b2b', 'other'], {
    error: 'Оберіть тип партнерства',
  }),
  phone: z.string().min(10, 'Невірний номер телефону'),
  email: z.email('Невірний формат email'),
  message: z.string().min(10, 'Мінімум 10 символів'),
  gdprConsent: z.literal(true, { error: 'Необхідна згода на обробку даних' }),
})

export const generalFormSchema = z.object({
  name: z.string().min(2, 'Мінімум 2 символи'),
  contact: z.string().min(5, 'Вкажіть телефон або email'),
  message: z.string().min(10, 'Мінімум 10 символів'),
  gdprConsent: z.literal(true, { error: 'Необхідна згода на обробку даних' }),
})

export type DesignerFormData = z.infer<typeof designerFormSchema>
export type ModelFormData = z.infer<typeof modelFormSchema>
export type PartnerFormData = z.infer<typeof partnerFormSchema>
export type GeneralFormData = z.infer<typeof generalFormSchema>
