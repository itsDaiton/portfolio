import React from 'react'
import { navigation } from '../../utils/data'
import { motion } from 'framer-motion'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='flex font-poppins text-white footer-curved pt-28 pb-8 dark:bg-gray-700 dark:text-white dark:before:bg-gray-900'>
      <div className='flex w-full lg:flex-row flex-col items-center justify-between lg:space-y-0 space-y-6'>
        <div className='flex flex-col lg:w-1/3 w-fit justify-center items-center text-center lg:space-y-0 space-y-2 px-2'>
          <h1 className='font-semibold sm:text-[24px] es:text-[18px] text-[16px]'>David Poslušný</h1>
          <p className='sm:text-[16px] es:text-[14px] text-[12px]'>© 2024 | Designed and built by David Poslušný</p>
        </div>
        <div className='flex flex-col lg:w-1/3 w-fit justify-center items-center'>
          <h1 className='font-semibold md:text-[32px] sm:text-[26px] es:text-[24px] text-[20px] pb-3'>Sitemap</h1>
          <div className='flex flex-row sm:text-[18px] es:tex-[16px] text-[14px]'>
            <ul className='space-y-2 underline pr-8'>
              {navigation.slice(0, 3).map((link) => (
                <li key={link.id}>
                  <a href={`#${link.title.toLowerCase()}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className='space-y-2 underline pl-8'>
              {navigation.slice(3, 5).map((link) => (
                <li key={link.id}>
                  <a href={`#${link.title.toLowerCase()}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col lg:w-1/3 w-fit justify-center items-center'>
          <div className='flex flex-row md:text-[36px] sm:text-[30px] es:text-[26px] text-[22px] space-x-5'>
            <motion.a
              href='https://www.linkedin.com/in/david-poslu%C5%A1n%C3%BD-4b3a19242/'
              target='_blank'
              whileHover={{
                scale: 1.1
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href='https://github.com/itsDaiton'
              target='_blank'
              whileHover={{
                scale: 1.1
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              href='mailto:david.poslusny@gmail.com'
              whileHover={{
                scale: 1.1
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
