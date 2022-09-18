import React from "react";
import { useDispatch } from "react-redux";
import {
  ContainerContactInfo,
  InfoContactUser,
  H1,
  P,
  Img,
  Time,
  Notif,
  ContainerTimeAndNotif,
} from "../styles/Contact.css";
import { handleModalContactInfo } from "../redux/features/contactSlice";
import { formatDateForSumContactInfo } from "../lib/helper";
const Contact = (props) => {
  const dispatch = useDispatch();
  const {
    active,
    handleOnClickContact,
    type,
    image,
    username,
    info,
    id,
    date,
    notif,
  } = props;
  const style = {
    fontSizeH1: "",
    fontSizeP: "",
    imageWidth: "",
  };

  switch (type) {
    case "sum-receiver-info":
      style.fontSizeH1 = "1.05rem";
      style.fontSizeP = "0.85rem";
      style.imageWidth = "3rem";
      break;
    case "contact":
      style.fontSizeH1 = "1.1rem";
      style.fontSizeP = "0.85rem";
      style.imageWidth = "3.5rem";
      break;
    default:
      break;
  }
  const handleClickImage = () => {
    type === "sum-receiver-info" && dispatch(handleModalContactInfo(true));
  };

  const dateWithNewFormat = date ? formatDateForSumContactInfo(date) : "";
  const lasMessage = info ? info : "clik to start a chatting";
  return (
    <ContainerContactInfo
      type={type}
      onClick={() => (type === "contact" ? handleOnClickContact(id) : "")}
      active={active}
    >
      <Img
        onClick={() => handleClickImage()}
        width={style.imageWidth}
        src={image}
        alt=""
        type={type}
      />
      <InfoContactUser type={type}>
        <H1 type={type} fontSize={style.fontSizeH1}>
          {username}
        </H1>
        <P fontSize={style.fontSizeP}>
          {type === "contact" ? lasMessage : info}
        </P>
      </InfoContactUser>
      {type === "contact" && (
        <ContainerTimeAndNotif>
          <Time>{dateWithNewFormat}</Time>
          <Notif>{notif}</Notif>
        </ContainerTimeAndNotif>
      )}
    </ContainerContactInfo>
  );
};

export default Contact;
