import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ConatainerNavbar,
  ContainerContactInfo,
  Icon,
} from "../styles/contactInfo.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { handleModalContactInfo } from "../redux/features/contactSlice";

const ContactInfo = () => {
  const dispatch = useDispatch();
  const modalContactInfo = useSelector(
    (state) => state.contact.value.modalContactInfo
  );

  const handleClose = () => {
    dispatch(handleModalContactInfo(false));
  };
  console.log("modal contact info", modalContactInfo);
  return (
    <ContainerContactInfo active={modalContactInfo}>
      <ConatainerNavbar>
        <Icon onClick={() => handleClose()}>
          <AiOutlineArrowLeft />
        </Icon>
        <h1>Info Contact</h1>
      </ConatainerNavbar>
    </ContainerContactInfo>
  );
};

export default ContactInfo;
