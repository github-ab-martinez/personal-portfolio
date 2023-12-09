import { FC, PropsWithChildren } from 'react';
import ContentContainer from '../ContentContainer';

interface PageSectionProps extends PropsWithChildren {
  className?: string;
  style?: 'primary' | 'secondary';
}

const PageSection: FC<PageSectionProps> = ({
  children,
  className,
  style = 'primary',
}) => {
  return (
    <section
      className={`md:px-24 px-6 py-24 overflow-hidden ${
        style === 'secondary' && 'bg-white-primary dark:bg-black-secondary'
      }`}
    >
      <ContentContainer className={className}>{children}</ContentContainer>
    </section>
  );
};

export default PageSection;
