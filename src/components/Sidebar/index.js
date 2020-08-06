import React from "react";
import styled from "styled-components";
import { SidebarOption } from "./SidebarOption";

const SidebarStyled = styled.div`
  height: 100vh;
  min-width: 230px;
  flex: 0.2;
  color: white;
  background-color: #040404;
  padding-right: 10px;
  padding-left: 10px;

  .sidebar__logo {
    height: 70px;
    padding: 10px;
    margin-right: auto;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarStyled className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo spotify"
      />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </SidebarStyled>
  );
};
