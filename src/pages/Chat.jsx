import React, { useContext } from "react";
import Contact from "../atoms/Contact";
import NavbarLeft from "../components/NavbarLeft";
import NavbarRight from "../components/NavbarRight";
import SearchContact from "../components/SearchContact";
import AddMessage from "../components/AddMessage";
import Page from "../Layouts/Page";
import {
  ContainerChat,
  ContainerContacts,
  ContainerLeft,
  ContainerRight,
  ContainerMessages,
} from "./chat.css";

import ContactInfo from "../components/ContactInfo";
import { TYPES_CHAT_REDUCER, EVENTS_CHAT_SOCKET } from "../context/ChatContext";
import Message from "../components/Message";
import Profile from "../components/Profile";
import ChatContext from "../context/ChatContext";
import { useEffect } from "react";
import { useRef } from "react";
import ListContact from "../components/ListContact";

const Chat = () => {
  const containerRef = useRef(null);

  const {
    state: { messages, activeContact },
  } = useContext(ChatContext);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    containerRef.current.scroll({
      top: containerRef.current.scrollHeight,
      left: 0,
    });
  };

  return (
    <Page>
      <ContainerChat>
        <ContainerLeft activeContact={activeContact}>
          <>
            <NavbarLeft />
            <SearchContact />
            <ListContact />
          </>
          <Profile />
        </ContainerLeft>

        <ContainerRight activeContact={activeContact}>
          <NavbarRight />
          <ContainerMessages ref={containerRef}>
            {messages.length > 0 &&
              messages.map((data, i) => <Message data={data} key={i} />)}
          </ContainerMessages>
          <AddMessage />
        </ContainerRight>
      </ContainerChat>
    </Page>
  );
};

export default Chat;
