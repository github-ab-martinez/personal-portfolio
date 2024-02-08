import { defineArrayMember } from 'sanity';

const landingPage = {
  name: 'landingPage',
  title: 'Landing Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        defineArrayMember({ name: 'hero', type: 'hero' }),
        { type: 'pageSection' },
      ],
    },
  ],
};

export default landingPage;
