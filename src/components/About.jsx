import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className='flex py-6 font-poppins' id='about'>
      <div className='flex w-full'>
        <div className='flex flex-col py-10 justify-start'>
          <h1 className='font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]'>About Me</h1>
          <div className='flex lg:flex-row flex-col justify-between items-center'>
            <p className='font-normal md:text-[20px] sm:text-[18px] es:text-[16px] text-[14px] xl:w-[40%] lg:w-[60%] w-fit
            text-justify xl:leading-[36px] lg:leading-[32px] leading-[24px] mr-10 lg:mb-0 mb-10 mt-3'
            >
              I'm an ambitious university student currently studying Applied Informatics at Prague University of Economics and Business.
              I first got into coding in one of my high school classes and have been loving it ever since. 
              I like always learning new stuff and building unique applications.
              I'm focused on exploring frontend technologies and web development (mainly React), as I'd like to pursue this career path in my future.
              In my free time I like to code, play video games and watch TV shows. As a sports hobbies I love working out, cycling and skiing. 
              &nbsp;<b>I'm currently looking for a junior frontend developer job.</b>
            </p>
            <div className='flex flex-col lg:ml-10 ml-0'>
              {about.map((item) => (
                <div className='flex flex-row lg:p-6 md:p-4 es:p-3 p-1 rounded-[20px] bg-[#1c1d20] mb-6 md:pr-20 sm:pr-10 pr-5' key={item.id}>
                  <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={item.icon} className='sm:text-[36px] es:text-[24px] text-[20px] text-white'/>
                  </div>
                  <div className='flex-1 flex flex-col justify-center ml-5 text-white'>
                    <h4 className='font-semibold sm:text-[24px] es:text-[20px] text-[18px] sm:leading-[20px] leading-[12px] mb-1'>
                      {item.title}
                    </h4>
                    <p className='font-normal text-gray-400 sm:text-[20px] es:text-[16px] text-[14px] sm:leading-[24px] leading-[16px]'>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
