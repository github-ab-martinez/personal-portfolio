import { FC } from 'react';

import { SVGLogo } from '@/assets/logos/types';
import Heading from '@/components/Heading';

interface ToolCardProps {
  darkMode: boolean;
  name: string;
  logo: FC<SVGLogo>;
}

const ToolCard: FC<ToolCardProps> = ({ name, logo: Logo, darkMode }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-white-secondary px-2 py-7 transition-all duration-500 dark:bg-black-secondary lg:p-8">
      <Logo aria-hidden="true" darkMode={darkMode ?? true} size={64} />
      <Heading as="h3" className="font-semibold" level="h5">
        {name}
      </Heading>
    </div>
  );
};

export default ToolCard;
