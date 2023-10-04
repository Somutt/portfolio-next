type HobbyType = {
  emoji: string;
  label: string;
  description: string;
};

export type InfoType = {
  bio: string;
  proficiencies: string[];
  hobbies: HobbyType[];
};

export const info: InfoType = {
  bio: 'Olá, meu nome é Samuel! Sou desenvolvedor com experiência em React e Next utilizando JavaScript e TypeScript. Também sou Graduando em Sistemas e Mídias Digitais pela Universidade Federal do Ceará. Tenho paixão especial por jogos, animações, quadrinhos e café.',
  proficiencies: [
    'JavaScript',
    'TypeScript',
    'React',
    'NextJS',
    'Git',
    'Github',
    'HTML5',
    'CSS3',
    'SQL',
    'Postgres',
    'Strapi',
    'Unity3D',
    'Godot',
    'Agile',
  ],
  hobbies: [
    {
      emoji: '🎮',
      label: 'video game controller emoji',
      description: 'video games',
    },
    {
      emoji: '🎥',
      label: 'cinema professional video camera',
      description: 'filmes',
    },
    {
      emoji: '📖',
      label: 'open book emoji',
      description: 'leitura',
    },
    {
      emoji: '🈂️',
      label: 'SA Katakana emoji',
      description: 'linguagens',
    },
  ],
};
