import { about, aboutGeneric } from '../../../utils/about';
import { AboutItem } from './AboutItem';

const About = () => {
  return (
    <section id="about" className="py-6 font-poppins">
      <div className="py-10">
        <h1 className="font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
          {aboutGeneric.heading}
        </h1>

        <div className="flex lg:flex-row flex-col justify-between items-center mt-4">
          <p
            className="font-normal text-justify break-words hyphens-auto text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
            leading-[26px] sm:leading-[30px] md:leading-[32px] lg:leading-[36px] xl:w-[40%] lg:w-[55%] w-fit mr-10 mb-8"
          >
            {aboutGeneric.text}
          </p>

          <div className="flex flex-col lg:ml-10 ml-0 lg:min-w-[600px]">
            {about.map((item) => (
              <AboutItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
