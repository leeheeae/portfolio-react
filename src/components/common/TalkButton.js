import React from 'react';
import styled from 'styled-components';

const TalkButtonBlock = styled.button`
  font-size: 0.92rem;
  font-weight: 500;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  border: 1px solid var(--gray-color-01);
  transition: 0.2s;

  &:hover {
    background-color: var(--white-color);
    border: 1px solid var(--white-color);
    color: var(--black-color);
  }
`;

const TalkButton = () => {
  return <TalkButtonBlock>Let's Talk</TalkButtonBlock>;
};

export default TalkButton;
