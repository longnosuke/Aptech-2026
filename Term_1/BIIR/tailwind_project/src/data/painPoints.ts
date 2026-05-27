export interface PainPoint {
  id: string
  title: string
  description: string
  cssExample: string
  tailwindFix: string
  note: string
}

export const painPoints: PainPoint[] = [
  {
    id: 'naming',
    title: 'Đặt tên class khó',
    description:
      'Semantic naming khác nhau giữa dev — khó onboard và search codebase.',
    cssExample: `/* Mỗi người một convention */
.hero-banner__cta--primary { }
.btn-main-large { }
.button-primary-hero { }`,
    tailwindFix: `<button className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
  Get Started
</button>`,
    note: 'Không invent class — dùng utility có sẵn, tên class = mô tả style.',
  },
  {
    id: 'bloat',
    title: 'CSS dễ phình to',
    description: 'File CSS tăng theo từng feature; khó biết rule nào còn cần.',
    cssExample: `/* styles.css — hundreds of lines */
.card { padding: 1rem; }
.card--featured { padding: 1.5rem; }
.card__title { font-size: 1.25rem; }`,
    tailwindFix: `// Chỉ class xuất hiện trong source được build
<article className="rounded-2xl border p-6 shadow-sm">
  <h3 className="text-lg font-bold">Title</h3>
</article>`,
    note: 'Purge/content scan → production CSS chỉ chứa class đã dùng.',
  },
  {
    id: 'dead-css',
    title: 'Không biết CSS nào còn dùng',
    description: 'Xóa component nhưng CSS orphan vẫn nằm trong bundle.',
    cssExample: `/* HTML đã xóa từ 2023 — CSS vẫn còn */
.legacy-sidebar-toggle { display: none; }
.old-pricing-badge { color: red; }`,
    tailwindFix: `{/* Xóa component = xóa luôn style */}
<div className="hidden md:flex gap-4">
  ...
</div>`,
    note: 'Style colocate trong JSX — không tách file CSS riêng cho từng widget.',
  },
  {
    id: 'consistency',
    title: 'Design thiếu consistency',
    description: 'Padding/margin “tùy hứng” — không có shared scale.',
    cssExample: `.box-a { padding: 14px; margin: 18px; }
.box-b { padding: 16px; margin: 20px; }
.box-c { padding: 15px; margin: 17px; }`,
    tailwindFix: `<div className="p-4 m-5">...</div>
<div className="p-6 m-6">...</div>
/* p-4 = 1rem, p-6 = 1.5rem — cả team cùng scale */`,
    note: 'Design tokens trong `tailwind.config` / `@theme`.',
  },
  {
    id: 'refactor-fear',
    title: 'Refactor dễ sợ ảnh hưởng chỗ khác',
    description: 'Global `.btn` đổi một chỗ → break nhiều trang.',
    cssExample: `.btn {
  background: blue; /* form + link + CTA đều đổi */
}`,
    tailwindFix: `// Scope trong component — an toàn hơn
export function SaveButton() {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
      Save
    </button>
  )
}`,
    note: 'Utility local + component hóa → blast radius nhỏ.',
  },
]
