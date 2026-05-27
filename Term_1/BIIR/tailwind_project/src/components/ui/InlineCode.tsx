import type { ReactNode } from 'react'

export function InlineCode({ children }: { children: ReactNode }) {
  return <code className="inline-code">{children}</code>
}
