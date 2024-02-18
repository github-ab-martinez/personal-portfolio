import { groq } from 'next-sanity';
import { z } from 'zod';

import client from './sanity.client';

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

const HeroSchema = z.object({
  _key: z.string(),
  _type: z.literal('hero'),
  content: z.array(PortableTextSchema),
});

const PageSectionSchema = z.object({
  _key: z.string(),
  _type: z.literal('pageSection'),
  content: z.array(PortableTextSchema),
  secondary: z.boolean(),
});

const AvailabilityBannerSchema = z.object({
  _key: z.string(),
  _type: z.literal('availabilityBanner'),
  content: z.array(z.string()),
});

const LandingPageResponseSchema = z.object({
  content: z.nullable(
    z.array(z.union([HeroSchema, PageSectionSchema, AvailabilityBannerSchema])),
  ),
});

export type LandingPageType = z.infer<typeof LandingPageResponseSchema>;

export async function getHomePageContent(): Promise<LandingPageType> {
  const response = await client.fetch(
    groq`*[_type == 'landingPage' && slug.current == 'home-page']{
      content[]{
        _key,
        _type,
        content
      }
    }[0]`,
    {
      next: {
        revalidate: 60, // TODO: Remove this before deploying
      },
    },
  );

  if (!response.content) {
    // eslint-disable-next-line
    console.error('No homepage content returned');
  } else {
    try {
      LandingPageResponseSchema.passthrough().parse(response);
    } catch {
      // eslint-disable-next-line
      console.error('Zod validation of getHomePageContent fetch failed.');
    }
  }

  return response;
}
