import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: 'html' | 'css' | 'jsx' | 'tsx'
  title?: string
  compact?: boolean
}

function highlightCode(code: string, language: string): string {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  if (language === 'css') {
    return escaped
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>')
      .replace(/([.#][\w-]+)/g, '<span class="token-class">$1</span>')
      .replace(/([\w-]+)(?=\s*:)/g, '<span class="token-property">$1</span>')
      .replace(/(#[0-9a-fA-F]{3,8}|rgb\([^)]+\))/g, '<span class="token-string">$1</span>')
  }

  return escaped
    .replace(/(className|class)=/g, '<span class="token-property">$1</span>=')
    .replace(/"([^"]*)"/g, '<span class="token-string">"$1"</span>')
    .replace(/(&lt;\/?)([\w]+)/g, '$1<span class="token-tag">$2</span>')
    .replace(/\b(const|return|export|function|type|import|from)\b/g, '<span class="token-keyword">$1</span>')
}

export function CodeBlock({ code, language = 'tsx', title, compact }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-code-bg shadow-inner">
      <div className="flex items-center justify-between border-b border-border bg-white px-3 py-1.5">
        <span className="font-mono text-xs font-medium text-text-muted">
          {title ?? language.toUpperCase()}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md px-2 py-0.5 text-xs font-medium text-accent transition hover:bg-code-bg"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre
        className={`code-scroll overflow-auto p-3 font-mono text-xs leading-relaxed text-code-text sm:p-4 sm:text-sm ${
          compact ? 'max-h-36' : 'max-h-72'
        }`}
      >
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} />
      </pre>
    </div>
  )
}
