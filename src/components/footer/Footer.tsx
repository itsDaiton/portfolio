import { navigation } from '../../../utils/navigation';
import { FooterLinkColumn } from './FooterLinkColumn';
import { FooterSocialIcon } from './FooterSocialIcon';
import { socialLinks } from '../../../utils/footer';

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex font-poppins text-white footer-curved pt-28 pb-8 dark:bg-gray-700 dark:text-white dark:before:bg-gray-900"
    >
      <div className="flex w-full lg:flex-row flex-col items-center justify-between gap-6">
        <div className="flex flex-col lg:w-1/3 items-center text-center space-y-2 px-2">
          <h1 className="font-semibold sm:text-[24px] es:text-[18px] text-[16px]">
            David Poslušný
          </h1>
          <p className="sm:text-[16px] es:text-[14px] text-[12px]">
            © 2025 | Designed and built by David Poslušný
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-1/3">
          <h2 className="font-semibold md:text-[32px] sm:text-[26px] es:text-[24px] text-[20px] pb-3">
            Sitemap
          </h2>
          <div className="flex flex-row sm:text-[18px] es:text-[16px] text-[14px] gap-8">
            <FooterLinkColumn links={navigation.slice(0, 3)} />
            <FooterLinkColumn links={navigation.slice(3, 5)} />
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-1/3">
          <div className="flex flex-row md:text-[36px] sm:text-[30px] es:text-[26px] text-[22px] space-x-5">
            {socialLinks.map((link) => (
              <FooterSocialIcon key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
