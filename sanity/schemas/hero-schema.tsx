import CustomRichText from '../components/CustomRichText';

const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [CustomRichText],
    },
    {
      name: 'subheading',
      title: 'Sub-Heading',
      type: 'array',
      of: [CustomRichText],
    },
  ],
};

export default hero;
