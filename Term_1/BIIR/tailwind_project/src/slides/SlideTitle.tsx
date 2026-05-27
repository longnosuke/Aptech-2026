import { CodeBlock } from '../components/ui/CodeBlock'
import { SpeakerNote } from '../components/ui/SpeakerNote'

export function SlideTitle() {
  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6">
      <div className="slide-card w-full max-w-4xl p-8 text-center sm:p-12">
        <p className="slide-eyebrow">Clean Paper · Aptech BIIR</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Tailwind CSS
        </h1>
        <p className="mt-2 text-lg font-medium text-accent sm:text-xl">
          Utility-first CSS for Modern UI
        </p>
        <p className="mx-auto mt-6 max-w-xl text-sm text-text-muted sm:text-base">
          Slideshow dạy học — mỗi slide có ví dụ code production, không chỉ lý thuyết.
        </p>
        <div className="mx-auto mt-8 max-w-md text-left">
          <CodeBlock
            code={`// Ví dụ utility-first
<button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Save
</button>`}
            language="jsx"
            compact
            title="preview"
          />
        </div>
        <SpeakerNote>
          Nhấn <strong>Tiếp →</strong> hoặc phím mũi tên. Mỗi ý kèm JSX/CSS thật.
        </SpeakerNote>
        <p className="mt-6 text-sm font-medium text-accent">→ hoặc Space để bắt đầu</p>
      </div>
    </div>
  )
}
