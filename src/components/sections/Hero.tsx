'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle?: string
  image: string
  fullHeight?: boolean
  showScrollIndicator?: boolean
  overlay?: boolean
  children?: React.ReactNode
  className?: string
}

export function Hero({
  title,
  subtitle,
  image,
  fullHeight = false,
  showScrollIndicator = false,
  overlay = true,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[60vh]',
        className
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl tracking-wide text-white uppercase md:text-6xl lg:text-8xl"
          style={{ letterSpacing: '0.15em' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base text-white/80 md:mt-6 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>

      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-white/60 animate-bounce-slow" />
        </motion.div>
      )}
    </section>
  )
}
