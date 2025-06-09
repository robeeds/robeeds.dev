import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import { FeaturesBlock as FeaturesBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { StaticImageData } from 'next/image'

type Props = FeaturesBlockProps & {
  staticImage?: StaticImageData
}

type TextWidth = 'oneThird' | 'half' | 'twoThirds' | 'full'

export const FeaturesBlock: React.FC<Props> = (props) => {
  const { title, rows, staticImage } = props

  const textSpanClasses: Record<TextWidth, number> = {
    full: 12,
    half: 6,
    oneThird: 4,
    twoThirds: 8,
  }

  return (
    <div className="container py-32">
      {title && <RichText className="pb-8" data={title} enableGutter={false} />}
      <div className="flex flex-col gap-16">
        {rows &&
          rows.length > 0 &&
          rows.map((row, index) => {
            const { feature } = row
            const { textWidth, richText, textPosition, links, media } = feature

            const safeTextWidth: TextWidth = feature.textWidth ?? 'oneThird'
            const textSpan = textSpanClasses[safeTextWidth] // Inferred as number
            const imageSpan = 12 - textSpan

            return (
              <div className={`grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16`} key={index}>
                {/* This is the text portion */}
                <div
                  className={cn(
                    `col-span-4 ${textPosition === 'Right' ? 'lg:order-last' : ''} lg:col-span-${textSpanClasses[textWidth!]}`,
                    {
                      'md:col-span-4': textWidth !== 'full',
                    },
                  )}
                >
                  {richText && <RichText className="pb-4" data={richText} enableGutter={false} />}

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

                {/* This is the image portion */}
                {(media || staticImage) && (
                  <div
                    className={cn(` col-span-4 lg:col-span-${imageSpan}`, {
                      'md:col-span-4': textWidth !== 'full',
                    })}
                  >
                    <Media
                      resource={media}
                      src={staticImage}
                      className="flex items-center justify-center"
                      imgClassName="rounded-[10px]"
                    />
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

{
  /*
    <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16" key={index}>
                {/* This is the text portion *
                <div
                  className={cn(
                    `items-center col-span-4 lg:col-span-${textSpanClasses[feature?.textWidth!]}`,
                    {
                      'md:col-span-4': feature?.textWidth !== 'full',
                    },
                  )}
                >
                  {feature?.richText && <RichText className="" data={feature.richText} />}
                </div>
                {/* This is the image portion *
                <div></div>
              </div>
*/
}
