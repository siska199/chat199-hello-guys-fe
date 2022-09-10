import React from "react";
import { ContainerModal } from "./modal.css";

const Modal = ({ children, showModal, type }) => {
  let width
  switch (type) {
    case "profile":
        width = "100%"
      break;
    default:
        width = "100%"
      break;
  }
  return (
    <ContainerModal width={width} className={`${showModal ? "modal-active" : "modal-out"}`}>
      {children}
    </ContainerModal>
  );
};

export default Modal;
