import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ContactItem } from './ContactItem';
import { contacts } from '../../../utils/contact';

const Contact = () => {
  return (
    <section id="contact" className="py-6 font-poppins">
      <div className="flex flex-col w-full py-10 items-center">
        <h1 className="font-semibold text-center lg:text-[56px] md:text-[48px] sm:text-[42px] text-[32px]">
          Contact
        </h1>

        <div className="flex lg:flex-row flex-col pt-20 items-center w-full">
          <div className="flex flex-col justify-end lg:w-1/2 w-full gap-6">
            {contacts.map((item) => (
              <ContactItem {...item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-center items-center lg:w-1/2 w-full mt-6 lg:mt-0">
            <motion.a
              className="flex items-center px-10 py-5 space-x-2 font-semibold bg-white rounded-full button-shadow 
                         text-black xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[16px] 
                         dark:bg-gray-700 dark:text-white"
              whileHover={{ scale: 1.1 }}
              href="/resume.pdf"
            >
              <span>Resume</span>
              <FontAwesomeIcon icon={faFile} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
