export interface AiMockResult {
  keywords: string[]
  title: string
  explanation: string
  code: string
}

export const aiMockResults: AiMockResult[] = [
  {
    keywords: ['pricing', 'price', 'plan', 'subscription'],
    title: 'Modern Pricing Card',
    explanation:
      'AI map "modern pricing card" → rounded container, badge, typography scale, CTA button — tất cả bằng utility quen thuộc (`rounded-2xl`, `text-4xl`, `bg-indigo-600`).',
    code: `<div className="relative max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
  <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
    Best value
  </span>
  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Pro Plan</h3>
  <p className="mt-2 text-4xl font-extrabold tracking-tight">
    $29<span className="text-lg font-normal text-slate-500">/month</span>
  </p>
  <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited projects</li>
    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Priority support</li>
  </ul>
  <button className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
    Start free trial
  </button>
</div>`,
  },
  {
    keywords: ['dashboard', 'metric', 'stat', 'analytics', 'kpi'],
    title: 'Dashboard Metric Card',
    explanation:
      'Prompt "dashboard metric" → AI dùng `text-xs uppercase` cho label, `text-3xl font-bold` cho số, `text-green-600` cho delta — pattern lặp lại trong mọi dashboard SaaS.',
    code: `<div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
  <div className="flex items-center justify-between">
    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active users</p>
    <span className="rounded-lg bg-indigo-100 p-2 text-indigo-600">📈</span>
  </div>
  <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">12,847</p>
  <p className="mt-1 text-sm font-medium text-emerald-600">+18.2% vs last week</p>
</div>`,
  },
  {
    keywords: ['hero', 'landing', 'banner', 'headline'],
    title: 'Hero Section',
    explanation:
      'AI hiểu layout hero: gradient background, large headline, dual CTA. Class names mô tả trực tiếp (`bg-gradient-to-br`, `text-5xl`, `max-w-3xl`).',
    code: `<section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-6 py-24 text-center text-white">
  <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
    Build faster with utility-first CSS
  </h1>
  <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
    Ship beautiful interfaces without leaving your components.
  </p>
  <div className="mt-10 flex flex-wrap justify-center gap-4">
    <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50">
      Get started
    </button>
    <button className="rounded-xl border border-white/40 px-6 py-3 font-semibold backdrop-blur hover:bg-white/10">
      View docs
    </button>
  </div>
</section>`,
  },
  {
    keywords: ['form', 'input', 'login', 'signup', 'email'],
    title: 'Auth Form',
    explanation:
      'Form prompts → flex column, focus ring utilities, error state colors. AI không cần invent `.form-input-error` — dùng `border-red-500` trực tiếp.',
    code: `<form className="mx-auto max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sign in</h2>
  <label className="block space-y-1.5">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
    <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800" placeholder="you@company.com" />
  </label>
  <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white hover:bg-indigo-700">
    Continue
  </button>
</form>`,
  },
  {
    keywords: ['navbar', 'navigation', 'header', 'menu'],
    title: 'Responsive Navbar',
    explanation:
      'Navigation prompts kích hoạt `flex`, `justify-between`, `hidden md:flex` — pattern responsive AI generate cực chuẩn.',
    code: `<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/80">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Brand</span>
    <div className="hidden items-center gap-8 md:flex">
      <a className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300">Features</a>
      <a className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300">Pricing</a>
      <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Sign up</button>
    </div>
  </nav>
</header>`,
  },
  {
    keywords: ['card', 'profile', 'user', 'team'],
    title: 'Profile Card',
    explanation:
      'Default fallback khi prompt không match keyword cụ thể — vẫn là component Tailwind hợp lệ, dễ chỉnh từng class.',
    code: `<div className="flex max-w-sm items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-700 dark:bg-slate-800">
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xl font-bold text-white">
    LN
  </div>
  <div>
    <h3 className="font-semibold text-slate-900 dark:text-white">Liam Nguyen</h3>
    <p className="text-sm text-slate-500">Frontend Instructor</p>
  </div>
</div>`,
  },
]

export function matchAiMock(prompt: string): AiMockResult {
  const lower = prompt.toLowerCase()
  for (const mock of aiMockResults) {
    if (mock.keywords.some((k) => lower.includes(k))) return mock
  }
  return aiMockResults[aiMockResults.length - 1]
}
