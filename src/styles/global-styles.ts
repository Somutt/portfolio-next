import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.primary};
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.sizes.big};
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  ul, ol {
    list-style-type: none;
  }

`;
