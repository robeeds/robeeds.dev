import type { Block } from "payload";

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const MarqueeBlock: Block = {
    slug: 'marqueeBlock',
    interfaceName: 'MarqueeBlock',
    fields: [
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
  },
        {
            name: 'marqueeItems',
            type: 'array', 
            label: 'Marquee Items',
            minRows: 1,
            labels: {
                singular: 'Media',
                plural: 'Media',
            },
            fields: [
                {

                    name: 'media', 
                    type: 'upload', 
                    relationTo: 'media',
                    required: true,
                }
            ]
        }
    ]
}