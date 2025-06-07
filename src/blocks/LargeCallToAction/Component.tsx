import React from 'react'

import type { LargeCallToActionBlock as LargeCTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const LargeCallToActionBlock: React.FC<LargeCTABlockProps> = ({ links, richText }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-card border-border border p-8 text-center md:rounded-xl lg:p-16">
          <div className="mb-8">
            {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
          </div>
          <div className="flex flex-col gap-8">
            {/* Links */}
            <div className="flex gap-5 lg:gap-7">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex items-center gap-2">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
