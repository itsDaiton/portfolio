import { EducationItem } from './EducationItem';
import { education } from '../../../utils/education';

const Education = () => {
  return (
    <section id="education" className="py-6 font-poppins">
      <header className="flex justify-center">
        <h1 className="font-semibold lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
          Education
        </h1>
      </header>

      <div className="flex flex-col items-center py-10">
        {education.map((edu) => (
          <EducationItem {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
