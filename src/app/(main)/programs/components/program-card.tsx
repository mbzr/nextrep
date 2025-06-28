import { HeartIcon } from '@heroicons/react/24/outline'

type Program = {
  id: number
  title: string
  image: string
}

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="flex flex-col items-center rounded bg-white p-2 shadow">
      <img
        src={program.image}
        alt={program.title}
        className={`h-60 w-full rounded object-cover`}
      />
      <div className="mt-2 flex w-full items-center justify-between">
        <span className="text-base font-medium">{program.title}</span>
        <button
          className={`cursor-pointer text-xl text-gray-500 transition-colors hover:text-red-500`}
          title="Favorite"
        >
          <HeartIcon className="size-6" />
        </button>
      </div>
    </div>
  )
}
