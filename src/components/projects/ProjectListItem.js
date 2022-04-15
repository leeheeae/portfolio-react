import React from 'react';
import styled from 'styled-components';

const ProjectListItemBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 49%;
    margin-bottom: 2%;
    height: 450px;
    background-color: #fff;
    border-radius: 20px;
  }
`;

const ProjectListItem = () => {
  return (
    <ProjectListItemBlock>
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </ProjectListItemBlock>
  );
};

export default ProjectListItem;
