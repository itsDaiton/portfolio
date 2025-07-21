import { motion, useCycle } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { MobileMenu } from './MobileMenu';
import { MenuToggle } from './MenuToggle';
import { NavLinks } from './NavLinks';
import { NavbarFunctionProps } from '../../../utils/types';

const Navbar = ({ toggleDarkMode, darkMode }: NavbarFunctionProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="flex justify-between items-center w-full py-5 px-4 font-poppins text-[#1c1d20] dark:text-white dark:bg-gray-900 relative z-50">
      <div className="md:text-[48px] text-[36px] font-semibold">David.</div>
      <div className="md:flex hidden flex-1 justify-end">
        <NavLinks />
      </div>
      <div className="md:hidden flex flex-1 justify-end items-center gap-3">
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="button-shadow items-center flex justify-center rounded-full py-4 px-4 dark:bg-gray-700"
        >
          <MenuToggle toggleDarkMode={toggleOpen} darkMode={darkMode} />
        </motion.nav>
        <MobileMenu isOpen={isOpen} />
      </div>
      <button
        onClick={toggleDarkMode}
        className="ml-12 rounded-full text-[32px] text-black dark:text-white"
        aria-label="Toggle dark mode"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </header>
  );
};

export default Navbar;
