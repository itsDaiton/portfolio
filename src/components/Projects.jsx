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
      <div className='flex flex-row justify-center space-x-20'>
        <div>
          <img
            src={image}
            alt={title}
            className='w-[500px] h-[300px] object-cover rounded-2xl'
          />
        </div>
        <div className='flex flex-col justify-start items-start w-1/3 space-y-2'>
          <h1 className='text-[28px] font-semibold'>{title}</h1>
          <p className='text-[18px] text-justify'>{description}</p>
          <div className='flex flex-row flex-wrap py-3'>
            {topics.map((topic) => (
              <div className='flex justify-start items-center text-[14px] px-3 py-3 my-1 w-fit font-bold rounded-xl bg-white button-shadow
              mr-3'
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-5 mb-16 mt-5'>
        <motion.button
          className='flex justify-start items-center text-[16px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full 
          bg-[#1c1d20] text-white'
          whileHover={{
            scale: 1.1
          }}     
        >
          <a href={github} target='_blank'>Code</a>
          <FontAwesomeIcon icon={faCode}/>         
        </motion.button>
        <motion.button
          className='flex justify-start items-center text-[16px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full 
          bg-[#1c1d20] text-white'
          whileHover={{
            scale: 1.1
          }}     
        >
          <a href={demo} target='_blank'>Live Demo</a>
          <FontAwesomeIcon icon={faTvAlt}/>         
        </motion.button>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='flex py-6 font-poppins' id='projects'>
      <div className='flex w-full'>
        <div className='flex py-10 w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold text-[56px] pb-8'>Projects</h1>
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
            <motion.div 
              className='flex justify-center items-center px-5 py-5 space-x-3 rounded-full button-shadow'
              whileHover={{
                scale: 1.1
              }}
            >
              <a href='https://github.com/itsDaiton' target='_blank' className='text-[22px] font-semibold'>
                Check out all my projects on GitHub.
              </a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[28px]'/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
