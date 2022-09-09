import React from "react";
import {
  ContainerContactInfo,
  InfoContactUser,
  H1,
  P,
  Img,
} from "./contactInfo.css";

const ContactInfo = (props) => {
  const { type, image, username, info, active, handleOnClickContact, id } =
    props;
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
    <ContainerContactInfo
      type={type}
      onClick={() => handleOnClickContact(id)}
      active={active}
    >
      <Img width={style.imageWidth} src={image} alt="" type={type} />
      <InfoContactUser type={type}>
        <H1 type={type} fontSize={style.fontSizeH1}>
          {username}
        </H1>
        <P fontSize={style.fontSizeP}>{info}</P>
      </InfoContactUser>
    </ContainerContactInfo>
  );
};

export default ContactInfo;
