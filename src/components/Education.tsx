import React from 'react';
import { education } from '../../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Education = () => {
  return (
    <div className="flex py-6 font-poppins" id="education">
      <div className="flex w-full">
        <div className="flex sm:py-10 py-5 justify-center w-full flex-col">
          <div className="flex flex-row justify-center">
            <h1 className="font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
              Education
            </h1>
          </div>
          <div className="flex flex-col items-center py-10">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg m-2 w-full max-w-4xl"
              >
                <div className="flex-shrink-0 h-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon
                    icon={edu.icon}
                    className="text-4xl text-gray-800 dark:text-white"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {edu.institution}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
