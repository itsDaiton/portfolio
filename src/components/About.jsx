import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className='flex py-6 font-poppins'>
      <div className='flex w-full'>
        <div className='flex flex-col py-10 justify-start'>
          <h1 className='font-semibold text-[56px]'>About Me</h1>
          <div className='flex flex-row justify-between items-center'>
            <p className='font-normal text-[20px] w-[40%] text-justify leading-[36px]'>
              I'm a university student currently studying Applied Informatics at Prague University of Economics and Business.
              I got into coding when I was 15, in one of my high school classes and have been loving it ever since.
              I'm focused on learning and exploring frontend technologies and development (mainly React). 
              In my free time I like to code, play video games and watch TV shows. As a sports hobbies I love working out, cycling and skiing. 
              I'm currently looking for a frontend developer junior job.
            </p>
            <div className='flex flex-col'>
              {about.map((item) => (
                <div className='flex flex-row p-6 rounded-[20px] bg-[#1c1d20] mb-6 pr-20' key={item.id}>
                  <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={item.icon} className='text-[36px] text-white'/>
                  </div>
                  <div className='flex-1 flex flex-col justify-center ml-5 text-white'>
                    <h4 className='font-semibold text-[24px] leading-[20px] mb-1'>
                      {item.title}
                    </h4>
                    <p className='font-normal text-gray-400 text-[20px] leading-[24px]'>
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
