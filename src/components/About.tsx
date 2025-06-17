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
              className="font-normal text-justify break-words hypens-auto 
             text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
             leading-[26px] sm:leading-[30px] md:leading-[32px] lg:leading-[36px] 
             xl:w-[40%] lg:w-[55%] w-fit 
             mr-10 mt-4 mb-8"
            >
              I am a recent graduate with a master's degree in Knowledge and Web
              Technologies from the Prague University of Economics and Business.
              I hold a bachelor's degree in Applied Informatics and have
              developed a strong focus on Data Science and Machine Learning
              throughout my studies. My primary interest lies in Deep Learning
              and training neural networks. I also have hands-on experience with
              modern Web Development technologies, including React, Node.js, and
              GraphQL. I enjoy exploring new technologies and continuously
              expanding my knowledge. My master's thesis centered on the
              application of Transformer-based architectures in computer vision,
              particularly in image classification tasks. Outside of work, I
              enjoy traveling, coding, and playing video games. I'm also
              passionate about fitness, cycling, and skiing. I am currently
              seeking a full-time position in Data Science, Machine Learning or
              Generative AI.
            </p>
            <div className="flex flex-col lg:ml-10 ml-0 lg:min-w-[600px]">
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
