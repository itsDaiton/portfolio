interface SkillsItem {
  id: number;
  title: string;
}

export const navigation = [
  {
    id: 1,
    title: 'About',
  },
  {
    id: 2,
    title: 'Skills',
  },
  {
    id: 3,
    title: 'Education',
  },
  {
    id: 4,
    title: 'Projects',
  },
  {
    id: 5,
    title: 'Contact',
  },
];

export const languages: SkillsItem[] = [
  {
    id: 1,
    title: 'Python',
  },
  {
    id: 2,
    title: 'JavaScript',
  },
  {
    id: 3,
    title: 'TypeScript',
  },
  {
    id: 4,
    title: 'React',
  },
  {
    id: 5,
    title: 'Java',
  },
  {
    id: 6,
    title: 'C#',
  },
  {
    id: 7,
    title: 'PHP',
  },
  {
    id: 8,
    title: 'R',
  },
];

export const ml = [
  {
    id: 1,
    title: 'PyTorch',
  },
  {
    id: 2,
    title: 'TensorFlow',
  },
  {
    id: 3,
    title: 'Transformers',
  },
  {
    id: 4,
    title: 'Scikit-learn',
  },
  {
    id: 5,
    title: 'SpaCy',
  },
  {
    id: 6,
    title: 'NLTK',
  },
];

export const dl = [
  {
    id: 1,
    title: 'Neural Networks',
  },
  {
    id: 2,
    title: 'Transformers',
  },
  {
    id: 3,
    title: 'Computer Vision',
  },
  {
    id: 4,
    title: 'LLMs',
  },
  {
    id: 5,
    title: 'Generative AI',
  },
];
export const dataScience = [
  {
    id: 1,
    title: 'Statistical Analysis',
  },
  {
    id: 2,
    title: 'Model Evaluation',
  },
  {
    id: 3,
    title: 'Data Visualization',
  },
];

export const others = [
  {
    id: 1,
    title: 'Git',
  },
  {
    id: 2,
    title: 'Markdown',
  },
  {
    id: 3,
    title: 'SQL',
  },
];

export const projects = [
  {
    id: 1,
    image: '/projects/transformers.png',
    title: "Master's Thesis",
    description:
      "Master's thesis project that explores and compares various Transformer-based architectures for image classification tasks. The project includes fine-tuning of pre-trained models, prompt engineering, and evaluation of model performance on benchmark datasets.",
    github: 'https://github.com/itsDaiton/masters-thesis',
    topics: [
      'PyTorch',
      'Transformers',
      'Computer Vision',
      'Image Classification',
      'Deep Learning',
      'Prompt Engineering',
      'Fine-tuning',
    ],
  },
  {
    id: 2,
    image: '/projects/nev.png',
    title: 'Named Entity Visualizer',
    description:
      'NEV, short for Named Entity Visualizer, is a tool to visualize entities found in unstructured text. Entities are extracted from input text using Named Entity Recognition (NER) and then linked to concepts on Wikidata knowledge graph using Named Entity Linking (NEL). This process is executed using a pre-trained model with an NLP pipeline.',
    github: 'https://github.com/itsDaiton/named-entity-visualizer',
    demo: 'https://named-entity-visualizer.streamlit.app/',
    topics: [
      'Python',
      'Streamlit',
      'SpaCy',
      'NLP',
      'Wikidata',
      'Named Entity Recogniton',
      'Named Entity Linking',
    ],
  },
  {
    id: 3,
    image: '/projects/sentiment.png',
    title: 'IMDB Sentiment Analysis',
    description:
      'Sentiment analysis of IMDB movie reviews using natural language processing. The goal of the project is to classify movie reviews as positive or negative using the NLTK library. The dataset consists of 50,000 labeled movie reviews. The project uses a plethora of sentiment analysis techniques and models.',
    github: 'https://github.com/itsDaiton/imdb-reviews-sentiment-analysis',
    topics: [
      'Python',
      'NLP',
      'NLTK',
      'Sentiment Analysis',
      'Text Classification',
      'Vector Embeddings',
      'BERT',
    ],
  },
  {
    id: 4,
    image: '/projects/eurosat.png',
    title: 'EuroSAT Image Classification',
    description:
      'A deep learning project focused on image classification using satellite imagery from the EuroSAT dataset. The project utilizes TensorFlow and Keras to build and train Convolutional Neural Networks (CNNs) for classifying land use and land cover types across Europe.',
    github: 'https://github.com/itsDaiton/eurosat-image-classification',
    topics: [
      'Deep Learning',
      'TensorFlow',
      'Keras',
      'Image Classification',
      'Satellite Imagery',
      'Convolutional Neural Networks',
      'Data Augmentation',
    ],
  },
  {
    id: 5,
    image: '/projects/portal-dedice.png',
    title: 'Portál dědice',
    description:
      'A full-stack React and TypeScript application with GraphQL, Drizzle ORM and MySQL database. The application is an innovative platform that connects heirs and notaries in one place, while also offering an interactive guide through inheritance process.',
    github: 'https://github.com/itsDaiton/portal-dedice',
    topics: [
      'React',
      'Node.js',
      'GraphQL',
      'Apollo',
      'MySQL',
      'TypeScript',
      'Chakra UI',
      'Drizzle ORM',
      'Notary app',
    ],
  },
];
