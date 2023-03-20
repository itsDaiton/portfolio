import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faClock, faCode, faEnvelope, faProjectDiagram } from "@fortawesome/free-solid-svg-icons"

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
    text: 'Languages and frameworks experienced.',
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
    image: '/projects/food-square.png',
    title: 'Food Square',
    description: 'Full-stack social network app centered around food and recipes. You are able to create and share recipes, review other recipes, build a meal plan and much more. This project is a open source output of my bachelor\'s thesis.',
    github: 'https://github.com/itsDaiton/food-square',
    demo: 'https://food-square.site',
    topics: [
      'JavaScript', 'React', 'React Router', 'Material UI', 'Java', 'Spring Boot', 'PostgreSQL'
    ]
  },
  {
    id: 2,
    image: '/projects/swift.png',
    title: 'Swift',
    description: 'Web application that lets user plan their trips using a fully interactive map tool. After filling out origin and destination of the trip, the app will then calculate a route with desired travel mode. Application also has a Firebase authentication with multiple OAuth providers.',
    github: 'https://github.com/itsDaiton/swift',
    demo: 'https://swift-pst0.onrender.com/',
    topics: [
      'JavaScript', 'React', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Firebase'
    ]
  },
  {
    id: 3,
    image: '/projects/weather-app.png',
    title: 'Weather App',
    description: 'Single-page web application that allows users to get accurate real-time weather conditions for a specific location. Weather data are being fetched from OpenWeather API.',
    github: 'https://github.com/itsDaiton/weather-app',
    demo: 'https://sparkly-lolly-96f74c.netlify.app/',
    topics: [
      'HTML', 'CSS', 'JavaScript', 'API'
    ]  
  },
  {
    id: 4,
    image: '/projects/running-frog.png',
    title: 'Running Frog',
    description: 'A flash-like JavaScript game based on \'Flappy Bird\' and other jumping games. The goal of the game is to jump over incoming mushrooms and make your way through magical forest. The game gets harder as you score more points.',
    github: 'https://github.com/itsDaiton/running-frog',
    demo: 'https://cool-genie-41cf5f.netlify.app/',
    topics: [
      'HTML', 'CSS', 'JavaScript', 'p5.js'
    ]  
  },
  {
    id: 5,
    image: '/projects/maze-runner.png',
    title: 'Maze Runner',
    description: 'Vanilla JavaScript Maze game. The goal of the game is to find your way through randomly generated maze as fast as possible. Each round, maze is being generated using the \'Depth-first search\' algorithm.',
    github: 'https://github.com/itsDaiton/maze-runner',
    demo: 'https://regal-fairy-45218d.netlify.app/',
    topics: [
      'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'
    ]   
  }
]

export const contacts = [
  {
    id: 1,
    text: 'david.poslusny@gmail.com',
    action: 'mailto:david.poslusny@gmail.com',
    icon: faEnvelope
  },
  {
    id: 2,
    text: '/itsDaiton',
    action: 'https://github.com/itsDaiton',
    icon: faGithub
  },
  {
    id: 3,
    text: '/david-poslušný-4b3a19242',
    action: 'https://linkedin.com/in/david-poslušný-4b3a19242',
    icon: faLinkedin
  },
]
