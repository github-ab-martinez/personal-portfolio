import { NavLink, getPrimaryNavLinks } from '@/../sanity/sanity-utils';

export const getNavLinks = async (): Promise<NavLink[]> => {
  const navLinks = await getPrimaryNavLinks();

  if (navLinks.links) {
    return navLinks.links;
  }

  return [];
};
