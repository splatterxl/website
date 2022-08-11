import React from 'react';

export const Appear: React.FC<{
  duration: number;
  className?: string;
}> = ({ children, duration = 0.8, ...props }) => {
  const [isMounted, setIsMounted] = React.useState(false),
    [containerRef, opacityRef] = [
      React.useRef<HTMLDivElement>(null),
      React.useRef<HTMLDivElement>(null),
    ];

  React.useEffect(() => {
    if (!isMounted) setIsMounted(true);

    setTimeout(() => {
      if (containerRef.current) {
        // remove transition duration that conflicts with the theme transition
        containerRef.current.className = 'md:w-[67vw] lg:w-[60vw]';
      }

      if (opacityRef.current) {
        opacityRef.current.className = '';
      }
    }, 600);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        {...props}
        className={`md:transition-all md:duration-300 ${
          !isMounted
            ? 'md:-translate-x-96 md:w-0'
            : 'translate-x-0 md:w-[67vw] lg:w-[60vw]'
        } ${props.className ?? ''}`}
        ref={containerRef}
      >
        <div
          className={`transition-all delay-[200ms] duration-300 ${
            !isMounted ? 'opacity-0' : 'opacity-100'
          }`}
          ref={opacityRef}
        >
          {children}
        </div>
      </div>
    </>
  );
};
