import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCloudUpload } from "react-icons/tb";
import { MdKeyboardVoice } from "react-icons/md";
import { ContainerAddMessage } from "./addMessage.css";
const AddMessage = () => {
  return (
    <ContainerAddMessage>
      <BsEmojiSmile className="icon"/>
      <TbCloudUpload className="icon"/>
      <input placeholder="Kentik pesan"/>
      <MdKeyboardVoice className="icon"/>
    </ContainerAddMessage>
  );
};

export default AddMessage;
