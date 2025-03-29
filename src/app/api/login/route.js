import { generateAuthToken } from '../../../lib/jwt'
import { cookies } from 'next/headers'

export async function POST(request) {
  const { username, password } = await request.json()
  let token = null
  if (username === 'admin' && password === process.env.ADMIN_PASSWORD) {
    token = await generateAuthToken('admin')
  } else {
    token = await generateAuthToken(`user:${username}`)
  }

  await cookies().set('auth_token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    path: '/'
  })
  return new Response(JSON.stringify({ success: true }), {
    status: 200
  })
}
