export interface Quote {
  hash: string;
  name: string;
  quote: string;
  relation: string;
}

export const getQuotes = (): Quote[] => {
  return [
    {
      hash: 'TommyQuote1',
      name: 'Tommy Ekstrand',
      quote:
        'Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      relation: 'Engineering Manager - BigCommerce',
    },
    {
      hash: 'TommyQuote2',
      name: 'Tommy Ekstrand',
      quote:
        'Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      relation: 'Engineering Manager - BigCommerce',
    },
    {
      hash: 'TommyQuote3',
      name: 'Tommy Ekstrand',
      quote:
        'Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      relation: 'Engineering Manager - BigCommerce',
    },
    {
      hash: 'TommyQuote4',
      name: 'Tommy Ekstrand',
      quote:
        'Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      relation: 'Engineering Manager - BigCommerce',
    },
    {
      hash: 'TommyQuote5',
      name: 'Tommy Ekstrand',
      quote:
        'Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      relation: 'Engineering Manager - BigCommerce',
    },
    {
      hash: 'TommyQuote6',
      name: 'Tommy Ekstrand',
      quote:
        'Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      relation: 'Engineering Manager - BigCommerce',
    },
  ];
};
