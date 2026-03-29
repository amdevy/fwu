'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface DirectionCardProps {
  title: string
  subtitle: string
  href: string
  image: string
  index?: number
}

export function DirectionCard({ title, subtitle, href, image, index = 0 }: DirectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group relative block overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm font-medium tracking-wider text-white uppercase">
              Детальніше
            </span>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-heading text-xl text-black md:text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-sage">{subtitle}</p>
        </div>
      </Link>
    </motion.div>
  )
}
