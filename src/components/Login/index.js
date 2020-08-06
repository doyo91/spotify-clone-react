import React from "react";
import styled from "styled-components";
import { loginUrl } from "../../services/spotify";

const LoginStyled = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;

  .login__image {
    width: 100%;
  }

  .login__link {
    padding: 20px;
    background-color: #1db954;
    border-radius: 99px;
    font-weight: 800;
    color: white;
    text-decoration: none;
  }
`;

export const Login = () => {
  return (
    <LoginStyled className="login">
      <h1 className="login__title">Im the login page</h1>
      <img
        className="login__image"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo spotify"
      />
      <a className="login__link" href={loginUrl}>
        LOGIN WITH SPOTIFY
      </a>
    </LoginStyled>
  );
};
