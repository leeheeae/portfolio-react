import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;

  + label {
    display: block;
    color: #373d40;
    border: 1px solid #373d40;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    cursor: pointer;
  }

  &:checked + label {
    background-color: #373d40;
    color: #fff;
  }
`;

const ProjectListMenu = ({ menu }) => {
  const [inputStatus, setInputStatus] = useState(menu.checked);
  const handleClickRadioButton = useCallback(() => {
    setInputStatus(true);
  }, []);

  return (
    <>
      <li onClick={handleClickRadioButton}>
        <Input
          type="radio"
          name="projectMenu"
          id={menu.name}
          checked={inputStatus}
          readOnly
        />
        <label htmlFor={menu.name}>{menu.name}</label>
      </li>
    </>
  );
};

export default ProjectListMenu;
