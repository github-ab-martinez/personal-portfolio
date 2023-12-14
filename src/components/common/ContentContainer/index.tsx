import { FC, PropsWithChildren } from 'react';

interface ContentContainerProps {
  className?: string;
}

const ContentContainer: FC<ContentContainerProps & PropsWithChildren> = ({
  children,
  className,
}) => {
  return (
    <div className={`2xl:container px-8 ${className}`.trim()}>{children}</div>
  );
};

export default ContentContainer;
