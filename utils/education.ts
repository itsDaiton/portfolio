import { faCode, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { EducationItemProps } from './types';

export const education: EducationItemProps[] = [
  {
    id: 1,
    institution: 'Prague University of Economics and Business',
    degree: 'Knowledge and Web Technologies | Quantitative Analysis',
    duration: '2023 - 2025',
    icon: faGraduationCap,
  },
  {
    id: 2,
    institution: 'Prague University of Economics and Business',
    degree: 'Applied Informatics',
    duration: '2019 - 2023',
    icon: faUniversity,
  },
  {
    id: 3,
    institution: 'Smíchovská střední průmyslová škola a gymnázium',
    degree: 'Information Technologies',
    duration: '2015 - 2019',
    icon: faCode,
  },
];
