import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LnbBlock = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  li {
    font-size: 0.96rem;
    font-weight: 400;

    a {
      color: var(--gray-color-02);
      transition: 0.2s;
    }

    &:hover a {
      color: #fff;
    }
  }

  li + li:before {
    padding: 0 1.1rem;
    color: #fff;
    content: '\\B7';
  }
`;

const lnbMenu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Project',
    path: '/proejct',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Lnb = () => {
  return (
    <LnbBlock>
      {lnbMenu.map((menu) => (
        <li key={menu.name}>
          <Link to={menu.path} className="Averta">
            {menu.name}
          </Link>
        </li>
      ))}
    </LnbBlock>
  );
};

export default Lnb;
