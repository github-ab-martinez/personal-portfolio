import { useMemo } from 'react';

import { getNavLinks } from './navLinks';

export interface NavLink {
  hash: string;
  label: string;
  url: string;
}

export const useNavLinks = (): NavLink[] => {
  return useMemo(() => getNavLinks(), []);
};
