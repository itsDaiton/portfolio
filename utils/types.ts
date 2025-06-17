import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface AboutItemProps {
  id: number;
  title: string;
  text: string;
  icon: FontAwesomeIconProps['icon'];
}

export interface EducationItemProps {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  icon: FontAwesomeIconProps['icon'];
}
