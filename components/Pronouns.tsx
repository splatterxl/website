import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

export const Pronouns: React.FC = () => {
  return (
    <div className={styles.pronouns}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.pronounsText}
      >
        he/him
      </motion.span>
    </div>
  );
};
