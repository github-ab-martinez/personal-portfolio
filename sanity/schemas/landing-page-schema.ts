import { defineField } from 'sanity';

const landingPage = {
  name: 'landingPage',
  title: 'Landing Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'pageSection' },
        { type: 'availabilityBanner' },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default landingPage;
