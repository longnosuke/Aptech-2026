import clsx from 'clsx'

interface MetricCardProps {
  label: string
  value: string
  delta: string
  positive?: boolean
}

export function MetricCard({ label, value, delta, positive = true }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-border bg-code-bg p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</p>
      <p className="mt-2 text-3xl font-bold text-text">{value}</p>
      <span
        className={clsx(
          'mt-2 inline-block text-sm font-medium',
          positive ? 'text-emerald-600' : 'text-red-600',
        )}
      >
        {delta}
      </span>
    </div>
  )
}
