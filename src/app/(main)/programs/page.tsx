import ProgramCard from '@/app/(main)/programs/components/program-card'
import ProgramsSidebar from '@/app/(main)/programs/components/programs-sidebar'
import { PageHeader } from '@/components/ui/page-header'

const mockPrograms = [
  { id: 1, title: '10 Min Take Over', image: '/images/about-us.jpg' },
  { id: 2, title: 'Back To Basics', image: '/images/about-us.jpg' },
  { id: 3, title: '10 Min Take Over', image: '/images/about-us.jpg' },
  { id: 4, title: 'Back To Basics', image: '/images/about-us.jpg' },
  { id: 5, title: '10 Min Take Over', image: '/images/about-us.jpg' },
  { id: 6, title: 'Back To Basics', image: '/images/about-us.jpg' },
]

export default function ProgramsPage() {
  return (
    <>
      <PageHeader title="Programs" />

      <div className="container mx-auto">
        <div className="flex gap-8 py-8">
          <aside className="w-72 shrink-0 border border-gray-200">
            <ProgramsSidebar />
          </aside>
          <main className="flex-1">
            <div
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3`}
            >
              {mockPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
