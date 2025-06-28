'use client'

import { LogoIcon } from '@/components/icons/logo'
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
    <div
      className={`flex min-h-screen items-center justify-center bg-white py-10 md:py-12 lg:py-16`}
    >
      <div
        className={`mx-auto w-full max-w-[460px] space-y-6 border border-gray-600 px-6 py-8 shadow-md`}
      >
        <LogoIcon className="mx-auto h-auto w-[140px]" />
        <h1 className="mb-6 text-center text-2xl font-bold">
          Forgot your password?
        </h1>
        <div className="flex flex-col gap-3">
          {submitted ? (
            <div className="text-center font-medium text-green-600">
              If an account with that email exists, a password reset link has
              been sent.
            </div>
          ) : (
            <FormProvider {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
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
                  {form.formState.isSubmitting
                    ? 'Sending...'
                    : 'Send Reset Link'}
                </Button>
              </form>
            </FormProvider>
          )}
          <div className="text-center text-sm text-slate-500">
            <Link href="/login" className="font-semibold underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
