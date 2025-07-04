import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AwardsItem } from '../../../utils/types';

const AwardCard = ({ icon, title, date, description }: AwardsItem) => (
  <div className="w-full flex items-start bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-gray-500 rounded-full">
      <FontAwesomeIcon icon={icon} className="text-2xl text-black dark:text-white" />
    </div>
    <div className="ml-5 flex-1">
      <h4 className="font-semibold text-xl sm:text-2xl text-gray-900 dark:text-white">{title}</h4>
      <p className="mt-1 text-base sm:text-lg text-gray-600 dark:text-gray-400">{date}</p>
      {description && (
        <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  </div>
);

export default AwardCard;
