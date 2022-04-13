import React from 'react';
import styled from 'styled-components';

const ScrollIocnBlock = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1.4rem;
  height: 3rem;
  border-radius: 25px;
  background: var(--white-color);

  div {
    position: absolute;
    top: 4px;
    left: 50%;
    margin-left: -0.5rem;
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--black-color);
    animation: scroll-icon-ani 1s ease-in-out infinite;
  }

  @keyframes scroll-icon-ani {
    0% {
      top: 4px;
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: calc(3rem - 4px - 1rem);
      opacity: 0;
    }
  }
`;

const ScrollIocn = () => {
  return (
    <ScrollIocnBlock>
      <div></div>
    </ScrollIocnBlock>
  );
};

export default ScrollIocn;
