import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactProps } from '../../../utils/types';

export const ContactItem = ({ icon, text, action }: ContactProps) => (
  <div className="flex items-center gap-4 sm:gap-10 md:gap-16">
    <FontAwesomeIcon
      icon={icon}
      className="xl:text-[64px] lg:text-[48px] md:text-[38px] sm:text-[32px] es:text-[26px] text-[22px]"
    />
    <a
      href={action}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold xl:text-[28px] lg:text-[22px] md:text-[22px] sm:text-[20px] es:text-[18px] text-[14px]"
    >
      {text}
    </a>
  </div>
);
