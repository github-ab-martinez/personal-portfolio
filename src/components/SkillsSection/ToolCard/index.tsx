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
    <div className="relative rounded-md  border-2 border-white-primary px-2 py-7 text-center dark:border-black-secondary dark:bg-black-secondary lg:p-8">
      <span className="absolute left-[calc(50%-30px)] top-[-30px] flex h-[60px] w-[60px] items-center p-2">
        <Logo darkMode={darkMode ?? true} />
      </span>
      <Heading level="h5" as="h3">
        {name}
      </Heading>
    </div>
  );
};

export default ToolCard;
