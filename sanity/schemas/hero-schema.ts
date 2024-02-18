import { defineField, defineType } from 'sanity';
import { LayoutTemplate } from 'lucide-react';

import CustomRichText from '../components/CustomRichText';

const hero = defineType({
  name: 'hero',
  title: 'Hero',
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
      title: 'Content',
      type: 'array',
      of: [CustomRichText],
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: LayoutTemplate,
});

export default hero;
