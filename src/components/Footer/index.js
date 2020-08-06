import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 10px;
`;

export const Footer = () => {
  return (
    <FooterStyled className="footer">
      <h1>I am a footer</h1>
    </FooterStyled>
  );
};
