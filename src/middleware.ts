import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  if (pathname === '/uk' || pathname.startsWith('/uk/')) {
    const target = pathname.replace(/^\/uk/, '/ua') + search
    return NextResponse.redirect(new URL(target, req.url), 301)
  }
  return intlMiddleware(req)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
