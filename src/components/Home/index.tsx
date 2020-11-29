import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface IProps {
  className?: string;
}

const Component: React.FC<IProps> = ({ className }) => (
  <div className={className}>
    <div>
      <Image src="/assets/images/hero.png" alt="Hero image" height={300} width={400} quality={100} />
    </div>
  </div>
);

export const Home = styled(Component)``;
