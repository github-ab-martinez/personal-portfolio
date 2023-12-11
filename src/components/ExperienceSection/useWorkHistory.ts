import { useMemo } from 'react';
import { getWorkHistory } from './workHistory';

export const useWorkHistory = () => {
  return useMemo(() => getWorkHistory(), []);
};
