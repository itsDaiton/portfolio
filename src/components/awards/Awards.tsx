import AwardCard from './AwardCard';
import { awardsGeneric, awards } from '../../../utils/awards';

const Awards = () => (
  <section id="awards" className="py-12 font-poppins">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-center font-semibold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px]">
        {awardsGeneric.heading}
      </h2>

      <div className="mt-8 flex flex-col space-y-6">
        {awards.map((item) => (
          <AwardCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
