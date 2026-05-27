export function Hero() {
  return (
    <section
      id="hero"
      className="gradient-mesh relative overflow-hidden border-b border-slate-200/80 py-24 dark:border-slate-800 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(99_102_241/0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          Interactive Learning Site
        </span>
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Tailwind CSS:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            Utility-first CSS for Modern UI
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Học Tailwind qua demo tương tác: so sánh với CSS truyền thống, xem pattern production,
          và hiểu vì sao AI generate Tailwind cực tốt — tất cả trong một mini app chạy local.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#what"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 hover:shadow-indigo-500/40"
          >
            Start Learning
          </a>
          <a
            href="#compare"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            Compare with CSS
          </a>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 text-center sm:gap-8">
          {[
            { value: '6+', label: 'Interactive demos' },
            { value: '100%', label: 'Copy-ready code' },
            { value: '0', label: 'API keys needed' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
