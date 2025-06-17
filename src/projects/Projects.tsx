import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../../utils/projects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProjectBox } from './ProjectBox';

const Projects = () => {
  return (
    <section id="projects" className="py-6 font-poppins">
      <div className="w-full flex flex-col items-center sm:py-10 py-5">
        <h1 className="font-semibold text-center lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px] pb-8">
          Projects
        </h1>
        <div className="w-full px-4">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            slidesPerView={1}
            navigation
            pagination
            keyboard
            autoplay={{ delay: 4000, disableOnInteraction: true }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectBox {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <motion.a
          className="mt-10 flex justify-center items-center px-5 py-5 space-x-3 rounded-full button-shadow
          lg:text-[22px] md:text-[20px] sm:text-[18px] text-[14px] font-semibold text-center dark:bg-gray-700"
          whileHover={{ scale: 1.1 }}
          href="https://github.com/itsDaiton?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="es:flex hidden">Check out all my projects on GitHub.</span>
          <span className="es:hidden flex">GitHub.</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="lg:text-[28px] md:text-[24px] sm:text-[20px] text-[16px]"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
