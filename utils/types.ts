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

export interface HeroIconLinkProps {
  href: string;
  icon: FontAwesomeIconProps['icon'];
  label: string;
}

export interface ContactProps {
  id: number;
  text: string;
  action: string;
  icon: FontAwesomeIconProps['icon'];
}

export interface NavigationItem {
  href: string;
  icon: FontAwesomeIconProps['icon'];
  label: string;
}

type FooterLink = {
  id: string | number;
  title: string;
};

export interface FooterLinkColumnProps {
  links: FooterLink[];
}

export interface NavbarProps {
  id: number;
  title: string;
}

export interface NavbarFunctionProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export interface ProjectsProps {
  id: number;
  image: string;
  title: string;
  description: string;
  github: string;
  demo?: string;
  topics: string[];
}

export interface SkillsItem {
  id: number;
  title: string;
}

export interface SkillsCategory {
  title: string;
  icon: FontAwesomeIconProps['icon'];
  data: SkillsItem[];
}
