import type { ReactNode } from 'react'

export interface SlideFrameProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  centered?: boolean
}

export function SlideFrame({ eyebrow, title, subtitle, children, centered }: SlideFrameProps) {
  return (
    <div className="flex h-full min-h-0 items-center justify-center p-3 sm:p-5">
      <div className="slide-card h-full max-h-full min-h-0">
        <div className={`slide-card-pad flex flex-col ${centered ? 'justify-center' : ''}`}>
          <header className="shrink-0">
            {eyebrow && <p className="slide-eyebrow">{eyebrow}</p>}
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-[2rem]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
                {subtitle}
              </p>
            )}
          </header>
          <div
            className={`mt-4 min-h-0 flex-1 ${
              centered ? '' : 'overflow-y-auto overflow-x-hidden pr-1'
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
