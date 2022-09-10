import React from "react";
import { ContainerMessage, MessageText, Time } from "./message.css.";

const Message = (props) => {
  const { user, message } = props.data;
  return (
    <ContainerMessage type={user}>
      <MessageText type={user}>
        {message}
        <Time>18:00</Time>
      </MessageText>
    </ContainerMessage>
  );
};

export default Message;
