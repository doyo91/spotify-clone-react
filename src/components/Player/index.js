import React from "react";
import styled from "styled-components";
import { Sidebar } from "../Sidebar";
import { Body } from "../Body";
import { Footer } from "../Footer";

const PlayerStyled = styled.div`
  .player__body {
    display: flex;
  }
`;

export const Player = ({ spotify }) => {
  return (
    <PlayerStyled className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body />
      </div>
      {/* Footer */}
      <Footer />
    </PlayerStyled>
  );
};
