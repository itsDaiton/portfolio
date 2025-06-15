import React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
    <div className="flex py-6 font-poppins text-[#1c1d20] dark:bg-gray-900 dark:text-white">
      <div className="flex lg:flex-row flex-col lg:justify-between justify-start items-center w-full py-10">
        <div className="flex flex-col md:py-52 py-36 justify-start lg:w-fit w-full">
          <h1 className="font-semibold xl:text-[72px] lg:text-[56px] md:text-[48px] sm:text-[42px] es:text-[36px] text-[32px]">
            David Poslušný
          </h1>
          <p className="font-normal xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] es:text-[14px] text-[12px]">
            Master's Degree in Data Science | Deep Learning
          </p>
          <div className="flex es:flex-row flex-col es:items-center items-start es:space-x-5 space-x-0">
            <motion.a
              className="flex justify-start items-center sm:text-[20px] text-[16px] es:px-10 px-5 es:py-5 py-3 es:my-5 my-3 space-x-2 w-fit 
              font-semibold bg-white rounded-full button-shadow dark:bg-gray-700"
              whileHover={{
                scale: 1.1,
              }}
              href="#contact"
            >
              <span>Contact</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </motion.a>
            <motion.a
              className="flex justify-start items-center sm:text-[20px] text-[16px] es:px-10 px-5 es:py-5 py-3 es:my-5 my-3 space-x-2 w-fit 
              font-semibold bg-white rounded-full button-shadow cursor-pointer dark:bg-gray-700"
              whileHover={{
                scale: 1.1,
              }}
              href="/resume.pdf"
            >
              <span>Resume</span>
              <FontAwesomeIcon icon={faFile} />
            </motion.a>
          </div>
          <div className="flex flex-row items-center justify-start text-[36px] space-x-5 px-2 py-5 cursor-pointer">
            <motion.a
              href="https://www.linkedin.com/in/david-poslu%C5%A1n%C3%BD-4b3a19242/"
              target="_blank"
              whileHover={{
                scale: 1.1,
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href="https://github.com/itsDaiton"
              target="_blank"
              whileHover={{
                scale: 1.1,
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
          </div>
        </div>
        <div
          className="2xl:w-[450px] 2xl:h-[450px] xl:w-[375px] xl:h-[375px] lg:w-[300px] lg:h-[300px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]
        relative sm:mr-10 mr-0 sm:mt-10 mt-0"
        >
          <div
            className="2xl:w-[450px] 2xl:h-[450px] xl:w-[375px] xl:h-[375px] lg:w-[300px] lg:h-[300px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] 
          rounded-full bg-black dark:bg-gray-700 absolute sm:-top-28 -top-10 sm:-left-28 -left-10 z-10"
          />
          <div>
            <img
              src="/photo.jpg"
              alt="picture"
              className="2xl:w-[450px] 2xl:h-[450px] xl:w-[375px] xl:h-[375px] lg:w-[300px] lg:h-[300px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]
              object-cover absolute z-20 rounded-full object-[75%]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
