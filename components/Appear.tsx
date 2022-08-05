import { motion } from 'framer-motion';

export const Appear: React.FC<{
  duration: number;
  as?: keyof typeof motion;
  className?: string;
}> = ({ as = 'div', children, duration = 0.8, ...props }) => {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
      {...props}
    >
      {children}
    </Component>
  );
};
