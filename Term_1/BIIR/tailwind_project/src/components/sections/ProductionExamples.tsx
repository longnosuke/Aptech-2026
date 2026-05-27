import { useState } from 'react'
import { productionExamples } from '../../data/productionExamples'
import { Button } from '../production/Button'
import { Card } from '../production/Card'
import { FormField } from '../production/FormField'
import { MetricCard } from '../production/MetricCard'
import { PricingCard } from '../production/PricingCard'
import { CodeBlock } from '../ui/CodeBlock'
import { Section } from '../ui/Section'
import { useTheme } from '../../context/ThemeContext'

function ProductionPreview({ id }: { id: string }) {
  const { isDark } = useTheme()

  switch (id) {
    case 'button':
      return (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      )
    case 'card':
      return (
        <Card title="Analytics ready">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reusable shell — drop any children inside.
          </p>
        </Card>
      )
    case 'form':
      return (
        <div className="max-w-xs space-y-4">
          <FormField label="Email" placeholder="valid@email.com" />
          <FormField label="Email" error="Invalid email format" defaultValue="bad@" />
        </div>
      )
    case 'metric':
      return (
        <div className="grid max-w-lg gap-4 sm:grid-cols-2">
          <MetricCard label="Revenue" value="$48.2k" delta="+12% MoM" />
          <MetricCard label="Churn" value="2.1%" delta="+0.3%" positive={false} />
        </div>
      )
    case 'pricing':
      return (
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard name="Starter" price="$9" features={['5 projects', 'Email support']} />
          <PricingCard
            name="Pro"
            price="$29"
            features={['Unlimited', 'Priority support', 'Analytics']}
            popular
          />
          <PricingCard name="Team" price="$79" features={['SSO', 'Audit logs', 'SLA']} />
        </div>
      )
    case 'dark':
      return (
        <div
          className={`rounded-xl border p-6 ${
            isDark
              ? 'border-slate-600 bg-slate-800 text-white'
              : 'border-slate-200 bg-white text-slate-900'
          }`}
        >
          <p className="font-semibold">Theme-aware card</p>
          <p className="mt-2 text-sm opacity-70">
            Toggle 🌙 ở navbar — class <code className="font-mono text-xs">dark:</code> tự adapt.
          </p>
        </div>
      )
    default:
      return null
  }
}

export function ProductionExamples() {
  const [activeId, setActiveId] = useState(productionExamples[0].id)
  const example = productionExamples.find((e) => e.id === activeId) ?? productionExamples[0]

  return (
    <Section
      id="production"
      eyebrow="Phần 5"
      title="Ví dụ gần production"
      subtitle="Đây là pattern bạn sẽ gặp trong dự án thật: component có variant, error state, responsive grid, dark mode."
      className="bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="flex flex-wrap gap-2">
        {productionExamples.map((ex) => (
          <button
            key={ex.id}
            type="button"
            onClick={() => setActiveId(ex.id)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              activeId === ex.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600'
            }`}
          >
            {ex.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
          <ProductionPreview id={activeId} />
        </div>
        <div>
          <p className="mb-4 text-slate-600 dark:text-slate-400">{example.description}</p>
          <CodeBlock code={example.code} language="tsx" title="Component code" />
        </div>
      </div>
    </Section>
  )
}
