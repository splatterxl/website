import { motion } from 'framer-motion';
import React from 'react';

export const Appear: React.FC<{
  duration: number;
  as?: keyof typeof motion;
  className?: string;
  id?: string;
}> = ({ as = 'div', children, duration = 0.8, id, ...props }) => {
  const Component = motion[as],
    [isMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {!isMounted ? <noscript>{children}</noscript> : null}
      {isMounted ? (
        <Component
          initial={{ opacity: 0, userSelect: 'none' }}
          animate={{ opacity: 1, userSelect: 'auto' }}
          transition={{ duration }}
          {...props}
        >
          {children}
        </Component>
      ) : null}
    </>
  );
};
