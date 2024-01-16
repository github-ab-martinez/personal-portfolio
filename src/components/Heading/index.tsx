import { ReactNode, forwardRef } from 'react';

import { baiJam } from '@/app/fonts';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode | ReactNode[];
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const baseHeadingStyle = `${baiJam.className}`;

const headingStyles: Record<string, string> = {
  h1: 'lg:text-8xl md:text-6xl text-4xl font-bold lg:leading-[1.15]',
  h2: 'lg:text-7xl md:text-5xl text-3xl font-bold lg:leading-[1.15]',
  h3: 'lg:text-5xl md:text-3xl text-2xl font-bold lg:leading-[1.15]',
  h4: 'lg:text-3xl md:text-2xl text-xl font-normal lg:leading-normal',
  h5: 'md:text-xl font-normal lg:leading-normal',
  h6: 'md:text-base font-normal lg:leading-normal',
};

type Ref = HTMLHeadingElement;

const Heading = forwardRef<Ref, HeadingProps>(
  ({ as: As = 'h1', children, className, level = 'h1', ...props }, ref) => {
    return (
      <As
        className={`${headingStyles[level]} ${baseHeadingStyle} ${className}`.trim()}
        ref={ref}
        {...props}
      >
        {children}
      </As>
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
