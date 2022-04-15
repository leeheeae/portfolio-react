import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import ProjectListMenu from './ProjectListMenu';
import ProjectListItem from './ProjectListItem';

const ProejctsListBlock = styled(Responsive)`
  padding: 10rem 0;
`;

const TitleBox = styled.h2`
  font-size: 2rem;
  font-family: 'Averta-Regular';
  color: var(--point-color);
`;

const ProjectListMenuBlock = styled.ul`
  display: flex;
  margin: 3rem 0;

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
      <ProjectListItem />
    </ProejctsListBlock>
  );
};

export default ProejctsList;
