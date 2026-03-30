'use client'

import { Link } from '@/i18n/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useEffect } from 'react'

const menuLinks = [
  { label: 'Agency', href: '/agency' as const },
  { label: 'Models', href: '/models' as const },
  { label: 'Events', href: '/events' as const },
  { label: 'Education', href: '/education' as const },
  { label: 'Culture', href: '/culture' as const },
  { label: 'Contacts', href: '/contacts' as const },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-forest"
        >
          <div className="flex h-full flex-col px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="font-heading text-base uppercase tracking-[0.2em] text-off-white">Fashion West</span>
              <button onClick={onClose} className="p-2 text-white" aria-label={t('closeMenu')}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col gap-1">
              {menuLinks.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 font-heading text-2xl text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-4 border-t border-white/20 pt-6">
              <LanguageSwitcher variant="light" />
              <Link
                href="/contacts"
                onClick={onClose}
                className="block w-full bg-wine py-3 text-center text-xs font-medium tracking-widest text-white uppercase"
              >
                {t('joinPlatform')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
