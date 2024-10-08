import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faClock, faCode, faEnvelope, faProjectDiagram, faUniversity, faGraduationCap } from "@fortawesome/free-solid-svg-icons"

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
    title: 'Education'
  },
  {
    id: 4,
    title: 'Projects'
  },
  {
    id: 5,
    title: 'Contact'
  },
]

export const about = [
  {
    id: 1,
    title: '9+',
    text: 'Years of coding.',
    icon: faClock
  },
  {
    id: 2,
    title: '25+',
    text: 'Completed projects on GitHub.',
    icon: faProjectDiagram
  },
  {
    id: 3,
    title: '10+',
    text: 'Languages and frameworks known.',
    icon: faCode
  },
  {
    id: 4,
    title: 'Degree in',
    text: 'Software Engineering | Computer Science',
    icon: faGraduationCap
  },
  {
    id: 5,
    title: 'Currently studying',
    text: 'Data Science | Machine Learning | Statistics',
    icon: faGraduationCap
  },
]

export const languages = [
  {
    id: 1,
    title: 'Python',
  },
  {
    id: 2,
    title: 'Java',
  },
  {
    id: 3,
    title: 'JavaScript',
  },
  {
    id: 4,
    title: 'C#',
  },
  {
    id: 5,
    title: 'PHP',
  },
  {
    id: 6,
    title: 'SQL',
  },
  {
    id: 7,
    title: 'R',
  },
]

export const frameworks = [
  {
    id: 1,
    title: 'Spring Boot',
  },
  {
    id: 2,
    title: 'React',
  },
  {
    id: 3,
    title: 'Streamlit',
  },
]

export const python_libs = [
  {
    id: 1,
    title: 'Pandas',
  },
  {
    id: 2,
    title: 'NumPy',
  },
  {
    id: 3,
    title: 'Scikit-learn',
  },
  {
    id: 4,
    title: 'Matplotlib',
  },
  {
    id: 5,
    title: 'PyTorch',
  },
  {
    id: 6,
    title: 'TensorFlow',
  },
  {
    id: 7,
    title: 'Keras',
  },
  {
    id: 8,
    title: 'SpaCy',
  },
  {
    id: 9,
    title: 'NLTK',
  },
]

export const projects = [
  {
    id: 1,
    image: '/projects/nev.png',
    title: 'Named Entity Visualizer',
    description: 'NEV short for Named Entity Visualizer is a tool to visualize entities found in unstructured text. Entities are extracted from input text using Named Entity Recognition (NER) and then linked to concepts on Wikidata knowledge graph using Named Entity Linking (NEL). This process is executed using a pre-trained model with NLP pipeline.',
    github: 'https://github.com/itsDaiton/named-entity-visualizer',
    demo: 'https://named-entity-visualizer.streamlit.app/',
    topics: [
      'Python', 'Streamlit', 'SpaCy', 'NLP', 'Wikidata', 'Named Entity Recogniton', 'Named Entity Linking'
    ]
  },
  {
    id: 2,
    image: '/projects/eurosat.png',
    title: 'EuroSAT Image Classification',
    description: 'An image classification task on EuroSAT dataset with neural networks using Keras and TensorFlow. The dataset consists of 27,000 labeled images of land use and land cover classes. The goal of the project is to classify satellite images into 10 different classes using convolutional neural networks.',
    github: 'https://github.com/itsDaiton/eurosat-image-classification',
    topics: [
      'Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision', 'CNNs', 'Image Classification'
    ]
  },
  {
    id: 3,
    image: '/projects/calendar.png',
    title: 'Calendar App',
    description: 'Simple calendar application that lets user create, edit and delete events. The application is built using React, Redux and TypeScript. It also uses Tailwind CSS for styling and dayJS for date manipulation.',
    github: 'https://github.com/itsDaiton/calendar-app',
    demo: 'https://daiton-calendar.onrender.com/',
    topics: [
      'React', 'Redux', 'TypeScript', 'Calendar', 'Tailwind CSS', 'dayJS', 'Event Management'
    ]
  },
  {
    id: 4,
    image: '/projects/sentiment.png',
    title: 'IMDB Sentiment Analysis',
    description: 'Sentiment analysis of IMDB movie reviews using natural language processing. The goal of the project is to classify movie reviews as positive or negative using NLTK library. The dataset consists of 50,000 labeled movie reviews. The project uses a plethora of sentiment analysis techniques and models.',
    github: 'https://github.com/itsDaiton/imdb-reviews-sentiment-analysis',
    topics: [
      'Python', 'NLP', 'NLTK', 'Sentiment Analysis', 'Text Classification', 'Vector Embeddings', , 'BERT'
    ]
  },
  {
    id: 5,
    image: '/projects/swift.png',
    title: 'Swift',
    description: 'Web application that lets user plan their trips using a fully interactive map tool. After filling out origin and destination of the trip, the app will then calculate a route with desired travel mode. Application also has a Firebase authentication with multiple OAuth providers.',
    github: 'https://github.com/itsDaiton/swift',
    demo: 'https://swift-pst0.onrender.com/',
    topics: [
      'JavaScript', 'React', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Google API'
    ]
  },
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

export const education = [
  {
    id: 1,
    institution: 'Smíchovská střední průmyslová škola a gymnázium',
    degree: 'Information Technologies',
    duration: '2015 - 2019',
    icon: faCode,
  },
  {
    id: 2,
    institution: 'Prague University of Economics and Business',
    degree: 'Applied Informatics',
    duration: '2019 - 2023',
    icon: faUniversity,
  },
  {
    id: 3,
    institution: 'Prague University of Economics and Business',
    degree: 'Knowledge and Web Technologies | Quantitative Analysis',
    duration: '2023 - Present',
    icon: faGraduationCap,
  },
]
