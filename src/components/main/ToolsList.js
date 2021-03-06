import React from 'react';
import styled from 'styled-components';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
} from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';

const ToolsListBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToolsBlock = styled.div`
  margin-top: 4rem;
  padding: 1.5rem 1.8rem;
  border-radius: 1rem;
  background-color: #fff;
  width: 32.5%;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-04);
  }
  .sub-text {
    margin: 0.8rem 0 1rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
  }
  .tools-list {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 25%;
      margin-bottom: 20px;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 8px;
      }
      p {
        width: 60px;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        color: #444;
      }
    }
  }
`;

const ToolsListInfo = [
  {
    name: 'Frontend Tools π',
    comment:
      'λ§ν¬μ νκ·ΈλΆν° HTTP ν΅μ μ ν΅ν λ°μ΄ν°κΉμ§ λ€μν ν΄μ μ΄μ©νμ¬ μμμ΄ κ°λ₯ν©λλ€.',
    tools: [
      {
        name: 'HTML',
        icon: <SiHtml5 size="42px" />,
      },
      {
        name: 'CSS',
        icon: <SiCss3 size="42px" />,
      },
      {
        name: 'Vanila JS',
        icon: <SiJavascript size="42px" />,
      },
      {
        name: 'React JS',
        icon: <SiReact size="42px" />,
      },
      {
        name: 'Vue Js',
        icon: <RiVuejsFill size="42px" />,
      },
    ],
  },
  {
    name: 'Backend Tools π',
    comment:
      'λ§ν¬μ νκ·ΈλΆν° HTTP ν΅μ μ ν΅ν λ°μ΄ν°κΉμ§ λ€μν ν΄μ μ΄μ©νμ¬ μμμ΄ κ°λ₯ν©λλ€.',
    tools: [
      {
        name: 'NODE JS',
        icon: <FaNodeJs size="42px" />,
      },
      {
        name: 'MYSQL',
        icon: <SiMysql size="42px" />,
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb size="42px" />,
      },
      {
        name: 'exporess',
        icon: <SiExpress size="42px" />,
      },
      {
        name: 'Koa',
        icon: <FaNodeJs size="42px" />,
      },
    ],
  },
  {
    name: 'Design Tools π ',
    comment:
      'μ΄λλΉμ λμμΈ ν΄μ μ΄μ©νμ¬ μ¬μ§μ νΈμ§νκ³  UI/UXμ κ΄ν λͺ¨λ  λμμΈμ μμν©λλ€.',
    tools: [
      {
        name: 'Photoshop',
        icon: <SiAdobephotoshop size="42px" />,
      },
      {
        name: 'Illustrator',
        icon: <SiAdobeillustrator size="42px" />,
      },
      {
        name: 'Adobe XD',
        icon: <SiAdobexd size="42px" />,
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
          <li key={t.name}>
            <div class="icon">{t.icon}</div>
            <p>{t.name}</p>
          </li>
        ))}
      </ul>
    </ToolsBlock>
  );
};

const ToolsList = () => {
  return (
    <ToolsListBlock>
      {ToolsListInfo.map((tool, index) => (
        <Tools tool={tool} key={index} />
      ))}
    </ToolsListBlock>
  );
};

export default ToolsList;
