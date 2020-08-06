import React from "react";
import styled from "styled-components";

const BodyStyled = styled.div`
  flex: 0.8;
  height: 100vh;
  color: white;
  padding: 30px;
  /* background-color: rgb(91, 87, 115); */
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
`;

export const Body = () => {
  return (
    <BodyStyled className="body">
      <h1>I am the body</h1>
    </BodyStyled>
  );
};
