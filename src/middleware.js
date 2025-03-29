import { NextResponse } from 'next/server'
import { verifyAuthToken } from './lib/jwt'
export async function middleware(req) {
  const url = new URL(req.url)
  const res = NextResponse.next()

  const authToken = req.cookies.get('auth_token')?.value
  if (!authToken) return NextResponse.redirect(new URL('/login', url.origin))
  const { userId, role } = await verifyAuthToken(authToken)
  if (!userId || role !== 'admin')
    return NextResponse.redirect(new URL('/', url.origin))

  return res
}

export const config = {
  matcher: ['/flag']
}
