import { popularityReasons } from '../data/popularity'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { SlideSplit } from '../components/ui/SlideSplit'

interface SlidePopularProps {
  reasonIndex: number
}

export function SlidePopular({ reasonIndex }: SlidePopularProps) {
  const reason = popularityReasons[reasonIndex]
  if (!reason) return null

  return (
    <SlideFrame
      eyebrow={`Phần 4 · ${reasonIndex + 1}/${popularityReasons.length}`}
      title={reason.title}
      subtitle={reason.description}
    >
      <SlideSplit
        left={<p className="text-base text-text-muted">{reason.description}</p>}
        right={
          <CodeBlock code={reason.codeExample} language="tsx" compact title="ví dụ production" />
        }
      />
    </SlideFrame>
  )
}
