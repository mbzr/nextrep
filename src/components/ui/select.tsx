import { Select as SelectHeadless } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export const Select = ({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode
}) => {
  return (
    <div className="relative">
      <SelectHeadless
        className={clsx(
          `h-12 w-full appearance-none rounded border border-gray-300 px-3 text-black *:text-black focus:ring-2 focus:not-data-focus:outline-none data-focus:ring-blue-500`,
          className,
        )}
        {...props}
      >
        {children}
      </SelectHeadless>
      <ChevronDownIcon
        className={`group pointer-events-none absolute top-3 right-3 size-4 fill-black/60`}
      />
    </div>
  )
}
