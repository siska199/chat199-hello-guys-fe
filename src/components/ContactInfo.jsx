import React from "react";
import { ContainerContactInfo, H1, P } from "./contactInfo.css";

const ContactInfo = (props) => {
  const { type } = props;

  const style = {
    fontSizeH1: "",
    fontSizeP: "",
    imageSize: "",
  };
  
  switch (type) {
    case "profile-sender-info":
      break;
    case "profile-receiver-info":
      break;
    case "contact-receiver-info":
      break;
    default:
      break;
  }

  return (
    <ContainerContactInfo>
      <img
        src={
          "https://i.pinimg.com/564x/c1/bb/37/c1bb376255586abc64326d0cc2a26c77.jpg"
        }
        alt=""
      />
      <div className="info-contact-user">
        <H1>Fullname</H1>
        <P>online</P>
      </div>
    </ContainerContactInfo>
  );
};

export default ContactInfo;
