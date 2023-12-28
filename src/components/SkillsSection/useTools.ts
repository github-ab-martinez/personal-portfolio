import { useMemo } from 'react';
import { getTools } from './tools';

export const useTools = () => {
  return useMemo(() => getTools(), []);
};
