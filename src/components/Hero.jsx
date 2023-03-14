import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='flex py-6 font-poppins'>
      <div className='flex flex-row justify-between items-center w-full py-10'>
        <div className='flex flex-col py-52 justify-start'>
          <h1 className='font-semibold text-[72px]'>David Poslušný</h1>
          <p className='font-normal text-[36px]'>Frontend Developer</p>
          <div className='flex flex-row items-center space-x-5'>
            <motion.button 
              className='flex justify-start items-center text-[20px] px-10 py-5 my-5 space-x-2 w-fit font-semibold bg-white 
              rounded-full button-shadow'
              whileHover={{
                scale: 1.1
              }}
            >
              <a href='contact'>Contact</a>
              <FontAwesomeIcon icon={faPaperPlane}/>
            </motion.button>
            <motion.button 
              className='flex justify-start items-center text-[20px] px-10 py-5 my-5 space-x-2 w-fit font-semibold bg-white 
              rounded-full button-shadow'
              whileHover={{
                scale: 1.1
              }}
            >
              <span>Download CV</span>
              <FontAwesomeIcon icon={faFile}/>
            </motion.button>
          </div>
          <div className='flex flex-row items-center justify-start text-[36px] space-x-5 px-2 py-5 cursor-pointer'>
            <motion.a 
              href='https://www.linkedin.com/in/david-poslu%C5%A1n%C3%BD-4b3a19242/' 
              target='_blank'
              whileHover={{
                scale: 1.1
              }}
            >
              <FontAwesomeIcon icon={faLinkedin}/>
            </motion.a>
            <motion.a 
              href='https://github.com/itsDaiton' 
              target='_blank'
              whileHover={{
                scale: 1.1
              }}
            >
              <FontAwesomeIcon icon={faGithub}/>
            </motion.a>
          </div>
        </div>
        <div className='relative w-[450px] h-[450px] mr-10 mt-10'>
          <div className='w-[450px] h-[450px] bg-black rounded-full absolute -top-28 -left-28 z-10'/>
          <div>
            <img
              src='/src/assets/icon.png'
              alt='picture'
              className='w-[450px] h-[450px] object-cover absolute z-20' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
