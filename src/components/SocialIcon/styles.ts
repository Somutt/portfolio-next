import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;
