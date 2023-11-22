import { SVGLogo } from '@/assets/logos/types';
import Heading from '@/components/common/Heading';
import { FC } from 'react';

interface ToolCardProps {
  darkMode: boolean;
  name: string;
  logo: FC<SVGLogo>;
}

const ToolCard: FC<ToolCardProps> = ({ name, logo: Logo, darkMode }) => {
  return (
    <div className="bg-white-secondary dark:bg-black-primary p-8 rounded-md text-center flex flex-col items-center">
      <span className="h-[100px] flex items-center">
        <Logo darkMode={darkMode ?? true} />
      </span>
      <Heading className="mt-4" level="h5" as="h3">
        {name}
      </Heading>
    </div>
  );
};

export default ToolCard;
