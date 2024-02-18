import { Paintbrush2 } from 'lucide-react';
import { defineArrayMember } from 'sanity';

const CustomRichText = defineArrayMember({
  type: 'block',
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      {
        title: 'Highlight',
        value: 'highlight',
        component: ({ children }) => (
          <span className="bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent">
            {children}
          </span>
        ),
        icon: () => <Paintbrush2 size={14} />,
      },
    ],
  },
});

export default CustomRichText;
