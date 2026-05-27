import { CodeBlock } from '../components/ui/CodeBlock'
import { SpeakerNote } from '../components/ui/SpeakerNote'

export function SlideEnd() {
  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6">
      <div className="slide-card w-full max-w-4xl p-8 text-center sm:p-10">
        <h2 className="text-3xl font-bold text-text">Hết bài — thực hành!</h2>
        <p className="mt-3 text-text-muted">
          Tạo project, build một component có variant, thử AI generate Tailwind.
        </p>
        <div className="mx-auto mt-6 max-w-lg text-left">
          <CodeBlock
            code={`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install tailwindcss @tailwindcss/vite

// vite.config.ts
import tailwindcss from '@tailwindcss/vite'`}
            language="tsx"
            compact
            title="terminal"
          />
        </div>
        <SpeakerNote>Phím Home để xem lại từ slide đầu.</SpeakerNote>
      </div>
    </div>
  )
}
