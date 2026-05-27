import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'

const items = [
  { n: '01', t: 'Tailwind là gì?', code: 'className="p-4 text-sm rounded-lg"' },
  { n: '02', t: 'Tại sao tồn tại?', code: '/* CSS truyền thống vs utility */' },
  { n: '03', t: 'So sánh tương tác', code: '<Card className="..." />' },
  { n: '04', t: 'Vì sao phổ biến?', code: 'md:flex dark:bg-gray-900' },
  { n: '05', t: 'Production', code: 'clsx(variants[variant])' },
  { n: '06', t: 'Ưu & nhược', code: '// trade-offs thực tế' },
  { n: '07', t: 'Tailwind + AI', code: 'prompt → JSX + utilities' },
]

export function SlideAgenda() {
  return (
    <SlideFrame title="Nội dung bài học" subtitle="Mỗi phần có code example — học bằng cách đọc markup thật.">
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.n}
            className="rounded-2xl border border-border bg-code-bg/50 p-4"
          >
            <div className="flex gap-3">
              <span className="font-mono text-lg font-bold text-accent">{item.n}</span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-text">{item.t}</p>
                <CodeBlock code={item.code} language="tsx" compact title="hint" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}
