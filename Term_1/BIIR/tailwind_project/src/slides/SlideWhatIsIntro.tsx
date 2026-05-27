import { SlideFrame } from '../components/deck/SlideFrame'
import { CodeBlock } from '../components/ui/CodeBlock'
import { InlineCode } from '../components/ui/InlineCode'
import { SlideSplit } from '../components/ui/SlideSplit'
import { SpeakerNote } from '../components/ui/SpeakerNote'

const utilityExample = `<button
  className="
    inline-flex items-center justify-center
    rounded-lg bg-blue-600 px-5 py-2.5
    text-sm font-semibold text-white
    transition hover:bg-blue-700
  "
>
  Get Started
</button>`

export function SlideWhatIsIntro() {
  return (
    <SlideFrame
      eyebrow="Phần 1"
      title="Tailwind CSS là gì?"
      subtitle="Utility-first: compose UI bằng class nhỏ thay vì viết CSS file riêng."
    >
      <SlideSplit
        left={
          <>
            <p>
              <strong>Utility</strong> — một class, một việc:{' '}
              <InlineCode>p-4</InlineCode>, <InlineCode>text-sm</InlineCode>,{' '}
              <InlineCode>rounded-lg</InlineCode>.
            </p>
            <p>
              <strong>First</strong> — ưu tiên utility; extract component khi pattern lặp
              lại.
            </p>
            <p>
              <strong>Build</strong> — chỉ ship CSS cho class có trong source.
            </p>
            <SpeakerNote>
              Tailwind không thay thế CSS — đổi <em>cách</em> viết và tổ chức style trong
              project.
            </SpeakerNote>
          </>
        }
        right={<CodeBlock code={utilityExample} language="jsx" title="production JSX" />}
      />
    </SlideFrame>
  )
}
