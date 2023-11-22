import { geologica } from '@/app/fonts';
import { FC, ReactNode } from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode | ReactNode[];
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const baseHeadingStyle = `${geologica.className}`;

const headingStyles: Record<string, string> = {
  h1: 'md:text-8xl text-6xl font-bold leading-tight',
  h2: 'md:text-7xl text-5xl font-bold leading-tight',
  h3: 'md:text-5xl text-3xl font-bold leading-tight',
  h4: 'md:text-3xl text-2xl font-normal leading-normal',
  h5: 'md:text-xl font-normal leading-normal',
  h6: 'md:text-base font-normal leading-normal',
};

const Heading: FC<HeadingProps> = ({
  as: As = 'h1',
  children,
  className,
  level = 'h1',
  ...props
}) => {
  return (
    <As
      className={`${headingStyles[level]} ${baseHeadingStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </As>
  );
};

export default Heading;
