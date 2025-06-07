import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const timelineFields: Field[] = [
  {
    name: 'data',
    type: 'group',
    fields: [
      {
        name: 'date',
        type: 'richText',
        editor: lexicalEditor(),
      },
      {
        name: 'eventTitle',
        type: 'richText',
        label: 'Event Title',
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ]
          },
        }),
        required: true,
      },
      {
        name: 'description',
        type: 'richText',
        label: 'Description',
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ]
          },
        }),
      },
    ],
  },
]

export const TimelineBlock: Block = {
  slug: 'timeline',
  interfaceName: 'TimelineBlock',
  fields: [
    {
      name: 'title',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'timelineData',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: timelineFields,
    },
  ],
}
