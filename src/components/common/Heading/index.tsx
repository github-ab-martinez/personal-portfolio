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
  h1: 'text-8xl font-bold leading-tight',
  h2: 'text-7xl font-bold leading-tight',
  h3: 'text-5xl font-bold leading-tight',
  h4: 'text-3xl font-semibold leading-normal',
  h5: 'text-xl font-semibold leading-normal',
  h6: 'text-base font-semibold leading-normal',
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
