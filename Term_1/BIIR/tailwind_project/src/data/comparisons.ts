export type ComparisonComponentId =
  | 'button'
  | 'card'
  | 'pricing'
  | 'metric'
  | 'form'
  | 'navbar'

export interface ComparisonItem {
  id: ComparisonComponentId
  label: string
  traditionalCss: string
  traditionalHtml: string
  tailwindCode: string
  insight: string
}

export const comparisons: ComparisonItem[] = [
  {
    id: 'button',
    label: 'Button',
    traditionalHtml: '<button class="btn btn-primary">Get Started</button>',
    traditionalCss: `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary {
  background: #4f46e5;
  color: white;
}
.btn-primary:hover {
  background: #4338ca;
}`,
    tailwindCode: `<button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
  Get Started
</button>`,
    insight:
      'Không cần file CSS riêng — spacing, màu, hover nằm ngay trên element. Dễ đọc cho người mới.',
  },
  {
    id: 'card',
    label: 'Card',
    traditionalHtml: `<article class="feature-card">
  <h3 class="feature-card__title">Fast builds</h3>
  <p class="feature-card__body">Ship UI in hours.</p>
</article>`,
    traditionalCss: `.feature-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
.feature-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}
.feature-card__body {
  font-size: 0.875rem;
  color: #64748b;
}`,
    tailwindCode: `<article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-800">
  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Fast builds</h3>
  <p className="text-sm text-slate-500 dark:text-slate-400">Ship UI in hours.</p>
</article>`,
    insight: 'Dark mode thêm `dark:` prefix — không cần file theme riêng.',
  },
  {
    id: 'pricing',
    label: 'Pricing Card',
    traditionalHtml: `<div class="pricing pricing--popular">
  <span class="pricing__badge">Popular</span>
  <h3 class="pricing__plan">Pro</h3>
  <p class="pricing__price">$29<span>/mo</span></p>
</div>`,
    traditionalCss: `.pricing { border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
.pricing--popular { border-color: #6366f1; box-shadow: 0 0 0 2px #6366f1; }
.pricing__badge { display: inline-block; background: #eef2ff; color: #4f46e5; ... }
.pricing__plan { font-size: 1.25rem; font-weight: 700; }
.pricing__price { font-size: 2.5rem; font-weight: 800; }
.pricing__price span { font-size: 1rem; font-weight: 400; }`,
    tailwindCode: `<div className="relative rounded-2xl border-2 border-indigo-500 p-8 shadow-lg ring-2 ring-indigo-500/20">
  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
    Popular
  </span>
  <h3 className="text-xl font-bold">Pro</h3>
  <p className="mt-2 text-4xl font-extrabold">$29<span className="text-base font-normal text-slate-500">/mo</span></p>
</div>`,
    insight: 'Modifier BEM (`pricing--popular`) → utility stack trực quan hơn khi đọc markup.',
  },
  {
    id: 'metric',
    label: 'Dashboard Metric',
    traditionalHtml: `<div class="metric">
  <p class="metric__label">Revenue</p>
  <p class="metric__value">$48,290</p>
  <span class="metric__delta metric__delta--up">+12%</span>
</div>`,
    traditionalCss: `.metric { padding: 1.25rem; background: #f8fafc; border-radius: 0.75rem; }
.metric__label { font-size: 0.75rem; text-transform: uppercase; color: #64748b; }
.metric__value { font-size: 1.875rem; font-weight: 700; }
.metric__delta { font-size: 0.875rem; }
.metric__delta--up { color: #16a34a; }`,
    tailwindCode: `<div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Revenue</p>
  <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">$48,290</p>
  <span className="mt-2 inline-block text-sm font-medium text-green-600">+12%</span>
</div>`,
    insight: 'Dashboard widgets compose nhanh — copy pattern metric card sang metric khác.',
  },
  {
    id: 'form',
    label: 'Form Input',
    traditionalHtml: `<label class="field">
  <span class="field__label">Email</span>
  <input class="field__input field__input--error" />
  <span class="field__error">Invalid email</span>
</label>`,
    traditionalCss: `.field { display: flex; flex-direction: column; gap: 0.375rem; }
.field__label { font-size: 0.875rem; font-weight: 500; }
.field__input { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 0.5rem 0.75rem; }
.field__input--error { border-color: #ef4444; }
.field__input:focus { outline: 2px solid #6366f1; }
.field__error { font-size: 0.75rem; color: #ef4444; }`,
    tailwindCode: `<label className="flex flex-col gap-1.5">
  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
  <input className="rounded-lg border border-red-500 px-3 py-2 focus:outline-2 focus:outline-indigo-500" />
  <span className="text-xs text-red-500">Invalid email</span>
</label>`,
    insight: 'State error: đổi `border-red-500` — không cần modifier class riêng trong CSS file.',
  },
  {
    id: 'navbar',
    label: 'Navbar',
    traditionalHtml: `<nav class="site-nav">
  <a class="site-nav__brand">Acme</a>
  <ul class="site-nav__links"><li><a href="#">Home</a></li></ul>
</nav>`,
    traditionalCss: `.site-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 2rem; background: white; border-bottom: 1px solid #e2e8f0;
}
.site-nav__brand { font-weight: 700; font-size: 1.25rem; }
.site-nav__links { display: flex; gap: 2rem; list-style: none; }
@media (max-width: 768px) {
  .site-nav__links { display: none; }
}`,
    tailwindCode: `<nav className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-700 dark:bg-slate-900">
  <a className="text-xl font-bold text-indigo-600">Acme</a>
  <ul className="hidden gap-8 md:flex">
    <li><a className="text-sm font-medium text-slate-600 hover:text-indigo-600">Home</a></li>
  </ul>
</nav>`,
    insight: 'Responsive: `hidden md:flex` — không viết media query thủ công.',
  },
]
