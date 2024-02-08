import { defineField } from 'sanity';

const navbar = {
  name: 'navbar',
  title: 'Navbars',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default navbar;
