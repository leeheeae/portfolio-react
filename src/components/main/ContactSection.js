import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';

const ContactSectionBlock = styled(Section)``;

const ContactMethodList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  text-align: center;
`;

const ContactMethodItem = styled.div`
  display: inline-block;
  font-size: 2rem;
  color: #fff;
  padding: 0 0.6rem 1.1rem;
  margin: 0 2rem;
  border-bottom: 1px solid #cecece;
`;

const ContactMethodIcon = styled.div`
  width: 54px;
  height: 54px;
  margin: 0 1rem;
  border-radius: 50%;
  background-color: #cecece;
  cursor: pointer;
`;

const ContactSection = () => {
  return (
    <ContactSectionBlock>
      <TitleBox
        mainTitle={`I look forward to hearing from you ππ»`}
        subText="ν¨κ» μ±μ₯ν΄κ³ μ νλ κ³³μ μ°λ½μ κΈ°λ€λ¦½λλ€."
        center
      />
      <ContactMethodList>
        <ContactMethodItem className="Averta">
          chromeee@daum.net
        </ContactMethodItem>
        <ContactMethodItem className="Averta">010.2332.5270</ContactMethodItem>
        <ContactMethodIcon />
      </ContactMethodList>
    </ContactSectionBlock>
  );
};

export default ContactSection;
