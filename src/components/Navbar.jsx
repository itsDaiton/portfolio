import React from 'react'
import { navigation } from '../../utils/data'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full py-5 text-[#020020] font-poppins'>
      <div className='text-[48px] font-semibold'>David.</div>
      <ul className='list-none flex justify-end items-center flex-1 space-x-16'>
        {navigation.map((link) => (
          <motion.li
            key={link.id}
            className='cursor-pointer text-[20px]'
            whileHover={{
              color: 'red',
              scale: 1.2
            }}
          >
            <a href={`${link.title.toLowerCase()}`}>
              {link.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
