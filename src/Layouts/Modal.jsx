import React from "react";
import { ContainerModal } from "./modal.css";

const Modal = ({ children, showModal, type }) => {
  let width;
  let position;
  switch (type) {
    case "profile":
      width = "100%";
      position = "absolute";
      break;
    case "contactInfo":
      position = "flex";
      break;
    default:
      position = "absolute";
      width = "100%";
      break;
  }
  return (
    <ContainerModal
      width={width}
      position={position}
      type={type}
      className={`${showModal ? "modal-active" : "modal-out"}`}
    >
      {children}
    </ContainerModal>
  );
};

export default Modal;
