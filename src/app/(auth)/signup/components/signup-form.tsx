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

const signupSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
})

type SignupFormData = z.infer<typeof signupSchema>

export const SignupForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)

  const router = useRouter()

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.ok) {
        // Store token in cookie and redirect to verification
        document.cookie = `signup-token=${result.token}; path=/; max-age=900`
        router.push('/signup/verify')
      } else {
        setError(result.error || 'Registration failed')
      }
    } catch (err: unknown) {
      console.error('Registration error:', err)
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
                    value={typeof field.value === 'string' ? field.value : ''}
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
                    value={typeof field.value === 'string' ? field.value : ''}
                  />
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <LoaderIcon /> : 'Continue with Email'}
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
          Continue with Email
        </Button>
      )}

      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn('github')}
      >
        <GithubIcon className="mr-3" />
        <span className="font-medium">Continue with Github</span>
      </Button>
    </>
  )
}
