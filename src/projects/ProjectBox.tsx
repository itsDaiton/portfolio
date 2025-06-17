import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectsProps } from '../../utils/types';
import { faCode, faTvAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export const ProjectBox = ({ image, title, description, github, demo, topics }: ProjectsProps) => {
  const sharedBtnClass =
    'flex justify-start items-center es:text-[16px] ns:text-[14px] text-[12px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full bg-[#1c1d20] text-white dark:bg-gray-700';

  return (
    <div className="space-y-6">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-20">
        <img
          src={image}
          alt={title}
          className="xl:w-[500px] xl:h-[300px] lg:w-[400px] lg:h-[250px] w-[90%] h-auto object-cover rounded-2xl"
        />
        <div className="flex flex-col xl:w-[30%] lg:w-[40%] sm:w-[60%] es:w-[80%] w-[70%] space-y-2 lg:pt-0 pt-12">
          <h1 className="xl:text-[28px] font-semibold">{title}</h1>
          <p className="xl:text-[18px] text-justify">{description}</p>
          <div className="flex flex-wrap py-3 gap-2">
            {topics.map((topic) => (
              <div
                key={topic}
                className="px-3 py-2 font-bold rounded-xl bg-white button-shadow text-[14px] dark:bg-gray-700"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <motion.a
          className={sharedBtnClass}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <span>Code</span>
          <FontAwesomeIcon icon={faCode} />
        </motion.a>
        {demo && (
          <motion.a
            className={sharedBtnClass}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <span>Live Demo</span>
            <FontAwesomeIcon icon={faTvAlt} />
          </motion.a>
        )}
      </div>
    </div>
  );
};
