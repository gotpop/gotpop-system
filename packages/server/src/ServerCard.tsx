import 'server-only'
import React from 'react'

export interface ServerCardProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function ServerCard({ children, title, className = '' }: ServerCardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}