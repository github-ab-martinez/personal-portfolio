import { defineField, defineType } from 'sanity';
import { RectangleHorizontal } from 'lucide-react';

import CustomRichText from '../components/CustomRichText';

const pageSection = defineType({
  name: 'pageSection',
  title: 'Page Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [CustomRichText],
    }),
  ],
  icon: RectangleHorizontal,
});

export default pageSection;
