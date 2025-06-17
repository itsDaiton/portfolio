import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AboutItemProps } from '../../../utils/types';

export const AboutItem = ({ icon, title, text }: AboutItemProps) => (
  <div className="flex flex-row lg:p-6 md:p-4 es:p-3 p-1 rounded-[20px] bg-white shadow-xl dark:bg-gray-700 mb-6 md:pr-20 sm:pr-10 pr-5 dark:text-white">
    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center">
      <FontAwesomeIcon
        icon={icon}
        className="sm:text-[36px] es:text-[24px] text-[20px] text-[#1c1d20] dark:text-white"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center ml-5 text-[#1c1d20] dark:text-white">
      <h4 className="font-semibold sm:text-[22px] es:text-[20px] text-[18px] sm:leading-[20px] leading-[12px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-gray-600 dark:text-gray-400 sm:text-[20px] es:text-[16px] text-[14px] sm:leading-[24px] leading-[16px]">
        {text}
      </p>
    </div>
  </div>
);
