import { StaticImageData } from 'next/image';
import mocktodo from '../img/mocktodo.png';
import mocklanding from '../img/mocklanding.png';

export type PortfolioType = {
  title: string;
  live: string;
  source: string;
  image: StaticImageData;
};

export const portfolio: PortfolioType[] = [
  {
    title: 'Landing page',
    live: 'https://splendorous-eclair-3e24d9.netlify.app/',
    source: 'https://github.com/Somutt/landing-pages-next',
    image: mocklanding,
  },
  {
    title: 'To-do list',
    live: 'https://todo-list-ten-mu-39.vercel.app/',
    source: 'https://github.com/Somutt/todo-list',
    image: mocktodo,
  },
];
