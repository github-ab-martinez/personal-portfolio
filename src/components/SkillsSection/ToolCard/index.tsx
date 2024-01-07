import { SVGLogo } from "@/assets/logos/types";
import Heading from "@/components/common/Heading";
import { FC } from "react";

interface ToolCardProps {
  darkMode: boolean;
  name: string;
  logo: FC<SVGLogo>;
}

const ToolCard: FC<ToolCardProps> = ({ name, logo: Logo, darkMode }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-white-secondary px-2 py-7 transition-all duration-500 dark:bg-black-secondary lg:p-8">
      <Logo aria-hidden="true" size={64} darkMode={darkMode ?? true} />
      <Heading level="h5" as="h3" className="font-semibold">
        {name}
      </Heading>
    </div>
  );
};

export default ToolCard;
