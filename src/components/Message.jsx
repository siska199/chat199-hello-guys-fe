import React from "react";
import { useSelector } from "react-redux";
import { getFormatDate } from "../lib/helper";
import { ContainerMessage, MessageText, Time } from "../styles/message.css.";

const Message = (props) => {
  const { id } = useSelector((state) => state.profile.value.user);
  const { idSender, text, createdAt } = props.data;
  const typeUser = idSender === id ? "sender" : "receiver";
  const time = getFormatDate(createdAt);
  return (
    <ContainerMessage type={typeUser}>
      <MessageText type={typeUser}>
        {text}
        <Time>{time}</Time>
      </MessageText>
    </ContainerMessage>
  );
};

export default Message;
