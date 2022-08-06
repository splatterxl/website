import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { DisappearerContext } from '../util/Disappear';

const FADE_OUT_DURATION = 0.2;

export const Appear: React.FC<{
  duration: number;
  as?: keyof typeof motion;
  className?: string;
  id: string;
}> = ({ as = 'div', children, duration = 0.8, id, ...props }) => {
  const Component = motion[as],
    [registerPageChangeHandler] = React.useContext(DisappearerContext),
    { pathname } = useRouter();

  const [isVisible, setIsVisible] = React.useState(true),
    [callOnComplete, setCallOnComplete] = React.useState<(() => void) | null>(
      null
    );

  React.useEffect(() => {
    if (id == null) return;

    registerPageChangeHandler(() => {
      setIsVisible(false);
      return new Promise((resolve) => {
        setCallOnComplete(resolve);
      });
    }, id);
  }, [id, pathname, registerPageChangeHandler]);

  if (id == null) return <>{children}</>;

  return (
    <Component
      initial={{ opacity: +!isVisible }}
      animate={{ opacity: +isVisible }}
      transition={{ duration: isVisible ? duration : FADE_OUT_DURATION }}
      {...props}
      onAnimationComplete={() => {
        callOnComplete?.();
        setCallOnComplete(null);
      }}
    >
      {children}
    </Component>
  );
};
