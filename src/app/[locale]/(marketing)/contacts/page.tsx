'use client'

import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { GeneralForm } from '@/components/forms/GeneralForm'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContactsPage() {
  const t = useTranslations('contacts')

  return (
    <>
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&h=1080&fit=crop"
      />

      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-black uppercase md:text-4xl">
                {t('findUs')}
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-wine" />
                  <div>
                    <p className="font-medium text-black">{t('address')}</p>
                    <p className="mt-1 text-sm text-sage">
                      {t('addressValue')}<br />
                      {t('addressRegion')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-wine" />
                  <div>
                    <p className="font-medium text-black">{t('phone')}</p>
                    <a href="tel:+380501234567" className="mt-1 block text-sm text-sage hover:text-wine">
                      +380 50 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-wine" />
                  <div>
                    <p className="font-medium text-black">{t('email')}</p>
                    <a href="mailto:hello@fwu.ua" className="mt-1 block text-sm text-sage hover:text-wine">
                      hello@fwu.ua
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-wine" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <div>
                    <p className="font-medium text-black">{t('socials')}</p>
                    <div className="mt-1 flex gap-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage hover:text-wine"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage hover:text-wine"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage hover:text-wine"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 md:p-8">
                <h3 className="font-heading text-2xl text-black">{t('writeUs')}</h3>
                <p className="mt-2 text-sm text-sage">
                  {t('writeUsDesc')}
                </p>
                <div className="mt-6">
                  <GeneralForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
