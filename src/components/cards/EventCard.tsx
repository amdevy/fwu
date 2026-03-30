'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { formatDate, formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import type { Event } from '@/types'

interface EventCardProps {
  event: Event
  index?: number
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const t = useTranslations('events')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/events/${event.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {event.isPast && (
            <div className="absolute top-3 left-3">
              <Badge>{t('finished')}</Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="mt-4">
        <div className="flex items-center gap-4 text-xs text-sage">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </div>

        <Link href={`/events/${event.slug}`}>
          <h3 className="mt-2 font-heading text-xl text-black transition-colors hover:text-wine">
            {event.title}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-sage line-clamp-2">{event.description}</p>

        <div className="mt-4 flex items-center justify-between">
          {event.price ? (
            <span className="text-sm font-medium text-black">{formatPrice(event.price)}</span>
          ) : (
            <span className="text-sm text-sage">{t('free')}</span>
          )}
          {!event.isPast && (
            <Button size="sm" variant="primary">
              {t('buyTicket')}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
