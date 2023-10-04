import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    cursor: default;
    line-height: ${theme.font.sizes.big};
    transition: ${theme.transition.standard};

    &:hover {
      transform: translateY(-3px);
      transition: ${theme.transition.standard};
    }

    > span {
      font-size: ${theme.font.sizes.medium};
      margin-right: 2rem;
    }
  `}
`;
