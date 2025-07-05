import { authOptions } from '@/auth/auth-options'
import AuthProvider from '@/auth/auth-provider'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NextRep Fitness',
  description:
    'NextRep Fitness is a fitness tracking app that helps you track your workouts and progress.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased`}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  )
}
