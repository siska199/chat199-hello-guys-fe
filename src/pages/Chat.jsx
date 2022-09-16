import React, { useContext } from "react";
import SummaryContactInfo from "../components/SummaryContactInfo";
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

const Chat = () => {
  const containerRef = useRef(null);

  const {
    socket,
    state: { contacts, messages, activeContact },
    dispatch,
  } = useContext(ChatContext);

  const handleOnClickContact = (id) => {
    dispatch({
      type: TYPES_CHAT_REDUCER.SET_ACTIVE_CONTACT,
      payload: contacts.filter((data) => data.id === id)[0],
    });
    socket.emit(EVENTS_CHAT_SOCKET.LOAD_MESSAGES, id); //-->id = idReceiver
  };

  useEffect(() => {
    socket.emit(EVENTS_CHAT_SOCKET.LOAD_CONTACTS, 1);
  }, []);

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
        <ContainerLeft contactActive={activeContact}>
          <>
            <NavbarLeft />
            <SearchContact />
            <ContainerContacts>
              {contacts.length > 0 &&
                contacts.map((data, i) => (
                  <SummaryContactInfo
                    key={i}
                    id={data.id}
                    type={"contact-receiver-info"}
                    image={data.image}
                    username={data.username}
                    handleOnClickContact={handleOnClickContact}
                    active={
                      activeContact && activeContact.id === data.id
                        ? true
                        : false
                    }
                  />
                ))}
            </ContainerContacts>
          </>
          <Profile />
        </ContainerLeft>

        <ContainerRight contactActive={activeContact}>
          <NavbarRight setContactActive={handleOnClickContact} />
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
