import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EducationItemProps } from '../../../utils/types';

export const EducationItem = ({ icon, institution, degree, duration }: EducationItemProps) => (
  <div className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg m-2 w-full max-w-4xl">
    <div className="flex-shrink-0 h-full flex items-center justify-center mr-4">
      <FontAwesomeIcon icon={icon} className="text-4xl text-gray-800 dark:text-white" />
    </div>
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{institution}</h2>
      <p className="text-gray-600 dark:text-gray-400">{degree}</p>
      <p className="text-gray-600 dark:text-gray-400">{duration}</p>
    </div>
  </div>
);
