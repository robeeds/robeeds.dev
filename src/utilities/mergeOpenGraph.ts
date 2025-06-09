import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Management Information Systems student @ CSULB. Exploring how data reveals insight and how systems stay secure.',
  images: [
    {
      url: `${getServerSideURL()}/og.webp`,
    },
  ],
  siteName: 'https://www.robeeds.dev',
  title: 'RobeeDS | Data Analytics + Cybersecurity',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
