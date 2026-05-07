export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fashionwestukraine.com'

export const localeUrl = (locale: string, route: string) => {
  if (locale === 'ua') return route || '/'
  return `/${locale}${route}`
}

export const hreflangAlternates = (route: string) => ({
  canonical: localeUrl('ua', route) === '/' && route === '' ? '/' : undefined,
  languages: {
    'uk-UA': localeUrl('ua', route),
    'en-US': localeUrl('en', route),
  },
})

export const altsFor = (locale: string, route: string) => ({
  canonical: localeUrl(locale, route),
  languages: {
    'uk-UA': localeUrl('ua', route),
    'en-US': localeUrl('en', route),
  },
})

export const breadcrumbLd = (
  locale: string,
  trail: { name: string; route: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${localeUrl(locale, c.route)}`,
  })),
})
