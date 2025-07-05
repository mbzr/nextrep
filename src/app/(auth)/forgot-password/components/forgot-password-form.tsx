'use client'

import {
  AuthBody,
  AuthFooter,
  AuthLayout,
  AuthTitle,
} from '@/app/(auth)/components/auth-layout'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export const ForgotPasswordForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data)
    setSubmitted(true)
  }

  return (
    <AuthLayout>
      <AuthTitle>Forgot your password?</AuthTitle>

      <AuthBody>
        {submitted ? (
          <div className="text-center font-medium text-green-600">
            If an account with that email exists, a password reset link has been
            sent.
          </div>
        ) : (
          <FormProvider {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="email"
                control={form.control}
                label="Email Address"
                htmlFor="email"
                error={form.formState.errors.email?.message}
                render={(field) => (
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...field}
                    value={typeof field.value === 'string' ? field.value : ''}
                  />
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </FormProvider>
        )}
      </AuthBody>
      <AuthFooter>
        <Link href="/login" className="font-semibold underline">
          Back to Login
        </Link>
      </AuthFooter>
    </AuthLayout>
  )
}
