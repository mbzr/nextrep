import { LogoIcon } from '@/components/icons/logo'
import Link from 'next/link'
import React from 'react'

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-white py-10 md:py-12 lg:py-16`}
    >
      <div
        className={`mx-auto w-full max-w-[460px] space-y-6 border border-gray-600 px-6 py-8 shadow-md`}
      >
        <LogoIcon className="mx-auto h-auto w-[140px]" />
        {children}
      </div>
    </div>
  )
}

export const AuthHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-col gap-3">{children}</div>
}

export const AuthTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h1 className="text-center text-xl font-semibold">{children}</h1>
}

export const AuthDesc: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="mt-2 text-center text-sm text-gray-600">{children}</p>
}

export const AuthBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      {children}
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
    </div>
  )
}

export const AuthFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="text-center text-sm text-slate-500">{children}</div>
}
