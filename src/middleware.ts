import { APP_URL } from '@/lib/constants'
import { isUserRoute } from '@/lib/utils'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (isUserRoute(req.nextUrl.pathname) && !token) {
    const loginUrl = `${APP_URL}/login?callbackUrl=${encodeURIComponent(APP_URL + req.nextUrl.pathname)}`
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api/public).*)'],
}
