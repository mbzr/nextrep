'use client'

import { GithubIcon } from '@/components/icons/github'
import { LogoIcon } from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const signupSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your full name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  marketing: z.boolean().optional(),
})

type SignupFormValues = z.infer<typeof signupSchema>

export const SignupForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { marketing: false },
  })

  const onSubmit = (data: SignupFormValues) => {
    console.log(data)
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
          Create a NextRep account
        </h1>
        <div className="flex flex-col gap-3">
          <FormProvider {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {showForm ? (
                <>
                  <FormField
                    name="name"
                    control={form.control}
                    label="Name"
                    htmlFor="name"
                    error={form.formState.errors.name?.message}
                    render={(field) => (
                      <Input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...field}
                        value={
                          typeof field.value === 'string' ? field.value : ''
                        }
                      />
                    )}
                  />
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
                        value={
                          typeof field.value === 'string' ? field.value : ''
                        }
                      />
                    )}
                  />
                  <FormField
                    name="password"
                    control={form.control}
                    label="Password"
                    htmlFor="password"
                    error={form.formState.errors.password?.message}
                    render={(field) => (
                      <Input
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        {...field}
                        value={
                          typeof field.value === 'string' ? field.value : ''
                        }
                      />
                    )}
                  />
                  <div className="flex items-center">
                    <input
                      id="marketing"
                      type="checkbox"
                      {...form.register('marketing')}
                      className={`mr-2`}
                    />
                    <label
                      htmlFor="marketing"
                      className="text-sm text-gray-700"
                    >
                      I agree to receive marketing emails with information
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className={`w-full`}
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Signing up...' : 'Signup'}
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => setShowForm(true)}
                    variant="secondary"
                    className={`w-full`}
                  >
                    Continue with Email
                  </Button>
                </>
              )}
            </form>
          </FormProvider>

          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <GithubIcon className="mr-3" />
              <span className="font-medium">Continue with Github</span>
            </Button>
          </div>

          <div className="mt-3 text-center text-xs text-slate-500">
            <Link
              className={`font-semibold`}
              rel="noreferrer"
              target="_blank"
              href="/terms"
            >
              Terms of Service
            </Link>
            <span className={`mx-1`}>and</span>
            <Link
              className={`font-semibold`}
              rel="noreferrer"
              target="_blank"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <hr className={`mx-6 mt-3 border-slate-200`} />
          </div>

          <div className="text-center text-sm text-slate-500">
            Have an account?{' '}
            <Link href="/login" className={`font-semibold underline`}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
