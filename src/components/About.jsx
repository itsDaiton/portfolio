import React from "react"
import { about } from "../../utils/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
  return (
    <div className="flex py-6 font-poppins" id="about">
      <div className="flex w-full">
        <div className="flex flex-col py-10 justify-start">
          <h1 className="font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
            About Me
          </h1>
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <p
              className="font-normal md:text-[20px] sm:text-[18px] es:text-[16px] text-[14px] xl:w-[40%] lg:w-[60%] w-fit
            text-justify xl:leading-[36px] lg:leading-[32px] leading-[24px] mr-10 lg:mb-0 mb-10 mt-3"
            >
              I am a graduate university student currently studying Knowledge
              and Web Technologies at Prague University of Economics and
              Business. I have a bachelor's degree in Applied Informatics and
              recently I have been focusing on Data Science and Machine
              Learning. My main area of interest is Deep Learning and training
              neural networks. I also have experience with Web Development
              (React, Node.js, GraphQL). I like to explore and learn about new
              things. Right now, I am working on my master's thesis which is
              about exploring the usage of Transformers in the field of Computer
              Vision, specifically in the area of Image Classification. I also
              like to code, play video games and watch TV shows. As a sports
              hobbies I love working out, cycling and skiing. I am looking for a
              full-time job in either Data Science, Machine Learning or Web
              Development after my graduation in June 2025.
            </p>
            <div className="flex flex-col lg:ml-10 ml-0">
              {about.map((item) => (
                <div
                  className="flex flex-row lg:p-6 md:p-4 es:p-3 p-1 rounded-[20px] bg-white shadow-xl dark:bg-gray-700 mb-6 md:pr-20 sm:pr-10 pr-5 dark:text-white"
                  key={item.id}
                >
                  <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="sm:text-[36px] es:text-[24px] text-[20px] text-[#1c1d20] dark:text-white"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center ml-5 text-[#1c1d20] dark:text-white">
                    <h4 className="font-semibold sm:text-[22px] es:text-[20px] text-[18px] sm:leading-[20px] leading-[12px] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-normal text-gray-600 dark:text-gray-400 sm:text-[20px] es:text-[16px] text-[14px] sm:leading-[24px] leading-[16px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
