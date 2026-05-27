export interface ProductionExample {
  id: string
  title: string
  description: string
  code: string
}

export const productionExamples: ProductionExample[] = [
  {
    id: 'button',
    title: 'Reusable Button (variants)',
    description:
      'Component hóa variant bằng `clsx` + map class — tránh copy-paste utility khắp codebase. Đây là pattern production chuẩn.',
    code: `type Variant = 'primary' | 'secondary' | 'danger'

const variants: Record<Variant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

export function Button({ variant = 'primary', children }) {
  return (
    <button className={clsx(
      'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition',
      variants[variant],
    )}>
      {children}
    </button>
  )
}`,
  },
  {
    id: 'card',
    title: 'Card Component',
    description: 'Slot pattern: children cho nội dung — shell card dùng utility cố định.',
    code: `export function Card({ title, children }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      {title && <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>}
      {children}
    </article>
  )
}`,
  },
  {
    id: 'form',
    title: 'Form Field + Error State',
    description: 'Prop `error` toggle class — không cần CSS modifier file.',
    code: `export function FormField({ label, error, ...props }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      <input
        className={clsx(
          'rounded-lg border px-3 py-2 focus:outline-2 focus:outline-indigo-500/30',
          error ? 'border-red-500' : 'border-slate-300',
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}`,
  },
  {
    id: 'metric',
    title: 'Dashboard Metric Card',
    description: 'Compose utilities cho KPI widgets — copy pattern sang metric khác trong vài giây.',
    code: `export function MetricCard({ label, value, delta, positive }) {
  return (
    <div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800/60">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
      <span className={clsx('mt-2 text-sm font-medium', positive ? 'text-green-600' : 'text-red-500')}>
        {delta}
      </span>
    </div>
  )
}`,
  },
  {
    id: 'pricing',
    title: 'Responsive Pricing Card',
    description: 'Grid responsive + highlighted plan — pattern phổ biến trên trang SaaS.',
    code: `<div className="grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border p-8 ...">Starter</div>
  <div className="relative rounded-2xl border-2 border-indigo-500 p-8 shadow-xl ring-2 ring-indigo-500/20">
    <span className="absolute -top-3 ...">Popular</span>
    Pro
  </div>
</div>`,
  },
  {
    id: 'dark',
    title: 'Dark Mode',
    description:
      'Class `dark` trên `<html>` + prefix `dark:` — mọi component tự adapt mà không duplicate markup.',
    code: `<div className="rounded-xl bg-white p-6 text-slate-900 dark:bg-slate-800 dark:text-white">
  <p className="text-slate-600 dark:text-slate-400">Adapts with theme toggle</p>
</div>`,
  },
]
