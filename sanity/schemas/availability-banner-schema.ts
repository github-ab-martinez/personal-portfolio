import { Flag } from 'lucide-react';
import { defineField, defineType } from 'sanity';

const availabilityBanner = defineType({
  name: 'availabilityBanner',
  title: 'Availability Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Banner Content',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: Flag,
});

export default availabilityBanner;
