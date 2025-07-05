import {
  AuthBody,
  AuthDesc,
  AuthHeader,
  AuthLayout,
  AuthTitle,
} from '@/app/(auth)/components/auth-layout'
import { VerifyLoginForm } from '@/app/(auth)/login/components/verify-login-form'

export default function VerifyLoginPage() {
  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>Verify your email</AuthTitle>
        <AuthDesc>Check your email for the verification code</AuthDesc>
      </AuthHeader>
      <AuthBody>
        <VerifyLoginForm />
      </AuthBody>
    </AuthLayout>
  )
}
