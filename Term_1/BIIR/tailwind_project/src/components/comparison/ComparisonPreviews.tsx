import type { ComparisonComponentId } from '../../data/comparisons'

export function ComparisonPreview({ id }: { id: ComparisonComponentId }) {
  switch (id) {
    case 'button':
      return (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Get Started
        </button>
      )
    case 'card':
      return (
        <article className="max-w-xs rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-bold text-text">Fast builds</h3>
          <p className="text-sm text-text-muted">Ship UI in hours.</p>
        </article>
      )
    case 'pricing':
      return (
        <div className="relative max-w-xs rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-md ring-2 ring-blue-600/10">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Popular
          </span>
          <h3 className="text-xl font-bold text-text">Pro</h3>
          <p className="mt-2 text-4xl font-extrabold text-text">
            $29<span className="text-base font-normal text-text-muted">/mo</span>
          </p>
        </div>
      )
    case 'metric':
      return (
        <div className="max-w-xs rounded-xl border border-border bg-code-bg p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">Revenue</p>
          <p className="mt-1 text-3xl font-bold text-text">$48,290</p>
          <span className="mt-2 inline-block text-sm font-medium text-emerald-600">+12%</span>
        </div>
      )
    case 'form':
      return (
        <label className="flex max-w-xs flex-col gap-1.5">
          <span className="text-sm font-medium text-text">Email</span>
          <input
            readOnly
            placeholder="you@email.com"
            className="rounded-lg border border-red-500 bg-white px-3 py-2 text-text"
          />
          <span className="text-xs text-red-600">Invalid email</span>
        </label>
      )
    case 'navbar':
      return (
        <nav className="flex w-full max-w-md items-center justify-between rounded-lg border border-border bg-white px-6 py-3">
          <span className="text-lg font-bold text-blue-600">Acme</span>
          <ul className="hidden gap-6 text-sm font-medium text-text-muted md:flex">
            <li>Home</li>
            <li>Pricing</li>
            <li>Docs</li>
          </ul>
          <span className="text-xs text-text-muted md:hidden">☰</span>
        </nav>
      )
    default:
      return null
  }
}
