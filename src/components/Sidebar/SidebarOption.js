import React from "react";
import styled from "styled-components";

const SidebarOptionStyled = styled.div`
  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;

  &:hover {
    color: white;
  }
`;

export const SidebarOption = ({ title, Icon }) => {
  return (
    <SidebarOptionStyled className="sidebarOption">
      <p>{title}</p>
    </SidebarOptionStyled>
  );
};
