import React from "react";
import styled from "styled-components";
import { SidebarOption } from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../context/dataLayer";

const SidebarStyled = styled.div`
  height: 100vh;
  min-width: 230px;
  flex: 0.2;
  color: white;
  background-color: #040404;
  padding-right: 10px;
  padding-left: 10px;

  & > hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }

  .sidebar__logo {
    height: 70px;
    padding: 10px;
    margin-right: auto;
  }

  .sidebar__title {
    margin-left: 10px;
    font-size: 12px;
    letter-spacing: 1.6px;
    font-weight: 600;
    padding: 5px;
  }
`;

export const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <SidebarStyled className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo spotify"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </SidebarStyled>
  );
};
