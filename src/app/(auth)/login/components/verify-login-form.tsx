'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const VerifyLoginForm = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get email from cookie
    const cookies = document.cookie.split(';')
    const emailCookie = cookies.find((c) =>
      c.trim().startsWith('verification-email='),
    )
    if (emailCookie) {
      setEmail(emailCookie.split('=')[1])
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const url = `${window.location.origin}/api/auth/callback/email?email=${encodeURIComponent(email.toLowerCase())}&token=${code}`
      const response = await fetch(url)

      if (response.ok) {
        const redirectTo = searchParams.get('redirectTo') || '/'
        router.push(redirectTo)
      } else {
        setError('Invalid verification code')
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium">
            Verification Code
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`mt-1 block w-full rounded-md border border-gray-300 px-3 py-2`}
            placeholder="Enter 6-digit code"
            maxLength={6}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50`}
        >
          {isLoading ? 'Verifying...' : 'Login'}
        </button>
      </form>
    </>
  )
}
