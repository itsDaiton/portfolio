import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavigationItem } from './types';

export const socialLinks: NavigationItem[] = [
  {
    href: 'https://www.linkedin.com/in/david-poslu%C5%A1n%C3%BD-4b3a19242/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/itsDaiton',
    icon: faGithub,
    label: 'GitHub',
  },
  {
    href: 'mailto:david.poslusny@gmail.com',
    icon: faEnvelope,
    label: 'Email',
  },
];
