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
        subTitle={`Hello, I'am LEEHEEAE ππ»`}
        mainTitle={`ν¨κ» λ¬λ¦¬κ³  μΆμ μ΄μ μ \n νλ‘ νΈμλ κ°λ°μ μ΄ν¬μ μλλ€.`}
      />
      <BtnList>
        <Button>μ°λ½νκΈ°</Button>
        <Button>νλ‘μ νΈ νμΈ</Button>
      </BtnList>
    </IntroSectionBlock>
  );
};

export default IntroSection;
