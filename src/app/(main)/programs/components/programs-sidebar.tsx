import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'

const SidebarSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div className="mb-6">
    <h3 className="mb-2 font-semibold">{title}</h3>
    {children}
  </div>
)

export default function ProgramsSidebar() {
  return (
    <div className="w-full p-4">
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="search"
          className={`w-full rounded border px-2 py-1`}
        />
        <button className="rounded bg-blue-500 px-3 py-1 text-white">
          <MagnifyingGlassIcon className="size-4" />
        </button>
      </div>
      <SidebarSection title="Path">
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" /> The Journey
          </label>
          <label>
            <input type="checkbox" /> Real start
          </label>
          <label>
            <input type="checkbox" /> Other Programmes
          </label>
        </div>
      </SidebarSection>
      <SidebarSection title="Difficulty">
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" /> 1
          </label>
          <label>
            <input type="checkbox" /> 2
          </label>
          <label>
            <input type="checkbox" /> 3
          </label>
        </div>
      </SidebarSection>
      <SidebarSection title="Days/Week">
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" /> 4 Days
          </label>
          <label>
            <input type="checkbox" /> 5 Days
          </label>
          <label>
            <input type="checkbox" /> 6 Days
          </label>
        </div>
      </SidebarSection>
      <SidebarSection title="Length">
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" /> 1 week
          </label>
          <label>
            <input type="checkbox" /> 2 week
          </label>
          <label>
            <input type="checkbox" /> 3 week
          </label>
        </div>
      </SidebarSection>
      <SidebarSection title="Sortby">
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" /> Newest first
          </label>
          <label>
            <input type="checkbox" /> Oldest first
          </label>
          <label>
            <input type="checkbox" /> Shortest first
          </label>
        </div>
      </SidebarSection>
    </div>
  )
}
