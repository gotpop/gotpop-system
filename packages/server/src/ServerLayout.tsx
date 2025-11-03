import 'server-only'
import React from 'react'

export interface ServerLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  className?: string
}

export function ServerLayout({ children, sidebar, className = '' }: ServerLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sidebar ? (
          <div className="flex gap-8">
            <aside className="w-64 flex-shrink-0">
              {sidebar}
            </aside>
            <main className="flex-1">
              {children}
            </main>
          </div>
        ) : (
          <main className="py-8">
            {children}
          </main>
        )}
      </div>
    </div>
  )
}