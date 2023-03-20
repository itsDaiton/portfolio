import React from 'react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode, faTvAlt } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../../utils/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectBox = ({ image, title, description, github, demo, topics}) => {
  return (
    <div>
      <div className='flex lg:flex-row flex-col justify-center items-center lg:space-x-20 space-x-0'>
        <div className='flex justify-center items-center'>
          <img
            src={image}
            alt={title}
            className='xl:w-[500px] xl:h-[300px] lg:w-[400px] lg:h-[250px] w-[90%] h-auto object-cover rounded-2xl'
          />
        </div>
        <div className='flex flex-col justify-center items-start xl:w-[30%] lg:w-[40%] sm:w-[60%] es:w-[80%] w-[70%] space-y-2 lg:pt-0 pt-12'>
          <h1 className='xl:text-[28px] lg:text-[28px] sm:text-[24px] text-[22px] font-semibold'>{title}</h1>
          <p className='xl:text-[18px] lg:text-[18px] sm:text-[16px] text-[14px] text-justify'>{description}</p>
          <div className='flex flex-row flex-wrap py-3'>
            {topics.map((topic) => (
              <div className='flex justify-start items-center es:text-[14px] text-[12px] px-3 py-3 my-1 w-fit font-bold rounded-xl bg-white button-shadow
              mr-3'
              key={topic}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center es:space-x-5 space-x-2 lg:mb-16 mb-10 mt-5'>
        <motion.a
          className='flex justify-start items-center es:text-[16px] ns:text-[14px] text-[12px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full 
          bg-[#1c1d20] text-white'
          whileHover={{
            scale: 1.1
          }}
          href={github}
          target='_blank'   
        >
          <span>Code</span>
          <FontAwesomeIcon icon={faCode}/>         
        </motion.a>
        <motion.a
          className='flex justify-start items-center es:text-[16px] ns:text-[14px] text-[12px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full 
          bg-[#1c1d20] text-white'
          whileHover={{
            scale: 1.1
          }}
          href={demo}
          target='_blank'   
        >
          <span>Live Demo</span>
          <FontAwesomeIcon icon={faTvAlt}/>         
        </motion.a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='flex py-6 font-poppins' id='projects'>
      <div className='flex w-full'>
        <div className='flex sm:py-10 py-5 w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px] pb-8'>Projects</h1>
          </div>
          <div className='flex flex-row py-10'>
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Autoplay]}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectBox {...project}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex justify-center'>
            <motion.a 
              className='flex justify-center items-center px-5 py-5 space-x-3 rounded-full button-shadow
              lg:text-[22px] md:text-[20px] sm:text-[18px] text-[14px] font-semibold text-center'
              whileHover={{
                scale: 1.1
              }}
              href='https://github.com/itsDaiton?tab=repositories'
              target='_blank'
            >
              <span className='es:flex hidden'>Check out all my projects on GitHub.</span>
              <span className='es:hidden flex'>GitHub.</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='lg:text-[28px] md:text-[24px] sm:text-[20px] text-[16px]'/>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
