import React from "react";
import styled from "styled-components";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  background-color: #282828;
  padding: 20px;

  .footer__left {
    flex: 0.3;
    color: white;
    display: flex;
    align-items: center;
    max-width: 300px;
  }

  .footer__center {
    flex: 0.4;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 400px;
  }

  .footer__right {
    flex: 0.3;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 400px;
  }

  .footer__right * .MuiSlider-root {
    color: green;
  }

  .footer__albumLogo {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
  }

  .footer__green {
    color: #1ed15e;
  }

  .footer__songInfo {
    & > h4 {
      margin-bottom: 5px;
    }
    & > p {
      font-size: 12px;
    }
  }

  .footer__icon:hover,
  .footer__green:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const Footer = () => {
  return (
    <FooterStyled className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg"
          alt="Album cover"
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </FooterStyled>
  );
};
