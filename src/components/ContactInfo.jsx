import React from "react";
import { useSelector } from "react-redux";
import Modal from "../Layouts/Modal";

const ContactInfo = () => {
  const modalContactInfo = useSelector(
    (state) => state.contact.value.modalContactInfo
  );
  return (
    <Modal showModal={modalContactInfo} type="contactInfo">
      {/* <ContainerContactInfo>ContactInfo</ContainerContactInfo> */}
    </Modal>
  );
};

export default ContactInfo;
