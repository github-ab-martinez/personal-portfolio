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
    <div className="flex flex-col items-center rounded-md bg-white-primary p-8 text-center dark:bg-black-secondary">
      <span className="flex h-[60px] w-[60px] items-center">
        <Logo darkMode={darkMode ?? true} />
      </span>
      <Heading className="mt-4" level="h5" as="h3">
        {name}
      </Heading>
    </div>
  );
};

export default ToolCard;
