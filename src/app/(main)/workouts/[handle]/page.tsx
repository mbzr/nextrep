'use client'

import { PageHeader } from '@/components/ui/page-header'
import { PlayIcon } from '@heroicons/react/16/solid'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function WorkoutDetailPage() {
  return (
    <>
      <PageHeader
        title="Total Transformation"
        subtitle="Step Into A World Where Fitness Meets Freedom — Stream. Sweat.
            Succeed — Free Workouts, Real Results. Whether You&#39;re Pressing
            Play In Your Living Room Or On The Go, Our High-Energy, Expertly
            Designed Workouts"
      />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <div
          className={`relative mb-8 aspect-video w-full overflow-hidden rounded-md`}
        >
          <LiteYouTubeEmbed
            id="L2vS_050c-M"
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          />
          <button
            className={`absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-black/50 focus:outline-none`}
            aria-label="Play workout video"
          >
            <PlayIcon className="size-12 text-white" />
          </button>
        </div>

        <div
          className={`my-8 grid grid-cols-1 gap-8 text-gray-700 md:grid-cols-3`}
        >
          <div>
            <div className="font-semibold text-gray-900">Style</div>
            <div>Fitness</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Equipment</div>
            <div>Dumbles</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Duration</div>
            <div>40 Min 30 Sec</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Difficulty</div>
            <div>Intermediate</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Focus Area</div>
            <div>Shoulders</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Program</div>
            <div>Full Body</div>
          </div>
        </div>
      </div>
    </>
  )
}
