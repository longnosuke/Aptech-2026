export interface PopularityReason {
  title: string
  description: string
  codeExample: string
}

export const popularityReasons: PopularityReason[] = [
  {
    title: 'Build UI nhanh',
    description: 'Không context-switch sang file CSS — prototype trực tiếp trong JSX.',
    codeExample: `<div className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
  <h1 className="text-3xl font-bold">Launch in days</h1>
  <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-white">Start</button>
</div>`,
  },
  {
    title: 'Hợp với React / Vue / Svelte / Next',
    description: 'Utility map 1:1 lên template — chuẩn ecosystem hiện đại.',
    codeExample: `export function UserCard({ name }: { name: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="font-semibold text-gray-900">{name}</p>
    </div>
  )
}`,
  },
  {
    title: 'Responsive dễ',
    description: 'Mobile-first với prefix breakpoint — không viết @media thủ công.',
    codeExample: `<nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
  <a className="text-sm font-medium">Home</a>
  <a className="hidden md:inline">Pricing</a>
</nav>`,
  },
  {
    title: 'Dark mode dễ',
    description: 'Prefix `dark:` trên class — một markup, hai theme.',
    codeExample: `<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
  <p className="text-gray-600 dark:text-gray-400">Adapts automatically</p>
</div>`,
  },
  {
    title: 'Consistency tốt',
    description: 'Spacing, color, radius từ config — design system trong code.',
    codeExample: `// tailwind.config / @theme
// spacing: 4 → 1rem, 6 → 1.5rem
<button className="rounded-lg px-4 py-2">...</button>`,
  },
  {
    title: 'Production CSS nhỏ',
    description: 'Build chỉ giữ class được scan — bundle vài KB thay vì MB unused.',
    codeExample: `// vite build → chỉ CSS cho:
// "flex", "p-4", "bg-blue-600", "hover:bg-blue-700", ...`,
  },
  {
    title: 'Hệ sinh thái lớn',
    description: 'Tailwind UI, Headless UI, plugins — job market & docs mạnh.',
    codeExample: `npm install @headlessui/react
// + className="..." trên Headless components`,
  },
]
