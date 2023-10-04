import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 50%;
    margin-bottom: 3rem;

    .topBorder {
      background-color: ${theme.colors.lightgray};
      border-radius: 0.5rem 0.5rem 0 0;
      font-size: ${theme.font.sizes.small};
    }

    i {
      padding: 0.5rem;
    }

    i:nth-child(1) {
      color: ${theme.colors.red};
    }

    i:nth-child(2) {
      color: ${theme.colors.yellow};
    }

    i:nth-child(3) {
      color: ${theme.colors.green};
    }

    .terminal {
      font-size: ${theme.font.sizes.medium};
      border-radius: 0 0 0.5rem 0.5rem;
      background-color: ${theme.colors.gray};
      font-family: ${theme.font.family.terciary};
      padding: 2rem 3rem;
    }
  `}
`;
