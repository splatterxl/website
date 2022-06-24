import { motion } from 'framer-motion';
import React from 'react';
import styles from '../styles/Home.module.css';
import { BouncingDownArrow } from './BouncingDownArrow';

export const DownArrow: React.FC<{
  innerHeight: number;
}> = ({ innerHeight }) => {
  return (
    <motion.div
      className={styles.downArrow}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        top: innerHeight - 100,
        userSelect: 'none',
      }}
    >
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
      >
        <a
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
          className={styles.downArrowLink}
        >
          <BouncingDownArrow />
        </a>
      </motion.div>
    </motion.div>
  );
};
