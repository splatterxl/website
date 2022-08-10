import React from 'react';

export const Appear: React.FC<{
  duration: number;
  doWidth?: boolean;
  className?: string;
}> = ({ children, duration = 0.8, doWidth, ...props }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div
        {...props}
        className={`transition-all duration-500 ${
          !isMounted ? 'w-0 -translate-x-96' : 'translate-x-0 w-[64rem]'
        } ${props.className ?? ''}`}
      >
        {children}
      </div>
    </>
  );
};
