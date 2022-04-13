import React from 'react';
import styled from 'styled-components';

const ToolsListBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToolsBlock = styled.div`
  margin-top: 4rem;
  padding: 1.4rem 1.8rem;
  border-radius: 1.25rem;
  background-color: rgba(255, 255, 255, 0.3);
  width: 31%;

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--point-color);
  }
  .sub-text {
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
  }
  .tools-list {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 60px;
      height: 60px;
      margin: 0.4rem;
      background-color: #fff;
      border-radius: 8px;
    }
  }
`;

const ToolsListInfo = [
  {
    name: 'Frontend Tools 🚗',
    comment:
      '마크업 태그부터 HTTP 통신을 통한 데이터까지 다양한 툴을 이용하여 작업이 가능합니다.',
    tools: [
      {
        name: 'HTML',
        icon: '',
      },
      {
        name: 'CSS',
        icon: '',
      },
      {
        name: 'Vanila JS',
        icon: '',
      },
      {
        name: 'React JS',
        icon: '',
      },
      {
        name: 'Vue Js',
        icon: '',
      },
    ],
  },
  {
    name: 'Backend Tools 🚓',
    comment:
      '마크업 태그부터 HTTP 통신을 통한 데이터까지 다양한 툴을 이용하여 작업이 가능합니다.',
    tools: [
      {
        name: 'NODE JS',
        icon: '',
      },
      {
        name: 'MYSQL',
        icon: '',
      },
      {
        name: 'MongoDB',
        icon: '',
      },
      {
        name: 'exporess',
        icon: '',
      },
      {
        name: 'Koa',
        icon: '',
      },
    ],
  },
  {
    name: 'Design Tools 🎁 ',
    comment:
      '어도비의 디자인 툴을 이용하여 사진을 편집하고 UI/UX에 관한 모든 디자인을 작업합니다.',
    tools: [
      {
        name: 'Photoshop',
        icon: '',
      },
      {
        name: 'Illustrator',
        icon: '',
      },
      {
        name: 'Adobe XD',
        icon: '',
      },
    ],
  },
];

const Tools = ({ tool }) => {
  return (
    <ToolsBlock>
      <h3>{tool.name}</h3>
      <p className="sub-text">{tool.comment}</p>
      <ul className="tools-list">
        {tool.tools.map((t) => (
          <li>{t.icon}</li>
        ))}
      </ul>
    </ToolsBlock>
  );
};

const ToolsList = () => {
  return (
    <ToolsListBlock>
      {ToolsListInfo.map((tool) => (
        <Tools tool={tool} />
      ))}
    </ToolsListBlock>
  );
};

export default ToolsList;
