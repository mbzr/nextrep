'use client'

import { GithubIcon } from '@/components/icons/github'
import { LoaderIcon } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type LoginFormData = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  // const searchParams = useSearchParams()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('email', {
        email: data.email,
        redirect: false,
      })

      if (result?.error) {
        setError('User not found or email not verified')
      } else {
        // Store email in cookie and redirect to verification
        document.cookie = `verification-email=${data.email}; path=/; max-age=900`
        router.push('/login/verify')
      }
    } catch (err: unknown) {
      console.error('Login error:', err)
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {showForm ? (
        <>
          {error && <p className="mb-6 text-sm text-red-600">{error}</p>}
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                className={`w-full`}
                disabled={isLoading || form.formState.isSubmitting}
              >
                {isLoading ? <LoaderIcon /> : 'Login with email'}
              </Button>
            </form>
          </FormProvider>
        </>
      ) : (
        <Button
          onClick={() => setShowForm(true)}
          variant="secondary"
          className={`w-full`}
        >
          Login with Email
        </Button>
      )}

      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn('github')}
      >
        <GithubIcon className="mr-3" />
        <span className="font-medium">Login with Github</span>
      </Button>
    </>
  )
}
