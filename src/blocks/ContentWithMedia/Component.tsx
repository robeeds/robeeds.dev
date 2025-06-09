import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import { ContentWithMediaBlock as ContentWithMediaBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { StaticImageData } from 'next/image'

type Props = ContentWithMediaBlockProps & {
  staticImage?: StaticImageData
}

export const ContentWithMediaBlock: React.FC<Props> = (props) => {
  const { columns, staticImage } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16 ">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, media, size } = col

            return (
              <div
                className={cn(`items-center col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                  'md:col-span-4': size !== 'full',
                })}
                key={index}
              >
                {richText && <RichText className="" data={richText} enableGutter={false} />}
                {enableLink && <CMSLink {...link} />}
                {(media || staticImage) && (
                  <Media resource={media} src={staticImage} imgClassName="rounded-[10px]" />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
