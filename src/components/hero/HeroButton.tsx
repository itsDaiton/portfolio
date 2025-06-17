import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { HeroIconLinkProps } from '../../../utils/types';

export const HeroButton = ({ href, icon, label }: HeroIconLinkProps) => (
  <motion.a
    className="flex items-center sm:text-[20px] text-[16px] es:px-10 px-5 es:py-5 py-3 es:my-5 my-3 space-x-2 w-fit 
               font-semibold bg-white rounded-full button-shadow dark:bg-gray-700"
    whileHover={{ scale: 1.1 }}
    href={href}
  >
    <span>{label}</span>
    <FontAwesomeIcon icon={icon} />
  </motion.a>
);
