import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillsCategory } from '../../../utils/types';

export const SkillBox = ({ title, icon, data }: SkillsCategory) => (
  <div className="w-full sm:w-[48%] lg:w-[30%] rounded-xl bg-white shadow-md dark:bg-gray-700">
    <div className="flex justify-center items-center space-x-2 md:space-x-5 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] px-6 pt-5 pb-3 bg-black text-white rounded-t-xl dark:bg-gray-800">
      <FontAwesomeIcon icon={icon} />
      <span className="font-semibold">{title}</span>
    </div>
    <div className="flex flex-col mt-5 pb-10 bg-white dark:bg-gray-700 rounded-b-xl">
      {data.map((item) => (
        <div className="flex justify-center items-center mb-4 last:mb-0" key={item.id}>
          <p className="font-semibold md:text-[24px] sm:text-[18px] es:text-[16px] text-[14px] text-gray-700 dark:text-white">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  </div>
);
