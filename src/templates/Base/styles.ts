import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

    > div:nth-child(1) {
      flex: 1;
    }

    .dark {
      background-color: ${theme.colors.dark};
      color: ${theme.colors.white};
      transition: ${theme.transition.background};

      a {
        color: ${theme.colors.white};
        transition: color, 400ms;
      }

      a:visited {
        color: ${theme.colors.white};
      }
    }

    .light {
      background-color: ${theme.colors.white};
      color: ${theme.colors.dark};
      transition: ${theme.transition.background};

      a {
        color: ${theme.colors.dark};
        transition: color, 400ms;
      }

      a:visited {
        color: ${theme.colors.dark};
      }
    }
  `}
`;
