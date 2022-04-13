import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Lnb from './Lnb';
import TalkButton from './TalkButton';

const HeaderBlock = styled.header`
  width: 100%;
`;

const InnerHeaderBlock = styled(Responsive)`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <InnerHeaderBlock>
        <Link to="/" className="logo">
          LEEHEEAE 🖐🏻
        </Link>
        <Lnb />
        <TalkButton />
      </InnerHeaderBlock>
    </HeaderBlock>
  );
};

export default Header;
