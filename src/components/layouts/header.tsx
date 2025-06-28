import { LogoIcon } from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Header: React.FC = () => {
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
          <Link href="/login" className="text-lg font-medium">
            Login
          </Link>
          <Link href="/signup" className="text-lg">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
