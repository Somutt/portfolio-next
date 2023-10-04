import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: ${theme.colors.dark};
    }

    a {
      color: ${theme.colors.green};
    }
  `}
`;
