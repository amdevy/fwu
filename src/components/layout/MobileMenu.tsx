'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

const menuItems = [
  { label: 'Головна', href: '/' },
  { label: 'Agency', href: '/agency' },
  { label: 'Models', href: '/models' },
  { label: 'Events', href: '/events' },
  { label: 'Education', href: '/education' },
  { label: 'Culture', href: '/culture' },
  { label: 'Club', href: '/club' },
  { label: 'Дизайнери', href: '/designers' },
  { label: 'Про нас', href: '/about' },
  { label: 'Контакти', href: '/contacts' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
              <span className="font-heading text-xl tracking-[0.15em] text-white uppercase">
                Fashion West
              </span>
              <button onClick={onClose} className="p-2 text-white" aria-label="Закрити меню">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col gap-1">
              {menuItems.map((item, i) => (
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

            <div className="border-t border-white/20 pt-6">
              <Link
                href="/contacts"
                onClick={onClose}
                className="block w-full bg-wine py-3 text-center text-sm font-medium tracking-wide text-white uppercase"
              >
                Залишити заявку
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
