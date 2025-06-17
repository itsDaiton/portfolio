import { motion, MotionProps } from 'framer-motion';

export const Path = (props: React.ComponentProps<'path'> & MotionProps) => {
  return <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />;
};
