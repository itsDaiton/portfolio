import React from 'react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTvAlt } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../../utils/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProjectBox = ({ image, title, description, github, demo}) => {
  return (
    <div className='flex flex-row justify-center items-center space-x-20 mb-20'>
      <div>
        <img
          src={image}
          alt={title}
          className='w-[500px] h-[300px] object-cover rounded-2xl'
        />
      </div>
      <div className='flex flex-col justify-start items-start w-1/4 space-y-2'>
        <h1 className='text-[28px] font-semibold'>{title}</h1>
        <p className='text-[18px]'>{description}</p>
        <div className='flex flex-row items-center space-x-5'>
          <motion.button
            className='flex justify-start items-center text-[16px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full 
            bg-[#6228c1] text-white'
            whileHover={{
              scale: 1.1
            }}     
          >
            <a href={github} target='_blank'>Code</a>
            <FontAwesomeIcon icon={faCode}/>         
          </motion.button>
          <motion.button
            className='flex justify-start items-center text-[16px] px-5 py-3 my-5 space-x-2 w-fit font-semibold rounded-full 
            bg-[#6228c1] text-white'
            whileHover={{
              scale: 1.1
            }}     
          >
            <a href={demo} target='_blank'>Live Demo</a>
            <FontAwesomeIcon icon={faTvAlt}/>         
          </motion.button>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='flex py-6 font-poppins'>
      <div className='flex w-full'>
        <div className='flex py-10 justify-center w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold text-[56px]'>Projects</h1>
          </div>
          <div className='flex flex-row py-10'>
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              swiper
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectBox {...project}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
