'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface FormSuccessProps {
  title?: string
  message?: string
}

export function FormSuccess({ title, message }: FormSuccessProps) {
  const t = useTranslations('forms')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center py-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-wine/10"
      >
        <Check className="h-8 w-8 text-wine" />
      </motion.div>
      <h3 className="mt-4 font-heading text-2xl text-black">{title || t('successTitle')}</h3>
      <p className="mt-2 text-sm text-sage">{message || t('successMessage')}</p>
    </motion.div>
  )
}
