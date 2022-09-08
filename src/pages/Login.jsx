import React from "react";
import Page from "../Layouts/Page";
import { AuthContainer, Container, ImageContainer } from "./login.css";
import helloGuys from "../assets/hello-guys.png";
import Auth from "../components/Auth";

const Login = () => {
  return (
    <Page>
      <Container>
        {/* Image */}
        <ImageContainer>
          <img src={helloGuys} alt="" />
        </ImageContainer>
        {/* Auth */}
        <AuthContainer>
          <Auth />
        </AuthContainer>
      </Container>
    </Page>
  );
};

export default Login;
