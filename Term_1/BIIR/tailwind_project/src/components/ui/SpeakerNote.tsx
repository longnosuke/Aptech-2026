import type { ReactNode } from 'react'

interface SpeakerNoteProps {
  children: ReactNode
  label?: string
}

export function SpeakerNote({ children, label = 'Speaker note' }: SpeakerNoteProps) {
  return (
    <div className="speaker-note">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#92400e]/80">
        {label}
      </span>
      {children}
    </div>
  )
}
