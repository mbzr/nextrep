import { GithubIcon } from '@/components/icons/github'
import { LogoIcon } from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div
        className={`container mx-auto flex flex-col items-start justify-between gap-y-6 px-4 py-6 md:flex-row md:gap-y-0`}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-y-2">
          <Link href="/" className="inline-flex">
            <LogoIcon />
          </Link>

          <div className="mt-4 flex flex-col items-start gap-y-2">
            <a
              href="https://github.com/mbzr/nextrep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-light">
                <GithubIcon className="mr-2" />
                <span>Check out the code</span>
              </Button>
            </a>
          </div>
        </div>
        <div className={`flex flex-row items-start gap-x-6 md:gap-x-14`}>
          {/* Links */}
          <div className="flex flex-col items-start gap-y-2">
            <span className="mb-2 text-base font-semibold">Links</span>
            <nav
              className={`flex flex-col items-start gap-y-2 text-sm font-medium`}
            >
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </nav>
          </div>
          {/* Resources Links */}
          <div className="flex flex-col items-start gap-y-2">
            <span className="mb-2 text-base font-semibold">Resources</span>
            <nav
              className={`flex flex-col items-start gap-y-2 text-sm font-medium`}
            >
              <Link href="/blog" className="hover:underline">
                Community
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/* Copyright/Legal Row */}
      <div className="mt-4 border-t border-white/20">
        <div
          className={`container mx-auto flex flex-col items-center justify-between gap-y-2 px-4 py-3 text-xs text-white/70 md:flex-row`}
        >
          <div>
            &copy; {new Date().getFullYear()} NextRep. All rights reserved.
          </div>
          <div className="flex gap-x-4">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
