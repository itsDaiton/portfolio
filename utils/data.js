import { faClock, faCode, faProjectDiagram } from "@fortawesome/free-solid-svg-icons"

export const navigation = [
  {
    id: 1,
    title: 'About'
  },
  {
    id: 2,
    title: 'Skills'
  },
  {
    id: 3,
    title: 'Projects'
  },
  {
    id: 4,
    title: 'Contact'
  }
]

export const about = [
  {
    id: 1,
    title: '8+',
    text: 'Years of coding.',
    icon: faClock
  },
  {
    id: 2,
    title: '15+',
    text: 'Completed projects on GitHub.',
    icon: faProjectDiagram
  },
  {
    id: 3,
    title: '10+',
    text: 'Languages and Frameworks experienced.',
    icon: faCode
  },
]

export const backend = [
  {
    id: 1,
    title: 'Java',
    level: 'Advanced'
  },
  {
    id: 2,
    title: 'Spring Boot',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'C#',
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'PHP',
    level: 'Intermediate'
  },
  {
    id: 5,
    title: 'Python',
    level: 'Beginner'
  },
]

export const frontend = [
  {
    id: 1,
    title: 'HTML',
    level: 'Expert'
  },
  {
    id: 2,
    title: 'CSS',
    level: 'Advanced'
  },
  {
    id: 3,
    title: 'JavaScript',
    level: 'Advanced'
  },
  {
    id: 4,
    title: 'React',
    level: 'Intermediate'
  },
  {
    id: 5,
    title: 'React Native',
    level: 'Beginner'
  },
  {
    id: 6,
    title: 'Next.js',
    level: 'Beginner'
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    level: 'Advanced'
  },
  {
    id: 8,
    title: 'Redux',
    level: 'Beginner'
  },
]

export const database = [
  {
    id: 1,
    title: 'SQL',
    level: 'Advanced'
  },
  {
    id: 2,
    title: 'MySQL',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'PostgreSQL',
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'MariaDB',
    level: 'Advanced Beginner'
  },
  {
    id: 5,
    title: 'Firebase',
    level: 'Beginner'
  },
]

export const projects = [
  {
    id: 1,
    image: '/src/assets/projects/food-square.png',
    title: 'Food Square',
    description: 'Social network for food lovers.',
    github: 'https://github.com/itsDaiton/food-square',
    demo: 'https://food-square.site'
  },
  {
    id: 2,
    image: '/src/assets/projects/swift.png',
    title: 'Swift',
    description: 'Interactive map tool to plan your trips.',
    github: 'https://github.com/itsDaiton/swift',
    demo: 'swift-pst0.onrender.com/'
  },
  {
    id: 3,
    image: '/src/assets/projects/weather-app.png',
    title: 'Weather App',
    description: 'Simple JavaScript weather application that fetches weather data for a specific location from an API and displays it to user in a modern design.',
    github: 'https://github.com/itsDaiton/weather-app',
    demo: 'https://sparkly-lolly-96f74c.netlify.app/'  
  },
  {
    id: 4,
    image: '/src/assets/projects/running-frog.png',
    title: 'Running Frog',
    description: 'A flash-like JavaScript game.',
    github: 'https://github.com/itsDaiton/running-frog',
    demo: 'https://cool-genie-41cf5f.netlify.app/'  
  },
  {
    id: 5,
    image: '/src/assets/projects/maze-runner.png',
    title: 'Maze Runner',
    description: 'Simple JavaScript Maze game.',
    github: 'https://github.com/itsDaiton/maze-runner',
    demo: 'https://regal-fairy-45218d.netlify.app/'  
  }
]
