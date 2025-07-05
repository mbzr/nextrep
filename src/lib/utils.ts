import { customAlphabet } from 'nanoid'

export const generateOtp = customAlphabet('0123456789', 6)

export const isValidName = (name: string) => {
  const urlPattern = /^https?:\/\//
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phonePattern = /^[\+]?[1-9][\d]{0,15}$/

  return (
    !urlPattern.test(name) &&
    !emailPattern.test(name) &&
    !phonePattern.test(name)
  )
}

export const isUserRoute = (url: string): boolean => {
  const protectedRoutes = [
    '/account/profile',
    '/account/notifications',
    '/account/preferences',
  ]

  return protectedRoutes.some((route) => url.startsWith(route))
}
