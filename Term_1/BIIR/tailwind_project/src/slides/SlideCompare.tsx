import { useState } from 'react'
import { comparisons, type ComparisonComponentId } from '../data/comparisons'
import { ComparisonPreview } from '../components/comparison/ComparisonPreviews'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { SpeakerNote } from '../components/ui/SpeakerNote'
import { Tabs } from '../components/ui/Tabs'

export function SlideCompare() {
  const [activeId, setActiveId] = useState<ComparisonComponentId>('button')
  const [codeTab, setCodeTab] = useState<'css' | 'tailwind'>('tailwind')
  const item = comparisons.find((c) => c.id === activeId) ?? comparisons[0]

  return (
    <SlideFrame
      eyebrow="Phần 3 · Interactive"
      title="So sánh: CSS truyền thống vs Tailwind"
      subtitle="Chọn component — preview + code production cập nhật ngay."
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {comparisons.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={`paper-pill ${activeId === c.id ? 'paper-pill-active' : 'paper-pill-idle'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid min-h-0 gap-3 lg:grid-cols-3">
        <div className="flex items-center justify-center rounded-2xl border border-border bg-code-bg/30 p-6 lg:col-span-1">
          <ComparisonPreview id={activeId} />
        </div>
        <div className="min-h-0 lg:col-span-2">
          <Tabs
            activeId={codeTab}
            onChange={(id) => setCodeTab(id as 'css' | 'tailwind')}
            tabs={[
              {
                id: 'css',
                label: 'HTML + CSS',
                content: (
                  <div className="space-y-2">
                    <CodeBlock code={item.traditionalHtml} language="html" compact />
                    <CodeBlock code={item.traditionalCss} language="css" compact />
                  </div>
                ),
              },
              {
                id: 'tailwind',
                label: 'Tailwind JSX',
                content: <CodeBlock code={item.tailwindCode} language="jsx" compact />,
              },
            ]}
          />
          <SpeakerNote>
            <strong>Insight:</strong> {item.insight}
          </SpeakerNote>
        </div>
      </div>
    </SlideFrame>
  )
}
