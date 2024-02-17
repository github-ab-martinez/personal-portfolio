import { z } from 'zod';

import client from '@/../sanity/sanity.client';

const NavLink = z.object({
  _key: z.string(),
  url: z.string(),
  label: z.string(),
});

export type NavLink = z.infer<typeof NavLink>;

const ResponseSchema = z.object({
  navLinks: z.array(NavLink),
});

export const getNavLinks = async (): Promise<NavLink[]> => {
  const response =
    await client.fetch(`*[_type == "navbar" && name == "Primary Nav"]{
    "navLinks": links[]{_key, label, url}
  }[0]`);

  try {
    ResponseSchema.parse(response);
  } catch {
    // eslint-disable-next-line
    console.error('Zod validation of getNavLinks fetch failed.');
  }

  return response?.navLinks || [];
};
