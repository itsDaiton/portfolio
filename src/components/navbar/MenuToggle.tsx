import { NavbarFunctionProps } from '../../../utils/types';
import { Path } from './Path';

export const MenuToggle = ({ toggleDarkMode, darkMode }: NavbarFunctionProps) => (
  <button onClick={toggleDarkMode} aria-label="Toggle menu">
    <svg width="25" height="25" viewBox="0 0 20 20">
      <Path
        stroke={darkMode ? 'white' : '#1c1d20'}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        stroke={darkMode ? 'white' : '#1c1d20'}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={darkMode ? 'white' : '#1c1d20'}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
