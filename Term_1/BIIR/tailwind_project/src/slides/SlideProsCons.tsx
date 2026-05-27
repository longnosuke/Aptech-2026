import { consItems, prosItems } from '../data/prosCons'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'

interface SlideProsConsProps {
  variant: 'pros' | 'cons'
}

export function SlideProsCons({ variant }: SlideProsConsProps) {
  const isPros = variant === 'pros'
  const items = isPros ? prosItems : consItems

  return (
    <SlideFrame
      eyebrow="Phần 6"
      title={isPros ? 'Lợi ích (Pros)' : 'Hạn chế (Cons)'}
      subtitle={isPros ? 'Mỗi pro kèm pattern code thật.' : 'Biết limit → tránh anti-pattern.'}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border p-3 ${
              isPros ? 'border-emerald-200 bg-emerald-50/50' : 'border-orange-200 bg-orange-50/30'
            }`}
          >
            <p className="text-sm font-semibold text-text">{item.title}</p>
            <p className="mt-1 text-xs text-text-muted">{item.desc}</p>
            <div className="mt-2">
              <CodeBlock code={item.code} language="tsx" compact />
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}
