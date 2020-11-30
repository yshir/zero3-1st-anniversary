import { keyframes } from 'styled-components';

export const fadeInOut = keyframes`
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
