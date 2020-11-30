import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { fadeInOut } from '../../styles/keyframes';

interface IProps {
  className?: string;
}

const Component: React.FC<IProps> = ({ className }) => (
  <div className={className}>
    <figure>
      <Image src="/assets/images/hero.png" alt="Hero image" height={300} width={400} quality={100} />
    </figure>
  </div>
);

export const LoadingLayer = styled(Component)`
  display: flex;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  animation: fadeOut 4s linear forwards;
  @keyframes fadeOut {
    99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }

  > figure {
    animation: ${fadeInOut} 4s linear forwards;
    opacity: 0;
  }
`;
