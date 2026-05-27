import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function FormField({ label, error, className, ...props }: FormFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-text">{label}</span>
      <input
        className={clsx(
          'rounded-lg border bg-white px-3 py-2 text-text transition focus:outline-2 focus:outline-blue-500/30',
          error ? 'border-red-500' : 'border-border',
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}
