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
        // mainTitle={`A passionate developer \n who wants to run together π`}
        mainTitle={`μλ‘μ΄ κ²μ λ°°μ°λ μν©μ \n λλ €μνμ§ μλ κ°λ°μ`}
        subText="νλ‘ νΈμ€λ κΈ°μ λΆν° λμμΈ, λ°±μλ κΈ°μ κΉμ§, μλ‘μ΄κ²μ λ°°μ°λκ²μ λλ €μνμ§ μμ΅λλ€."
        maxWidth="60%"
        margin="0 auto"
        center
      />
      <ToolsList />
    </SkillSectionBlock>
  );
};

export default SkillSection;
