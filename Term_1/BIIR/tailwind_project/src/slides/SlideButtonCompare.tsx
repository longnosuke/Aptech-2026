import { useState } from 'react'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { SpeakerNote } from '../components/ui/SpeakerNote'
import { Tabs } from '../components/ui/Tabs'

const tailwindButton =
  'inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700'

const traditionalCss = `.btn-primary {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background: #2563eb;
  border-radius: 0.5rem;
}
.btn-primary:hover { background: #1d4ed8; }`

const tailwindCode = `<button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
  Get Started
</button>`

export function SlideButtonCompare() {
  const [mode, setMode] = useState<'tailwind' | 'traditional'>('tailwind')

  return (
    <SlideFrame
      eyebrow="Phần 1 · Demo"
      title="Cùng một button — hai cách viết"
      subtitle="Toggle tab: xem production Tailwind vs CSS file truyền thống."
    >
      <div className="grid min-h-0 gap-4 lg:grid-cols-2">
        <div>
          <Tabs
            activeId={mode}
            onChange={(id) => setMode(id as 'tailwind' | 'traditional')}
            tabs={[
              {
                id: 'tailwind',
                label: 'Tailwind',
                content: <CodeBlock code={tailwindCode} language="jsx" compact />,
              },
              {
                id: 'traditional',
                label: 'CSS file',
                content: (
                  <CodeBlock
                    code={`<button class="btn btn-primary">Get Started</button>\n\n/* styles.css */\n${traditionalCss}`}
                    language="html"
                    compact
                  />
                ),
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-code-bg/40 p-8">
          {mode === 'tailwind' ? (
            <button type="button" className={tailwindButton}>
              Get Started
            </button>
          ) : (
            <button type="button" className="demo-btn-primary">
              Get Started
            </button>
          )}
          <p className="mt-6 text-center text-sm text-text-muted">
            {mode === 'tailwind' ? 'Style trên JSX — đọc là hiểu UI' : 'Cần mở thêm styles.css'}
          </p>
        </div>
      </div>
      <SpeakerNote>
        Điểm dạy: Tailwind colocate style với markup; CSS truyền thống tách file → khó trace khi
        debug.
      </SpeakerNote>
      <style>{`
        .demo-btn-primary {
          padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 600;
          color: white; background: #2563eb; border: none; border-radius: 0.5rem; cursor: pointer;
        }
        .demo-btn-primary:hover { background: #1d4ed8; }
      `}</style>
    </SlideFrame>
  )
}
