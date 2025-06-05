'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { RetroGrid } from '@/components/magicui/retro-grid'

export const RetroHero: React.FC<Page['hero']> = ({ links, richText }) => {
  return (
    <section className="bg-background pt-[20vh] pb-[35vh] flex items-center">
      <div className="container flex flex-col items-center justify-center gap-10 lg:my-0 lg:flex-row">
        <div className="z-10 flex flex-col gap-7 justify-center items-center text-center lg:w-2/3">
          {/* Main Text */}
          <div>{richText && <RichText className="" data={richText} enableGutter={false} />}</div>
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
        <RetroGrid angle={80} className="z-0" />
      </div>
    </section>
  )
}
