import { motion } from 'framer-motion';
import { NavLinks } from './NavLinks';

export const MobileMenu = ({ isOpen }: { isOpen: boolean }) => (
  <motion.div
    className={`${
      isOpen ? 'flex' : 'hidden'
    } px-6 py-4 button-shadow absolute top-28 right-4 mx-4 rounded-xl dark:bg-gray-700 bg-white`}
    animate={isOpen ? 'open' : 'closed'}
    variants={{
      open: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          delay: 0.2,
          duration: 0.8,
          ease: 'easeOut',
        },
      },
      closed: {
        opacity: 0,
        y: 50,
      },
    }}
  >
    <NavLinks isMobile />
  </motion.div>
);
