export interface ProsConsItem {
  title: string
  desc: string
  code: string
}

export const prosItems: ProsConsItem[] = [
  {
    title: 'Prototype nhanh',
    desc: 'Thêm spacing/color ngay trên element.',
    code: `<button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Submit
</button>`,
  },
  {
    title: 'Ít naming problem',
    desc: 'Không cần `.hero-cta--lg`.',
    code: `className="text-sm font-semibold uppercase tracking-wide"`,
  },
  {
    title: 'Colocate với component',
    desc: 'Mở file React là thấy style.',
    code: `// UserProfile.tsx — style + logic cùng file`,
  },
  {
    title: 'Consistency',
    desc: 'Scale `p-4`, `text-sm` thống nhất.',
    code: `<div className="space-y-4 p-6">...</div>`,
  },
  {
    title: 'State & responsive',
    desc: 'Prefix `hover:`, `md:`, `dark:`.',
    code: `className="bg-white hover:bg-gray-50 md:p-8 dark:bg-gray-900"`,
  },
  {
    title: 'Design system',
    desc: 'Extend theme cho brand.',
    code: `@theme {
  --color-brand: #2563eb;
}`,
  },
]

export const consItems: ProsConsItem[] = [
  {
    title: 'Class string dài',
    desc: 'Nhiều utility trên một element.',
    code: `className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:border-blue-300"`,
  },
  {
    title: 'Markup “rối” lúc mới học',
    desc: 'Cần thời gian quen đọc utility.',
    code: `{/* Wall of classes — bình thường với Tailwind */}`,
  },
  {
    title: 'Cần học scale',
    desc: 'Nhớ `p-4` vs `p-6`, `text-sm` vs `text-base`.',
    code: `// docs: spacing scale, default theme`,
  },
  {
    title: 'Copy-paste',
    desc: 'Không extract → duplicate utility.',
    code: `// ❌ copy 20 dòng class sang 10 file
// ✓ <Button variant="primary" />`,
  },
  {
    title: 'Không thay CSS nền',
    desc: 'Vẫn cần flexbox, grid, specificity.',
    code: `/* Tailwind = cách VIẾT CSS, không phải thay CSS */`,
  },
  {
    title: 'Dynamic class risk',
    desc: 'Template string sai → purge miss.',
    code: `// ❌ \`bg-\${color}-500\`
// ✓ color map object + clsx`,
  },
]
