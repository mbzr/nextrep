import { decryptToken } from '@/auth/session'
import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const verifySchema = z.object({
  token: z.string(),
  code: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token, code } = verifySchema.parse(body)

    const payload = await decryptToken<{
      name: string
      email: string
      code: string
    }>(token)

    if (!payload || payload.code !== code) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 400 },
      )
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        emailVerified: new Date(),
      },
    })

    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
