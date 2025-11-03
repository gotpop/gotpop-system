import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gotpop Design System',
  description: 'A comprehensive design system for gotpop projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}