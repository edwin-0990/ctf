import { jwtVerify, SignJWT } from 'jose'

function generateId(length = 16) {
  return Math.random().toString(36)
}

export function generateAuthToken(userId) {
  const jwt = new SignJWT({
    role: userId == 'admin' ? 'admin' : 'user'
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(generateId())
    .setIssuedAt()
    .setSubject(userId)
    .sign(new TextEncoder().encode(process.env.AUTH_TOKEN))

  return jwt
}

export async function verifyAuthToken(token) {
  try {
    const payload = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.AUTH_TOKEN)
    )
    if (!payload.payload.sub) throw new Error('Invalid token')
    return { token, userId: payload.payload.sub, role: payload.payload.role }
  } catch (err) {
    console.log(err)
    return null
  }
}
