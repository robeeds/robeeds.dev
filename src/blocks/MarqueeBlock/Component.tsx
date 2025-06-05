import React from 'react'

import type { MarqueeBlock as MarqueeBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Marquee } from '@/components/magicui/marquee'
import { StaticImageData } from 'next/image'

type Props = MarqueeBlockProps & {
  staticImage?: StaticImageData
}

export const MarqueeBlock: React.FC<Props> = (props) => {
  const { richText, marqueeItems, staticImage } = props
  return (
    <section className="grid container gap-y-8">
      <div>{richText && <RichText data={richText} enableGutter={false} />}</div>
      <Marquee className="w-full overflow-hidden">
        {marqueeItems?.map(({ media }, idx) => (
          <div key={idx} className="mx-4 shrink-0">
            <Media resource={media} src={staticImage} className="h-24 w-24 object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
