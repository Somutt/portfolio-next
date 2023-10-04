import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    transition: ${theme.transition.standard};

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 12rem;
      font-size: ${theme.font.sizes.small};
    }

    li {
      transition: ${theme.transition.standard};

      &:hover {
        transform: translateY(-3px);
        transition: ${theme.transition.standard};
      }
    }

    .link:hover {
      color: unset;
    }

    .active {
      border-image: linear-gradient(90deg, #9089fb 0%, #9ef7ac 100%) 1;
      border-bottom: 4px solid;
    }
  `}
`;
