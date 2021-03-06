import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';
import ProjectList from './ProjectList';
import ViewBtn from '../common/ViewBtn';

const ProjectSectionBlock = styled(Section)``;

const ProjectSection = () => {
  return (
    <ProjectSectionBlock>
      <TitleBox
        mainTitle={`featured Projects π₯ͺ`}
        subText="UI/UX λμμ΄λλ‘ μΌνμ λμ νλ‘μ νΈλΆν° κ°λ°κ³΅λΆλ₯Ό ν΅ν Toyνλ‘μ νΈλ±μ νμΈν  μ μμ΅λλ€."
        maxWidth="500px"
      />
      <ProjectList />
      <ViewBtn alignCenter big />
    </ProjectSectionBlock>
  );
};

export default ProjectSection;
