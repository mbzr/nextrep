import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="w-full bg-[#F2F2F2] py-12 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{subtitle}</p>
    )}
  </div>
)
