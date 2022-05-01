import React from 'react';
import styled from 'styled-components';

const BallBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(120deg, var(--color-01), var(--color-02)); ;
`;

const Ball = () => {
  return <BallBlock />;
};

export default Ball;
