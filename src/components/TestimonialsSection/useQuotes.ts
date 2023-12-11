import { useMemo } from 'react';
import { getQuotes } from './quotes';

export const useQuotes = () => {
  return useMemo(() => getQuotes(), []);
};
