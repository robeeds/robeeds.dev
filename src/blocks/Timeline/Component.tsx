import React from 'react'
import RichText from '@/components/RichText'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'

import { TimelineBlock as TimelineBlockProps } from '@/payload-types'

export const TimelineBlock: React.FC<TimelineBlockProps> = (props) => {
  const { title, timelineData } = props
  return (
    <section className="bg-background pt-32">
      <div className="container">
        <div className="text-center">
          {title && <RichText className="pb-4" data={title} enableGutter={false} />}
        </div>
        <div className="relative mx-auto max-w-4xl">
          <Separator orientation="vertical" className="absolute top-4 left-2 bg-muted" />
          {timelineData &&
            timelineData.length > 0 &&
            timelineData.map((card, index) => {
              const { data } = card
              const { date, eventTitle, description } = data
              return (
                <div key={index} className="relative mb-10 pl-8">
                  <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-foreground" />
                  <div className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                    {eventTitle && (
                      <RichText className="pb-4" data={eventTitle} enableGutter={false} />
                    )}
                  </div>

                  <h5 className="text-md top-3 -left-36 rounded-xl tracking-tight text-muted-foreground xl:absolute">
                    {date && <RichText className="pb-4" data={date} enableGutter={false} />}
                  </h5>

                  <Card className="my-5 border-none shadow-none bg-transparent">
                    <CardContent className="px-0 xl:px-2">
                      <div className="prose text-foreground">
                        {description && (
                          <RichText className="pb-4" data={description} enableGutter={false} />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
