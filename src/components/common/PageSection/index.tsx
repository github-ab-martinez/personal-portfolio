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
      className={`md:px-24 px-6 min-h-screen flex items-center ${
        style === 'secondary' && 'bg-white-primary dark:bg-black-secondary'
      } ${className}`.trim()}
    >
      {children}
    </section>
  );
};

export default PageSection;
