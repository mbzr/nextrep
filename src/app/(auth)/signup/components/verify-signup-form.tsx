'use client'

import { LoaderIcon } from '@/components/icons/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const VerifySignupForm = () => {
  const [token, setToken] = useState('')
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const cookies = document.cookie.split(';')
    const tokenCookie = cookies.find((c) =>
      c.trim().startsWith('signup-token='),
    )
    if (tokenCookie) {
      setToken(tokenCookie.split('=')[1])
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/verify-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, code }),
      })

      const result = await response.json()

      if (result.ok) {
        await signIn('signup-token', {
          token,
          redirect: false,
        })
        router.push('/')
      } else {
        setError(result.error || 'Verification failed')
      }
    } catch (err: unknown) {
      console.error('Verification error:', err)
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {error && <p className="mb-6 text-sm text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium">
            Verification Code
          </label>
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`mt-1 block w-full rounded-md border border-gray-300 px-3 py-2`}
            placeholder="Enter 6-digit code"
            maxLength={6}
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoaderIcon /> : 'Verify'}
        </Button>
      </form>
    </>
  )
}
