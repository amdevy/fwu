'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { useTranslations } from 'next-intl'

const directions = [
  {
    label: 'Creative Talent Management',
    title: 'Agency',
    href: '/agency' as const,
    image: '/mock/3photo.jpg',
    badge: 'New Season',
  },
  {
    label: 'Curated Model Roster',
    title: 'Models',
    href: '/models' as const,
    image: '/mock/4photo.jpg',
  },
  {
    label: 'Runway & Fashion',
    title: 'Events',
    href: '/events' as const,
    image: '/mock/6photo.jpg',
  },
  {
    label: 'Fashion Academy',
    title: 'Education',
    href: '/education' as const,
    image: '/mock/7photo.jpg',
  },
]

const testimonials = [
  {
    quote: 'Fashion West gave me an international voice from a deeply local identity. It is rare to find a platform that honours both.',
    name: 'Olena Kovalchuk',
    role: 'Principal Model',
    avatar: '/mock/womanAvatar.jpg',
  },
  {
    quote: 'The editorial productions here are world class. My collections have reached audiences I never imagined possible from Zakarpattia.',
    name: 'Ivan Marchenko',
    role: 'Designer',
    avatar: '/mock/manAvatar.jpg',
  },
  {
    quote: "There's an authentic energy here unlike anywhere else. Fashion West builds careers with intention and artistry.",
    name: 'Sofia Berezan',
    role: 'Creative Director',
    avatar: '/mock/woman2Avatar.jpg',
  },
]

const productions = [
  {
    category: 'Editorial / Campaign',
    title: 'Fog & Linen Campaign',
    year: '2024',
    image: '/mock/9photo.jpg',
  },
  {
    category: 'Runway / Event',
    title: 'Winter Runway Series',
    year: '2024',
    image: '/mock/10photo.jpg',
  },
  {
    category: 'Lookbook / Culture',
    title: 'Carpathian Roots Lookbook',
    year: '2026',
    image: '/mock/11photo.jpg',
  },
]

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <Image
          src="/mock/1photo.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] text-white/50 uppercase md:text-xs"
          >
            / {t('heroTagline')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 font-heading text-6xl tracking-wide text-white uppercase md:text-8xl lg:text-[10rem]"
            style={{ letterSpacing: '0.08em', lineHeight: '0.9' }}
          >
            Fashion
            <br />
            West
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-2 font-heading text-4xl text-white/30 md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '0.15em' }}
          >
            2026
          </motion.p>
        </div>

        {/* Bottom bar with avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 flex items-center gap-4 px-6 pb-8 md:px-10 md:pb-10"
        >
          <div className="flex -space-x-2">
            {['/mock/womanAvatar.jpg', '/mock/manAvatar.jpg', '/mock/woman2Avatar.jpg'].map((src, i) => (
              <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white/20">
                <Image src={src} alt="" fill className="object-cover" sizes="32px" />
              </div>
            ))}
          </div>
          <p className="text-xs tracking-wide text-white/50">
            120+ Models &bull; 4 Directions &bull; One Platform
          </p>
        </motion.div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Photo with overlay card */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/mock/2photo.jpg"
                    alt="Fashion West"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Overlay card */}
                <div className="absolute -bottom-6 -right-4 bg-sand px-8 py-6 md:-right-8">
                  <p className="font-heading text-5xl text-forest">19</p>
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-sage uppercase">Est. 2019</p>
                  <p className="text-[10px] tracking-wide text-sage">Uzhhorod, Ukraine</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-sage uppercase">/ {t('aboutLabel')}</p>
                <h2 className="mt-4 font-heading text-4xl text-black uppercase md:text-5xl lg:text-6xl" style={{ lineHeight: '1' }}>
                  {t('aboutTitle')}
                </h2>

                <p className="mt-8 text-sm leading-relaxed text-black/60">
                  {t('aboutText1')}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {t('aboutText2')}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/about">
                    <span className="inline-flex items-center gap-2 bg-forest px-6 py-3 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-forest-light">
                      {t('ourStory')} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                  <Link href="/models">
                    <span className="inline-flex items-center gap-2 border border-black/20 px-6 py-3 text-xs font-medium tracking-widest text-black uppercase transition-colors hover:border-black/40">
                      {t('viewModels')}
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ DIRECTIONS ═══════ */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-sage uppercase">/ {t('directionsLabel')}</p>
              <h2 className="mt-3 font-heading text-4xl text-black uppercase md:text-5xl lg:text-6xl">
                {t('directionsTitle')}
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-black/50">
              {t('directionsDesc')}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {directions.map((dir, i) => (
              <ScrollReveal key={dir.href} delay={i * 0.1}>
                <Link href={dir.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={dir.image}
                      alt={dir.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {dir.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-sage/90 px-3 py-1 text-[9px] font-medium tracking-widest text-white uppercase">
                          {dir.badge}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <div>
                        <p className="text-[9px] tracking-[0.2em] text-white/40 uppercase">{dir.label}</p>
                        <h3 className="mt-1 font-heading text-2xl text-white uppercase">{dir.title}</h3>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED EVENT + STATS ═══════ */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <ScrollReveal direction="left">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">/ {t('featuredLabel')}</p>
                <h2 className="mt-4 font-heading text-4xl text-white uppercase md:text-5xl lg:text-6xl" style={{ lineHeight: '1' }}>
                  {t('featuredTitle')}
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-white/60">
                  {t('featuredDesc')}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/30 uppercase">
                  <span className="inline-block h-px w-6 bg-white/30" />
                  {t('featuredDate')}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/events">
                    <span className="inline-flex items-center gap-2 bg-wine px-6 py-3 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-wine-dark">
                      {t('reserveSeat')} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                  <Link href="/events">
                    <span className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:border-white/40">
                      {t('viewAllEvents')}
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/mock/8photo.jpg"
                  alt="Autumn Collection Gala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
            {[
              { value: '120', suffix: '+', label: t('statModels') },
              { value: '40', suffix: '+', label: t('statDesigners') },
              { value: '6', suffix: '', label: t('statYears') },
              { value: '200', suffix: '+', label: t('statEvents') },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <p className="font-heading text-5xl text-white md:text-6xl">
                    {stat.value}<span className="text-white/40">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-white/30 uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ VOICES ═══════ */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.3em] text-sage uppercase">/ {t('voicesLabel')}</p>
            <h2 className="mt-3 font-heading text-4xl text-black uppercase md:text-5xl lg:text-6xl">
              {t('voicesTitle')}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <div className="bg-sand p-8">
                  <p className="font-heading text-sm leading-relaxed text-black/80 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">{item.name}</p>
                      <p className="text-[10px] tracking-[0.15em] text-sage uppercase">{item.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCTIONS ═══════ */}
      <section className="bg-off-white pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] text-sage uppercase">/ {t('worksLabel')}</p>
              <h2 className="mt-3 font-heading text-4xl text-black uppercase md:text-5xl">
                {t('worksTitle')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/culture" className="hidden text-xs font-medium tracking-widest text-black uppercase underline underline-offset-4 md:inline-flex md:items-center md:gap-1">
                {t('viewAllWork')} <ArrowRight className="h-3 w-3" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {productions.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-[10px] tracking-[0.2em] text-sage uppercase">{item.category}</p>
                    <p className="text-xs text-sage">{item.year}</p>
                  </div>
                  <h3 className="mt-1 font-heading text-lg text-black">{item.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA / JOIN ═══════ */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Photo */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/mock/12photo.jpg"
                  alt="Join Fashion West"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-sage uppercase">/ {t('joinLabel')}</p>
                <h2 className="mt-4 font-heading text-4xl text-black uppercase md:text-5xl lg:text-6xl" style={{ lineHeight: '1' }}>
                  {t('joinTitle')}
                </h2>

                <p className="mt-8 text-sm leading-relaxed text-black/60">
                  {t('joinText1')}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {t('joinText2')}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contacts">
                    <span className="inline-flex items-center gap-2 bg-forest px-6 py-3 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-forest-light">
                      {t('getInTouch')} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                  <Link href="/about">
                    <span className="inline-flex items-center gap-2 border border-black/20 px-6 py-3 text-xs font-medium tracking-widest text-black uppercase transition-colors hover:border-black/40">
                      {t('learnMore')}
                    </span>
                  </Link>
                </div>

                {/* Bottom stats */}
                <div className="mt-12 grid grid-cols-3 border-t border-black/10 pt-6">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-sage uppercase">{t('founded')}</p>
                    <p className="mt-1 font-heading text-lg text-black">2019</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-sage uppercase">{t('basedIn')}</p>
                    <p className="mt-1 font-heading text-lg text-black">Uzhhorod</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-sage uppercase">{t('network')}</p>
                    <p className="mt-1 font-heading text-lg text-black">Ukraine<span className="text-sage">+</span></p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
