import { sealData, unsealData } from 'iron-session'

const sessionConfig = {
  password: process.env.SECRET_PASSWORD ?? '',
  cookieName: 'app-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
  ttl: 60 * 60 * 24 * 30, // 30 days
}

export const decryptToken = async <P extends Record<string, unknown>>(
  token: string,
): Promise<P | null> => {
  try {
    const payload = await unsealData(token, {
      password: sessionConfig.password,
    })

    if (payload && Object.keys(payload).length === 0) {
      return null
    }

    return payload as P
  } catch {
    return null
  }
}

export const createToken = async <T extends Record<string, unknown>>(
  payload: T,
  options?: {
    ttl?: number
  },
) => {
  return await sealData(payload, {
    password: sessionConfig.password,
    ttl: options?.ttl ?? 60 * 15, // 15 minutes
  })
}
