import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Tooltip } from './Tooltip';

export const Pronouns: React.FC = () => {
  return (
    <div
      className="justify-end flex-col hidden xs:flex select-none"
      aria-hidden
    >
      <Tooltip
        className="w-96"
        message="Pronouns are an important way to identify people in conversations, especially when you don't already have visual or contextual clues. This is especially important online."
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="italic"
        >
          he/him
        </motion.span>
      </Tooltip>
    </div>
  );
};
