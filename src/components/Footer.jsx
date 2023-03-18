import React from 'react'
import { navigation } from '../../utils/data'
import { motion } from 'framer-motion'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='flex font-poppins text-white footer-curved pt-28 pb-8'>
      <div className='flex w-full flex-row justify-between'>
        <div className='flex flex-col w-1/3 justify-center items-center'>
          <h1 className='font-semibold text-[24px]'>David Poslušný</h1> 
          <p>© 2023 | Designed and built by David Poslušný</p>      
        </div>
        <div className='flex flex-col w-1/3 justify-center items-center'>
          <h1 className='font-semibold text-[32px] pb-3'>Sitemap</h1>
          <div className='flex flex-row text-[18px]'>
            <ul className='space-y-2 underline pr-8'>
              {navigation.slice(0, 2).map((link) => (
                <li key={link.id}>
                  <a href={`#${link.title.toLowerCase()}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className='space-y-2 underline pl-8'>
              {navigation.slice(2, 4).map((link) => (
                <li key={link.id}>
                  <a href={`#${link.title.toLowerCase()}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col w-1/3 justify-center items-center'>
          <div className='flex flex-row text-[36px] space-x-5'>
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
            <motion.a
              href='mailto:david.poslusny@gmail.com'
              whileHover={{
                scale: 1.1
              }}
            >
              <FontAwesomeIcon icon={faEnvelope}/>
            </motion.a>
          </div>           
        </div>
      </div>
    </div>
  )
}

export default Footer
