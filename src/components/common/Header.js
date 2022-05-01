import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from './Button';

const HeaderBlock = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
`;

const InnerHeaderBlock = styled.div`
  padding: 2rem 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: 2px;
  }

  svg {
    cursor: pointer;
  }
  svg + svg {
    margin-left: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <InnerHeaderBlock>
        <div className="leftHeader">
          <Link to="/" className="logo">
            LEEHEEAE 🖐🏻
          </Link>
        </div>
        <div className="rightHeader">
          <BsGithub size="28px" color="var(--color-03)" />
          <MdEmail size="28px" color="var(--color-03)" />
          <AiOutlineMenu size="28px" color="var(--color-03)" />
        </div>
        {/* <Lnb /> */}

        {/* <Button margin="0 0 0 20px">email로 연락하기</Button> */}
        {/* <TalkButton /> */}
      </InnerHeaderBlock>
    </HeaderBlock>
  );
};

export default Header;
