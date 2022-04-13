import React from 'react';
import styled from 'styled-components';

const SectionBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = ({ children }) => {
  return <SectionBlock>{children}</SectionBlock>;
};

export default Section;
