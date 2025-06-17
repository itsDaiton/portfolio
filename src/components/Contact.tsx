import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { contacts } from '../../utils/data';

const Contact = () => {
  return (
    <div className="flex py-6 font-poppins" id="contact">
      <div className="flex w-full">
        <div className="flex py-10 justify-center w-full flex-col">
          <div className="flex flex-row justify-center">
            <h1 className="font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
              Contact
            </h1>
          </div>
          <div className="flex pt-20 lg:flex-row flex-col items-center">
            <div className="flex flex-col justify-end lg:w-1/2 w-fit space-y-6">
              {contacts.map((contact) => (
                <div
                  className="flex flex-row items-center sm:space-x-16 es:space-x-10 space-x-4"
                  key={contact.id}
                >
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="xl:text-[64px] lg:text-[48px] md:text-[38px] sm:text-[32px] es:text-[26px] text-[22px]"
                  />
                  <a
                    href={contact.action}
                    target="_blank"
                    className="font-bold xl:text-[28px] lg:text-[22px] md:text-[22px] sm:text-[20px] es:text-[18px] text-[14px]"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center w-1/2 rounded-xl text-white lg:mt-0 mt-6">
              <motion.a
                className="flex justify-start items-center px-10 py-5 my-5 space-x-2 w-fit font-semibold bg-white cursor-pointer
              rounded-full button-shadow text-black xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[16px] 
              dark:bg-gray-700 dark:text-white"
                whileHover={{
                  scale: 1.1,
                }}
                href="/resume.pdf"
              >
                <span>Resume</span>
                <FontAwesomeIcon icon={faFile} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
