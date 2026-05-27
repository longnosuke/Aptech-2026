import { useState } from 'react'
import { matchAiMock } from '../data/aiMocks'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { SlideSplit } from '../components/ui/SlideSplit'
import { SpeakerNote } from '../components/ui/SpeakerNote'

const defaultPrompt = 'Create a modern pricing card with Tailwind'

const promptExample = `// Prompt trong Cursor / Copilot
"Create a responsive pricing card with Tailwind:
 - white card, subtle border
 - blue CTA button
 - popular badge on Pro plan"`

const sampleOutput = `<div className="rounded-2xl border bg-white p-8 shadow-sm">
  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
    Popular
  </span>
  <h3 className="mt-4 text-xl font-bold">Pro</h3>
  <p className="text-3xl font-bold">$29<span className="text-base font-normal text-gray-500">/mo</span></p>
  <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 text-white hover:bg-blue-700">
    Start trial
  </button>
</div>`

export function SlideAIIntro() {
  return (
    <SlideFrame
      eyebrow="Phần 7"
      title="Tailwind + AI"
      subtitle="Class mô tả rõ → AI generate/refactor UI chính xác hơn semantic CSS."
    >
      <SlideSplit
        left={
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• AI đọc <code className="inline-code">rounded-2xl</code> như ngôn ngữ tự nhiên</li>
            <li>• Refactor <code className="inline-code">p-4</code> → <code className="inline-code">p-6</code> từng dòng</li>
            <li>• Thêm <code className="inline-code">md:</code> <code className="inline-code">dark:</code> theo prompt</li>
            <li>• Giải thích từng class cho học viên</li>
          </ul>
        }
        right={
          <div className="space-y-3">
            <CodeBlock code={promptExample} language="tsx" compact title="prompt" />
            <CodeBlock code={sampleOutput} language="jsx" compact title="AI output (ví dụ)" />
          </div>
        }
      />
      <SpeakerNote>Slide tiếp: mock generator — không cần API key.</SpeakerNote>
    </SlideFrame>
  )
}

export function SlideAIDemo() {
  const [prompt, setPrompt] = useState(defaultPrompt)
  const [result, setResult] = useState<ReturnType<typeof matchAiMock> | null>(null)
  const [loading, setLoading] = useState(false)

  function generate() {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult(matchAiMock(prompt))
      setLoading(false)
    }, 700)
  }

  return (
    <SlideFrame
      eyebrow="Phần 7 · Demo"
      title="Mock AI Generator"
      subtitle="Nhập prompt → output Tailwind mô phỏng (keyword matching)."
    >
      <div className="grid min-h-0 gap-4 lg:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-text-muted">Prompt</label>
          <textarea
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 font-mono text-sm text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <div className="mt-2 flex flex-wrap gap-1">
            {['pricing card', 'dashboard metric', 'navbar'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPrompt(`Create a ${s} with Tailwind`)}
                className="paper-pill paper-pill-idle"
              >
                {s}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={generate}
            disabled={loading}
            className="mt-3 rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50"
          >
            {loading ? 'Generating…' : 'Generate (mock)'}
          </button>
        </div>
        <div className="min-h-[160px] rounded-2xl border border-dashed border-border bg-code-bg/30 p-3">
          {loading && <p className="text-sm text-text-muted">AI composing utilities…</p>}
          {result && !loading && (
            <>
              <p className="text-sm font-bold text-text">{result.title}</p>
              <p className="mt-1 text-xs text-text-muted">{result.explanation}</p>
              <div className="mt-2">
                <CodeBlock code={result.code} language="jsx" compact />
              </div>
            </>
          )}
          {!result && !loading && (
            <p className="text-sm text-text-muted">Output hiện sau khi Generate</p>
          )}
        </div>
      </div>
    </SlideFrame>
  )
}
