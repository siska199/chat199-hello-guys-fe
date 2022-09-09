import React from "react";
import {
  ContainerContactInfo,
  InfoContactUser,
  H1,
  P,
  Img,
} from "./contactInfo.css";

const ContactInfo = (props) => {
  const { type } = props;

  const style = {
    fontSizeH1: "",
    fontSizeP: "",
    imageWidth: "",
  };

  switch (type) {
    case "profile-receiver-info":
      style.fontSizeH1 = "1.05rem";
      style.fontSizeP = "0.85rem";
      style.imageWidth = "3rem";
      break;
    case "contact-receiver-info":
      style.fontSizeH1 = "1.1rem";
      style.fontSizeP = "0.85rem";
      style.imageWidth = "3.5rem";
      break;
    default:
      break;
  }

  return (
    <ContainerContactInfo type={type}>
      <Img
        width={style.imageWidth}
        src={
          "https://i.pinimg.com/564x/c1/bb/37/c1bb376255586abc64326d0cc2a26c77.jpg"
        }
        alt=""
        type={type}
      />
      <InfoContactUser type={type}>
        <H1 type={type} fontSize={style.fontSizeH1}>
          Fullname
        </H1>
        <P fontSize={style.fontSizeP}>online</P>
      </InfoContactUser>
    </ContainerContactInfo>
  );
};

export default ContactInfo;
