import React from 'react';
import styled from 'styled-components';

const AboutListBlock = styled.ul`
  display: flex;
  align-items: center;
  margin: 2rem 0 3rem;

  li {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 0.9rem 1.6rem;
    border-radius: 6px;
  }

  li + li {
    margin-left: 1rem;
  }
`;

const AboutListInfo = [
  '이희애',
  '1996.11.26',
  '부산',
  'Frontend Developer',
  'UI/UX Designer',
];

const AbouList = () => {
  return (
    <AboutListBlock>
      {AboutListInfo.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </AboutListBlock>
  );
};

export default AbouList;
