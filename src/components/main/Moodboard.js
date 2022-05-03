import React from 'react';
import styled from 'styled-components';

const MoodboardBlock = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  li {
    width: 23%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 1.5rem;

    img {
      display: block;
      width: 100%;
    }
  }
`;

const Moodboard = () => {
  return (
    <MoodboardBlock>
      <li style={{ height: '300px' }}></li>
      <li style={{ height: '450px' }}></li>
      <li style={{ height: '250px' }}></li>
      <li style={{ height: '320px' }}></li>
    </MoodboardBlock>
  );
};

export default Moodboard;
