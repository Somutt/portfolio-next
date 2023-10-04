export const theme = {
  colors: {
    purple: '#8D53FF',
    pink: '#CA6BE6',
    white: '#f8f8f8',
    dark: '#1f1f1f',
    red: '#FF6057',
    yellow: '#FFBD2E',
    lightgreen: '#00ffa4',
    green: '#27C93F',
    lightgray: '#8c8c8c',
    gray: '#27242f',
  },
  font: {
    family: {
      primary: "'Roboto', sans-serif",
      secondary: "'Helvetica', sans-serif",
      terciary: "'Courier Prime', monospace",
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.6rem',
      medium: '2.4rem',
      big: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  transition: {
    standard: 'all 250ms ease',
    background: 'all 400ms',
  },
  shadows: {
    box: '0 .5rem 1rem rgba(0,0,0,0.4)',
  },
} as const;
