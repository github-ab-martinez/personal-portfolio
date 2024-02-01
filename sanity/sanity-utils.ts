import { groq } from 'next-sanity';

import client from './sanity.client';

export interface NavLink {
  _key: string;
  url: string;
  _type: string;
  label: string;
}

export async function getPrimaryNavLinks(): Promise<{ links: NavLink[] }> {
  return client.fetch(
    groq`*[_type == "navbar" && name == "Primary Nav"]{
        links
    }[0]`,
  );
}
