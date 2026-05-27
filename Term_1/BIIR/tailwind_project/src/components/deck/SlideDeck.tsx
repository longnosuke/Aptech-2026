import { useCallback, useEffect, useState } from 'react'
import { slides } from '../../slides/registry'

export function SlideDeck() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [overviewOpen, setOverviewOpen] = useState(false)
  const total = slides.length
  const CurrentSlide = slides[index].Component

  const go = useCallback(
    (next: number) => {
      if (next < 0 || next >= total || next === index) return
      setDirection(next > index ? 'next' : 'prev')
      setIndex(next)
    },
    [index, total],
  )

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    let touchStartX = 0
    function onTouchStart(e: TouchEvent) {
      touchStartX = e.touches[0].clientX
    }
    function onTouchEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - touchStartX
      if (Math.abs(dx) > 60) {
        if (dx < 0) next()
        else prev()
      }
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [next, prev])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (overviewOpen && e.key === 'Escape') {
        setOverviewOpen(false)
        return
      }
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        go(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        go(total - 1)
      } else if (e.key === 'o' || e.key === 'O') {
        setOverviewOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total, overviewOpen])

  const progress = ((index + 1) / total) * 100

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-bg">
      <div className="relative z-20 flex shrink-0 items-center gap-3 border-b border-border bg-card/90 px-4 py-2.5 backdrop-blur-sm sm:gap-4 sm:px-6">
        <span className="hidden text-sm font-semibold text-text sm:inline">Tailwind Learn</span>
        <div className="flex-1">
          <div className="h-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-1 rounded-full bg-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className="font-mono text-xs tabular-nums text-text-muted">
          {index + 1}/{total}
        </span>
        <button
          type="button"
          onClick={() => setOverviewOpen(true)}
          title="Mục lục (O)"
          className="rounded-xl border border-border bg-white px-3 py-1 text-xs font-semibold text-text transition hover:bg-code-bg"
        >
          Mục lục
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        <div
          key={slides[index].id}
          className={`absolute inset-0 ${
            direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
          }`}
        >
          <CurrentSlide />
        </div>
      </div>

      <div className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-t border-border bg-card/90 px-4 py-3 backdrop-blur-sm sm:px-6">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-code-bg disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Trước
        </button>

        <div className="hidden max-w-md flex-1 flex-wrap justify-center gap-1 sm:flex">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              title={s.title}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-accent' : 'w-1.5 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Slide ${i + 1}: ${s.title}`}
            />
          ))}
        </div>

        <p className="hidden text-center text-xs text-text-muted sm:block">
          <kbd className="rounded border border-border bg-code-bg px-1.5 py-0.5 font-mono">←</kbd>{' '}
          <kbd className="rounded border border-border bg-code-bg px-1.5 py-0.5 font-mono">→</kbd>{' '}
          Space
        </p>

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          Tiếp →
        </button>
      </div>

      {overviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-text/20 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOverviewOpen(false)}
        >
          <div
            className="slide-card max-h-[85vh] w-full max-w-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-text">Mục lục slide</h3>
              <ul className="mt-4 space-y-1">
                {slides.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => {
                        go(i)
                        setOverviewOpen(false)
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm transition ${
                        i === index
                          ? 'bg-code-bg font-semibold text-accent'
                          : 'text-text hover:bg-code-bg'
                      }`}
                    >
                      <span className="font-mono text-xs text-text-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{s.title}</span>
                      {s.chapter && (
                        <span className="ml-auto text-xs text-text-muted">{s.chapter}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-text-muted">Esc để đóng</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
