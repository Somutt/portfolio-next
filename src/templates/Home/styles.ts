import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 125px);

    .shadowed {
      border-radius: 50%;
      background-image: linear-gradient(135deg, #9089fb, #9ef7ac);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
      margin-right: 4rem;
    }

    .avatar {
      border-radius: 50%;
      width: 40vh;
      height: 40vh;
    }

    .devName {
      background: -webkit-linear-gradient(180deg, #9ef7ac, #9089fb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 4rem;
    }

    .hand {
      animation-name: wave;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      transform-origin: 70% 70%;
      display: inline-block;
    }

    ul {
      padding: 1.6rem;
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      }
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `}
`;
