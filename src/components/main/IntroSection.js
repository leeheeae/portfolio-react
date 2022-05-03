import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import TalkButton from '../common/TalkButton';
import ViewBtn from '../common/ViewBtn';
import Button from '../common/Button';
// import TitleBox from '../common/TitleBox';

const IntroSectionBlock = styled(Section)``;
const BtnList = styled.div`
  display: flex;
  margin-top: 50px;
`;

const IntroSection = () => {
  return (
    <IntroSectionBlock>
      <SectionTitle
        className="Averta"
        subTitle={`Hello, I'am LEEHEEAE 👋🏻`}
        mainTitle={`함께 달리고 싶은 열정적\n 프론트엔드 개발자 이희애입니다.`}
      />
      <BtnList>
        <Button>연락하기</Button>
        <Button>프로젝트 확인</Button>
      </BtnList>
    </IntroSectionBlock>
  );
};

export default IntroSection;
