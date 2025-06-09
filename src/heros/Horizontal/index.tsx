'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HorizontalHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <section className="bg-background py-20">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        {/* The section below is the main text */}
        <div className="flex flex-col gap-7 lg:w-2/3">
          <div>{richText && <RichText className="" data={richText} enableGutter={false} />}</div>
          <div className="flex items-start gap-5 lg:gap-7">
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
        {/* The section below is the image */}
        <div className="relative z-10 lg:w-1/2 ">
          {media && typeof media === 'object' && (
            <div>
              <Media
                className=""
                imgClassName="object-cover rounded-[10px]"
                priority
                resource={media}
              />
              {media?.caption && (
                <div className="mt-3">
                  <RichText data={media.caption} enableGutter={false} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
