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
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...link} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

{
  /*
import { Button } from '@/components/ui/button'

interface Cta11Props {
  heading: string
  description: string
  buttons?: {
    primary?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
}

const LargeCallToAction = ({
  heading = 'Call to Action',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis!',
  buttons = {
    primary: {
      text: 'Get Started',
      url: 'https://www.shadcnblocks.com',
    },
    secondary: {
      text: 'Learn More',
      url: 'https://www.shadcnblocks.com',
    },
  },
}: Cta11Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">{description}</p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button className="w-full sm:w-auto" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { LargeCallToAction }
 */
}
