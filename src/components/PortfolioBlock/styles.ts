import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .portfolio {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 2rem 0 2rem 0;
    }
  `}
`;
