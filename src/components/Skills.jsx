import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { backend, frontend, database } from '../../utils/data'

const Skills = () => {
  return (
    <div className='flex py-6 font-poppins' id='skills'>
      <div className='flex w-full'>
        <div className='flex sm:py-10 py-5 justify-center w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]'>Skills</h1>
          </div>
          <div className='flex flex-wrap justify-around py-10'>
            <div className='button-shadow rounded-xl my-5 bg-gray-200'>
              <div className='flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px]
              es:px-28 ns:px-20 px-2 pt-5 pb-5 bg-[#1c1d20] text-white rounded-t-xl'>
                <FontAwesomeIcon icon={faServer}/>
                <span className='font-semibold'>Backend</span>
              </div>
              <div className='flex flex-col space-y-5 mt-5 pb-10 sm:h-[420px] h-[340px]'>
                {backend.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold md:text-[20px] sm:text-[18px] es:text-[16px] text-[14px] px-3 text-center'>{item.title}</p>
                  <p className='font-normal md:text-[18px] sm:text-[16px] es:text-[14px] text-[12px] px-3 text-center'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='button-shadow rounded-xl my-5 bg-gray-200'>
              <div className='flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px]
              es:px-28 ns:px-20 px-2 pt-5 pb-5 bg-[#1c1d20] text-white rounded-t-xl'>
                <FontAwesomeIcon icon={faCode}/>
                <span className='font-semibold'>Frontend</span>
              </div>
              <div className='flex flex-col space-y-5 mt-5 pb-10 sm:h-[420px] h-[340px]'>
                {frontend.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold md:text-[20px] sm:text-[18px] es:text-[16px] text-[14px] px-3 text-center'>{item.title}</p>
                  <p className='font-normal md:text-[18px] sm:text-[16px] es:text-[14px] text-[12px] px-3 text-center'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='button-shadow rounded-xl my-5 bg-gray-200'>
              <div className='flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px]
              es:px-28 ns:px-20 px-2 pt-5 pb-5 bg-[#1c1d20] text-white rounded-t-xl'>
                <FontAwesomeIcon icon={faDatabase}/>
                <span className='font-semibold'>Databases</span>
              </div>
              <div className='flex flex-col space-y-5 mt-5 pb-10 sm:h-[420px] h-[340px]'>
                {database.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold md:text-[20px] sm:text-[18px] es:text-[16px] text-[14px] px-3 text-center'>{item.title}</p>
                  <p className='font-normal md:text-[18px] sm:text-[16px] es:text-[14px] text-[12px] px-3 text-center'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
