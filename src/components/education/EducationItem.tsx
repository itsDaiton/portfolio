import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EducationItemProps } from '../../../utils/types';

export const EducationItem = ({ icon, institution, degree, duration }: EducationItemProps) => (
  <div className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg m-2 w-full max-w-4xl">
    <div className="flex-shrink-0 h-16 w-16 sm:h-full sm:w-auto flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
      <FontAwesomeIcon icon={icon} className="text-3xl sm:text-4xl text-gray-800 dark:text-white" />
    </div>
    <div className="text-center sm:text-left">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">{institution}</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{degree}</p>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{duration}</p>
    </div>
  </div>
);
