import type { ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  activeId: string
  onChange: (id: string) => void
}

export function Tabs({ tabs, activeId, onChange }: TabsProps) {
  return (
    <div>
      <div
        className="flex flex-wrap gap-1 rounded-xl border border-border bg-code-bg p-1"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            onClick={() => onChange(tab.id)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              activeId === tab.id
                ? 'bg-white text-accent shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-3" role="tabpanel">
        {tabs.find((t) => t.id === activeId)?.content}
      </div>
    </div>
  )
}
