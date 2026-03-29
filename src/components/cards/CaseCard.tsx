'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types'

interface CaseCardProps {
  item: CaseStudy
  index?: number
}

export function CaseCard({ item, index = 0 }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-full">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
      </div>
      <blockquote className="mt-4 text-sm italic leading-relaxed text-black/80">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <p className="mt-3 text-sm font-medium text-black">{item.name}</p>
      {item.role && <p className="text-xs text-sage">{item.role}</p>}
    </motion.div>
  )
}
