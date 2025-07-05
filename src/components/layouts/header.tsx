'use client'

import { LogoIcon } from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <header className="bg-white/45 text-black">
      <div className="container mx-auto flex flex-row px-4 py-4">
        <div className="flex grow items-center gap-x-12">
          <Link href="/" className="inline-flex">
            <LogoIcon />
          </Link>
          <nav className={`hidden lg:block`}>
            <ul className={`flex items-center gap-6 text-lg font-medium`}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/programs">Programs</Link>
              </li>
              <li>
                <Link href="/workouts">Workouts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-x-6">
          {session ? (
            <Menu>
              <MenuButton
                className={`inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm/6 font-semibold text-black`}
              >
                <Image
                  src={session.user?.image || '/images/default-avatar.png'}
                  alt="avatar"
                  width={32}
                  height={32}
                />
                {session.user?.name}
                <ChevronDownIcon className="size-4" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className={`w-40 origin-top-right rounded border border-gray-600 bg-white p-1 text-sm/6 text-black shadow-md transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0`}
              >
                <MenuItem>
                  <Link
                    href="/account/profile"
                    className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5`}
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className={`group flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5`}
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <>
              <Link href="/login" className="text-lg font-medium">
                Login
              </Link>
              <Link href="/signup" className="text-lg">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
