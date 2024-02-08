import { ReactNode } from 'react';

const pageSection = {
  name: 'pageSection',
  title: 'Page Section',
  type: 'object',
  fields: [
    {
      name: 'secondary',
      title: 'Secondary',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              {
                title: 'Highlight',
                value: 'highlight',
                component: ({
                  children,
                }: {
                  children: ReactNode | ReactNode[];
                }) => (
                  <span className="bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent">
                    {children}
                  </span>
                ),
              },
            ],
          },
        },
      ],
    },
    {
      name: 'subheading',
      title: 'Sub-Heading',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              {
                title: 'Highlight',
                value: 'highlight',
                component: ({
                  children,
                }: {
                  children: ReactNode | ReactNode[];
                }) => (
                  <span className="bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent">
                    {children}
                  </span>
                ),
              },
            ],
          },
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              {
                title: 'Highlight',
                value: 'highlight',
                component: ({
                  children,
                }: {
                  children: ReactNode | ReactNode[];
                }) => (
                  <span className="bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent">
                    {children}
                  </span>
                ),
              },
            ],
          },
        },
      ],
    },
  ],
};

export default pageSection;
