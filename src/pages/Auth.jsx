import React from "react";
import Page from "../Layouts/Page";
import { AuthContainer, Container, ImageContainer } from "./auth.css";
import helloGuys from "../assets/hello-guys.png";
import FormAuth from "../components/FormAuth";

const Auth = () => {
  return (
    <Page>
      <Container>
        <ImageContainer>
          <img src={helloGuys} alt="" />
        </ImageContainer>
        <AuthContainer>
          <FormAuth />
        </AuthContainer>
      </Container>
    </Page>
  );
};

export default Auth;
