import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { iconLinks } from '../../../utils/hero';
import { HeroButton } from './HeroButton';

const Hero = () => {
  const imageSizeClasses =
    '2xl:w-[450px] 2xl:h-[450px] xl:w-[375px] xl:h-[375px] lg:w-[300px] lg:h-[300px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]';

  return (
    <section className="flex py-6 font-poppins text-[#1c1d20] dark:bg-gray-900 dark:text-white">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center w-full py-10">
        <div className="flex flex-col md:py-52 py-36 justify-start lg:w-fit w-full">
          <h1 className="font-semibold xl:text-[72px] lg:text-[56px] md:text-[48px] sm:text-[42px] es:text-[36px] text-[32px]">
            David Poslušný
          </h1>
          <p className="font-normal xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] es:text-[14px] text-[12px]">
            AI Engineer | Data Scientist | Software Developer
          </p>
          <div className="flex es:flex-row flex-col es:items-center items-start es:space-x-5 space-x-0">
            <HeroButton href="#contact" icon={faPaperPlane} label="Contact" />
            <HeroButton href="/resume.pdf" icon={faFile} label="Resume" />
          </div>
          <div className="flex flex-row items-center justify-start text-[36px] space-x-5 px-2 py-5">
            {iconLinks.map(({ href, icon, label }) => (
              <motion.a key={label} href={href} target="_blank" whileHover={{ scale: 1.1 }}>
                <FontAwesomeIcon icon={icon} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className={`${imageSizeClasses} relative sm:mr-10 sm:mt-10`}>
          <div
            className={`${imageSizeClasses} rounded-full bg-black dark:bg-gray-700 absolute sm:-top-28 -top-10 sm:-left-28 -left-10 z-10`}
          />
          <img
            src="/photo.jpg"
            alt="David Poslušný"
            className={`${imageSizeClasses} object-cover absolute z-20 rounded-full object-[75%]`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
