import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCloudUpload } from "react-icons/tb";
import { MdKeyboardVoice } from "react-icons/md";
import { ContainerAddMessage } from "../styles/addMessage.css";
import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import { EVENTS_CHAT_SOCKET } from "../context/ChatContext";
import { useSelector } from "react-redux";

const AddMessage = () => {
  const idUser = useSelector((state) => state.profile.value.user.id);
  const {
    socket,
    state: { activeContact },
  } = useContext(ChatContext);

  const handleSubmitMessage = (e) => {
    if (e.code === "Enter") {
      const form = {
        idSender: idUser,
        idReceiver: activeContact.id,
        text: e.target.value,
      };
      socket.emit(EVENTS_CHAT_SOCKET.SEND_MESSAGE, form);
      e.target.value = "";
    }
  };
  return (
    <ContainerAddMessage>
      <BsEmojiSmile className="icon" />
      <TbCloudUpload className="icon" />
      <input
        onKeyDown={(e) => handleSubmitMessage(e)}
        placeholder="Kentik pesan"
      />
      <MdKeyboardVoice className="icon" />
    </ContainerAddMessage>
  );
};

export default AddMessage;
