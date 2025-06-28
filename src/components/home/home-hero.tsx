import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const HomeHero = () => {
  return (
    <section
      className={`relative flex h-[calc(100vh-80px)] items-center justify-center overflow-hidden`}
    >
      <div
        className={`absolute inset-0 bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat`}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div
        className={`relative z-10 container mx-auto px-4 text-center text-white`}
      >
        <div className="mx-auto max-w-4xl">
          {/* Main Headline */}
          <h1 className={`mb-6 text-5xl leading-tight font-bold md:text-7xl`}>
            Transform Your
            <span className="text-primary block">Fitness Journey</span>
          </h1>

          <p
            className={`mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl`}
          >
            Discover personalized workout programs, track your progress, and
            achieve your fitness goals with NextRep&apos;s comprehensive fitness
            platform.
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row`}
          >
            <Link href="/programs">
              <Button
                variant="primary"
                className="h-auto min-w-[200px] px-8 py-4 text-lg"
              >
                Explore Programs
              </Button>
            </Link>

            <Link href="/signup">
              <Button
                variant="outline-light"
                className="h-auto min-w-[200px] px-8 py-4 text-lg"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          <div
            className={`mt-12 flex flex-col items-center justify-center gap-8 text-sm text-gray-300 sm:flex-row`}
          >
            <div className="flex items-center gap-2">
              <div className="bg-primary h-2 w-2 rounded-full" />
              <span>10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary h-2 w-2 rounded-full" />
              <span>500+ Workout Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary h-2 w-2 rounded-full" />
              <span>Expert Trainers</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce`}
      >
        <div
          className={`flex h-10 w-6 justify-center rounded-full border-2 border-white`}
        >
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}
