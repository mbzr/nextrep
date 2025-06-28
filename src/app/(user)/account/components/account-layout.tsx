'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  {
    label: 'Profile',
    href: '/account/profile',
  },
  {
    label: 'Notifications',
    href: '/account/notifications',
  },
  {
    label: 'Preferences',
    href: '/account/preferences',
  },
]

export const AccountLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname()

  return (
    <div className="flex gap-8">
      <aside
        className={`w-64 min-w-[200px] border border-gray-600 px-6 py-8 shadow-md`}
      >
        <nav className="flex flex-col gap-4">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`rounded-full px-3 py-1 text-sm/6 font-semibold transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none ${
                  isActive ? 'text-primary' : 'text-black'
                } `}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <main className="flex-1 border border-gray-600 px-6 py-8 shadow-md">
        <div className="rounded-xl bg-white/5 p-3">{children}</div>
      </main>
    </div>
  )
}
