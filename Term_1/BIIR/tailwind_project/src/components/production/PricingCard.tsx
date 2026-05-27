import { Button } from './Button'

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  popular?: boolean
}

export function PricingCard({ name, price, features, popular }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
        popular ? 'border-2 border-blue-600 shadow-md ring-2 ring-blue-600/10' : 'border-border shadow-sm'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-text">{name}</h3>
      <p className="mt-2 text-4xl font-extrabold tracking-tight text-text">
        {price}
        <span className="text-base font-normal text-text-muted">/mo</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-text-muted">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span> {f}
          </li>
        ))}
      </ul>
      <Button variant={popular ? 'primary' : 'secondary'} className="mt-8 w-full">
        Choose {name}
      </Button>
    </div>
  )
}
