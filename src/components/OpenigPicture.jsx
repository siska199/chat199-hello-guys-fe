import React from "react";
import openingBg from "../assets/opening-bg-chat.png";
import { ContainerOpenPicture } from "../styles/openingPicture";
const OpenigPicture = () => {
  return (
    <ContainerOpenPicture>
      <h1>
        <span>Let's Build</span> <span>Your Connection</span>
        <span> With</span> <span> hello-guys-199</span>
      </h1>
      <img src={openingBg} alt="" />
    </ContainerOpenPicture>
  );
};

export default OpenigPicture;
