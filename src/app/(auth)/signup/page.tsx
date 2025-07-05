import {
  AuthBody,
  AuthFooter,
  AuthLayout,
  AuthTitle,
} from '@/app/(auth)/components/auth-layout'
import { SignupForm } from '@/app/(auth)/signup/components/signup-form'
import Link from 'next/link'

export const metadata = {
  title: 'Sign Up',
}

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthTitle>Create a NextRep account</AuthTitle>
      <AuthBody>
        <SignupForm />
      </AuthBody>
      <AuthFooter>
        Have an account?{' '}
        <Link href="/login" className={`font-semibold underline`}>
          Login
        </Link>
      </AuthFooter>
    </AuthLayout>
  )
}
