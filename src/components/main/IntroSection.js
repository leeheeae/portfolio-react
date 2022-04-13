import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import TalkButton from '../common/TalkButton';
import TitleBox from '../common/TitleBox';

const IntroSectionBlock = styled(Section)``;
const BtnList = styled.div`
  margin-top: 3rem;
  display: flex;
`;

const IntroSection = () => {
  return (
    <IntroSectionBlock>
      <TitleBox
        mainTitle={`A passionate developer \n who wants to run together`}
        subText="함께 달리고 싶은 열정적 프론트앤드 개발자 이희애입니다."
      />
      <BtnList>
        <TalkButton />
      </BtnList>
    </IntroSectionBlock>
  );
};

export default IntroSection;
