import { useState } from 'react'
import { matchAiMock } from '../../data/aiMocks'
import { CodeBlock } from '../ui/CodeBlock'
import { Section } from '../ui/Section'

const defaultPrompt = 'Create a modern pricing card with Tailwind'

const aiBenefits = [
  {
    title: 'Class names mang tính mô tả',
    desc: 'AI đọc `rounded-2xl`, `bg-indigo-600` như ngôn ngữ tự nhiên — không cần đoán `.card--featured-v2`.',
  },
  {
    title: 'Refactor UI nhanh',
    desc: 'Đổi `p-4` → `p-6` hoặc thêm `dark:text-white` — AI sửa từng utility chính xác.',
  },
  {
    title: 'Spacing & responsive',
    desc: 'Prompt "make it mobile friendly" → AI thêm `flex-col md:flex-row`, `text-4xl sm:text-5xl`.',
  },
  {
    title: 'Design prompt → component',
    desc: 'Mô tả UI bằng tiếng Việt/Anh → AI output JSX + Tailwind ngay trong editor.',
  },
  {
    title: 'Giải thích từng class',
    desc: 'Học viên hỏi "class này là gì?" — AI giải thích `tracking-tight`, `ring-2`, v.v.',
  },
]

export function TailwindAI() {
  const [prompt, setPrompt] = useState(defaultPrompt)
  const [result, setResult] = useState<ReturnType<typeof matchAiMock> | null>(null)
  const [loading, setLoading] = useState(false)

  function handleGenerate() {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult(matchAiMock(prompt))
      setLoading(false)
    }, 900)
  }

  return (
    <Section
      id="ai"
      eyebrow="Phần 7"
      title="Tailwind + AI"
      subtitle="Đây là lý do Tailwind và AI (Cursor, Copilot, ChatGPT) là combo mạnh — không cần API thật, demo mock vẫn minh họa workflow."
      className="border-b-0"
    >
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiBenefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-50 to-indigo-50 p-5 dark:border-violet-800/40 dark:from-violet-950/30 dark:to-indigo-950/30"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{b.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
        <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 dark:border-slate-700">
          <p className="font-semibold text-white">✨ AI UI Generator (Mock Demo)</p>
          <p className="text-sm text-indigo-100">Không gọi API — kết quả mô phỏng từ keyword matching</p>
        </div>
        <div className="grid gap-8 p-6 lg:grid-cols-2">
          <div>
            <label htmlFor="ai-prompt" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Mô tả UI bạn muốn
            </label>
            <textarea
              id="ai-prompt"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="VD: Create a dashboard metric card with green delta..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'Create a modern pricing card with Tailwind',
                'Dashboard metric with analytics',
                'Responsive navbar header',
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setPrompt(suggestion)}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 hover:bg-indigo-100 hover:text-indigo-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-300"
                >
                  {suggestion.slice(0, 28)}…
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={loading}
              className="mt-4 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {loading ? 'Generating…' : 'Generate with AI (mock)'}
            </button>
          </div>

          <div className="min-h-[280px] rounded-xl border border-dashed border-slate-300 bg-slate-50/80 p-6 dark:border-slate-600 dark:bg-slate-800/40">
            {!result && !loading && (
              <p className="flex h-full items-center justify-center text-center text-sm text-slate-500">
                Nhập prompt và bấm Generate để xem mock output
              </p>
            )}
            {loading && (
              <div className="flex h-full flex-col items-center justify-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
                <p className="text-sm text-slate-500">AI đang compose utilities…</p>
              </div>
            )}
            {result && !loading && (
              <div className="space-y-4">
                <p className="font-semibold text-slate-900 dark:text-white">{result.title}</p>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.explanation}</p>
                <CodeBlock code={result.code} language="jsx" title="AI output" />
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        AI hiểu Tailwind tốt vì class names mang tính mô tả và phổ biến — training data khổng lồ từ
        GitHub, docs, và Tailwind UI.
      </p>
    </Section>
  )
}
