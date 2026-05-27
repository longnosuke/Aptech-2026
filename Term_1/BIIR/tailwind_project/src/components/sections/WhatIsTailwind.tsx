import { useState } from 'react'
import { CodeBlock } from '../ui/CodeBlock'
import { Section } from '../ui/Section'
import { Tabs } from '../ui/Tabs'

const tailwindButton = `inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700`

const traditionalCss = `.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background-color: #4338ca;
}`

const tailwindCode = `<button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
  Get Started
</button>`

export function WhatIsTailwind() {
  const [mode, setMode] = useState<'tailwind' | 'traditional'>('tailwind')

  return (
    <Section
      id="what"
      eyebrow="Phần 1"
      title="Tailwind CSS là gì?"
      subtitle="Tailwind là framework CSS utility-first: thay vì viết class semantic rồi định nghĩa style trong file .css, bạn compose giao diện trực tiếp bằng các class nhỏ, có tên mô tả sẵn."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-800/40">
            <h3 className="font-semibold text-slate-900 dark:text-white">Utility-first nghĩa là gì?</h3>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Utility</strong> = class làm
                một việc: <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-700">p-4</code>,{' '}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-700">text-sm</code>,{' '}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-700">rounded-lg</code>
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">First</strong> = ưu tiên dùng
                utility trước, chỉ tạo component class khi pattern lặp lại nhiều lần.
              </li>
              <li>Build step quét file → chỉ ship CSS cho class bạn thực sự dùng.</li>
            </ul>
          </div>

          <Tabs
            activeId={mode}
            onChange={(id) => setMode(id as 'tailwind' | 'traditional')}
            tabs={[
              {
                id: 'tailwind',
                label: 'Tailwind CSS',
                content: <CodeBlock code={tailwindCode} language="jsx" title="JSX + Tailwind" />,
              },
              {
                id: 'traditional',
                label: 'CSS truyền thống',
                content: (
                  <div className="space-y-4">
                    <CodeBlock code={traditionalCss} language="css" title="styles.css" />
                    <CodeBlock
                      code='<button class="btn btn-primary">Get Started</button>'
                      language="html"
                      title="HTML"
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-10 shadow-inner dark:border-slate-600 dark:bg-slate-900">
          <p className="mb-6 text-sm font-medium text-slate-500">Live preview — cùng một button</p>
          {mode === 'tailwind' ? (
            <button
              type="button"
              className={tailwindButton}
            >
              Get Started
            </button>
          ) : (
            <button type="button" className="demo-btn-primary">
              Get Started
            </button>
          )}
          <p className="mt-8 max-w-sm text-center text-sm text-slate-500">
            {mode === 'tailwind'
              ? 'Style nằm ngay trên element — đọc markup là hiểu giao diện.'
              : 'Style nằm trong file CSS — phải mở 2 file mới hiểu đầy đủ.'}
          </p>
        </div>
      </div>

      <style>{`
        .demo-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.625rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          background-color: #4f46e5;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .demo-btn-primary:hover { background-color: #4338ca; }
      `}</style>
    </Section>
  )
}
