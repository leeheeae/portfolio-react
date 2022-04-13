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
        mainTitle={`featured Projects 🥪`}
        subText="UI/UX 디자이너로 일했을 때의 프로젝트부터 개발공부를 통한 Toy프로젝트등을 확인할 수 있습니다."
        maxWidth="500px"
      />
      <ProjectList />
      <ViewBtn alignCenter big />
    </ProjectSectionBlock>
  );
};

export default ProjectSection;
