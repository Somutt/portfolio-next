import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    opacity: 0.7;
  `}
`;
