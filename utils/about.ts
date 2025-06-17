import { faClock, faCode, faGraduationCap, faRobot } from '@fortawesome/free-solid-svg-icons';
import { AboutItemProps } from './types';

export const aboutGeneric: { heading: string; text: string } = {
  heading: 'About Me',
  text: "I am a recent graduate with a master's degree in Knowledge and Web Technologies from the Prague University of Economics and Business. I hold a bachelor's degree in Applied Informatics and have developed a strong focus on Data Science and Machine Learning throughout my studies. My primary interest lies in Deep Learning and training neural networks. I also have hands-on experience with modern Web Development technologies, including React, Node.js, and GraphQL. I enjoy exploring new technologies and continuously expanding my knowledge. My master's thesis centered on the application of Transformer-based architectures in computer vision, particularly in image classification tasks. Outside of work, I enjoy traveling, coding, and playing video games. I'm also passionate about fitness, cycling, and skiing. I am currently seeking a full-time position in Data Science, Machine Learning or Generative AI.",
};

export const about: AboutItemProps[] = [
  {
    id: 1,
    title: '10+',
    text: 'Years of coding',
    icon: faClock,
  },

  {
    id: 2,
    title: '10+',
    text: 'Languages and frameworks known',
    icon: faCode,
  },
  {
    id: 3,
    title: 'Focused on',
    text: 'Machine Learning | Deep Learning | GenAI',
    icon: faRobot,
  },
  {
    id: 4,
    title: "Bachelor's degree",
    text: 'Applied Informatics',
    icon: faGraduationCap,
  },
  {
    id: 5,
    title: "Master's degree",
    text: 'Knowledge and Web Technologies',
    icon: faGraduationCap,
  },
];
