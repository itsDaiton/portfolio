import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationItem } from '../../../utils/types';
import { motion } from 'framer-motion';

export const FooterSocialIcon = ({ href, icon, label }: NavigationItem) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    aria-label={label}
  >
    <FontAwesomeIcon icon={icon} />
  </motion.a>
);
