import { SkillBox } from './skills/SkillBox';
import { categories } from '../../utils/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-6 font-poppins">
      <div className="w-full flex flex-col sm:py-10 py-5 items-center">
        <h1 className="font-semibold text-center lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
          Skills
        </h1>

        <div className="flex flex-wrap justify-center py-10 gap-x-16 gap-y-12">
          {categories.map((cat) => (
            <SkillBox key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
