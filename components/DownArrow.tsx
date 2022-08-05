import { motion } from 'framer-motion';
import React from 'react';
import { BouncingDownArrow } from './BouncingDownArrow';

export const DownArrow: React.FC = () => {
  return (
    <div className="hidden xs-h:flex items-center justify-center flex-row absolute top-screen left-0 w-full">
      <motion.div
        className="w-0 h-0 select-none "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Inner />
      </motion.div>
    </div>
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
