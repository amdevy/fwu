'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { GeneralForm } from '@/components/forms/GeneralForm'
import { ScrollReveal } from './ScrollReveal'
import { useState } from 'react'

export function CTABlock() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-white uppercase md:text-5xl">
              Стань частиною FWU
            </h2>
            <p className="mt-4 text-white/70">
              Залиште заявку і ми зв&apos;яжемося з вами
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" onClick={() => setIsOpen(true)}>
                Залишити заявку
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Залишити заявку">
        <GeneralForm />
      </Modal>
    </>
  )
}
