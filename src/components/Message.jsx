import React from "react";
import { useSelector } from "react-redux";
import { ContainerMessage, MessageText, Time } from "../styles/message.css.";

const Message = (props) => {
  const { id } = useSelector((state) => state.profile.value.user);
  const { idSender, text } = props.data;
  const typeUser = idSender === id ? "sender" : "receiver";
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
