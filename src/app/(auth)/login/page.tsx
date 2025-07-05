import {
  AuthBody,
  AuthFooter,
  AuthLayout,
  AuthTitle,
} from '@/app/(auth)/components/auth-layout'
import { LoginForm } from '@/app/(auth)/login/components/login-form'
import Link from 'next/link'

export const metadata = {
  title: 'Login',
  description: 'Login to your NextRep account',
}

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthTitle>Welcome back</AuthTitle>
      <AuthBody>
        <LoginForm />
      </AuthBody>
      <AuthFooter>
        Dont have an account?{' '}
        <Link href="/signup" className={`font-semibold underline`}>
          Sign up
        </Link>
      </AuthFooter>
    </AuthLayout>
  )
}
