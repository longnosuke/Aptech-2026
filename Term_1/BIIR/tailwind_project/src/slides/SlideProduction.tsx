import { useState } from 'react'
import { productionExamples } from '../data/productionExamples'
import { Button } from '../components/production/Button'
import { Card } from '../components/production/Card'
import { FormField } from '../components/production/FormField'
import { MetricCard } from '../components/production/MetricCard'
import { PricingCard } from '../components/production/PricingCard'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { SpeakerNote } from '../components/ui/SpeakerNote'

function Preview({ id }: { id: string }) {
  switch (id) {
    case 'button':
      return (
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      )
    case 'card':
      return (
        <Card title="Reusable">
          <p className="text-sm text-text-muted">Shell component pattern</p>
        </Card>
      )
    case 'form':
      return <FormField label="Email" error="Invalid format" className="max-w-xs" />
    case 'metric':
      return <MetricCard label="Users" value="12.8k" delta="+18%" />
    case 'pricing':
      return (
        <PricingCard name="Pro" price="$29" features={['Unlimited', 'Support']} popular />
      )
    case 'dark':
      return (
        <div className="space-y-2 text-sm">
          <div className="rounded-xl border border-border bg-white p-4 text-text">
            Light: <code className="inline-code">bg-white text-gray-900</code>
          </div>
          <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 text-white">
            Dark: <code className="inline-code text-gray-300">dark:bg-gray-900</code>
          </div>
        </div>
      )
    default:
      return null
  }
}

export function SlideProduction() {
  const [activeId, setActiveId] = useState(productionExamples[0].id)
  const ex = productionExamples.find((e) => e.id === activeId) ?? productionExamples[0]

  return (
    <SlideFrame
      eyebrow="Phần 5 · Interactive"
      title="Production patterns"
      subtitle="Component hóa utility — pattern team dùng trong dự án thật."
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {productionExamples.map((e) => (
          <button
            key={e.id}
            type="button"
            onClick={() => setActiveId(e.id)}
            className={`paper-pill ${activeId === e.id ? 'paper-pill-active' : 'paper-pill-idle'}`}
          >
            {e.title.split(' ')[0]}
          </button>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-border bg-code-bg/30 p-6">
          <Preview id={activeId} />
        </div>
        <div>
          <p className="mb-2 text-xs text-text-muted">{ex.description}</p>
          <CodeBlock code={ex.code} language="tsx" compact />
        </div>
      </div>
      <SpeakerNote>Copy pattern từ code panel — paste vào project Vite + Tailwind của học viên.</SpeakerNote>
    </SlideFrame>
  )
}
