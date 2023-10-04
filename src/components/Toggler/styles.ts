import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};

    &:hover {
      transform: translateY(-3px);
      transition: ${theme.transition.standard};
    }
  `}
`;
