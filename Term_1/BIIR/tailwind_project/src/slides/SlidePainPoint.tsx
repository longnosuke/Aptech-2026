import { painPoints } from '../data/painPoints'
import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { SpeakerNote } from '../components/ui/SpeakerNote'

interface SlidePainPointProps {
  pointIndex: number
}

export function SlidePainPoint({ pointIndex }: SlidePainPointProps) {
  const point = painPoints[pointIndex]
  if (!point) return null

  return (
    <SlideFrame
      eyebrow={`Phần 2 · ${pointIndex + 1}/${painPoints.length}`}
      title={point.title}
      subtitle={point.description}
    >
      <div className="grid gap-3 lg:grid-cols-2">
        <CodeBlock code={point.cssExample} language="css" compact title="❌ CSS truyền thống" />
        <CodeBlock code={point.tailwindFix} language="tsx" compact title="✓ Tailwind fix" />
      </div>
      <SpeakerNote>
        <strong>Tailwind giải quyết:</strong> {point.note}
      </SpeakerNote>
    </SlideFrame>
  )
}
