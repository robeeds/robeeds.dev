// src/components/TableOfContents.tsx

import React from 'react'
import type { Heading } from '@/utilities/extractHeadings'

type Props = {
  headings: Heading[]
}

export default function TableOfContents({ headings }: Props) {
  if (!headings || headings.length === 0) return null

  return (
    <nav className="grid gap-1 sticky top-24 w-full">
      <h2 className="text-2xl font-bold leading-tight mb-4 scroll-mt-24 text-gray-900 dark:text-white">
        On This Page
      </h2>
      <ul className="space-y-1 text-sm">
        {headings.map(({ text, id, level }) => (
          <li key={id} className={`ml-${(level - 1) * 4}`}>
            <a href={`#${id}`} className="prose dark:prose-invert hover:underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
