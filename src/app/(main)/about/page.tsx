import { PageHeader } from '@/components/ui/page-header'
import Image from 'next/image'

const aboutText = `Step Into A World Where Fitness Meets Freedom — Stream. Sweat. Succeed — Free Workouts, Real Results. Whether You're Pressing Play In Your Living Room Or On The Go, Our High-Energy, Expertly Designed Workouts Step Into A World Where Fitness Meets Freedom — Stream. Sweat. Succeed — Free Workouts, Real Results. Whether You're Pressing Play In Your Living Room Or On The Go, Our High-Energy, Expertly Designed`

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className={`flex flex-col items-start gap-8 md:flex-row`}>
          <div className={`w-full flex-shrink-0 md:w-1/2`}>
            <Image
              src="/images/about-us.jpg"
              alt="About us image"
              width={500}
              height={350}
              className="h-full w-full rounded-lg object-cover"
              priority
            />
          </div>
          <div className={`flex w-full flex-col gap-8 md:w-1/2`}>
            <p className="text-base leading-relaxed text-black/60">
              {aboutText}
            </p>
            <p className="text-base leading-relaxed text-black/60">
              {aboutText}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed text-black/60">
            {aboutText} {aboutText}
          </p>
        </div>
      </div>
    </>
  )
}
