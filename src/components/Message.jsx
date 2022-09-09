import React from "react";
import { ContainerMessage, MessageText } from "./message.css.";

const Message = (props) => {
  const { user, message } = props.data;
  return (
    <ContainerMessage type={user}>
      <MessageText  type={user}>{message}</MessageText>
    </ContainerMessage>
  );
};

export default Message;
