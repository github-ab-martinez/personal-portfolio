const navbar = {
  name: 'navbar',
  title: 'Navbars',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navLink' }],
    },
  ],
};

export default navbar;
