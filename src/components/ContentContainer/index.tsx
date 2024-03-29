import { FC, PropsWithChildren } from 'react';

interface ContentContainerProps {
  className?: string;
}

const ContentContainer: FC<ContentContainerProps & PropsWithChildren> = ({
  children,
  className,
}) => {
  return (
    <div className={`px-8 2xl:container ${className}`.trim()}>{children}</div>
  );
};

export default ContentContainer;
