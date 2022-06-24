import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

export const Pronouns: React.FC = () => {
  return (
    <div className={styles.pronouns}>
      <motion.span
        initial={{ display: 'none' }}
        animate={{ display: 'block' }}
        transition={{ duration: 0.8 }}
        className={styles.pronounsText}
      >
        he/him
      </motion.span>
    </div>
  );
};
