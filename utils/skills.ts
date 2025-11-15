import {
  faCode,
  faCodeBranch,
  faDiagramProject,
  faGear,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { SkillsItem, SkillsCategory } from './types';

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
  {
    id: 9,
    title: 'Node.js',
  },
];

export const ml: SkillsItem[] = [
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

export const dl: SkillsItem[] = [
  {
    id: 1,
    title: 'LangChain',
  },
  {
    id: 2,
    title: 'LangGraph',
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
    title: 'GenAI',
  },
  {
    id: 6,
    title: 'AI Agents',
  },
  {
    id: 7,
    title: 'RAG',
  },
];
export const dataScience: SkillsItem[] = [
  {
    id: 1,
    title: 'PySpark',
  },
  {
    id: 2,
    title: 'Azure',
  },
  {
    id: 3,
    title: 'Statistical Analysis',
  },
  {
    id: 4,
    title: 'Model Evaluation',
  },
  {
    id: 5,
    title: 'Data Visualization',
  },
];

export const others: SkillsItem[] = [
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

export const categories: SkillsCategory[] = [
  { title: 'Languages', icon: faCode, data: languages },
  { title: 'Machine Learning', icon: faRobot, data: ml },
  { title: 'Deep Learning', icon: faDiagramProject, data: dl },
  { title: 'Data Science', icon: faCodeBranch, data: dataScience },
  { title: 'Others', icon: faGear, data: others },
];
