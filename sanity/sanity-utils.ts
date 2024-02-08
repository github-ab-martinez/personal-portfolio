import { groq } from 'next-sanity';
import { z } from 'zod';
import { PortableTextBlock } from 'sanity';

import client from './sanity.client';

export interface PageContent {
  pageSections: {
    _type: 'string';
    name: 'string';
    hero: boolean;
    _key: string;
    subheading: PortableTextBlock[];
    content: PortableTextBlock[];
    secondary: boolean;
    heading: PortableTextBlock[];
  }[];
}

const PortableTextSpanSchema = z.object({
  _key: z.string(),
  _type: z.literal('span'),
  text: z.string(),
  marks: z.optional(z.array(z.string())),
});

const PortableTextObjectSchema = z.object({
  _type: z.string(),
  _key: z.string(),
});

const PortableTextSchema = z.object({
  _type: z.string(),
  _key: z.string(),
  children: z.array(
    z.union([PortableTextSpanSchema, PortableTextObjectSchema]),
  ),
});

const ResponseSchema = z.object({
  pageSections: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      heading: z.array(PortableTextSchema),
      subheading: z.array(PortableTextSchema),
    }),
  ),
});

export type LandingPageType = z.infer<typeof ResponseSchema>;

export async function getHomePageContent(): Promise<LandingPageType> {
  const response = await client.fetch(
    groq`*[_type == 'landingPage' && slug.current == 'home-page']{
      pageSections[]{
        _key,
        _type,
        heading,
        subheading,
        _type != 'hero' => {
          secondary
        },
      }
    }[0]`,
    {
      next: {
        revalidate: 90, // TODO: Remove this before deploying
      },
    },
  );

  try {
    ResponseSchema.passthrough().parse(response);
  } catch {
    // eslint-disable-next-line
    console.error('Zod validation of getHomePageContent fetch failed.');
  }

  return response;
}
