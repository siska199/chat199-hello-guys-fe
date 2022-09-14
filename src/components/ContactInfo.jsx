import React from "react";
import { useSelector } from "react-redux";
import Modal from "../Layouts/Modal";
import { ContainerContactInfo } from "./summaryContactInfo.css";

const ContactInfo = () => {
  const modalContactInfo = useSelector(
    (state) => state.contact.value.modalContactInfo
  );
  console.log(modalContactInfo);
  return (
    <Modal showModal={modalContactInfo} type="contactInfo">
      <ContainerContactInfo>ContactInfo</ContainerContactInfo>
    </Modal>
  );
};

export default ContactInfo;
