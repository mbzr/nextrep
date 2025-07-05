import {
  AuthBody,
  AuthDesc,
  AuthHeader,
  AuthLayout,
  AuthTitle,
} from '@/app/(auth)/components/auth-layout'
import { VerifySignupForm } from '@/app/(auth)/signup/components/verify-signup-form'

export const metadata = {
  title: 'Verify Signup',
}

export default function VerifySignupPage() {
  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>Verify your email</AuthTitle>
        <AuthDesc>Check your email for the verification code</AuthDesc>
      </AuthHeader>

      <AuthBody>
        <VerifySignupForm />
      </AuthBody>
    </AuthLayout>
  )
}
