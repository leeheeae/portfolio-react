import React from 'react';
import styled from 'styled-components';

const TalkButtonBlock = styled.button`
  font-size: 0.92rem;
  font-weight: 500;
  color: #fff;
  padding: 0.7rem 1.2rem;
  background-color: var(--white-color);
  border: 1px solid var(--white-color);
  color: var(--black-color);
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    border: 1px solid var(--gray-color-01);
    color: var(--white-color);
    background: transparent;
  }
`;

const TalkButton = () => {
  return <TalkButtonBlock>Let's Talk</TalkButtonBlock>;
};

export default TalkButton;
