import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, faAddressBook, faAddressCard, faEnvelope, faFile, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { contacts } from '../../utils/data'

const Contact = () => {
  return (
    <div className='flex py-6 font-poppins' id='contact'>
      <div className='flex w-full'>
        <div className='flex py-10 justify-center w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold text-[56px]'>Contact</h1>
          </div>
          <div className='flex pt-20'>
            <div className='flex flex-col justify-end w-1/2 space-y-6'>
              {contacts.map((contact) => (
                <div className='flex flex-row items-center space-x-16'>
                  <FontAwesomeIcon icon={contact.icon} className='text-[64px]'/>
                  <a href={contact.action} target='_blank' className='text-[28px] font-bold'>
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center w-1/2 rounded-xl text-white'>
            <motion.button 
              className='flex justify-start items-center text-[28px] px-10 py-5 my-5 space-x-2 w-fit font-semibold bg-white 
              rounded-full button-shadow text-black'
              whileHover={{
                scale: 1.1
              }}
            >
              <span>Download CV</span>
              <FontAwesomeIcon icon={faFile}/>
            </motion.button>           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
