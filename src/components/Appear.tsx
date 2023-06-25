import React from 'react';

export const Appear: React.FC<{
  duration: number;
  className?: string;
}> = ({ children, duration = 0.8, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={`md:transition-all md:duration-300 translate-x-0 md:w-[68vw] lg:w-[60vw] ${
          props.className ?? ''
        }`}
      >
        {children}
      </div>
    </>
  );
};
