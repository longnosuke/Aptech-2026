import { popularityReasons } from '../../data/popularity'
import { Section } from '../ui/Section'

export function WhyPopular() {
  return (
    <Section
      id="popular"
      eyebrow="Phần 4"
      title="Vì sao Tailwind phổ biến?"
      subtitle="Từ startup đến enterprise — Tailwind trở thành default choice vì speed, ecosystem, và fit với component frameworks."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent md:block" />
        <div className="space-y-6">
          {popularityReasons.map((reason, i) => (
            <div
              key={reason.title}
              className="relative flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-indigo-800 md:ml-8"
            >
              <div className="absolute -left-2 top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-indigo-500 shadow md:block dark:border-slate-900" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-2xl dark:from-indigo-900/50 dark:to-violet-900/50">
                {reason.icon}
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-indigo-500">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{reason.title}</h3>
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
