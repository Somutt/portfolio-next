export type LinksType = {
  name: string;
  type?: string;
  to: string;
  active: string;
};

export const links: LinksType[] = [
  {
    name: 'home',
    to: '/',
    active: 'home',
  },
  {
    name: 'sobre mim',
    to: '/about',
    active: 'about',
  },
  {
    name: 'Sm',
    type: 'initials',
    to: '/',
    active: 'home',
  },
  {
    name: 'portfólio',
    to: '/portfolio',
    active: 'portfolio',
  },
];
