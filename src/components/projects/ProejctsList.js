import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import ProjectListMenu from './ProjectListMenu';

const ProejctsListBlock = styled(Responsive)`
  padding-top: 10rem;
`;

const TitleBox = styled.h2`
  font-size: 2rem;
  font-family: 'Averta-Regular';
  color: var(--point-color);
`;

const ProjectListMenuBlock = styled.ul`
  display: flex;
  margin-top: 4rem;

  li + li {
    margin-left: 1rem;
  }
`;

const ProejctMenu = [
  {
    name: 'ToyProejct',
    checked: true,
  },
  {
    name: 'Design',
    checked: false,
  },
  {
    name: 'Web',
    checked: false,
  },
];

const ProejctsList = () => {
  return (
    <ProejctsListBlock>
      <TitleBox>featured Projects 💌</TitleBox>
      <ProjectListMenuBlock>
        {ProejctMenu.map((menu, index) => (
          <ProjectListMenu menu={menu} key={index} />
        ))}
      </ProjectListMenuBlock>
    </ProejctsListBlock>
  );
};

export default ProejctsList;
