import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';
import ToolsList from './ToolsList';

const SkillSectionBlock = styled(Section)``;

const SkillSection = () => {
  return (
    <SkillSectionBlock>
      <TitleBox
        mainTitle={`A passionate developer \n who wants to run together 😎`}
        subText="프론트앤드 기술부터 디자인, 백엔드 기술까지, 새로운것을 배우는것에 두려워하지 않습니다."
        maxWidth="60%"
        margin="0 auto"
        center
      />
      <ToolsList />
    </SkillSectionBlock>
  );
};

export default SkillSection;
