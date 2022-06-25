import { motion } from 'framer-motion';
import React from 'react';
import { BouncingDownArrow } from './BouncingDownArrow';

export const DownArrow: React.FC = () => {
  return (
    <motion.div
      className="absolute left-2/4 w-0 h-0 select-none -pos-screen-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Inner />
    </motion.div>
  );
};

function Inner() {
  const [isAnimating, setIsAnimating] = React.useState(true);

  const anchor = (
    <a
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }}
      className="cursor-pointer"
    >
      <BouncingDownArrow />
    </a>
  );

  return isAnimating ? (
    <motion.div
      // bouncey bouncey
      animate={{
        y: [0, -10, 0, -10, 0],
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        times: [0, 0.6, 1],
        repeatDelay: 0.5,
        repeatType: 'reverse',
        repeat: Infinity,
      }}
      onHoverStart={() => setIsAnimating(false)}
    >
      {anchor}
    </motion.div>
  ) : (
    <div onMouseLeave={() => setIsAnimating(true)}>{anchor}</div>
  );
}
