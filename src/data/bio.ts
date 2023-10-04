export type BioType = {
  emoji: string;
  emojiDescription: string;
  description: string;
  link?: string;
};

export const bio: BioType[] = [
  {
    emoji: '🏖️',
    emojiDescription: 'Emoji de praia com guarda-sol',
    description: 'Moro em Fortaleza - CE',
  },
  {
    emoji: '🎓',
    emojiDescription: 'Emoji de capelo',
    description: 'SMD - Universidade Federal do Ceará',
  },
  {
    emoji: '👾',
    emojiDescription: 'Emoji de inimigo pixelado roxo',
    description: 'Apaixonado por jogos',
  },
  {
    emoji: '📧',
    emojiDescription: 'Emoji de e-mail',
    description: 'Vamos entrar em contato!',
    link: 'mailto:samuelmalves1@gmail.com',
  },
];
