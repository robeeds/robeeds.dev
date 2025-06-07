import type { Block, Field } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const rowFields: Field[] = [
  {
    name: 'feature',
    type: 'group',
    fields: [
      {
        name: 'textWidth',
        type: 'select',
        defaultValue: 'oneThird',
        options: [
          {
            label: 'One Third',
            value: 'oneThird',
          },
          {
            label: 'Half',
            value: 'half',
          },
          {
            label: 'Two Thirds',
            value: 'twoThirds',
          },
          {
            label: 'Full',
            value: 'full',
          },
        ],
      },
      {
        name: 'richText',
        type: 'richText',
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
        label: false,
        required: true,
      },
      {
        name: 'textPosition',
        type: 'radio',
        options: ['Left', 'Right'],
      },
      linkGroup({
        appearances: ['default', 'outline'],
        overrides: {
          maxRows: 2,
        },
      }),
      {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
      },
    ],
  },
]

export const FeaturesBlock: Block = {
  slug: 'feature',
  interfaceName: 'FeaturesBlock',
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
      name: 'rows',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: rowFields,
    },
  ],
}
