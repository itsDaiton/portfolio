import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AwardsItem } from '../../../utils/types';

const AwardCard = ({ icon, title, date, description }: AwardsItem) => (
  <div className="w-full flex flex-col sm:flex-row items-start bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
    <div className="flex-shrink-0 w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center bg-slate-100 dark:bg-gray-500 rounded-full mx-auto sm:mx-0">
      <FontAwesomeIcon icon={icon} className="text-3xl sm:text-2xl text-black dark:text-white" />
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-5 flex-1 text-center sm:text-left">
      <h4 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white">
        {title}
      </h4>
      <p className="mt-1 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
        {date}
      </p>
      {description && (
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
      <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://dx.doi.org/10.13140/RG.2.2.28393.81769"
          className="text-blue-500 dark:text-blue-400 hover:underline font-semibold"
        >
          http://dx.doi.org/10.13140/RG.2.2.28393.81769
        </a>
      </p>
    </div>
  </div>
);

export default AwardCard;
