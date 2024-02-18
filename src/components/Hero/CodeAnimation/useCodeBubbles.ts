import { useMemo } from 'react';

import { getCodeBubbles } from './codeBubbles';

export const useCodeBubbles = () => {
  return useMemo(() => getCodeBubbles(), []);
};
