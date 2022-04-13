import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';

const ContactSectionBlock = styled(Section)``;

const ContactSection = () => {
  return (
    <ContactSectionBlock>
      <TitleBox
        mainTitle={`I look forward to hearing from you 🖐🏻`}
        subText="함께 성장해고자 하는 곳의 연락을 기다립니다."
        center
      />
    </ContactSectionBlock>
  );
};

export default ContactSection;
