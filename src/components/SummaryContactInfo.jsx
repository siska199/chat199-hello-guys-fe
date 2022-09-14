import React from "react";
import { useDispatch } from "react-redux";
import {
  ContainerContactInfo,
  InfoContactUser,
  H1,
  P,
  Img,
  Time,
} from "./summaryContactInfo.css";
import { handleModalContactInfo } from "../redux/features/contactSlice";

const SummaryContactInfo = (props) => {
  const dispatch = useDispatch();
  const { active, handleOnClickContact, type, image, username, info, id } =
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
  const handleClickImage = () => {
    type === "profile-receiver-info" && dispatch(handleModalContactInfo(true));
  };

  return (
    <ContainerContactInfo
      type={type}
      onClick={() => handleOnClickContact(id)}
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
        <P fontSize={style.fontSizeP}>{info}</P>
      </InfoContactUser>
      {type === "contact-receiver-info" && <Time>18:00</Time>}
    </ContainerContactInfo>
  );
};

export default SummaryContactInfo;
