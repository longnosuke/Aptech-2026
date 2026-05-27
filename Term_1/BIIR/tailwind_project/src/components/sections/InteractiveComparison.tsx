import { useState } from 'react'
import { comparisons, type ComparisonComponentId } from '../../data/comparisons'
import { ComparisonPreview } from '../comparison/ComparisonPreviews'
import { CodeBlock } from '../ui/CodeBlock'
import { Section } from '../ui/Section'

export function InteractiveComparison() {
  const [activeId, setActiveId] = useState<ComparisonComponentId>('button')
  const item = comparisons.find((c) => c.id === activeId) ?? comparisons[0]

  return (
    <Section
      id="compare"
      eyebrow="Phần 3"
      title="So sánh tương tác: CSS truyền thống vs Tailwind"
      subtitle="Chọn component, xem preview thật, đọc code hai bên, và ghi chú ngắn về điều Tailwind giải quyết trong ví dụ đó."
      className="bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {comparisons.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeId === c.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-indigo-300 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mb-10 flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <ComparisonPreview id={activeId} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400">
              CSS
            </span>
            HTML + CSS truyền thống
          </h3>
          <CodeBlock code={item.traditionalHtml} language="html" title="HTML" />
          <div className="mt-4">
            <CodeBlock code={item.traditionalCss} language="css" title="CSS" />
          </div>
        </div>
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400">
              TW
            </span>
            Tailwind (JSX)
          </h3>
          <CodeBlock code={item.tailwindCode} language="jsx" title="Tailwind" />
        </div>
      </div>

      <p className="mt-8 rounded-xl border border-indigo-200 bg-indigo-50/80 px-5 py-4 text-sm text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-200">
        <strong>Insight:</strong> {item.insight}
      </p>
    </Section>
  )
}
