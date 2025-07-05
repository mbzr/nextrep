import { sendVerificationEmail } from '@/auth/email'
import { createToken } from '@/auth/session'
import prisma from '@/lib/prisma'
import { generateOtp } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const signupSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = signupSchema.parse(body)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 },
      )
    }

    // Generate OTP and create token
    const code = generateOtp()
    const token = await createToken({
      name,
      email,
      code,
    })

    // Send verification email
    await sendVerificationEmail(email, code, name)

    return NextResponse.json({ ok: true, token })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
