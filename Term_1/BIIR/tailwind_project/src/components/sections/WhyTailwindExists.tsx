import { useState } from 'react'
import { painPoints } from '../../data/painPoints'
import { CodeBlock } from '../ui/CodeBlock'
import { Section } from '../ui/Section'

export function WhyTailwindExists() {
  const [active, setActive] = useState(painPoints[0].id)
  const current = painPoints.find((p) => p.id === active) ?? painPoints[0]

  return (
    <Section
      id="why"
      eyebrow="Phần 2"
      title="Tại sao Tailwind tồn tại?"
      subtitle="Tailwind không sinh ra để thay thế CSS — mà để giải quyết pain points thực tế khi scale UI với team và deadline."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-2 lg:col-span-2">
          {painPoints.map((point) => (
            <button
              key={point.id}
              type="button"
              onClick={() => setActive(point.id)}
              className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                active === point.id
                  ? 'border-indigo-500 bg-indigo-50 shadow-sm dark:border-indigo-500 dark:bg-indigo-950/40'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600'
              }`}
            >
              <p className="font-semibold text-slate-900 dark:text-white">{point.title}</p>
            </button>
          ))}
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-slate-600 dark:text-slate-400">{current.description}</p>
            <div className="mt-6">
              <CodeBlock code={current.cssExample} language="css" title="Ví dụ CSS truyền thống" />
            </div>
            <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <strong>Tailwind giải quyết:</strong> {current.note}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
