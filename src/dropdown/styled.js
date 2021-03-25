import React from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

export const DropdownButton = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px;
  opacity: ${({ visible = true }) => (visible ? 1 : 0)};
  background-color: #ffffffe6;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40px;
  align-items: center;
  z-index: 1;
`;
export const SizeSelector = styled.div`
  display: block;
	box-sizing: border-box;
  width: 100%;
  top: 0;
  position: absolute;
  background-color: rgb(218, 218, 218);
  cursor: pointer;
`;
export const Option = styled.div`
  border-bottom: 1px solid #fff;
  padding: 10px;
  cursor: pointer;
  :last-child {
    border-bottom: 0;
  }
  :hover {
    background-color: #b1b1b1;
  }
`;

export const MainButton = props => {
  const { label, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      <p>{label}</p>
      <FaAngleDown />
    </DropdownButton>
  );
};
