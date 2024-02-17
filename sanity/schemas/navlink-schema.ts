import { Link } from 'lucide-react';
import { defineField, defineType } from 'sanity';

const navLink = defineType({
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: Link,
});

export default navLink;
