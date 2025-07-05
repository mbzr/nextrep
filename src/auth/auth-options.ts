import { sendVerificationEmail } from '@/auth/email'
import { decryptToken } from '@/auth/session'
import prisma from '@/lib/prisma'
import { generateOtp } from '@/lib/utils'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: 'signup-token',
      name: 'Signup Token',
      credentials: {
        token: { label: 'Token', type: 'text' },
      },
      async authorize(credentials) {
        if (credentials?.token) {
          const payload = await decryptToken<{
            name: string
            email: string
            code: string
          }>(credentials.token as string)

          if (payload) {
            const user = await prisma.user.findUnique({
              where: { email: payload.email },
              select: {
                id: true,
                email: true,
                name: true,
                image: true,
              },
            })

            if (user) {
              return user
            }
          }
        }
        return null
      },
    }),
    EmailProvider({
      server: 'none',
      from: process.env.NOREPLY_EMAIL,
      maxAge: 15 * 60,
      generateVerificationToken() {
        return generateOtp()
      },
      async sendVerificationRequest({ identifier: email, token }) {
        const user = await prisma.user.findUnique({
          where: { email },
          select: { name: true },
        })

        await sendVerificationEmail(email, token, user?.name)
      },
    }),
  ],
  pages: {
    signIn: '/login',
    verifyRequest: '/login/verify',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string
      session.user.email = token.email
      return session
    },
    async jwt({ token }) {
      if (token.sub) {
        const user = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { name: true, email: true, image: true },
        })

        if (user) {
          token.name = user.name
          token.email = user.email
          token.picture = user.image
        }
      }
      return token
    },
  },
}
