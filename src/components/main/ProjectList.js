import React from 'react';
import styled from 'styled-components';

const ProjectListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`;

const ProjectItemBlock = styled.div`
  width: 48%;
  height: 420px;
  margin-bottom: 4%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  position: relative;

  .item-info {
    opacity: 0;
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    width: 100%;
    max-width: 300px;
    padding: 1.2rem 1.5rem;
    border-radius: 1.2rem;
    background-color: #fff;
    transform: translateY(20px);
    transition: 0.3s;

    .tag {
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--point-color);
    }
    .title {
      margin-top: 0.7rem;
      font-size: 1.18rem;
      font-weight: 600;
      color: var(--black-color);
    }
  }

  &:hover .item-info {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ProjectItem = () => {
  return (
    <ProjectItemBlock>
      <div className="item-info">
        <h3 className="tag">Toy Proejct</h3>
        <h2 className="title">나의 기억 저장소</h2>
      </div>
    </ProjectItemBlock>
  );
};

const ProjectList = () => {
  return (
    <ProjectListBlock>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </ProjectListBlock>
  );
};

export default ProjectList;
