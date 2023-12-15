import { FC, PropsWithChildren } from 'react';
import ContentContainer from '../ContentContainer';

interface PageSectionProps extends PropsWithChildren {
  className?: string;
  style?: 'primary' | 'secondary';
  secondary?: boolean;
}

const PageSection: FC<PageSectionProps> = ({
  children,
  className,
  secondary = false,
}) => {
  return (
    <section
      className={`py-24 overflow-hidden ${
        secondary && 'bg-white-primary dark:bg-black-secondary'
      }`}
    >
      <ContentContainer className={className}>{children}</ContentContainer>
    </section>
  );
};

export default PageSection;
