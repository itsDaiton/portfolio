import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactProps } from './types';

export const contacts: ContactProps[] = [
  {
    id: 1,
    text: 'david.poslusny@gmail.com',
    action: 'mailto:david.poslusny@gmail.com',
    icon: faEnvelope,
  },
  {
    id: 2,
    text: '/itsDaiton',
    action: 'https://github.com/itsDaiton',
    icon: faGithub,
  },
  {
    id: 3,
    text: '/david-poslušný-4b3a19242',
    action: 'https://linkedin.com/in/david-poslušný-4b3a19242',
    icon: faLinkedin,
  },
];
