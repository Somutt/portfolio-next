import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    p {
      margin: 1rem 0;
      color: ${theme.colors.white};
    }

    ul {
      > li {
        margin: 1rem 0;
        cursor: alias;
        color: ${theme.colors.white};

        &:hover {
          transform: translateY(-3px);
          transition: ${theme.transition.standard};
        }
        > span {
          margin-right: 2rem;
        }
      }
    }

    span {
      color: ${theme.colors.lightgreen};
    }

    span > span {
      color: ${theme.colors.green};
    }

    .skills {
      columns: 2;
    }
  `}
`;
