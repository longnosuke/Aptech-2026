import { Section } from '../ui/Section'

const pros = [
  { title: 'Nhanh', desc: 'Prototype và iterate UI không cần context-switch sang CSS file.' },
  { title: 'Ít naming problem', desc: 'Không phải invent `.hero-cta--lg` cho mỗi element.' },
  { title: 'Dễ maintain trong component', desc: 'Style colocate với JSX — refactor component an toàn hơn.' },
  { title: 'Consistency cao', desc: 'Design scale trong config — spacing/color thống nhất.' },
  { title: 'Responsive / state / dark mode tiện', desc: 'Prefix `md:`, `hover:`, `dark:` — declarative.' },
  { title: 'Hợp design system', desc: 'Extend theme → custom brand tokens cho cả team.' },
]

const cons = [
  { title: 'Class dài', desc: 'Một element có thể có 15–20 utility class trên một dòng.' },
  { title: 'JSX/HTML nhìn rối', desc: 'Người mới thấy "wall of classes" — cần thời gian quen.' },
  { title: 'Cần học convention', desc: 'Phải nhớ scale: `p-4` vs `p-6`, `text-sm` vs `text-base`.' },
  { title: 'Dễ copy-paste', desc: 'Không component hóa → duplicate utility khắp project.' },
  { title: 'Không thay CSS nền tảng', desc: 'Vẫn cần hiểu box model, flexbox, grid, specificity.' },
  { title: 'Dynamic class risk', desc: 'Template string sai (`bg-${color}-500`) → purge miss class.' },
]

export function ProsCons() {
  return (
    <Section
      id="pros-cons"
      eyebrow="Phần 6"
      title="Lợi ích và hạn chế"
      subtitle="Tailwind không phải silver bullet — hiểu trade-off giúp bạn chọn đúng tool và tránh anti-pattern."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-emerald-700 dark:text-emerald-400">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50">+</span>
            Pros
          </h3>
          <div className="space-y-3">
            {pros.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-amber-700 dark:text-amber-400">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/50">−</span>
            Cons
          </h3>
          <div className="space-y-3">
            {cons.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
