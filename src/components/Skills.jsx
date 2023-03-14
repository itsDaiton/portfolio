import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { backend, frontend, database } from '../../utils/data'

const Skills = () => {
  return (
    <div className='flex py-6 font-poppins'>
      <div className='flex w-full'>
        <div className='flex py-10 justify-center w-full flex-col'>
          <div className='flex flex-row justify-center'>
            <h1 className='font-semibold text-[56px]'>Skills</h1>
          </div>
          <div className='flex flex-row justify-between py-10'>
            <div className='button-shadow rounded-xl w-fit px-5 py-5 my-5'>
              <div className='flex flex-row justify-center items-center space-x-5 text-[30px] px-28 pt-5'>
                <FontAwesomeIcon icon={faServer}/>
                <span className='font-semibold'>Backend</span>
              </div>
              <div className='flex-grow border-t border-gray-300 mt-5 mb-10'></div>
              <div className='flex flex-col space-y-5'>
                {backend.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold text-[20px] px-3'>{item.title}</p>
                  <p className='font-normal text-[18px] px-3'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='button-shadow rounded-xl w-fit px-5 py-5 my-5'>
              <div className='flex flex-row justify-center items-center space-x-5 text-[30px] px-28 pt-5'>
                <FontAwesomeIcon icon={faCode}/>
                <span className='font-semibold'>Frontend</span>
              </div>
              <div className='flex-grow border-t border-gray-300 mt-5 mb-10'></div>
              <div className='flex flex-col space-y-5 pb-10'>
                {frontend.map((item) => (
                <div className='flex justify-between items-center' key={item.id}>
                  <p className='font-semibold text-[20px] px-3'>{item.title}</p>
                  <p className='font-normal text-[18px] px-3'>{item.level}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='button-shadow rounded-xl w-fit px-5 py-5 my-5'>
              <div className='flex flex-row justify-center items-center space-x-5 text-[30px] px-28 pt-5'>
                <FontAwesomeIcon icon={faDatabase}/>
                <span className='font-semibold'>Databases</span>
              </div>
              <div className='flex-grow border-t border-gray-300 mt-5 mb-10'></div>
              <div className='flex flex-col space-y-5'>
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
