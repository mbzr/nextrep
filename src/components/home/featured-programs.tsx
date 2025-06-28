'use client'

import ProgramCard from '@/app/(main)/programs/components/program-card'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRef, useState } from 'react'

type Program = {
  id: number
  title: string
  image: string
}

const featuredPrograms: Program[] = [
  { id: 1, title: '10 Min Take Over', image: '/images/about-us.jpg' },
  { id: 2, title: 'Back To Basics', image: '/images/hero-bg.jpg' },
  { id: 3, title: 'Strength Builder', image: '/images/about-us.jpg' },
  { id: 4, title: 'Cardio Blast', image: '/images/hero-bg.jpg' },
  { id: 5, title: 'Core Crusher', image: '/images/about-us.jpg' },
  { id: 6, title: 'Flexibility Flow', image: '/images/hero-bg.jpg' },
  { id: 7, title: 'Power Hour', image: '/images/about-us.jpg' },
  { id: 8, title: 'Recovery & Restore', image: '/images/hero-bg.jpg' },
]

export default function FeaturedPrograms() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Featured Programs
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover our most popular fitness programs designed to help you
            achieve your goals
          </p>
        </div>

        <div className="group relative">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100`}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100`}
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className={`flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {featuredPrograms.map((program) => (
              <div key={program.id} className="w-80 flex-shrink-0 snap-start">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/programs">
            <Button>
              View All Programs
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
