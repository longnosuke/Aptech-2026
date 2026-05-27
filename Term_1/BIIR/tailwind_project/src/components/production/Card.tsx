import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-border bg-white p-6 shadow-sm ${className}`}
    >
      {title && <h3 className="mb-3 text-lg font-bold text-text">{title}</h3>}
      {children}
    </article>
  )
}
