import React from 'react'
import { navigation } from '../../utils/data'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full py-5 text-[#020020] font-poppins'>
      <div className='text-[38px] font-semibold ml-16'>David.</div>
      <ul className='list-none flex justify-end items-center flex-1'>
        {navigation.map((link) => (
          <li
            key={link.id}
            className='cursor-pointer text-[20px] mr-16'
          >
            <a href={`${link.title}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
