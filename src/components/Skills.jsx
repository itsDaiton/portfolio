import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { backend, frontend, database } from '../../utils/data'

const Skills = () => {
  return (
    <div className='flex py-6 font-poppins' id='skills'>
      <div className='flex w-full'>
        <div className='flex py-10 justify-center w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold text-[56px]'>Skills</h1>
          </div>
          <div className='flex flex-row justify-between py-10'>
            <div className='button-shadow rounded-xl w-fit my-5 bg-gray-200'>
              <div className='flex flex-row justify-center items-center space-x-5 text-[30px] px-28 pt-5 pb-5 bg-[#1c1d20] text-white rounded-t-xl'>
                <FontAwesomeIcon icon={faServer}/>
                <span className='font-semibold'>Backend</span>
              </div>
              <div className='flex flex-col space-y-5 mt-5 pb-10'>
                {backend.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold text-[20px] px-3'>{item.title}</p>
                  <p className='font-normal text-[18px] px-3'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='button-shadow rounded-xl w-fit my-5 bg-gray-200'>
              <div className='flex flex-row justify-center items-center space-x-5 text-[30px] px-28 pt-5 pb-5 bg-[#1c1d20] text-white rounded-t-xl'>
                <FontAwesomeIcon icon={faCode}/>
                <span className='font-semibold'>Frontend</span>
              </div>
              <div className='flex flex-col space-y-5 mt-5 pb-10'>
                {frontend.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold text-[20px] px-3'>{item.title}</p>
                  <p className='font-normal text-[18px] px-3'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='button-shadow rounded-xl w-fit my-5 bg-gray-200'>
              <div className='flex flex-row justify-center items-center space-x-5 text-[30px] px-28 pt-5 pb-5 bg-[#1c1d20] text-white rounded-t-xl'>
                <FontAwesomeIcon icon={faDatabase}/>
                <span className='font-semibold'>Databases</span>
              </div>
              <div className='flex flex-col space-y-5 mt-5 pb-10'>
                {database.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold text-[20px] px-3'>{item.title}</p>
                  <p className='font-normal text-[18px] px-3'>{item.level}</p>
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
