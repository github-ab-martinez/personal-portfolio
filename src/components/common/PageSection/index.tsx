import { FC, PropsWithChildren } from "react";
import ContentContainer from "../ContentContainer";

interface PageSectionProps extends PropsWithChildren {
  className?: string;
  style?: "primary" | "secondary";
  secondary?: boolean;
}

const PageSection: FC<PageSectionProps> = ({
  children,
  className,
  secondary = false,
}) => {
  return (
    <section
      className={`overflow-hidden py-20 transition-[background-color] duration-500 lg:py-40 ${
        secondary && "bg-white-primary dark:bg-black-secondary"
      }`}
    >
      <ContentContainer className={className}>{children}</ContentContainer>
    </section>
  );
};

export default PageSection;
