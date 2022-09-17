import React, { useContext } from "react";
import NavbarLeft from "../components/NavbarLeft";
import NavbarRight from "../components/NavbarRight";
import SearchContact from "../components/SearchContact";
import AddMessage from "../components/AddMessage";
import Page from "../Layouts/Page";
import {
  ContainerChat,
  ContainerLeft,
  ContainerRight,
  ContainerMessages,
  ContainerContactInfo,
} from "./chat.css";
import Message from "../components/Message";
import Profile from "../components/Profile";
import ChatContext from "../context/ChatContext";
import { useEffect } from "react";
import { useRef } from "react";
import ListContact from "../components/ListContact";
import OpenigPicture from "../components/OpenigPicture";
import ContactInfo from "../components/ContactInfo";
import { TYPES_CHAT_REDUCER } from "../context/ChatContext";
import { EVENTS_CHAT_SOCKET } from "../context/ChatContext";

const Chat = () => {
  const containerRef = useRef(null);

  const {
    state: { messages, activeContact },
  } = useContext(ChatContext);

  useEffect(() => {
    containerRef.current && scrollToBottom();
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
          {activeContact ? (
            <>
              <NavbarRight />
              <ContainerMessages ref={containerRef}>
                {messages.length > 0 &&
                  messages.map((data, i) => <Message data={data} key={i} />)}
              </ContainerMessages>
              <AddMessage />
            </>
          ) : (
            <OpenigPicture />
          )}
        </ContainerRight>

        <ContactInfo />
      </ContainerChat>
    </Page>
  );
};

export default Chat;
