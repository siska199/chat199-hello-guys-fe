import React from "react";
import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import { ContainerMessage, MessageText, Time } from "../styles/message.css.";

const Message = (props) => {
  const {
    state: { user },
  } = useContext(ChatContext);
  const { idSender, text } = props.data;
  const typeUser = idSender === user ? "sender" : "receiver";
  return (
    <ContainerMessage type={typeUser}>
      <MessageText type={typeUser}>
        {text}
        <Time>18:00</Time>
      </MessageText>
    </ContainerMessage>
  );
};

export default Message;
