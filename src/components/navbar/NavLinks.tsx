import { motion } from 'framer-motion';
import { navigation } from '../../../utils/navigation';

export const NavLinks = ({ isMobile = false, onClick = () => {} }) => (
  <ul
    className={`list-none ${isMobile ? 'flex-col space-y-2' : 'flex-row space-x-16'} flex justify-end items-center flex-1`}
  >
    {navigation.map((link) => (
      <motion.li
        key={link.id}
        className="cursor-pointer text-[20px]"
        whileHover={!isMobile ? { fontWeight: 700, scale: 1.2 } : {}}
        onClick={onClick}
      >
        <a href={`#${link.title.toLowerCase()}`}>{link.title}</a>
      </motion.li>
    ))}
  </ul>
);
