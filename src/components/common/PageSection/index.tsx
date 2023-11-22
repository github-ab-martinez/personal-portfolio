import { FC, PropsWithChildren } from 'react';

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
      className={`md:px-24 md:py-20 py-10 px-6 ${
        style === 'secondary' && 'bg-white-primary dark:bg-black-secondary'
      } ${className}`.trim()}
    >
      {children}
    </section>
  );
};

export default PageSection;
