import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const SectionBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = ({ children }) => {
  return (
    <SectionBlock>
      <Responsive>{children}</Responsive>
    </SectionBlock>
  );
};

export default Section;
