import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';
import AbouList from './AbouList';
import Moodboard from './Moodboard';

const AboutSectionBlock = styled(Section)``;

const AboutSection = () => {
  return (
    <AboutSectionBlock>
      <TitleBox
        mainTitle={`Developers who like design, \n designers who like development`}
        subText="UX/UX 디자이너로 웹 제작을 처음 시작했으며, 그 경험을 통해 화면에 보이는 부분들을 쉽게 배우고 이해합니다. 디자인과 개발 간의 흐름을 이해하고 작업이 진행되기 때문에 디자이너, 개발자와의 원활한 소통이 가능합니다. 다양한 경험을 통해 생기게 되는 문제를 해결하기 위해 꾸준히 고민하고 노력합니다 "
        maxWidth="60%"
      />
      <AbouList />
      <Moodboard />
    </AboutSectionBlock>
  );
};

export default AboutSection;
