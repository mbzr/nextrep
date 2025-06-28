'use client'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { Fragment, useEffect, useRef, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const sections = [
  {
    title: 'Section 1: Introduction',
    progress: '0 / 2',
    duration: '10min',
    lessons: [
      {
        number: 1,
        title: 'Welcome',
        duration: '3min',
        type: 'video',
        completed: false,
      },
      {
        number: 2,
        title: 'How to Use This Program',
        duration: '7min',
        type: 'video',
        completed: true,
      },
    ],
  },
  {
    title: 'Section 2: Getting Started',
    progress: '0 / 2',
    duration: '12min',
    lessons: [
      {
        number: 3,
        title: 'Equipment Overview',
        duration: '5min',
        type: 'video',
        completed: false,
      },
      {
        number: 4,
        title: 'Safety Tips',
        duration: '7min',
        type: 'video',
        completed: false,
      },
    ],
  },
  {
    title: 'Section 3: On To GraphQL',
    progress: '0 / 13',
    duration: '1hr 19min',
    lessons: [
      {
        number: 5,
        title: 'What is GraphQL?',
        duration: '7min',
        type: 'video',
        completed: false,
      },
    ],
  },
]

export const ProgramPage: React.FC = () => {
  const sidebarRef = useRef(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const sidebar = sidebarRef.current as HTMLElement

        if (window.scrollY < 80) {
          sidebar.style.top = `${Math.round(80 - window.scrollY)}px`
          sidebar.style.height = `calc(100% - ${Math.round(80 - window.scrollY)}px)`
        } else {
          sidebar.style.top = '0px'
          sidebar.style.height = '100%'
        }
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen bg-gray-50">
      <main
        className={`mr-0 flex-1 transition-all duration-300 ${sidebarOpen ? `mr-80 w-[calc(100%-320px)]` : `w-full`} `}
      >
        <div className={`relative aspect-video w-full overflow-hidden`}>
          <LiteYouTubeEmbed
            id="L2vS_050c-M"
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          />
        </div>

        <div className="space-y-6 p-8">
          <section className="text-gray-700">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              About this Program
            </h3>
            <p>
              This 6-week program is designed to help you build strength,
              improve endurance, and boost overall fitness. Each week features a
              balanced mix of workouts targeting all major muscle groups, with
              rest and recovery built in. Suitable for all fitness levels.
            </p>
          </section>

          <section className="text-gray-700">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              What&apos;s Included
            </h3>
            <ul className="list-disc pl-6">
              <li>18 unique, progressive workouts</li>
              <li>Video demonstrations for every exercise</li>
              <li>Printable workout calendar</li>
              <li>Tips for nutrition and recovery</li>
            </ul>
          </section>

          <section className="text-gray-700">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Instructor
            </h3>
            <div className="mt-2 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" />
              <div>
                <div className="font-semibold text-gray-900">Jane Doe</div>
                <div className="text-sm text-gray-600">Certified Trainer</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <aside
        ref={sidebarRef}
        className={clsx(
          `fixed top-20 right-0 z-20 flex h-full w-80 flex-col border-l border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out`,
          sidebarOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          className={`absolute top-20 left-0 z-30 flex h-8 w-8 -translate-x-full cursor-pointer items-center justify-center bg-gray-200 shadow focus:outline-none`}
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label={sidebarOpen ? 'Minimize sidebar' : 'Expand sidebar'}
        >
          {sidebarOpen ? (
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          )}
        </button>
        <div
          className={`flex-1 overflow-y-auto transition-opacity duration-300 ${sidebarOpen ? `opacity-100` : `pointer-events-none opacity-0`} `}
        >
          <h2 className="p-4 text-xl font-bold text-black">Program Content</h2>
          <nav>
            {sections.map((section, idx) => (
              <Fragment key={section.title}>
                <Disclosure as="div" defaultOpen={idx === 0}>
                  <DisclosureButton
                    className={`group flex w-full cursor-pointer items-center justify-between bg-[#f6f7f9] p-4`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-base font-semibold text-black">
                        {section.title}
                      </span>
                      <span className="mt-1 text-xs text-gray-500">
                        {section.progress} | {section.duration}
                      </span>
                    </div>
                    <ChevronDownIcon
                      className={`size-5 fill-black/60 group-data-hover:fill-black/50 group-data-open:rotate-180`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 p-0 text-sm/5 text-black/50">
                    <ul className="ml-0">
                      {section.lessons.map((lesson) => (
                        <li
                          key={lesson.title}
                          className={`border-b border-gray-100 px-4 py-3 last:border-b-0`}
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox checked={lesson.completed} />
                            <div className="flex flex-col gap-1">
                              <span className="text-base font-medium text-black">
                                {lesson.number}. {lesson.title}
                              </span>
                              <span
                                className={`flex items-center gap-1 text-xs text-gray-500`}
                              >
                                <ClockIcon className="size-4" />
                                {lesson.duration}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </Fragment>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}
