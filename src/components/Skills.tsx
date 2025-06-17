import {
  faCode,
  faCodeBranch,
  faRobot,
  faGear,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { dataScience, dl, languages, ml, others } from "../../utils/data"

const Skills = () => {
  return (
    <div className="flex py-6 font-poppins" id="skills">
      <div className="flex w-full">
        <div className="flex sm:py-10 py-5 justify-center w-full flex-col">
          <div className="flex flex-row justify-center">
            <h1 className="font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap justify-around py-10 gap-6">
            <div className="w-full sm:w-[48%] lg:w-[30%] rounded-xl bg-white shadow-md dark:bg-gray-700">
              <div className="flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] px-6 pt-5 pb-3 bg-black text-white rounded-t-xl dark:bg-gray-800">
                <FontAwesomeIcon icon={faCode} className="text-white" />
                <span className="font-semibold">Languages</span>
              </div>
              <div className="flex flex-col mt-5 pb-5 bg-white dark:bg-gray-700 rounded-b-xl">
                {languages.map((item) => (
                  <div
                    className="flex justify-center items-center mb-4 last:mb-0"
                    key={item.id}
                  >
                    <p className="font-semibold md:text-[24px] sm:text-[18px] es:text-[16px] text-[14px] text-gray-700 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[30%] rounded-xl bg-white shadow-md dark:bg-gray-700">
              <div className="flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] px-6 pt-5 pb-3 bg-black text-white rounded-t-xl dark:bg-gray-800">
                <FontAwesomeIcon icon={faRobot} className="text-white" />
                <span className="font-semibold">Machine Learning</span>
              </div>
              <div className="flex flex-col mt-5 pb-5 bg-white dark:bg-gray-700 rounded-b-xl">
                {ml.map((item) => (
                  <div
                    className="flex justify-center items-center mb-4 last:mb-0"
                    key={item.id}
                  >
                    <p className="font-semibold md:text-[24px] sm:text-[18px] es:text-[16px] text-[14px] text-gray-700 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[30%] rounded-xl bg-white shadow-md dark:bg-gray-700">
              <div className="flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] px-6 pt-5 pb-3 bg-black text-white rounded-t-xl dark:bg-gray-800">
                <FontAwesomeIcon
                  icon={faDiagramProject}
                  className="text-white"
                />
                <span className="font-semibold">Deep Learning</span>
              </div>
              <div className="flex flex-col mt-5 pb-10 bg-white dark:bg-gray-700 rounded-b-xl">
                {dl.map((item) => (
                  <div
                    className="flex justify-center items-center mb-4 last:mb-0"
                    key={item.id}
                  >
                    <p className="font-semibold md:text-[24px] sm:text-[18px] es:text-[16px] text-[14px] text-gray-700 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[30%] rounded-xl bg-white shadow-md dark:bg-gray-700">
              <div className="flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] px-6 pt-5 pb-3 bg-black text-white rounded-t-xl dark:bg-gray-800">
                <FontAwesomeIcon icon={faCodeBranch} className="text-white" />
                <span className="font-semibold">Data Science</span>
              </div>
              <div className="flex flex-col mt-5 pb-10 bg-white dark:bg-gray-700 rounded-b-xl">
                {dataScience.map((item) => (
                  <div
                    className="flex justify-center items-center mb-4 last:mb-0"
                    key={item.id}
                  >
                    <p className="font-semibold md:text-[24px] sm:text-[18px] es:text-[16px] text-[14px] text-gray-700 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[30%] rounded-xl bg-white shadow-md dark:bg-gray-700">
              <div className="flex flex-row justify-center items-center md:space-x-5 space-x-2 lg:text-[30px] md:text-[26px] sm:text-[22px] text-[20px] px-6 pt-5 pb-3 bg-black text-white rounded-t-xl dark:bg-gray-800">
                <FontAwesomeIcon icon={faGear} className="text-white" />
                <span className="font-semibold">Others</span>
              </div>
              <div className="flex flex-col mt-5 pb-10 bg-white dark:bg-gray-700 rounded-b-xl">
                {others.map((item) => (
                  <div
                    className="flex justify-center items-center mb-4 last:mb-0"
                    key={item.id}
                  >
                    <p className="font-semibold md:text-[24px] sm:text-[18px] es:text-[16px] text-[14px] text-gray-700 dark:text-white">
                      {item.title}
                    </p>
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
