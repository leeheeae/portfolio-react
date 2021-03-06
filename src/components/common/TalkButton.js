import React from 'react';
import styled, { css } from 'styled-components';

const TalkButtonBlock = styled.button`
  font-size: 0.92rem;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  color: #fff;
  background-color: var(--white-color);
  border: 1px solid var(--white-color);
  color: var(--black-color);
  border-radius: 4px;
  transition: 0.2s;
  margin-right: ${(props) => props.marginRight || 0};

  &:hover {
    border: 1px solid var(--gray-color-01);
    color: var(--white-color);
    background: transparent;
  }

  ${(props) =>
    props.big &&
    css`
      font-size: 1rem;
      font-weight: 500;
      padding: 0.9rem 2.5rem;
      border-radius: 10px;
    `}
`;

const TalkButton = ({ ...rest }) => {
  return <TalkButtonBlock {...rest}>Let's Talk</TalkButtonBlock>;
};

export default TalkButton;
