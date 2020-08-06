import React from "react";
import styled from "styled-components";

const SidebarOptionStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;

  &:hover {
    color: white;
  }

  .sidebarOption__icon {
    margin-right: 1rem;
  }

  & > p {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
  }
`;

export const SidebarOption = ({ title, Icon }) => {
  return (
    <SidebarOptionStyled className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionStyled>
  );
};
