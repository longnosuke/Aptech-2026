import type { ReactNode } from 'react'

interface SlideSplitProps {
  left: ReactNode
  right: ReactNode
  className?: string
}

/** Explanation left, code right — standard teaching layout */
export function SlideSplit({ left, right, className = '' }: SlideSplitProps) {
  return (
    <div className={`grid min-h-0 gap-4 lg:grid-cols-2 lg:gap-6 ${className}`}>
      <div className="min-h-0 space-y-3 text-sm leading-relaxed text-text">{left}</div>
      <div className="min-h-0">{right}</div>
    </div>
  )
}
